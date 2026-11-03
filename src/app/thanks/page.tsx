import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ShareBar } from "@/components/ShareBar";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { localDescription, site } from "@/lib/site";
import { withUtm } from "@/lib/marketing";
import { ThanksClient } from "@/components/ThanksClient";

export const metadata: Metadata = {
  title: "Thanks — next steps",
  description: localDescription(
    "Thanks for requesting a pallet wall quote. Here’s what happens next.",
  ),
  alternates: { canonical: "/thanks" },
  robots: { index: false, follow: true },
};

export default function ThanksPage() {
  const review = withUtm(site.marketing.leaveReviewUrl, {
    source: "website",
    medium: "email",
    campaign: "post_quote_nurture",
    content: "thanks_page",
  });

  return (
    <PageShell>
      <section className="bg-pine px-5 pb-16 pt-28 text-ash sm:px-8 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass-soft">
            Quote received
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-tight tracking-tight">
            Thanks — here&apos;s what happens next.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-mist/85">
            Paul will review your wall size and project type, then reply with
            package options or an install estimate.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-2xl text-ink">Next steps</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink/75">
              <li>Watch for a reply within 1–2 business days (or check the mailto you sent).</li>
              <li>Save your estimate below — it stays in this browser for return visits.</li>
              <li>
                Browse{" "}
                <Link href="/services/packages" className="font-semibold text-pine hover:underline">
                  packages
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/construction"
                  className="font-semibold text-pine hover:underline"
                >
                  construction
                </Link>{" "}
                while you wait.
              </li>
              <li>
                After the wall goes up,{" "}
                <a
                  href={review}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pine hover:underline"
                >
                  leave a Google review
                </a>{" "}
                (placeholder link).
              </li>
            </ol>

            <ThanksClient />

            <div className="mt-10">
              <ShareBar
                path="/thanks"
                title={`I just requested a quote from ${site.name}`}
              />
            </div>
          </div>

          <div className="border border-pine/15 bg-ash/40 p-6">
            <NewsletterSignup source="thanks-page" />
            <p className="mt-6 text-xs text-ink/45">
              SMS is opt-in only and needs a provider later — email works today
              via the same lead delivery env vars.
            </p>
            <Link
              href="/#tools"
              className="mt-6 inline-flex text-sm font-semibold text-pine hover:underline"
            >
              Back to wall calculator →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
