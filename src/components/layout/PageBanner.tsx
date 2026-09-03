import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/seo";

interface PageBannerProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageBanner({ title, description, breadcrumbs }: PageBannerProps) {
  return (
    <section className="bg-primary pt-28 pb-16">
      <div className="container-custom text-center">
        {breadcrumbs && (
          <>
            <JsonLd data={breadcrumbSchema(breadcrumbs)} />
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-2 text-sm text-blue-200 mb-4"
            >
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 && <span aria-hidden="true">/</span>}
                </span>
              ))}
            </nav>
          </>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {description && (
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
