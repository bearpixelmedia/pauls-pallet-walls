import { packageCatalog } from "@/lib/packages";

export function Packages() {
  return (
    <section id="packages" className="relative bg-paper py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Packages
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Pallet wall kits ready to hang.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Measured boards, clear instructions, and the hardware you need —
            ship to your door and install on your schedule.
          </p>
          <p className="mt-3 inline-block rounded-sm bg-brass/15 px-2.5 py-1 text-xs font-medium text-ink/80">
            Placeholder pricing — Paul can update these tiers anytime
          </p>
          <a
            href="/services/packages"
            className="mt-4 inline-block text-sm font-semibold text-pine hover:underline"
          >
            Full packages service page →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packageCatalog.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col border-t-2 pt-6 ${
                "featured" in pkg && pkg.featured
                  ? "border-brass bg-gradient-to-b from-ash/80 to-transparent px-1 sm:px-2"
                  : "border-canopy/30"
              }`}
            >
              {"featured" in pkg && pkg.featured ? (
                <span className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                  Most requested
                </span>
              ) : null}
              <h3 className="font-display text-2xl tracking-tight text-ink">
                {pkg.name}
              </h3>
              <p className="mt-1 text-sm text-ink/55">{pkg.size}</p>
              <p className="mt-5 font-display text-4xl tracking-tight text-pine">
                {pkg.price}
                <span className="ml-1 text-base font-sans font-normal text-ink/45">
                  est.
                </span>
              </p>
              <p className="mt-1 text-xs text-ink/45">{pkg.note}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm leading-relaxed text-ink/75">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-sm px-4 py-3 text-sm font-semibold transition-colors ${
                  "featured" in pkg && pkg.featured
                    ? "bg-pine text-ash hover:bg-canopy"
                    : "border border-pine/25 text-pine hover:border-pine/50 hover:bg-ash/60"
                }`}
              >
                Request this package
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
