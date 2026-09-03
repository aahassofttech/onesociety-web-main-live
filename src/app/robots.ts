import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { SITE_ROUTES } from "@/data/routes";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const disallow = [
    "/api/",
    ...SITE_ROUTES.filter((route) => !route.indexable).map((route) => route.path),
  ];

  return {
    rules: [{ userAgent: "*", allow: "/", disallow }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}
