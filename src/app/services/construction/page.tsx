import Image from "next/image";
import type { Metadata } from "next";
import { PageShareStrip } from "@/components/PageShareStrip";
import { PageShell } from "@/components/PageShell";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceJsonLd } from "@/components/JsonLd";
import { localDescription, localTitle, site } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: localTitle("Pallet Wall Construction"),
  description: localDescription(
    "Professional on-site pallet wall construction — layout, fastening, and finishing.",
  ),
  alternates: { canonical: "/services/construction" },
  openGraph: {
    images: [images.slatDetail.src],
  },
};

export default function ConstructionServicePage() {
  return (
    <PageShell>
      <ServiceJsonLd
        name={`Pallet Wall Construction in ${site.location.city}, ${site.location.region}`}
        description="On-site pallet wall construction with pattern layout, fastening, and finish."
        url={`${site.url}/services/construction`}
      />
      <ServiceHero
        eyebrow="Construction"
        title={`Pallet wall construction in ${site.location.city}`}
        description="Prefer a turnkey install? Paul measures, preps the substrate, and builds a level feature wall — horizontal, herringbone, or mixed-width."
        image={images.slatDetail.src}
        imageAlt={images.slatDetail.alt}
        localNote={`Serving ${site.location.areaLabel} (placeholder market)`}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden md:order-2">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink">
                How on-site builds work
              </h2>
              <ol className="mt-6 space-y-4">
                {[
                  { t: "Measure & quote", b: "Share wall photos and dimensions; get a clear estimate." },
                  { t: "Prep the wall", b: "Substrate check, layout lines, and board sorting on site." },
                  { t: "Install & finish", b: "Fasten for a true plane, then seal, oil, or leave raw." },
                ].map((step, i) => (
                  <li key={step.t} className="border-t border-pine/15 pt-4">
                    <p className="font-display text-lg text-pine">
                      {i + 1}. {step.t}
                    </p>
                    <p className="mt-1 text-sm text-ink/70">{step.b}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-ink/50">
                Travel fees and service radius: placeholder — confirm with Paul.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageShareStrip
        path="/services/construction"
        title={`Pallet wall construction | ${site.name}`}
      />
    </PageShell>
  );
}
