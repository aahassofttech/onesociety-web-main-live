import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/seo";

export default function Breadcrumb({ breadcrumbs }: { breadcrumbs?: BreadcrumbItem[] }) {
  return (
    <section className="bg-blue-100 mt-[64px] py-3">
      <div className="container-custom">
        {breadcrumbs && (
          <>
            {/* BreadcrumbList schema is derived from the same array that renders
                the trail, so the two can never disagree. */}
            <JsonLd data={breadcrumbSchema(breadcrumbs)} />
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-black-600">
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#082052] font-medium" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 && <span aria-hidden="true">/</span>}
                </span>
              ))}
            </nav>
          </>
        )}
      </div>
    </section>
  );
}
