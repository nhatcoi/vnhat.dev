/** Minimal client for any OpenAI-compatible chat-completions endpoint. */
export function llmConfigured() {
  return !!process.env.OPENAI_API_KEY && !!process.env.OPENAI_MODEL;
}

export async function chatJson(system: string, user: string): Promise<unknown> {
  const key = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL;
  if (!key || !model)
    throw new Error("Set OPENAI_API_KEY and OPENAI_MODEL to enable the agent.");
  const base = (process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
  const res = await fetch(`${base}/chat/completions`, {
    method: "POST",
    signal: AbortSignal.timeout(120_000),
    headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model,
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });
  if (!res.ok) throw new Error(`LLM error ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const data = await res.json();
  const text: string = data?.choices?.[0]?.message?.content ?? "";
  try {
    return JSON.parse(text.replace(/^```(?:json)?\s*|\s*```$/g, ""));
  } catch {
    throw new Error("LLM returned invalid JSON");
  }
}
