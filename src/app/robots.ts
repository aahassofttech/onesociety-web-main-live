import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { SITE_INDEXABLE } from "@/data/routes";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Crawling is deliberately left open for every page, including the ones
  // marked non-indexable. Those rely on their noindex meta tag, and a crawler
  // blocked by robots.txt never fetches the page to read that tag — so the URL
  // can linger in results with no way to remove it. Disallow is for things
  // that must not be requested at all; noindex is for things that must not be
  // listed. Only the API is the former.
  const rules = [{ userAgent: "*", allow: "/", disallow: ["/api/"] }];

  return SITE_INDEXABLE
    ? { rules, sitemap: absoluteUrl("/sitemap.xml"), host: SITE.url }
    : { rules, host: SITE.url };
}
