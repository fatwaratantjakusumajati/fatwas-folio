import express from "express";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { handlePortfolioChat } from "./api/chat.mjs";
import { getHealthInfo } from "./api/health.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";
const isProd = process.env.NODE_ENV === "production";

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "1mb" }));

  app.get("/api/health", (_req, res) => {
    res.json(getHealthInfo());
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const result = await handlePortfolioChat(req.body ?? {});
      return res.status(result.status).json(result.body);
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
