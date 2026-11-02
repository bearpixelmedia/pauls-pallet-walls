export function SiteFooter() {
  return (
    <footer className="border-t border-pine/10 bg-pine py-10 text-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-xl text-ash">
            Paul&apos;s Pallet Walls
          </p>
          <p className="mt-1 text-sm text-mist/65">
            Packages &amp; construction · Placeholder contact details
          </p>
        </div>
        <p className="text-xs text-mist/50">
          © 2026 Paul&apos;s Pallet Walls. Site v1 for review.
        </p>
      </div>
    </footer>
  );
}
