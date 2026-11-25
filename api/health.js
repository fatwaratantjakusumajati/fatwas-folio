export function GET() {
  return new Response(
    JSON.stringify({
      ok: true,
      model: "gemini-3.1-flash-lite",
      chunks: 15,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
    },
  );
}
