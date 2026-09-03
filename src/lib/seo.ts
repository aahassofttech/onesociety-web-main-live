import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { getRoute, SITE_INDEXABLE } from "@/data/routes";

/** Resolve a site-relative path to a fully-qualified canonical URL. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.url).toString();
}

interface BuildMetadataOptions {
  /** Route path, matched against the registry in `@/data/routes`. */
  path: string;
  title: string;
  description: string;
  /** Site-relative preview image. Defaults to `SITE.ogImage`. */
  ogImage?: string;
}

/**
 * Builds a page's Metadata with the canonical URL, Open Graph block, Twitter
 * card and robots directives all derived from the route registry - so the
 * canonical and the indexability can never drift apart.
 */
export function buildMetadata({
  path,
  title,
  description,
  ogImage = SITE.ogImage,
}: BuildMetadataOptions): Metadata {
  const route = getRoute(path);
  const canonical = absoluteUrl(path);

  // The root layout appends "| OneSociety" via its title template. Titles that
  // already carry the brand opt out of the template instead of doubling it up.
  const title_ = title.includes(SITE.name) ? { absolute: title } : title;

  return {
    title: title_,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${SITE.name} - ${SITE.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots:
      SITE_INDEXABLE && route?.indexable !== false
        ? {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
          }
        : {
            index: false,
            follow: false,
            googleBot: { index: false, follow: false },
          },
  };
}

/* ── JSON-LD builders ──────────────────────────────────────────────────── */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * BreadcrumbList schema. Per Google's spec the final crumb represents the
 * current page and may omit `item`, which is why trailing crumbs render
 * without an href throughout the site.
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.fullName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE.logo),
    },
    description: SITE.description,
    email: SITE.supportEmail,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      ...SITE.postalAddress,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: SITE.phone,
      email: SITE.supportEmail,
      areaServed: "IN",
      availableLanguage: ["en"],
    },
    sameAs: [SITE.linkedin, SITE.instagram, SITE.facebook].filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}
