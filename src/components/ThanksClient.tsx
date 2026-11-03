"use client";

import { useEffect, useState } from "react";
import {
  STORAGE_KEYS,
  readJson,
  type SavedEstimate,
} from "@/lib/persist";

export function ThanksClient() {
  const [estimate, setEstimate] = useState<SavedEstimate | null>(null);
  const [leadEmail, setLeadEmail] = useState<string | null>(null);

  useEffect(() => {
    setEstimate(readJson<SavedEstimate>(STORAGE_KEYS.estimate));
    const lead = readJson<{ email?: string }>(STORAGE_KEYS.lastLead);
    if (lead?.email) setLeadEmail(lead.email);
  }, []);

  return (
    <div className="mt-8 rounded-sm border border-brass/30 bg-brass/10 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">
        Saved on this device
      </p>
      {estimate ? (
        <p className="mt-2 text-sm text-ink/75">
          Last estimate:{" "}
          <strong className="text-ink">
            {estimate.widthFt}×{estimate.heightFt} ft
          </strong>{" "}
          ({estimate.projectType})
        </p>
      ) : (
        <p className="mt-2 text-sm text-ink/60">
          No calculator draft found — you can still rebuild one on the home
          page tools section.
        </p>
      )}
      {leadEmail ? (
        <p className="mt-1 text-sm text-ink/60">Quote email: {leadEmail}</p>
      ) : null}
      <a
        href="/#tools"
        className="mt-4 inline-flex text-sm font-semibold text-pine hover:underline"
      >
        Return to estimate →
      </a>
    </div>
  );
}
