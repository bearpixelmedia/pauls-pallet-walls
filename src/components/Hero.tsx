export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-pine text-ash"
    >
      {/* Atmospheric full-bleed field */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(176,141,60,0.22),transparent_45%),radial-gradient(ellipse_at_85%_70%,rgba(38,74,54,0.9),transparent_55%),linear-gradient(160deg,#0e2419_0%,#1a3326_48%,#0e2419_100%)]"
      />
      <div aria-hidden className="absolute inset-0 slat-field opacity-70" />
      <div aria-hidden className="absolute inset-0 grain opacity-[0.12] mix-blend-overlay" />

      {/* Dominant pallet-wall visual plane */}
      <div
        aria-hidden
        className="animate-slats pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[58%]"
      >
        <div className="absolute inset-0 flex gap-[3%] px-[2%] pt-[12%] sm:pt-[8%]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="relative h-full flex-1 overflow-hidden rounded-[1px] bg-gradient-to-b from-[#3a5c45]/70 via-[#2a4635]/55 to-[#14261c]/80 shadow-[inset_0_0_0_1px_rgba(200,212,204,0.08)]"
              style={{
                transform: `translateY(${(i % 3) * 18}px)`,
                opacity: 0.55 + (i % 4) * 0.08,
              }}
            >
              <div className="absolute inset-x-0 top-[18%] h-px bg-mist/10" />
              <div className="absolute inset-x-0 top-[52%] h-px bg-mist/10" />
              <div className="absolute inset-x-0 top-[78%] h-px bg-mist/10" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/70 to-transparent sm:via-pine/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pine to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
        <p className="animate-rise font-display text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.92] tracking-[-0.03em] text-ash">
          Paul&apos;s
          <br />
          Pallet Walls
        </p>
        <h1 className="animate-rise-delay-1 mt-6 max-w-xl font-display text-2xl font-medium leading-snug tracking-tight text-mist sm:text-3xl">
          Warm wood feature walls, packaged or built on site.
        </h1>
        <p className="animate-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-mist/80 sm:text-lg">
          DIY-ready pallet wall kits and professional construction for homes,
          studios, cafés, and retail spaces.
        </p>
        <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#packages"
            className="inline-flex items-center justify-center rounded-sm bg-brass px-5 py-3 text-sm font-semibold tracking-wide text-pine transition-transform hover:translate-y-[-1px] hover:bg-brass-soft"
          >
            Browse packages
          </a>
          <a
            href="#construction"
            className="inline-flex items-center justify-center rounded-sm border border-mist/30 px-5 py-3 text-sm font-medium text-ash transition-colors hover:border-mist/60 hover:bg-white/5"
          >
            Construction services
          </a>
        </div>
      </div>
    </section>
  );
}
