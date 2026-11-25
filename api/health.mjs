export function getHealthInfo() {
  return {
    ok: true,
    model: "gemini-3.1-flash-lite",
    chunks: 15,
  };
}

export default function handler(_req, res) {
  const payload = getHealthInfo();
  if (typeof res?.status === "function") {
    const target = res.status(200);
    if (typeof target?.json === "function") {
      target.json(payload);
      return;
    }
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}
