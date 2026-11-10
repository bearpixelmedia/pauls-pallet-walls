import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShareStrip } from "@/components/PageShareStrip";
import { PageShell } from "@/components/PageShell";
import { localDescription, localTitle, site } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: localTitle("Pallet Wall Service Area"),
  description: localDescription(
    `Pallet wall packages and on-site construction based in ${site.location.city}, NC.`,
  ),
  alternates: { canonical: "/service-area" },
  openGraph: {
    title: `Service area — Asheville & Western North Carolina | ${site.name}`,
    description: localDescription(
      "See where we install and ship pallet wall packages across WNC.",
    ),
  },
};

export default function ServiceAreaPage() {
  return (
    <PageShell>
      <section className="relative isolate overflow-hidden bg-pine text-ash">
        <div className="absolute inset-0">
          <Image
            src={images.livingRoom.src}
            alt={`Homes and interiors served by ${site.name} in Asheville and Western North Carolina`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/85 to-pine/50" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass-soft">
            Service area
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,3.75rem)] leading-[1.05] tracking-tight">
            Pallet walls in Asheville &amp; Western North Carolina
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist/85">
            Based in {site.location.city}, we build and ship for homes and
            businesses across {site.location.areaLabel}. Packages can ship
            farther; on-site construction focuses on the mountain counties
            below.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl tracking-tight text-ink">
            Counties we serve
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Core install radius covers Buncombe, Haywood, Jackson, Swain, and
            Cherokee counties. Travel outside this list is quote-by-quote.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {site.location.counties.map((county) => (
              <li
                key={county}
                className="border border-pine/15 bg-ash/40 px-4 py-3 text-sm font-medium text-ink"
              >
                {county}
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-display text-3xl tracking-tight text-ink">
            Towns &amp; communities
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Frequent project towns across WNC — not an exclusive list.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {site.location.neighborhoods.map((place) => (
              <li
                key={place}
                className="border border-pine/15 bg-paper px-4 py-3 text-sm font-medium text-ink"
              >
                {place}
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="border-t-2 border-brass pt-6">
              <h3 className="font-display text-2xl text-ink">
                Looking for packages?
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                Kits ship throughout the region and beyond the core install
                counties when freight allows.
              </p>
              <Link
                href="/services/packages"
                className="mt-4 inline-flex text-sm font-semibold text-pine hover:underline"
              >
                View packages →
              </Link>
            </div>
            <div className="border-t-2 border-canopy/40 pt-6">
              <h3 className="font-display text-2xl text-ink">
                Need an install in WNC?
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                On-site construction is scheduled across the five counties —
                ask about travel if you&apos;re just outside.
              </p>
              <Link
                href="/services/construction"
                className="mt-4 inline-flex text-sm font-semibold text-pine hover:underline"
              >
                Construction details →
              </Link>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/#quote"
              className="inline-flex rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-ash hover:bg-canopy"
            >
              Request a local quote
            </Link>
            <Link
              href="/#tools"
              className="inline-flex rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine hover:bg-ash/60"
            >
              Check a WNC ZIP
            </Link>
          </div>
        </div>
      </section>

      <PageShareStrip
        path="/service-area"
        title={`Service area — Asheville & WNC | ${site.name}`}
      />
    </PageShell>
  );
}
