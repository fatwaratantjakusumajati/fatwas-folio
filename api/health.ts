import type { IncomingMessage, ServerResponse } from "node:http";
import { getHealthInfo } from "../server/chatService";

interface VercelLikeResponse extends ServerResponse {
  status?: (code: number) => VercelLikeResponse;
  json?: (data: unknown) => void;
}

export default function handler(_req: IncomingMessage, res: VercelLikeResponse) {
  const payload = getHealthInfo();
  if (typeof res.status === "function" && typeof res.json === "function") {
    res.status(200).json(payload);
    return;
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}
