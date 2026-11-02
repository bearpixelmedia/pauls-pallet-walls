export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-ash transition-colors hover:text-brass-soft sm:text-xl"
        >
          Paul&apos;s Pallet Walls
        </a>
        <nav className="hidden items-center gap-8 text-sm text-mist/90 md:flex">
          <a href="#packages" className="transition-colors hover:text-ash">
            Packages
          </a>
          <a href="#construction" className="transition-colors hover:text-ash">
            Construction
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-ash">
            How it works
          </a>
          <a
            href="#quote"
            className="rounded-sm border border-brass/50 bg-brass/15 px-3.5 py-1.5 text-brass-soft transition-colors hover:bg-brass/25"
          >
            Get a quote
          </a>
        </nav>
        <a
          href="#quote"
          className="rounded-sm border border-brass/50 bg-brass/15 px-3 py-1.5 text-sm text-brass-soft transition-colors hover:bg-brass/25 md:hidden"
        >
          Quote
        </a>
      </div>
    </header>
  );
}
