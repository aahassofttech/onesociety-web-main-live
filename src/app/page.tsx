import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CounterSection from "@/components/sections/CounterSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AdPlatformSection from "@/components/sections/AdPlatformSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import AppDownloadCTA from "@/components/sections/AppDownloadCTA";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import FeatureTabs from "@/components/sections/FeatureTabs";
import {
  BuildingOffice2Icon,
  ShieldCheckIcon,
  HomeModernIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = buildMetadata({
    path: "/",
    title: "Society Management System for Apartments & RWAs | OneSociety",
    description:
        "Streamline visitor management, maintenance billing, resident communication, security, and more with OneSociety's smart society management system.",
});

const platformFeatures = [
  {
    title: "Gate & Booking",
    description: "Manage gate entries, pre-approve visitors, and book community amenities all in one place.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Resident Billing",
    description: "Automated maintenance billing, payment tracking, and digital receipts for every flat.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Emergency Alerts",
    description: "Broadcast emergency notifications to all residents instantly via app and SMS.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Maintenance Requests",
    description: "Submit, track, and resolve maintenance issues with photo support and status updates.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Notice Board",
    description: "Publish and manage notices, circulars, and meeting minutes digitally for all residents.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Parking Management",
    description: "Assign, track, and manage parking slots with real-time availability for residents and visitors.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const homeFAQs = [
  {
    question: "Why choose OneSociety as your society management app?",
    answer:
      "OneSociety combines visitor management, maintenance billing, resident communication, accounting, and security into one intuitive society management app. Instead of using multiple tools, your entire community can manage everyday operations from a single platform.",
  },
  {
    question: "How does the Visitor Management System work?",
    answer:
      "OneSociety's visitor management system allows residents to pre-approve guests, delivery partners, and domestic staff before they arrive. Security personnel can verify visitors instantly, maintain digital entry logs, and ensure secure access without relying on paper registers.",
  },
  {
    question:
      "What makes OneSociety one of the best visitor management systems for apartments?",
    answer:
      "OneSociety offers everything you need in a modern visitor management system, including visitor pre-approvals, QR-based entry, delivery tracking, domestic staff management, digital gate logs, and instant notifications. Combined with society management, accounting, and resident communication, it's a complete solution for modern communities.",
  },
  {
    question:
      "Is OneSociety suitable for apartments, gated communities, and RWAs?",
    answer:
      "Yes. OneSociety is designed for apartments, gated communities, residential societies, and RWAs of all sizes. Whether you manage a single apartment complex or multiple communities, the platform can be tailored to your needs.",
  },
  {
    question: "Is society accounting software included in OneSociety?",
    answer:
      "Yes. OneSociety includes society accounting software as part of its complete society ERP solution. From maintenance billing and expense tracking to visitor management, resident communication, vendor management, and parking, everything works together on one platform, making community management simpler and more efficient.",
  },
];

const communities = [
  {
    title: "Apartments",
    description:
      "Streamlined management for multi-storey residential complexes.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Gated Communities",
    description:
      "Secure, connected living with controlled access and shared amenities.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Housing Societies",
    description:
      "Collaborative tools for resident welfare and day-to-day operations.",
    icon: HomeModernIcon,
  },
  {
    title: "RWAs",
    description:
      "Empower resident associations with transparent governance and communication.",
    icon: UserGroupIcon,
  },
  {
    title: "Commercial Buildings",
    description:
      "Efficient operations for offices, retail, and mixed-use properties.",
    icon: BuildingStorefrontIcon,
  },
];

export default function HomePage() {

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary section-padding overflow-hidden mt-[64px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div >
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  The Complete Society Management System for Modern Communities
                </h1>
                <p className="text-blue-200 text-md lg:text-lg mb-8 leading-relaxed max-w-md">
                  Simplify visitor management, maintenance billing, security, resident communication, and more with OneSociety, the all-in-one <strong>society management software</strong> for apartments, gated communities, and RWAs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#F5A623] hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 text-base shadow-lg shadow-amber-900/30 inline-block"
                  >
                    Book a Demo
                  </Link>
                  <Link
                    href="/features"
                    className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors duration-200 text-base inline-block"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>

              {/* Building illustration */}
              <div className="relative flex justify-center items-center">
                <div className="w-full max-w-lg">
                  <div className="rounded-2xl overflow-hidden">
                    <div className="aspect-[4/3] flex items-center justify-center">
                      <img
                        src="/images/home-hero.png"
                        alt="Building Illustration"
                        className="w-full h-full object-cover object-bottom"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section >

        <CounterSection />

        <AppDownloadCTA />

        <WhyChooseUsSection />

        <FeatureTabs />

        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <SectionHeading
              title="Built for Every Community"
              subtitle="One platform that adapts to the way your community lives, works, and manages together."
              center
            />

            {/* Cards */}
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {communities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-500 leading-7">
                      {item.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </section>


        <TestimonialsSection />

        <AdPlatformSection />

        <ContactSection showHeading={false} />

        <FAQSection faqs={homeFAQs} />

      </main>
      <Footer />
    </>
  );
}
