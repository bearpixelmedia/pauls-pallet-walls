import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-pine/10 bg-pine py-12 text-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-[1.2fr_1fr_1fr] sm:px-8">
        <div>
          <BrandLogo tone="hero" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist/70">
            Pallet wall packages &amp; construction serving{" "}
            {site.location.areaLabel}.
          </p>
          <p className="mt-3 text-xs text-brass-soft/90">
            Local market fields are placeholders — set Paul&apos;s city in{" "}
            <code className="text-mist/80">src/lib/site.ts</code>
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-soft">
            Services
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/services/packages" className="hover:text-ash">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/services/construction" className="hover:text-ash">
                Construction
              </Link>
            </li>
            <li>
              <Link href="/services/commercial" className="hover:text-ash">
                Commercial
              </Link>
            </li>
            <li>
              <Link href="/service-area" className="hover:text-ash">
                Service area
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-soft">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-mist/75">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ash">
                {site.email}
              </a>{" "}
              <span className="text-xs text-mist/45">(placeholder)</span>
            </li>
            <li>
              {site.phone}{" "}
              <span className="text-xs text-mist/45">(placeholder)</span>
            </li>
            <li>
              {site.location.city}, {site.location.region}{" "}
              <span className="text-xs text-mist/45">(placeholder)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
        <p className="text-xs text-mist/45">
          © 2026 {site.name}. Site v1 for review.
        </p>
      </div>
    </footer>
  );
}
