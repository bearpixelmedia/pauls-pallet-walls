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
      aria-label="Paul's Pallet Walls home"
    >
      <Image
        src={markSrc}
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
        priority
      />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-lg tracking-tight transition-colors sm:text-xl ${nameClass}`}
          >
            Paul&apos;s
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
