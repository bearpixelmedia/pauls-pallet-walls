import { images } from "@/lib/images";

/** Site-wide config. Local SEO fields marked placeholder — Paul should replace. */
export const site = {
  name: "Paul Bunyan's Pallet Walls",
  shortName: "Paul Bunyan's",
  url: "https://pauls-pallet-walls.vercel.app",
  description:
    "Pallet wall packages and professional pallet wall construction for homes, studios, and commercial spaces — from Paul Bunyan's workshop.",
  email: "hello@paulbunyanspalletwalls.example", // placeholder
  phone: "(555) 010-WALL", // placeholder
  phoneTel: "+15550109255", // placeholder
  /** Local SEO placeholders — replace with Paul's real market */
  location: {
    city: "Hometown", // PLACEHOLDER — set Paul's city
    region: "ST", // PLACEHOLDER — state/province code
    postalCode: "00000", // PLACEHOLDER
    country: "US",
    areaLabel: "Hometown, ST and nearby towns", // PLACEHOLDER
    neighborhoods: [
      "Downtown (placeholder)",
      "Westside (placeholder)",
      "North Ridge (placeholder)",
      "Riverside (placeholder)",
    ],
  },
  social: {
    // Add when Paul has profiles
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
  return `${lead} Serving ${site.location.areaLabel}. Placeholder local market — replace with Paul's city.`;
}
