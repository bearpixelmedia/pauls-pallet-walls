import Image from "next/image";
import type { Metadata } from "next";
import { PageShareStrip } from "@/components/PageShareStrip";
import { PageShell } from "@/components/PageShell";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceJsonLd } from "@/components/JsonLd";
import { localDescription, localTitle, site } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: localTitle("Commercial Pallet Walls"),
  description: localDescription(
    "Commercial pallet wall installs for cafés, retail, studios, and offices.",
  ),
  alternates: { canonical: "/services/commercial" },
  openGraph: {
    images: [images.commercial.src],
  },
};

export default function CommercialServicePage() {
  return (
    <PageShell>
      <ServiceJsonLd
        name={`Commercial Pallet Walls in ${site.location.city}, ${site.location.region}`}
        description="Durable commercial pallet wall feature installs for retail and hospitality."
        url={`${site.url}/services/commercial`}
      />
      <ServiceHero
        eyebrow="Commercial"
        title="Commercial pallet walls for Asheville & WNC businesses"
        description="Feature walls that hold up to foot traffic and look sharp in brand photography — cafés, boutiques, studios, and offices across Western North Carolina."
        image={images.commercial.src}
        imageAlt={images.commercial.alt}
        localNote={`Commercial installs across ${site.location.areaLabel}`}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink">
                Built for busy spaces
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                Commercial jobs get durable fastening, finish options that wipe
                clean, and patterns sized for your storefront or dining room
                sightlines.
              </p>
              <ul className="mt-6 space-y-3 text-ink/75">
                {["After-hours scheduling when needed","Patterns that read well on camera and social","Coordinated install around existing fixtures"].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.livingRoom.src}
                alt={images.livingRoom.alt}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <PageShareStrip
        path="/services/commercial"
        title={`Commercial pallet walls | ${site.name}`}
      />
    </PageShell>
  );
}
