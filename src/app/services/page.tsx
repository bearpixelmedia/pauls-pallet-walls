import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { localDescription, localTitle, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: localTitle("Pallet Wall Services"),
  description: localDescription(
    "Explore pallet wall packages, on-site construction, and commercial feature wall installs.",
  ),
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <PageShell>
      <section className="border-b border-pine/10 bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Pallet wall services in {site.location.city}, {site.location.region}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
            Choose a DIY package, book on-site construction, or plan a
            commercial feature wall. Serving {site.location.areaLabel}.
          </p>
          <p className="mt-3 text-xs text-ink/45">
            City/region are placeholders for local SEO — replace in{" "}
            <code>src/lib/site.ts</code>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8">
          {services.map((service) => (
            <article
              key={service.slug}
              className="grid items-center gap-8 border-t border-pine/15 pt-10 md:grid-cols-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl tracking-tight text-ink">
                  {service.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-ash hover:bg-canopy"
                >
                  View {service.shortTitle.toLowerCase()} details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
