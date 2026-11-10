import { images } from "@/lib/images";

/** Site-wide config — Asheville / Western North Carolina market. */
export const site = {
  name: "Crafted Walls",
  shortName: "Crafted Walls",
  /** Legacy / secondary product line art — see public/brand/paul-bunyan-badge.png */
  productLine: "Paul Bunyan's Pallet Walls",
  /** Canonical production host (apex craftedwalls.com 308 → www) */
  url: "https://www.craftedwalls.com",
  /** Secondary Vercel deployment host — keep for previews / fallback */
  vercelUrl: "https://pauls-pallet-walls.vercel.app",
  description:
    "Pallet wall packages and professional pallet wall construction in Asheville and Western North Carolina — DIY kits and on-site installs for homes, studios, and commercial spaces.",
  email: "hello@craftedwalls.com",
  phone: "(828) 508-8439",
  phoneTel: "+18285088439",
  location: {
    city: "Asheville",
    region: "NC",
    postalCode: "28801",
    country: "US",
    areaLabel: "Asheville and Western North Carolina",
    regionName: "Western North Carolina",
    counties: [
      "Buncombe County",
      "Haywood County",
      "Jackson County",
      "Swain County",
      "Cherokee County",
    ] as const,
    /** Towns / communities commonly served across WNC */
    neighborhoods: [
      "Asheville",
      "Waynesville",
      "Canton",
      "Sylva",
      "Cullowhee",
      "Bryson City",
      "Cherokee",
      "Murphy",
    ] as const,
  },
  social: {
    // Add when Paul has profiles
  },
  /**
   * Off-page / local marketing — paste real GBP + review links after claim.
   * See docs/google-business-profile.md (project store). Do not invent g.page URLs.
   */
  marketing: {
    googleBusinessProfileUrl:
      "https://business.google.com/create", // TEMP — replace with Maps/Share URL after GBP verified
    leaveReviewUrl:
      "https://business.google.com/create", // TEMP — replace with Ask-for-reviews short link after claim
    facebookPageUrl: "", // optional
    instagramUrl: "", // optional
  },
} as const;

export const services = [
  {
    slug: "packages",
    href: "/services/packages",
    title: "Pallet Wall Packages",
    shortTitle: "Packages",
    headline: "DIY pallet wall kits shipped ready to hang",
    description:
      "Measured, sanded pallet board kits with layout guides and hardware for accent and feature walls.",
    image: images.boards.src,
    imageAlt: images.boards.alt,
  },
  {
    slug: "construction",
    href: "/services/construction",
    title: "Pallet Wall Construction",
    shortTitle: "Construction",
    headline: "On-site pallet wall construction, measured and finished",
    description:
      "Professional install: substrate prep, pattern layout, fastening, and finish for a clean feature wall.",
    image: images.slatDetail.src,
    imageAlt: images.slatDetail.alt,
  },
  {
    slug: "commercial",
    href: "/services/commercial",
    title: "Commercial Pallet Walls",
    shortTitle: "Commercial",
    headline: "Retail, café, and studio feature walls that photograph well",
    description:
      "Durable commercial pallet wall installs sized for foot traffic, branding, and everyday wear.",
    image: images.commercial.src,
    imageAlt: images.commercial.alt,
  },
] as const;

export function localTitle(page: string) {
  const { city, region } = site.location;
  return `${page} in ${city}, ${region} | ${site.name}`;
}

export function localDescription(lead: string) {
  return `${lead} Serving ${site.location.areaLabel} — Buncombe, Haywood, Jackson, Swain, and Cherokee counties.`;
}
