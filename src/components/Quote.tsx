"use client";

import { FormEvent, useState } from "react";

export function Quote() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // v1 stub - no payment or backend. Paul can wire email/CRM later.
    setSent(true);
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
              Share a few details and we&apos;ll follow up with package options
              or a construction estimate. No checkout in this first version -
              just a clear next step.
            </p>
            <dl className="mt-8 space-y-3 text-sm text-ink/65">
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd>
                  <a
                    className="text-pine underline-offset-2 hover:underline"
                    href="mailto:hello@paulspalletwalls.example"
                  >
                    hello@paulspalletwalls.example
                  </a>
                  <span className="ml-2 text-xs text-ink/40">
                    (placeholder)
                  </span>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd>
                  (555) 010-WALL
                  <span className="ml-2 text-xs text-ink/40">
                    (placeholder)
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-pine/15 bg-gradient-to-br from-ash/90 to-paper p-6 sm:p-8">
            {sent ? (
              <div className="animate-fade-in py-8 text-center">
                <p className="font-display text-2xl text-pine">
                  Thanks - request noted.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  This is a local stub for v1. Wire this form to Paul&apos;s
                  email or CRM when ready. Your browser kept the details in
                  this session only.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-pine underline-offset-2 hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">Name</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="w-full rounded-sm border border-pine/20 bg-paper px-3 py-2.5 outline-none transition-colors focus:border-brass"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="w-full rounded-sm border border-pine/20 bg-paper px-3 py-2.5 outline-none transition-colors focus:border-brass"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">
                    Interest
                  </span>
                  <select
                    name="interest"
                    className="w-full rounded-sm border border-pine/20 bg-paper px-3 py-2.5 outline-none transition-colors focus:border-brass"
                    defaultValue="package"
                  >
                    <option value="package">Package / DIY kit</option>
                    <option value="construction">
                      On-site construction
                    </option>
                    <option value="both">Not sure - both</option>
                  </select>
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">
                    Wall notes
                  </span>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Approx. width/height, room type, finish preference..."
                    className="w-full resize-y rounded-sm border border-pine/20 bg-paper px-3 py-2.5 outline-none transition-colors focus:border-brass"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-pine px-4 py-3 text-sm font-semibold text-ash transition-colors hover:bg-canopy"
                >
                  Request a quote
                </button>
                <p className="text-xs leading-relaxed text-ink/45">
                  Form is a client-side placeholder - no payment, no server
                  submit yet.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
