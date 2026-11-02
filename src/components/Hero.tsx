import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-pine text-ash"
    >
      <div className="absolute inset-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Pine wash + grain overlay — keeps type readable while the pallet wall shows through */}
        <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/75 to-pine/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine via-transparent to-pine/35" />
        <div aria-hidden className="absolute inset-0 slat-field opacity-30" />
        <div
          aria-hidden
          className="absolute inset-0 grain opacity-[0.14] mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
        <p className="animate-rise font-display text-[clamp(2.5rem,8vw,5.75rem)] leading-[0.92] tracking-[-0.03em] text-ash">
          Paul Bunyan&apos;s
          <br />
          Pallet Walls
        </p>
        <h1 className="animate-rise-delay-1 mt-6 max-w-xl font-display text-2xl font-medium leading-snug tracking-tight text-mist sm:text-3xl">
          Warm wood feature walls, packaged or built on site in{" "}
          {site.location.city}, {site.location.region}.
        </h1>
        <p className="animate-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-mist/80 sm:text-lg">
          DIY-ready pallet wall kits and professional construction for homes,
          studios, cafés, and retail spaces across {site.location.areaLabel}.
        </p>
        <p className="animate-rise-delay-2 mt-3 text-xs text-brass-soft/90">
          Local city is a placeholder — update in site config for Paul&apos;s
          market.
        </p>
        <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/services/packages"
            className="inline-flex items-center justify-center rounded-sm bg-brass px-5 py-3 text-sm font-semibold tracking-wide text-pine transition-transform hover:translate-y-[-1px] hover:bg-brass-soft"
          >
            Browse packages
          </Link>
          <Link
            href="/services/construction"
            className="inline-flex items-center justify-center rounded-sm border border-mist/30 px-5 py-3 text-sm font-medium text-ash transition-colors hover:border-mist/60 hover:bg-white/5"
          >
            Construction services
          </Link>
        </div>
      </div>
    </section>
  );
}
