import Link from "next/link";
import { Button } from "@heroui/react";

export default function AdPlatformSection() {
  return (
    <section className="section-padding bg-blue-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              More Than Just Society Management System
            </h2>
            <p className="text-neutral-dark leading-relaxed mb-8 max-w-md">
              OneSociety is more than a society management app. Through our integrated community platform, local businesses can reach verified communities with relevant offers, while Residents can discover trusted local businesses, exclusive discounts, and everyday services directly through the OneSociety app.
            </p>
            <Link
              href="/contact"
              className="bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors inline-block"
            >
              Learn more
            </Link>
          </div>
          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 h-auto rounded-[2.5rem] shadow-2xl">
                <img
                  src="/images/mobile-app-full-preview.png"
                  alt="Ad platform mockup"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
