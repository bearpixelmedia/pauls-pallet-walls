import { NextResponse } from "next/server";
import { deliverSubscribe, parseSubscribe } from "@/lib/leads";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { sub, error } = parseSubscribe(body);
  if (!sub) {
    return NextResponse.json({ ok: false, error: error || "Invalid signup" }, { status: 400 });
  }

  try {
    const result = await deliverSubscribe(sub);
    return NextResponse.json(result, { status: result.ok ? 200 : 502 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Delivery failed";
    return NextResponse.json(
      { ok: false, error: message, delivery: "mailto" },
      { status: 500 },
    );
  }
}
