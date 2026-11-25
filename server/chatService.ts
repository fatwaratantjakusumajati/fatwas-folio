import { GoogleGenAI } from "@google/genai";
import { KNOWLEDGE_BASE, retrieveContext } from "./knowledgeBase";

export interface ChatHistoryTurn {
  role: "user" | "assistant";
  content: string;
}

export interface ChatSourceRef {
  id: string;
  title: string;
  category: string;
}

export interface ChatRequestInput {
  message?: unknown;
  history?: unknown;
  lang?: unknown;
}

export interface ChatResponsePayload {
  reply: string;
  sources: ChatSourceRef[];
}

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
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
    .map((chunk) => `${chunk.title}\n${chunk.content}`)
    .join("\n\n");
  const prefix =
    lang === "id"
      ? "Berikut informasi tentang Fatwa Ratantja Kusumajati berdasarkan portofolionya:\n\n"
      : "Here is information about Fatwa Ratantja Kusumajati from his portfolio:\n\n";

  return `${prefix}${summaryLines}`;
}

async function withTimeout<T>(promise: Promise<T>, ms = 9000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("GEMINI_TIMEOUT")), ms),
    ),
  ]);
}

export function getHealthInfo() {
  return {
    ok: true,
    chunks: KNOWLEDGE_BASE.length,
  };
}

export async function handlePortfolioChat(
  input: ChatRequestInput,
): Promise<{ status: number; body: ChatResponsePayload | { error: string } }> {
  const rawMessage = input.message;
  if (!rawMessage || typeof rawMessage !== "string" || !rawMessage.trim()) {
    return {
      status: 400,
      body: { error: "Message is required." },
    };
  }

  const lang: "en" | "id" = input.lang === "id" ? "id" : "en";
  const trimmedMessage = rawMessage.trim().slice(0, 2000);
  const retrieved = retrieveContext(trimmedMessage, 5);
  const sources: ChatSourceRef[] = retrieved.map((chunk) => ({
    id: chunk.id,
    title: chunk.title,
    category: chunk.category,
  }));

  const ai = getGeminiClient();
  if (!ai) {
    return {
      status: 200,
      body: {
        reply: buildLocalRagFallback(retrieved, lang),
        sources,
      },
    };
  }

  const contextBlock = retrieved
    .map(
      (chunk, idx) =>
        `[Source ${idx + 1}: ${chunk.title} (${chunk.category})]\n${chunk.content}`,
    )
    .join("\n\n---\n\n");

  const systemInstruction = `You are Fatwa Ratantja AI Assistant — the personal portfolio assistant for Fatwa Ratantja Kusumajati (inspired by Fatwa's RAG notebook at https://www.kaggle.com/code/fatwaratantjak/fatwa-folio).

Capabilities & Rules:
1. PURE PORTFOLIO Q&A: Answer questions strictly about Fatwa Ratantja Kusumajati — his profile, work & internship experience, deployed AI/web/security projects, technical skills, education, organizational leadership, certifications, and contact information using ONLY the RETRIEVED CONTEXT below. Do not invent facts.
2. Do NOT offer or generate Excel logs or warehouse operational forms; keep every answer focused purely on introducing Fatwa and his work.
3. Respond in the SAME language the user writes in (Indonesian or English). Default UI language: ${lang === "id" ? "Indonesian" : "English"}.
4. Keep responses friendly, clear, and concise (2-5 short sentences or clean bullet points).

RETRIEVED CONTEXT:
${contextBlock}`;

  const rawHistory = input.history;
  const safeHistory = Array.isArray(rawHistory)
    ? rawHistory
        .filter(
          (turn): turn is ChatHistoryTurn =>
            Boolean(turn) &&
            typeof turn === "object" &&
            ((turn as ChatHistoryTurn).role === "user" ||
              (turn as ChatHistoryTurn).role === "assistant") &&
            typeof (turn as ChatHistoryTurn).content === "string" &&
            (turn as ChatHistoryTurn).content.trim().length > 0,
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

  const modelsToTry = ["gemini-4-hydrogen", "gemini-2.5-flash"];

  for (const model of modelsToTry) {
    try {
      const response = await withTimeout(
        ai.models.generateContent({
          model,
          contents: conversationContents,
          config: {
            systemInstruction,
          },
        }),
      );

      const finalReply = response.text?.trim() || "";
      if (finalReply) {
        return {
          status: 200,
          body: {
            reply: finalReply,
            sources,
          },
        };
      }
    } catch (err) {
      console.warn(`[/api/chat] Model ${model} fallback:`, err);
    }
  }

  return {
    status: 200,
    body: {
      reply: buildLocalRagFallback(retrieved, lang),
      sources,
    },
  };
}
