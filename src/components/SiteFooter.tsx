import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-pine/10 bg-pine py-12 text-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.1fr] sm:px-8">
        <div>
          <BrandLogo tone="hero" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist/70">
            Pallet wall packages &amp; construction in{" "}
            {site.location.areaLabel} — Buncombe, Haywood, Jackson, Swain, and
            Cherokee counties.
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
            <li>
              <Link href="/#tools" className="hover:text-ash">
                Wall calculator
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-ash">
                FAQ
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
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-ash">
                {site.phone}
              </a>
            </li>
            <li>
              {site.location.city}, {site.location.region}
            </li>
            <li>
              <Link href="/#quote" className="hover:text-ash">
                Request a quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <NewsletterSignup variant="footer" source="footer" />
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-xs text-mist/45">
          © 2026 {site.name}. Site v1 for review.
        </p>
        <p className="text-xs text-mist/45">
          <Link href="/#local" className="hover:text-mist">
            Reviews &amp; referrals
          </Link>
        </p>
      </div>
    </footer>
  );
}
