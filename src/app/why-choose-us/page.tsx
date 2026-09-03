import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/sections/FAQSection";
import AppDownloadCTA from "@/components/sections/AppDownloadCTA";
import ContactSection from "@/components/sections/ContactSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { GiModernCity } from "@react-icons/all-files/gi/GiModernCity";
import Breadcrumb from "@/components/layout/breadcrumb";

export const metadata: Metadata = buildMetadata({
    path: "/why-choose-us",
    title: "Why Choose Us",
    description:
        "See why societies pick OneSociety - ISO 27001:2022 certified security, one unified platform, and support that understands Indian communities.",
});


const privacyFeatures = [
    {
        title: "ISO 27001:2022 Certified",
        description:
            "Built on globally recognized information security standards to protect your community's data.",
        icon: "/images/iso-logo.png",
    },
    {
        title: "DPDP Compliant",
        description:
            "Designed to align with India's Digital Personal Data Protection (DPDP) Act for responsible data handling.",
        icon: "/images/dpdp-logo.webp",
    },
    {
        title: "GDPR Aligned",
        description:
            "Following internationally accepted privacy practices to ensure transparency and secure data management.",
        icon: "/images/gdpr-logo.png",
    },
    {
        title: "Enterprise-Grade Security",
        description:
            "Advanced security controls, encrypted data, and regular monitoring help safeguard your community every day.",
        icon: "/images/secure-logo.webp",
    },
];

const appFeatures = [
    {
        title: "Community Communication",
        description:
            "Share announcements, notices, emergency alerts, and event updates to keep every resident informed.",
    },
    {
        title: "Amenity Booking",
        description:
            "Let residents book clubhouses, sports courts, swimming pools, and other shared facilities in just a few clicks.",
    },
    {
        title: "Society Accounting Software",
        description:
            "Simplify maintenance billing, online payments, expense tracking, and financial reporting from one centralized platform.",
    },
];

const WhyChooseUsFAQs = [
  {
    question: "Is OneSociety an ERP for cooperative societies?",
    answer:
      "Yes. OneSociety is a complete ERP for cooperative society management that brings together visitor management, society accounting, maintenance billing, resident communication, vendor management, and daily operations in one platform.",
  },
  {
    question: "Can OneSociety be used by both small and large housing societies?",
    answer:
      "Yes. Whether you manage a small apartment complex or a large gated community, OneSociety scales to meet your requirements. Our society management software is designed to support communities of all sizes.",
  },
  {
    question:
      "How does OneSociety improve communication between residents and management?",
    answer:
      "OneSociety makes community communication simple by allowing management committees to share notices, announcements, event updates, emergency alerts, and important circulars instantly through the platform.",
  },
  {
    question: "Can residents raise maintenance requests online?",
    answer:
      "Yes. Residents can submit maintenance requests through the app, attach photos if required, and track the progress of their requests until they are resolved.",
  },
  {
    question:
      "What makes OneSociety one of the best visitor management systems for apartments?",
    answer:
      "OneSociety offers everything you need in a modern visitor management system, including visitor pre-approvals, QR-based entry, delivery tracking, domestic staff management, digital gate logs, and instant notifications. Combined with society management, accounting, and resident communication, it's a complete solution for modern communities.",
  },
];



export default function WhyChooseUsPage() {
    return (
        <>
            <Header />
            <Breadcrumb
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]}
            />
            <main>

                <section className="section-padding">
                    <div className="container-custom">
                        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

                            {/* Content */}
                            <div className="max-w-[729px]">
                                <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.45] mb-6">
                                    1. Built for Every Community
                                </h2>

                                <div>
                                    <p className="text-md lg:text-xl font-normal leading-[1.5]">
                                        Whether you manage apartments, gated communities, housing societies, RWAs, or commercial complexes, OneSociety adapts to your needs. Our society management system software scales effortlessly, helping communities of every size manage operations more efficiently from a single platform.
                                    </p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="w-full max-w-[416px]">
                                <div className="aspect-square rounded-[25px] overflow-hidden bg-white shadow-sm">
                                    <img
                                        src="/images/why-built.png"
                                        alt="Building Illustration"
                                        className="w-full h-full object-cover object-bottom"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section-padding bg-neutral-light">
                    <div className="container-custom">

                        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

                            {/* Left Content */}
                            <div className="w-full lg:max-w-[473px]">

                                <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.45] mb-6">
                                    2. Security & Privacy You Can Trust
                                </h2>

                                <div>
                                    <p className="text-lg md:text-xl lg:text-xl font-normal leading-[1.5]">
                                        Your community's information deserves the highest level of protection. OneSociety is built with enterprise-grade security and privacy standards to keep resident data safe and community operations secure.
                                    </p>
                                </div>

                            </div>

                            {/* Right Cards */}
                            <div className="w-full lg:max-w-[872px]">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                    {privacyFeatures.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.1)] p-6 min-h-[203px]"
                                        >
                                            <div className="flex flex-col gap-3">

                                                {/* Icon */}
                                                <div className="w-14 h-14 rounded-[5px] bg-white/10 flex items-center justify-center text-xl">
                                                    <img src={item.icon} alt={item.title} />
                                                </div>

                                                {/* Content */}
                                                <div>
                                                    <h3 className="text-[20px] md:text-[21px] font-extrabold text-[#131313] mb-3">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-sm leading-[21px] text-black/80">
                                                        {item.description}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                <section className="section-padding">
                    <div className="container-custom">

                        {/* Heading */}
                        <SectionHeading
                            title="3. Everything You Need to Manage Your Community"
                            subtitle="From visitor management and accounting to maintenance, security, and resident communication, OneSociety brings together the tools your community uses every day."
                        />

                        {/* Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">

                            

                                {appFeatures.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.1)] p-8"
                                    >
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-[#131313]">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm leading-6 text-black/80">
                                                {item.description}
                                            </p>

                                            {/* <Link
                                                href="#"
                                                className="inline-flex items-center gap-2 bg-[#082052] text-white px-5 py-2 rounded-md text-sm font-semibold"
                                            >
                                                Learn More &#x2192;

                                            </Link> */}
                                        </div>
                                    </div>
                                ))}

                            

                            

                        </div>
                    </div>
                </section>


                <AppDownloadCTA />

                <ContactSection showHeading={false} />

                <FAQSection faqs={WhyChooseUsFAQs} title="Questions about OneSociety?" />

            </main>
            <Footer />
        </>
    );
}
