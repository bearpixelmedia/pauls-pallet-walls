import { Construction } from "@/components/Construction";
import { ExamplesGallery } from "@/components/ExamplesGallery";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Packages } from "@/components/Packages";
import { Quote } from "@/components/Quote";
import { ServicesPreview } from "@/components/ServicesPreview";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { localDescription, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | Pallet Wall Packages & Construction in ${site.location.city}, ${site.location.region}`,
  },
  description: localDescription(
    "Custom pallet wall packages and professional pallet wall construction for homes, studios, and commercial spaces.",
  ),
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <Hero />
        <ExamplesGallery />
        <ServicesPreview />
        <Packages />
        <Construction />
        <HowItWorks />
        <Quote />
      </main>
      <SiteFooter />
    </>
  );
}
