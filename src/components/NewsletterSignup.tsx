"use client";

import { FormEvent, useEffect, useState } from "react";
import { STORAGE_KEYS, readJson, writeJson } from "@/lib/persist";

const inputClass =
  "w-full rounded-sm border border-pine/20 bg-paper px-3 py-2.5 outline-none transition-colors focus:border-brass";

type Props = {
  variant?: "footer" | "inline";
  source?: string;
};

export function NewsletterSignup({
  variant = "inline",
  source = "newsletter",
}: Props) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const prior = readJson<{ email?: string }>(STORAGE_KEYS.newsletter);
    if (prior?.email) setEmail(prior.email);
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, smsOptIn, source }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        mailto?: string;
        error?: string;
        delivery?: string;
      };
      if (data.mailto && (data.delivery === "mailto" || !data.ok)) {
        window.location.href = data.mailto;
      }
      if (!res.ok && !data.mailto) {
        setError(data.error || "Signup failed");
        setStatus("error");
        return;
      }
      writeJson(STORAGE_KEYS.newsletter, {
        email,
        at: new Date().toISOString(),
      });
      setStatus("done");
    } catch {
      setError("Network error");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-sm text-mist/80">
        You&apos;re on the list — tips and seasonal notes coming when Paul
        connects email.
      </p>
    );
  }

  const isFooter = variant === "footer";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      {!isFooter ? (
        <>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">
            Stay in the loop
          </p>
          <h3 className="font-display text-2xl text-ink">
            Install tips &amp; package drops
          </h3>
          <p className="text-sm text-ink/65">
            Same inbox path as quotes when Resend/webhook is configured. Works
            via mailto without secrets.
          </p>
        </>
      ) : (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-soft">
          Newsletter
        </p>
      )}
      <label className="block text-sm">
        <span className={isFooter ? "sr-only" : "mb-1.5 block font-medium text-ink"}>
          Email
        </span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className={
            isFooter
              ? "w-full rounded-sm border border-mist/20 bg-pine/40 px-3 py-2.5 text-ash placeholder:text-mist/40 outline-none focus:border-brass"
              : inputClass
          }
        />
      </label>
      <label className="flex items-start gap-2 text-xs text-ink/60">
        <input
          type="checkbox"
          checked={smsOptIn}
          onChange={(e) => setSmsOptIn(e.target.checked)}
          className="mt-0.5 accent-pine"
        />
        <span className={isFooter ? "text-mist/60" : ""}>
          Optional SMS updates (needs phone + SMS provider later)
        </span>
      </label>
      {smsOptIn ? (
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Mobile number"
          className={
            isFooter
              ? "w-full rounded-sm border border-mist/20 bg-pine/40 px-3 py-2.5 text-ash outline-none focus:border-brass"
              : inputClass
          }
        />
      ) : null}
      {error ? (
        <p className="text-xs text-red-300" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className={
          isFooter
            ? "rounded-sm border border-brass/50 bg-brass/15 px-3.5 py-2 text-sm font-semibold text-brass-soft hover:bg-brass/25 disabled:opacity-60"
            : "rounded-sm bg-pine px-4 py-2.5 text-sm font-semibold text-ash hover:bg-canopy disabled:opacity-60"
        }
      >
        {status === "loading" ? "Saving…" : "Subscribe"}
      </button>
    </form>
  );
}
