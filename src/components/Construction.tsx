import Image from "next/image";
import { images } from "@/lib/images";

const services = [
  {
    title: "On-site build",
    body: "Paul measures, preps the substrate, and installs a clean, level pallet wall in your space.",
  },
  {
    title: "Pattern & finish",
    body: "Horizontal, herringbone, or mixed-width layouts — sealed, oiled, or left raw for a workshop feel.",
  },
  {
    title: "Commercial ready",
    body: "Studios, cafés, and storefronts get durable installs sized for foot traffic and brand photography.",
  },
];

export function Construction() {
  return (
    <section
      id="construction"
      className="relative overflow-hidden bg-moss py-20 text-ash sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(176,141,60,0.18),transparent_40%),linear-gradient(180deg,#1a3326_0%,#0e2419_100%)]"
      />
      <div aria-hidden className="absolute inset-0 slat-field opacity-40" />
      <div aria-hidden className="absolute inset-0 grain opacity-[0.08] mix-blend-overlay" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass-soft">
              Construction
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Pallet wall construction, done right.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mist/85">
              Prefer a turnkey install? Paul handles layout, fastening, and
              finishing so the wall looks intentional — not improvised.
            </p>
            <a
              href="/services/construction"
              className="mt-4 inline-block text-sm font-semibold text-brass-soft hover:underline"
            >
              Construction service page →
            </a>
          </div>
          <div className="relative aspect-[5/3] overflow-hidden">
            <Image
              src={images.slatDetail.src}
              alt={images.slatDetail.alt}
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="border-t border-mist/20 pt-5">
              <span className="font-display text-sm text-brass-soft">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-xl tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist/75">
                {service.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl border-l-2 border-brass/60 pl-5 sm:pl-6">
          <p className="font-display text-xl leading-snug text-ash sm:text-2xl">
            From a single accent strip to a full feature wall — measured,
            fastened, and finished for everyday use.
          </p>
          <p className="mt-3 text-sm text-mist/60">
            Service areas and travel fees: placeholder — confirm with Paul.
          </p>
        </div>
      </div>
    </section>
  );
}
