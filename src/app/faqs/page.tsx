import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import Breadcrumb from "@/components/layout/breadcrumb";

export const metadata: Metadata = buildMetadata({
    path: "/faqs",
    title: "Frequently Asked Questions",
    description:
        "Answers to common questions about OneSociety's society management software, pricing, onboarding, and security.",
});

const FAQPageFAQs = [
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

export default function FAQSPage() {
    return (
        <>
            <Header />
            <Breadcrumb
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Frequently Asked Questions" }]}
            />
            <main>
                <FAQSection
                    faqs={FAQPageFAQs}
                    title="Common questions"
                    subtitle="Quick answers to the most frequent questions we receive."
                />
                <ContactSection showHeading={false} />
            </main>
            <Footer />
        </>
    );
}
