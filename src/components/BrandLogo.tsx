import Image from "next/image";
import Link from "next/link";

type Props = {
  /** hero = light mark on dark hero; solid = dark mark on light nav */
  tone?: "hero" | "solid";
  className?: string;
  showWordmark?: boolean;
};

export function BrandLogo({
  tone = "solid",
  className = "",
  showWordmark = true,
}: Props) {
  const markSrc =
    tone === "hero"
      ? "/brand/logo-mark-on-dark.svg"
      : "/brand/logo-mark.svg";

  const nameClass =
    tone === "hero"
      ? "text-ash group-hover:text-brass-soft"
      : "text-pine group-hover:text-canopy";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Paul Bunyan's Pallet Walls home"
    >
      <Image
        src={markSrc}
        alt="Paul Bunyan mascot with pallet wall"
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
        priority
      />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-lg tracking-tight transition-colors sm:text-xl ${nameClass}`}
          >
            Paul Bunyan&apos;s
          </span>
          <span
            className={`mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] sm:text-xs ${
              tone === "hero" ? "text-mist/80" : "text-ink/55"
            }`}
          >
            Pallet Walls
          </span>
        </span>
      ) : null}
    </Link>
  );
}
