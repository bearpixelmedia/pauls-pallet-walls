import Image from "next/image";
import Link from "next/link";
import { examples } from "@/lib/images";

export function ExamplesGallery() {
  return (
    <section id="examples" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Pallet wall examples
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            See the wall before you build it.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Sample looks for homes and commercial spaces. Replace these
            placeholder shots with Paul&apos;s completed installs when ready.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {examples.map((ex) => (
            <figure key={ex.key} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-ash">
                <Image
                  src={ex.image.src}
                  alt={ex.image.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4">
                <h3 className="font-display text-xl tracking-tight text-ink">
                  {ex.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/65">
                  {ex.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/services/construction"
            className="inline-flex rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-ash hover:bg-canopy"
          >
            Get a wall like these
          </Link>
          <Link
            href="/services/packages"
            className="inline-flex rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine hover:bg-ash/60"
          >
            Or start with a package
          </Link>
        </div>
      </div>
    </section>
  );
}
