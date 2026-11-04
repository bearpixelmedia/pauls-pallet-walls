import Image from "next/image";
import type { Metadata } from "next";
import { PackageGallery } from "@/components/PackageGallery";
import { PageShareStrip } from "@/components/PageShareStrip";
import { PageShell } from "@/components/PageShell";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceJsonLd } from "@/components/JsonLd";
import { localDescription, localTitle, site } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: localTitle("Pallet Wall Packages"),
  description: localDescription(
    "Order DIY pallet wall packages with pre-cut boards, layout guides, and hardware.",
  ),
  alternates: { canonical: "/services/packages" },
  openGraph: {
    images: [images.packageKit.src],
  },
};

const tiers = [
  {
    name: "Starter Strip",
    size: "Approx. 6–8 ft feature",
    price: "$349 est.",
  },
  {
    name: "Room Accent",
    size: "Approx. 10–14 ft wall",
    price: "$789 est.",
  },
  {
    name: "Full Feature",
    size: "Approx. 16–22 ft statement wall",
    price: "$1,450 est.",
  },
];

export default function PackagesServicePage() {
  return (
    <PageShell>
      <ServiceJsonLd
        name={`Pallet Wall Packages in ${site.location.city}, ${site.location.region}`}
        description="DIY pallet wall kits with measured boards, guides, and hardware."
        url={`${site.url}/services/packages`}
      />
      <ServiceHero
        eyebrow="Packages"
        title={`Pallet wall packages for Asheville & WNC homes`}
        description="Ship a kit across Western North Carolina — pre-cut boards, spacing charts, fasteners, and finish samples so you can hang a clean feature wall on your schedule."
        image={images.packageKit.src}
        imageAlt={images.packageKit.alt}
        localNote={`Serving ${site.location.areaLabel}`}
      />

      <PackageGallery />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:grid-cols-2 sm:px-8">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink">
              What&apos;s in a package
            </h2>
            <ul className="mt-6 space-y-3 text-ink/75">
              {["Sorted, sanded pallet boards cut to your wall length","Layout guide and spacing chart","Fastener kit and finish sample","Optional stain/oil notes for Room Accent & Full Feature"].map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink/50">
              Pricing below is placeholder — Paul can replace with live rates.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={images.packageBoards.src}
              alt={images.packageBoards.alt}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ash/50 py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl tracking-tight text-ink">
            Package tiers
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className="border-t-2 border-canopy/30 pt-5">
                <h3 className="font-display text-xl text-ink">{tier.name}</h3>
                <p className="mt-1 text-sm text-ink/55">{tier.size}</p>
                <p className="mt-4 font-display text-3xl text-pine">{tier.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageShareStrip
        path="/services/packages"
        title={`Pallet wall packages | ${site.name}`}
      />
    </PageShell>
  );
}
