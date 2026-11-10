import Image from "next/image";
import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  localNote?: string;
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  localNote,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-pine text-ash">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/85 to-pine/45" />
        <div className="absolute inset-0 grain opacity-[0.1] mix-blend-overlay" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass-soft">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,3.75rem)] leading-[1.05] tracking-tight">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist/85">
          {description}
        </p>
        {localNote ? (
          <p className="mt-3 inline-block rounded-sm bg-brass/20 px-2.5 py-1 text-xs font-medium text-brass-soft">
            {localNote}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#quote"
            className="inline-flex rounded-sm bg-brass px-5 py-3 text-sm font-semibold text-pine transition-colors hover:bg-brass-soft"
          >
            Request a quote
          </Link>
          <Link
            href="/services"
            className="inline-flex rounded-sm border border-mist/30 px-5 py-3 text-sm font-medium text-ash transition-colors hover:border-mist/60"
          >
            All services
          </Link>
        </div>
      </div>
    </section>
  );
}
