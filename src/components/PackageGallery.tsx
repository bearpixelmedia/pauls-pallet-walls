import Image from "next/image";
import { packageShots } from "@/lib/images";

export function PackageGallery() {
  return (
    <section className="bg-ash/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Package imagery
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
            What a pallet wall package looks like.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/70">
            Placeholder product shots for the DIY kits — swap in real kit photos
            from Paul&apos;s workshop when available.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {packageShots.map((shot) => (
            <figure key={shot.key}>
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <Image
                  src={shot.image.src}
                  alt={shot.image.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4">
                <h3 className="font-display text-xl text-ink">{shot.title}</h3>
                <p className="mt-1 text-sm text-ink/65">{shot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
