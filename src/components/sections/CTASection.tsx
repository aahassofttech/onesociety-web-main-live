import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Ready to transform your community management?",
  subtitle = "Join 27,000+ communities that trust OneSociety for smarter, safer, and simpler gated living.",
  primaryLabel = "Get Started Free",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="section-padding bg-[#1E3A5F] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/3 -translate-y-1/2 pointer-events-none" />

      <div className="container-custom text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryHref}
            className="bg-[#F5A623] hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 text-base shadow-lg shadow-amber-900/20"
          >
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
