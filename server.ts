import express from "express";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { GoogleGenAI } from "@google/genai";
import { retrieveContext, KNOWLEDGE_BASE } from "./server/knowledgeBase";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";
const isProd = process.env.NODE_ENV === "production";

interface ChatHistoryTurn {
  role: "user" | "assistant";
  content: string;
}

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

function buildLocalRagFallback(
  retrieved: ReturnType<typeof retrieveContext>,
  lang: "en" | "id",
): string {
  const topChunks = retrieved.slice(0, 2);
  const summaryLines = topChunks
    .map((chunk) => `**${chunk.title}**\n${chunk.content}`)
    .join("\n\n");
  const prefix =
    lang === "id"
      ? "Berikut informasi tentang Fatwa Ratantja Kusumajati berdasarkan portofolionya:\n\n"
      : "Here is information about Fatwa Ratantja Kusumajati from his portfolio:\n\n";

  return `${prefix}${summaryLines}`;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "1mb" }));

  app.get("/api/health", (_req, res) => {
    res.json({
      ok: true,
      chunks: KNOWLEDGE_BASE.length,
    });
  });

  // Pure portfolio RAG Q&A endpoint focused strictly on Fatwa's profile, projects, skills, and contact
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history = [], lang = "en" } = req.body as {
        message?: string;
        history?: ChatHistoryTurn[];
        lang?: "en" | "id";
      };

      if (!message || typeof message !== "string" || !message.trim()) {
        return res.status(400).json({ error: "Message is required." });
      }

      const trimmedMessage = message.trim().slice(0, 2000);
      const retrieved = retrieveContext(trimmedMessage, 5);
      const ai = getGeminiClient();

      if (!ai) {
        return res.json({
          reply: buildLocalRagFallback(retrieved, lang),
          sources: retrieved.map((chunk) => ({
            id: chunk.id,
            title: chunk.title,
            category: chunk.category,
          })),
        });
      }

      const contextBlock = retrieved
        .map(
          (chunk, idx) =>
            `[Source ${idx + 1}: ${chunk.title} (${chunk.category})]\n${chunk.content}`,
        )
        .join("\n\n---\n\n");

      const systemInstruction = `You are Fatwa R. AI Assistant — the personal portfolio assistant for Fatwa Ratantja Kusumajati (inspired by Fatwa's RAG notebook at https://www.kaggle.com/code/fatwaratantjak/fatwa-folio).

Capabilities & Rules:
1. PURE PORTFOLIO Q&A: Answer questions strictly about Fatwa Ratantja Kusumajati — his profile, work & internship experience, deployed AI/web/security projects, technical skills, education, organizational leadership, certifications, and contact information using ONLY the RETRIEVED CONTEXT below. Do not invent facts.
2. Do NOT offer or generate Excel logs or warehouse operational forms; keep every answer focused purely on introducing Fatwa and his work.
3. Respond in the SAME language the user writes in (Indonesian or English). Default UI language: ${lang === "id" ? "Indonesian" : "English"}.
4. Keep responses friendly, clear, and concise (2-5 short sentences or clean bullet points).

RETRIEVED CONTEXT:
${contextBlock}`;

      const safeHistory = Array.isArray(history)
        ? history
            .filter(
              (turn): turn is ChatHistoryTurn =>
                Boolean(turn) &&
                (turn.role === "user" || turn.role === "assistant") &&
                typeof turn.content === "string" &&
                turn.content.trim().length > 0,
            )
            .slice(-8)
        : [];

      const conversationContents = [
        ...safeHistory.map((turn) => ({
          role: turn.role === "assistant" ? "model" : "user",
          parts: [{ text: turn.content.slice(0, 2000) }],
        })),
        {
          role: "user",
          parts: [{ text: trimmedMessage }],
        },
      ];

      try {
        const withTimeout = <T,>(promise: Promise<T>, ms = 10000) =>
          Promise.race([
            promise,
            new Promise<never>((_, reject) =>
              setTimeout(() => reject(new Error("GEMINI_TIMEOUT")), ms),
            ),
          ]);

        const response = await withTimeout(
          ai.models.generateContent({
            model: "gemini-4-hydrogen",
            contents: conversationContents,
            config: {
              systemInstruction,
            },
          }),
        );

        const finalReply = response.text?.trim() || "";

        if (!finalReply) {
          return res.json({
            reply: buildLocalRagFallback(retrieved, lang),
            sources: retrieved.map((chunk) => ({
              id: chunk.id,
              title: chunk.title,
              category: chunk.category,
            })),
          });
        }

        return res.json({
          reply: finalReply,
          sources: retrieved.map((chunk) => ({
            id: chunk.id,
            title: chunk.title,
            category: chunk.category,
          })),
        });
      } catch (geminiErr) {
        console.warn("[/api/chat] Gemini fallback triggered:", geminiErr);
        return res.json({
          reply: buildLocalRagFallback(retrieved, lang),
          sources: retrieved.map((chunk) => ({
            id: chunk.id,
            title: chunk.title,
            category: chunk.category,
          })),
        });
      }
    } catch (err: unknown) {
      console.error("[/api/chat] error:", err);
      return res.status(500).json({
        error: "Failed to process chat request.",
      });
    }
  });

  if (!isProd) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, "dist");
    app.use(express.static(distDir));
    app.get("*", (_req, res) => {
      const indexPath = path.join(distDir, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send("Build not found. Run npm run build first.");
      }
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });
}

startServer();
