import { NextResponse } from "next/server";
import { deliverLead, parseLead } from "@/lib/leads";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { lead, error } = parseLead(body);
  if (!lead) {
    return NextResponse.json({ ok: false, error: error || "Invalid lead" }, { status: 400 });
  }

  try {
    const result = await deliverLead(lead);
    return NextResponse.json(result, { status: result.ok ? 200 : 502 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Delivery failed";
    return NextResponse.json(
      { ok: false, error: message, delivery: "mailto" },
      { status: 500 },
    );
  }
}
