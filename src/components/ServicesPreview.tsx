import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

export function ServicesPreview() {
  return (
    <section id="services" className="bg-ash/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Packages, construction, and commercial installs.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group block focus:outline-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine/70 to-transparent" />
              </div>
              <h3 className="mt-4 font-display text-xl tracking-tight text-ink group-hover:text-pine">
                {site.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {service.description}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-pine">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
