"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";

type Props = {
  variant?: "hero" | "solid";
};

export function SiteHeader({ variant }: Props) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const tone = variant ?? (onHome ? "hero" : "solid");
  const isHero = tone === "hero";

  const linkClass = isHero
    ? "transition-colors hover:text-ash"
    : "transition-colors text-ink/70 hover:text-pine";

  return (
    <header
      className={
        isHero
          ? "absolute inset-x-0 top-0 z-20"
          : "sticky top-0 z-20 border-b border-pine/10 bg-paper/95 backdrop-blur-sm"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <BrandLogo tone={isHero ? "hero" : "solid"} />
        <nav
          className={`hidden items-center gap-7 text-sm md:flex ${
            isHero ? "text-mist/90" : ""
          }`}
        >
          <Link href="/#examples" className={linkClass}>
            Examples
          </Link>
          <Link href="/services/packages" className={linkClass}>
            Packages
          </Link>
          <Link href="/services/construction" className={linkClass}>
            Construction
          </Link>
          <Link href="/services/commercial" className={linkClass}>
            Commercial
          </Link>
          <Link href="/service-area" className={linkClass}>
            Service area
          </Link>
          <Link href="/#tools" className={linkClass}>
            Tools
          </Link>
          <Link
            href="/#quote"
            className={
              isHero
                ? "rounded-sm border border-brass/50 bg-brass/15 px-3.5 py-1.5 text-brass-soft transition-colors hover:bg-brass/25"
                : "rounded-sm bg-pine px-3.5 py-1.5 font-semibold text-ash transition-colors hover:bg-canopy"
            }
          >
            Get a quote
          </Link>
        </nav>
        <Link
          href="/#quote"
          className={
            isHero
              ? "rounded-sm border border-brass/50 bg-brass/15 px-3 py-1.5 text-sm text-brass-soft transition-colors hover:bg-brass/25 md:hidden"
              : "rounded-sm bg-pine px-3 py-1.5 text-sm font-semibold text-ash md:hidden"
          }
        >
          Quote
        </Link>
      </div>
    </header>
  );
}
