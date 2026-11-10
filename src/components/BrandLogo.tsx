import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  /** hero = light wordmark on dark hero; solid = dark wordmark on light nav */
  tone?: "hero" | "solid";
  className?: string;
  showWordmark?: boolean;
};

export function BrandLogo({
  tone = "solid",
  className = "",
  showWordmark = true,
}: Props) {
  const craftedClass =
    tone === "hero"
      ? "text-ash group-hover:text-brass-soft"
      : "text-ink group-hover:text-pine";
  const wallsClass =
    tone === "hero" ? "text-brass-soft" : "text-[#9a5b2f]";
  const comClass =
    tone === "hero" ? "text-mist/85" : "text-ink/70";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label={`${site.name} home`}
    >
      <Image
        src="/brand/craftedwalls-mark-256.png"
        alt="Crafted Walls wood plank mark"
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
        priority
      />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={`font-sans text-[1.05rem] font-bold tracking-tight sm:text-lg ${craftedClass}`}
          >
            <span className="transition-colors">crafted</span>
            <span className={`transition-colors ${wallsClass}`}>walls</span>
            <span className={`transition-colors ${comClass}`}>.com</span>
          </span>
          <span
            className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] sm:text-[0.65rem] ${
              tone === "hero" ? "text-mist/75" : "text-ink/50"
            }`}
          >
            Pallet kits &amp; construction
          </span>
        </span>
      ) : null}
    </Link>
  );
}
