import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/sections/FAQSection";
import AppDownloadCTA from "@/components/sections/AppDownloadCTA";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

import FeaturesCarousel from "@/components/sections/FeaturesCarousel";
import Breadcrumb from "@/components/layout/breadcrumb";


export const metadata: Metadata = buildMetadata({
    path: "/features",
    title: "Society Management Software Features | Visitor Management & Accounting",
    description:
        "Explore Societies society management software with visitor management, society accounting, maintenance, parking, and resident communication features for modern communities.",
});

const values = [
    {
        title: "Community First",
        description: "Every decision we make starts with the question: how does this make life better for residents?",
        icon: "🏘️",
    },
    {
        title: "Radical Transparency",
        description: "We believe communities thrive when information flows freely. We build tools that promote accountability.",
        icon: "🔍",
    },
    {
        title: "Security by Design",
        description: "Safety isn't a feature - it's the foundation. We build security into every layer of our platform.",
        icon: "🛡️",
    },
    {
        title: "Relentless Innovation",
        description: "We constantly push the boundaries of what community management software can do.",
        icon: "⚡",
    },
];

const features = [
    {
        title: "Visitor Management System",
        description:
            "Secure your community with a visitor management software system. Approve guests, manage deliveries, verify domestic staff, and monitor gate entries in real time.",
        icon: "👥",
    },
    {
        title: "Society Accounting Software",
        description:
            "Automate maintenance billing, collect payments, track expenses, and generate financial reports with integrated society accounting software.",
        icon: "💳",
    },
    {
        title: "Maintenance Management",
        description:
            "Raise, assign, and track maintenance requests from one place. Resolve issues faster while keeping residents informed every step of the way.",
        icon: "🛠️",
    },
    {
        title: "Parking Management System",
        description:
            "Assign parking spaces, manage visitor parking, and monitor vehicle access with an intelligent Parking Management System.",
        icon: "🚗",
    },
    {
        title: "Community Communication",
        description:
            "Share notices, announcements, event updates, and emergency alerts instantly to keep residents connected and engaged.",
        icon: "📢",
    },
];

const featuresFAQs = [
  {
    question: "How does the Society ERP improve community security?",
    answer:
      "Our Society ERP helps communities verify visitors, approve guests digitally, manage deliveries, and maintain real-time gate records. It reduces manual entry while improving security for residents, visitors, and security teams.",
  },
  {
    question: "Can I manage maintenance billing and society accounts with OneSociety?",
    answer:
      "Yes. Our society accounting software simplifies maintenance billing, online payments, expense tracking, invoicing, financial reports, and audit records, making it easier for apartment associations and RWAs to manage community finances.",
  },
  {
    question: "Does OneSociety include a Parking Management System?",
    answer:
      "Yes. Our Parking Management System helps communities allocate parking spaces, manage resident and visitor parking, track vehicle records, and simplify parking operations from one dashboard.",
  },
  {
    question: "How does the Vendor Management System work?",
    answer:
      "Our Vendor Management System allows you to maintain vendor records, approve access, track service history, and manage contractors and service providers efficiently from one centralized platform.",
  },
  {
    question: "Why choose OneSociety over other society management software?",
    answer:
      "OneSociety combines community management, accounting, security, communication, and operations into one easy-to-use platform. Instead of relying on multiple tools, apartments and gated communities can manage everything from one integrated solution.",
  },
  {
    question: "How does OneSociety make community management easier?",
    answer:
      "Managing a community doesn't have to be complicated. OneSociety brings together visitor management, maintenance, billing, communication, and day-to-day administration in one platform, helping management committees save time while keeping residents informed and connected.",
  },
];

export default function FeaturesPage() {
    return (
        <>
            <Header />
            <Breadcrumb
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Features" }]}
            />
            <main>

                {/* <section className="bg-primary section-padding overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            
                            
                            <div>
                                <h1 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight mb-6">
                                    Society Management Software
                                    <br />
                                    Built for Modern Communities
                                </h1>
                                <p className="text-blue-200 text-md lg:text-lg mb-8 leading-relaxed max-w-md">
                                    Discover powerful features built into our society management system to simplify daily operations, improve resident communication, streamline visitor management, and make community management effortless.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="bg-[#F5A623] hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 text-base shadow-lg shadow-amber-900/30 inline-block"
                                    >
                                        Book a Demo
                                    </Link>
                                </div>
                            </div>

                            
                            <div className="relative flex justify-center items-center">
                                <div className="w-full max-w-lg">
                                    <div className="rounded-2xl overflow-hidden">
                                        <div className="aspect-[4/3] flex items-center justify-center">
                                            <img
                                                src="/images/features-hero.png"
                                                alt="Building Illustration"
                                                className="w-full h-full object-cover object-bottom"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section > */}

                <section className="py-20 overflow-hidden">
                    <div className="container mx-auto px-4">

                        <h1 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-center leading-tight mb-4">
                            Powerful Features Built for Smarter Community Living
                        </h1>
                        <p className="text-blue-900 text-md lg:text-lg mb-8 leading-relaxed text-center max-w-2xl mx-auto">
                            Discover powerful features built into our society management system to simplify daily operations, improve resident communication, streamline visitor management, and make community management effortless.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {features.map((item, index) => (
                                <div className="bg-[#E6F3FF] rounded-[15px] shadow-md p-8 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-[52px] h-[52px] bg-[#082052] rounded-[10px] flex items-center justify-center text-2xl text-white mb-4">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-black/80">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                <AppDownloadCTA />

                <TestimonialsSection />

                <ContactSection showHeading={false} />

                <FAQSection faqs={featuresFAQs} />

            </main>
            <Footer />
        </>
    );
}
