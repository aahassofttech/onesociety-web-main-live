/* -------------------------------------------------------------------------
   Single source of truth for every public route.

   The sitemap, robots rules and per-page canonicals all read from here, so a
   route can never end up in the sitemap while carrying a noindex tag (or vice
   versa). Adding a page means adding one entry below - nothing else.
   ---------------------------------------------------------------------- */

export interface SiteRoute {
  /** Path as rendered, always leading-slash, never trailing-slash. */
  path: string;
  /** Breadcrumb label for this route. */
  label: string;
  /** When false the page emits noindex and is excluded from the sitemap. */
  indexable: boolean;
  changeFrequency: "yearly" | "monthly" | "weekly" | "daily";
  priority: number;
}

export const SITE_ROUTES: SiteRoute[] = [
  { path: "/", label: "Home", indexable: true, changeFrequency: "weekly", priority: 1.0 },
  { path: "/features", label: "Features", indexable: true, changeFrequency: "monthly", priority: 0.9 },
  { path: "/why-choose-us", label: "Why Choose Us", indexable: true, changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", label: "About Us", indexable: true, changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", label: "Contact Us", indexable: true, changeFrequency: "monthly", priority: 0.7 },
  { path: "/faqs", label: "Frequently Asked Questions", indexable: true, changeFrequency: "monthly", priority: 0.6 },
  { path: "/blogs", label: "Blogs", indexable: true, changeFrequency: "weekly", priority: 0.6 },

  // Legal pages are deliberately kept out of the index.
  { path: "/privacy-policy", label: "Privacy Policy", indexable: false, changeFrequency: "yearly", priority: 0.1 },
  { path: "/tnc", label: "Terms & Conditions", indexable: false, changeFrequency: "yearly", priority: 0.1 },
];

export const INDEXABLE_ROUTES = SITE_ROUTES.filter((route) => route.indexable);

export function getRoute(path: string): SiteRoute | undefined {
  return SITE_ROUTES.find((route) => route.path === path);
}
