import { Construction } from "@/components/Construction";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Packages } from "@/components/Packages";
import { Quote } from "@/components/Quote";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Packages />
        <Construction />
        <HowItWorks />
        <Quote />
      </main>
      <SiteFooter />
    </>
  );
}
