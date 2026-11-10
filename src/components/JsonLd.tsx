import { images } from "@/lib/images";
import { site, services } from "@/lib/site";

function areaServedNodes() {
  return [
    {
      "@type": "City",
      name: site.location.city,
      containedInPlace: {
        "@type": "State",
        name: "North Carolina",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: site.location.regionName,
      containedInPlace: {
        "@type": "State",
        name: "North Carolina",
      },
    },
    ...site.location.counties.map((name) => ({
      "@type": "AdministrativeArea",
      name,
      containedInPlace: {
        "@type": "State",
        name: "North Carolina",
      },
    })),
  ];
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.phoneTel,
    image: `${site.url}${images.hero.src.startsWith("/") ? images.hero.src : `/${images.hero.src}`}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      postalCode: site.location.postalCode,
      addressCountry: site.location.country,
    },
    areaServed: areaServedNodes(),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `${site.url}${s.href}`,
        areaServed: areaServedNodes(),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: site.name,
      url: site.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.city,
        addressRegion: site.location.region,
        postalCode: site.location.postalCode,
        addressCountry: site.location.country,
      },
    },
    areaServed: areaServedNodes(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
