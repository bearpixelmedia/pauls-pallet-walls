"use client";

import { useState } from "react";
import { referralUrl, withUtm } from "@/lib/marketing";
import { site } from "@/lib/site";
import { ShareBar } from "@/components/ShareBar";

export function LocalMarketing() {
  const [copied, setCopied] = useState(false);
  const gbp = withUtm(site.marketing.googleBusinessProfileUrl, {
    source: "website",
    medium: "referral",
    campaign: "gbp_cta",
  });
  const review = withUtm(site.marketing.leaveReviewUrl, {
    source: "website",
    medium: "referral",
    campaign: "review_request",
  });
  const neighbor = referralUrl();

  async function copyReferral() {
    const blurb = `We used ${site.name} for a pallet feature wall — packages or on-site builds. Worth a look: ${neighbor}`;
    try {
      await navigator.clipboard.writeText(blurb);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="local" className="bg-ash/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Local &amp; share
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
            Reviews, referrals, and the neighborhood.
          </h2>
          <p className="mt-3 text-ink/70">
            Off-page helpers with placeholder Google Business / review links —
            swap URLs in <code className="text-xs">src/lib/site.ts</code>.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="border border-pine/15 bg-paper p-5">
            <h3 className="font-display text-xl text-ink">Google Business</h3>
            <p className="mt-2 text-sm text-ink/65">
              Find Paul on Maps, photos, and hours once the profile is live.
            </p>
            <a
              href={gbp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-pine hover:underline"
            >
              Open Google Business →
            </a>
          </div>
          <div className="border border-pine/15 bg-paper p-5">
            <h3 className="font-display text-xl text-ink">Leave a review</h3>
            <p className="mt-2 text-sm text-ink/65">
              Happy with your wall? A short Google review helps the next
              neighbor find us.
            </p>
            <a
              href={review}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-pine hover:underline"
            >
              Request / leave review →
            </a>
          </div>
          <div className="border border-pine/15 bg-paper p-5">
            <h3 className="font-display text-xl text-ink">Tell a neighbor</h3>
            <p className="mt-2 text-sm text-ink/65">
              Copy a short blurb with a UTM-tagged link for texts and Facebook
              groups.
            </p>
            <button
              type="button"
              onClick={copyReferral}
              className="mt-4 inline-flex rounded-sm border border-pine/25 px-3 py-2 text-sm font-semibold text-pine hover:bg-ash/60"
            >
              {copied ? "Copied!" : "Copy referral text"}
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-pine/10 pt-8">
          <ShareBar path="/" title={`${site.name} — pallet wall packages & construction`} />
        </div>
      </div>
    </section>
  );
}
