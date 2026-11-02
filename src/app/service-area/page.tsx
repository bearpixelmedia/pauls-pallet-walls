import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { localDescription, localTitle, site } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: localTitle("Pallet Wall Service Area"),
  description: localDescription(
    `Pallet wall packages and construction near ${site.location.city}. Neighborhood list is a placeholder for local SEO.`,
  ),
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaPage() {
  return (
    <PageShell>
      <section className="relative isolate overflow-hidden bg-pine text-ash">
        <div className="absolute inset-0">
          <Image
            src={images.livingRoom.src}
            alt={`Homes and interiors served by ${site.name} in the local area`}
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
            Pallet walls near {site.location.city}, {site.location.region}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist/85">
            Packages ship; construction and commercial installs are available
            across {site.location.areaLabel}.
          </p>
          <p className="mt-3 inline-block rounded-sm bg-brass/20 px-2.5 py-1 text-xs font-medium text-brass-soft">
            PLACEHOLDER city, state, and neighborhoods — set Paul&apos;s real
            market in src/lib/site.ts
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl tracking-tight text-ink">
            Areas we commonly serve
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            These neighborhood names are SEO placeholders so the page structure
            is ready. Replace them with Paul&apos;s real towns and districts.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {site.location.neighborhoods.map((place) => (
              <li
                key={place}
                className="border border-pine/15 bg-ash/40 px-4 py-3 text-sm font-medium text-ink"
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
                Kits can ship beyond the core construction radius.
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
                Need an install?
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                Ask about travel for construction outside the core towns.
              </p>
              <Link
                href="/services/construction"
                className="mt-4 inline-flex text-sm font-semibold text-pine hover:underline"
              >
                Construction details →
              </Link>
            </div>
          </div>

          <div className="mt-14">
            <Link
              href="/#quote"
              className="inline-flex rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-ash hover:bg-canopy"
            >
              Request a local quote
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
