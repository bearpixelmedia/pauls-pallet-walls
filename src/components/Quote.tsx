"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import {
  STORAGE_KEYS,
  readJson,
  writeJson,
  type SavedEstimate,
  type SavedQuoteDraft,
} from "@/lib/persist";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-sm border border-pine/20 bg-paper px-3 py-2.5 outline-none transition-colors focus:border-brass";

type Status = "idle" | "submitting" | "success" | "error";

export function Quote() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [delivery, setDelivery] = useState<string | null>(null);
  const [draft, setDraft] = useState<SavedQuoteDraft>({
    name: "",
    email: "",
    phone: "",
    projectType: "package",
    wallWidthFt: "",
    wallHeightFt: "",
    city: "",
    zip: "",
    notes: "",
    newsletter: true,
    updatedAt: "",
  });

  useEffect(() => {
    const saved = readJson<SavedQuoteDraft>(STORAGE_KEYS.quoteDraft);
    const estimate = readJson<SavedEstimate>(STORAGE_KEYS.estimate);
    setDraft((prev) => {
      const next = { ...prev, ...(saved || {}) };
      if (estimate) {
        if (!next.wallWidthFt) next.wallWidthFt = estimate.widthFt;
        if (!next.wallHeightFt) next.wallHeightFt = estimate.heightFt;
        if (estimate.projectType) next.projectType = estimate.projectType;
      }
      return next;
    });
  }, []);

  function persist(partial: Partial<SavedQuoteDraft>) {
    setDraft((prev) => {
      const next = {
        ...prev,
        ...partial,
        updatedAt: new Date().toISOString(),
      };
      writeJson(STORAGE_KEYS.quoteDraft, next);
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const estimate = readJson<SavedEstimate>(STORAGE_KEYS.estimate);
    const estimateSummary =
      draft.wallWidthFt && draft.wallHeightFt
        ? `${draft.wallWidthFt}×${draft.wallHeightFt} ft (${draft.projectType})`
        : estimate
          ? `${estimate.widthFt}×${estimate.heightFt} ft`
          : undefined;

    const payload = {
      name: draft.name,
      email: draft.email,
      phone: draft.phone || undefined,
      projectType: draft.projectType,
      wallWidthFt: draft.wallWidthFt || undefined,
      wallHeightFt: draft.wallHeightFt || undefined,
      city: draft.city || undefined,
      zip: draft.zip || undefined,
      notes: draft.notes || undefined,
      newsletter: draft.newsletter,
      source: "quote-form",
      estimateSummary,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        delivery?: string;
        mailto?: string;
        error?: string;
      };

      if (data.mailto && (data.delivery === "mailto" || !data.ok)) {
        window.location.href = data.mailto;
      }

      if (!res.ok && !data.mailto) {
        setError(data.error || "Could not send — try again or email Paul directly.");
        setStatus("error");
        return;
      }

      writeJson(STORAGE_KEYS.lastLead, {
        ...payload,
        delivery: data.delivery,
        submittedAt: new Date().toISOString(),
      });
      if (draft.newsletter) {
        writeJson(STORAGE_KEYS.newsletter, {
          email: draft.email,
          at: new Date().toISOString(),
        });
      }
      setDelivery(data.delivery || null);
      setStatus("success");
    } catch {
      setError("Network error — check your connection or email Paul directly.");
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
              Contact / quote
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Tell Paul about your wall.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/70">
              Project type, wall size, and where you are — we&apos;ll follow up
              with package options or a construction estimate. Drafts save in
              this browser so refresh won&apos;t wipe your progress.
            </p>
            <dl className="mt-8 space-y-3 text-sm text-ink/65">
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd>
                  <a
                    className="text-pine underline-offset-2 hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                  <span className="ml-2 text-xs text-ink/40">(placeholder)</span>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd>
                  <a href={`tel:${site.phoneTel}`} className="hover:text-pine">
                    {site.phone}
                  </a>
                  <span className="ml-2 text-xs text-ink/40">(placeholder)</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-ink/55">
              Prefer to estimate first?{" "}
              <a href="#tools" className="font-semibold text-pine hover:underline">
                Wall size calculator
              </a>
            </p>
          </div>

          <div className="border border-pine/15 bg-gradient-to-br from-ash/90 to-paper p-6 sm:p-8">
            {status === "success" ? (
              <div className="animate-fade-in py-4 text-center sm:py-6">
                <p className="font-display text-2xl text-pine">
                  Thanks — request received.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {delivery === "mailto"
                    ? "Your email app should have opened with the details. If it didn’t, use the next-steps page to resend."
                    : "Paul (or the connected inbox) has your details. We’ll follow up shortly."}
                </p>
                <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm text-ink/70">
                  <li>• Check your inbox for a reply within 1–2 business days.</li>
                  <li>• Save or screenshot your estimate before you leave.</li>
                  <li>• Share the site with a neighbor if they need a wall too.</li>
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link
                    href="/thanks"
                    className="inline-flex items-center justify-center rounded-sm bg-pine px-4 py-2.5 text-sm font-semibold text-ash hover:bg-canopy"
                  >
                    Next steps
                  </Link>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-sm font-semibold text-pine underline-offset-2 hover:underline"
                  >
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">Name</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    value={draft.name}
                    onChange={(e) => persist({ name: e.target.value })}
                    className={inputClass}
                  />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="mb-1.5 block font-medium text-ink">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={draft.email}
                      onChange={(e) => persist({ email: e.target.value })}
                      className={inputClass}
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="mb-1.5 block font-medium text-ink">
                      Phone{" "}
                      <span className="font-normal text-ink/45">(optional)</span>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={draft.phone}
                      onChange={(e) => persist({ phone: e.target.value })}
                      className={inputClass}
                    />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">Project type</span>
                  <select
                    name="projectType"
                    value={draft.projectType}
                    onChange={(e) => persist({ projectType: e.target.value })}
                    className={inputClass}
                  >
                    <option value="package">Package / DIY kit</option>
                    <option value="construction">On-site construction</option>
                    <option value="commercial">Commercial install</option>
                  </select>
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="mb-1.5 block font-medium text-ink">Wall width (ft)</span>
                    <input
                      name="wallWidthFt"
                      inputMode="decimal"
                      placeholder="e.g. 12"
                      value={draft.wallWidthFt}
                      onChange={(e) => persist({ wallWidthFt: e.target.value })}
                      className={inputClass}
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="mb-1.5 block font-medium text-ink">Wall height (ft)</span>
                    <input
                      name="wallHeightFt"
                      inputMode="decimal"
                      placeholder="e.g. 8"
                      value={draft.wallHeightFt}
                      onChange={(e) => persist({ wallHeightFt: e.target.value })}
                      className={inputClass}
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="mb-1.5 block font-medium text-ink">City</span>
                    <input
                      name="city"
                      autoComplete="address-level2"
                      value={draft.city}
                      onChange={(e) => persist({ city: e.target.value })}
                      className={inputClass}
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="mb-1.5 block font-medium text-ink">ZIP</span>
                    <input
                      name="zip"
                      autoComplete="postal-code"
                      value={draft.zip}
                      onChange={(e) => persist({ zip: e.target.value })}
                      className={inputClass}
                    />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">
                    Notes{" "}
                    <span className="font-normal text-ink/45">(optional)</span>
                  </span>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Room type, finish preference, timeline..."
                    value={draft.notes}
                    onChange={(e) => persist({ notes: e.target.value })}
                    className={`${inputClass} resize-y`}
                  />
                </label>
                <label className="flex items-start gap-2.5 text-sm text-ink/70">
                  <input
                    type="checkbox"
                    checked={draft.newsletter}
                    onChange={(e) => persist({ newsletter: e.target.checked })}
                    className="mt-1 accent-pine"
                  />
                  <span>
                    Also send install tips &amp; seasonal package notes (you can
                    unsubscribe anytime).
                  </span>
                </label>
                {error ? (
                  <p className="text-sm text-red-800" role="alert">
                    {error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-sm bg-pine px-4 py-3 text-sm font-semibold text-ash transition-colors hover:bg-canopy disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Request a quote"}
                </button>
                <p className="text-xs leading-relaxed text-ink/45">
                  Without email/webhook env vars, submit opens a prefilled mailto
                  so nothing is lost. Draft is stored locally in this browser.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
