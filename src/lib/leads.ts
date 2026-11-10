import { site } from "@/lib/site";
import type { ProjectType } from "@/lib/packages";

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  projectType: ProjectType;
  wallWidthFt?: string;
  wallHeightFt?: string;
  city?: string;
  zip?: string;
  notes?: string;
  source?: string;
  newsletter?: boolean;
  estimateSummary?: string;
};

export type DeliveryChannel = "webhook" | "resend" | "formspree" | "mailto";

export type LeadResult = {
  ok: boolean;
  delivery: DeliveryChannel;
  mailto?: string;
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseLead(body: unknown): { lead?: LeadPayload; error?: string } {
  if (!body || typeof body !== "object") {
    return { error: "Invalid payload" };
  }
  const b = body as Record<string, unknown>;
  const name = String(b.name ?? "").trim();
  const email = String(b.email ?? "").trim().toLowerCase();
  const projectType = String(b.projectType ?? "").trim() as ProjectType;

  if (!name || name.length < 2) return { error: "Name is required" };
  if (!EMAIL_RE.test(email)) return { error: "Valid email is required" };
  if (!["package", "construction", "commercial"].includes(projectType)) {
    return { error: "Project type is required" };
  }

  return {
    lead: {
      name,
      email,
      phone: String(b.phone ?? "").trim() || undefined,
      projectType,
      wallWidthFt: String(b.wallWidthFt ?? "").trim() || undefined,
      wallHeightFt: String(b.wallHeightFt ?? "").trim() || undefined,
      city: String(b.city ?? "").trim() || undefined,
      zip: String(b.zip ?? "").trim() || undefined,
      notes: String(b.notes ?? "").trim() || undefined,
      source: String(b.source ?? "").trim() || "quote-form",
      newsletter: Boolean(b.newsletter),
      estimateSummary: String(b.estimateSummary ?? "").trim() || undefined,
    },
  };
}

export function formatLeadText(lead: LeadPayload): string {
  const lines = [
    `New lead — ${site.name}`,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.phone ? `Phone: ${lead.phone}` : null,
    `Project: ${lead.projectType}`,
    lead.wallWidthFt || lead.wallHeightFt
      ? `Wall size: ${lead.wallWidthFt || "?"} ft W × ${lead.wallHeightFt || "?"} ft H`
      : null,
    lead.city || lead.zip
      ? `Location: ${[lead.city, lead.zip].filter(Boolean).join(" ")}`
      : null,
    lead.estimateSummary ? `Estimate: ${lead.estimateSummary}` : null,
    lead.newsletter ? "Newsletter: yes" : "Newsletter: no",
    lead.source ? `Source: ${lead.source}` : null,
    lead.notes ? `Notes:\n${lead.notes}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

export function buildMailto(lead: LeadPayload): string {
  const to = process.env.LEAD_TO_EMAIL || site.email;
  const subject = encodeURIComponent(
    `Quote request — ${lead.projectType} — ${lead.name}`,
  );
  const body = encodeURIComponent(formatLeadText(lead));
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

export async function deliverLead(lead: LeadPayload): Promise<LeadResult> {
  const webhook = process.env.LEAD_WEBHOOK_URL?.trim();
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.LEAD_TO_EMAIL?.trim() || site.email;
  const fromEmail =
    process.env.LEAD_FROM_EMAIL?.trim() || "onboarding@resend.dev";
  const formspree = process.env.FORMSPREE_ENDPOINT?.trim();

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        receivedAt: new Date().toISOString(),
        site: site.name,
      }),
    });
    if (!res.ok) {
      return {
        ok: false,
        delivery: "webhook",
        error: `Webhook failed (${res.status})`,
        mailto: buildMailto(lead),
      };
    }
    return { ok: true, delivery: "webhook" };
  }

  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: lead.email,
        subject: `Quote — ${lead.projectType} — ${lead.name}`,
        text: formatLeadText(lead),
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return {
        ok: false,
        delivery: "resend",
        error: `Resend failed (${res.status}) ${detail}`.trim(),
        mailto: buildMailto(lead),
      };
    }
    return { ok: true, delivery: "resend" };
  }

  if (formspree) {
    const res = await fetch(formspree, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      return {
        ok: false,
        delivery: "formspree",
        error: `Formspree failed (${res.status})`,
        mailto: buildMailto(lead),
      };
    }
    return { ok: true, delivery: "formspree" };
  }

  // Works on Vercel with zero secrets — client can open the mailto.
  return { ok: true, delivery: "mailto", mailto: buildMailto(lead) };
}

export type SubscribePayload = {
  email: string;
  name?: string;
  source?: string;
  smsOptIn?: boolean;
  phone?: string;
};

export function parseSubscribe(
  body: unknown,
): { sub?: SubscribePayload; error?: string } {
  if (!body || typeof body !== "object") return { error: "Invalid payload" };
  const b = body as Record<string, unknown>;
  const email = String(b.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) return { error: "Valid email is required" };
  return {
    sub: {
      email,
      name: String(b.name ?? "").trim() || undefined,
      source: String(b.source ?? "").trim() || "newsletter",
      smsOptIn: Boolean(b.smsOptIn),
      phone: String(b.phone ?? "").trim() || undefined,
    },
  };
}

export async function deliverSubscribe(
  sub: SubscribePayload,
): Promise<LeadResult> {
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL?.trim() || process.env.LEAD_WEBHOOK_URL?.trim();
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.LEAD_TO_EMAIL?.trim() || site.email;
  const fromEmail =
    process.env.LEAD_FROM_EMAIL?.trim() || "onboarding@resend.dev";
  const formspree = process.env.FORMSPREE_NEWSLETTER_ENDPOINT?.trim() || process.env.FORMSPREE_ENDPOINT?.trim();

  const text = [
    `Newsletter / nurture signup — ${site.name}`,
    `Email: ${sub.email}`,
    sub.name ? `Name: ${sub.name}` : null,
    sub.smsOptIn ? `SMS opt-in: yes (${sub.phone || "no phone"})` : "SMS opt-in: no",
    `Source: ${sub.source}`,
  ]
    .filter(Boolean)
    .join("\n");

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "newsletter",
        ...sub,
        receivedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) {
      return {
        ok: false,
        delivery: "webhook",
        error: `Webhook failed (${res.status})`,
        mailto: `mailto:${toEmail}?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent(text)}`,
      };
    }
    return { ok: true, delivery: "webhook" };
  }

  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Newsletter signup — ${sub.email}`,
        text,
      }),
    });
    if (!res.ok) {
      return {
        ok: false,
        delivery: "resend",
        error: `Resend failed (${res.status})`,
        mailto: `mailto:${toEmail}?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent(text)}`,
      };
    }
    return { ok: true, delivery: "resend" };
  }

  if (formspree) {
    const res = await fetch(formspree, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "newsletter", ...sub }),
    });
    if (!res.ok) {
      return {
        ok: false,
        delivery: "formspree",
        error: `Formspree failed (${res.status})`,
        mailto: `mailto:${toEmail}?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent(text)}`,
      };
    }
    return { ok: true, delivery: "formspree" };
  }

  return {
    ok: true,
    delivery: "mailto",
    mailto: `mailto:${toEmail}?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent(text)}`,
  };
}
