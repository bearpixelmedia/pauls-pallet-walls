import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyQuoteCta } from "@/components/StickyQuoteCta";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <StickyQuoteCta />
    </>
  );
}
