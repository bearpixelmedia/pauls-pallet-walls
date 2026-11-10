import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-04");
  const staticRoutes = ["", "/services", "/service-area"].map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  // /thanks is noindex (post-quote nurture) — omit from sitemap

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}${s.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
