import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Packages & Construction in ${site.location.city}, ${site.location.region}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "pallet wall",
    "pallet wall packages",
    "pallet wall construction",
    `pallet wall ${site.location.city}`,
    "wood feature wall",
    "reclaimed wood wall install",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
