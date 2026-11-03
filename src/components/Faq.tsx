"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What’s the difference between a package and construction?",
    a: "Packages are measured DIY kits shipped to your door. Construction is Paul (or crew) on site for substrate prep, layout, fastening, and finish.",
  },
  {
    q: "How accurate is the board estimator?",
    a: "It’s a planning estimate using ~3.5″ board face coverage plus waste. Final counts depend on pattern, openings, and Paul’s board stock — the quote confirms it.",
  },
  {
    q: "Do kits ship outside the service area?",
    a: "Yes — packages can ship beyond the core install towns. On-site construction and commercial work are limited by travel; ask in the quote form.",
  },
  {
    q: "How long until I hear back after a quote?",
    a: "Plan on 1–2 business days once Paul has email connected. Without provider env vars, submit opens a prefilled email so nothing is dropped.",
  },
  {
    q: "Can I save my estimate and come back?",
    a: "Yes. Width, height, and quote drafts stay in this browser’s local storage until you clear site data.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
          FAQ
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Common questions before you quote.
        </h2>
        <div className="mt-10 divide-y divide-pine/10 border-y border-pine/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 py-4 text-left"
                >
                  <span className="font-medium text-ink">{item.q}</span>
                  <span
                    aria-hidden
                    className={`mt-1 text-brass transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <p className="animate-fade-in pb-4 pr-8 text-sm leading-relaxed text-ink/65">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
