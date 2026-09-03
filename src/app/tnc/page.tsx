import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";

export const metadata: Metadata = buildMetadata({
    path: "/tnc",
    title: "Terms & Conditions",
    description:
        "Read the terms and conditions for using the OneSociety platform.",
});

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using the OneSociety platform, website, or mobile applications, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all users, including residents, community administrators, and security personnel.`,
  },
  {
    title: "Use of Service",
    content: `OneSociety grants you a limited, non-exclusive, non-transferable, and revocable license to use our services for your personal or organizational use in accordance with these Terms. You agree not to use the service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the service.`,
  },
  {
    title: "Account Responsibilities",
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. OneSociety cannot and will not be liable for any loss or damage arising from your failure to comply with this security obligation.`,
  },
  {
    title: "Community Administrator Responsibilities",
    content: `Community administrators are responsible for managing their organization's use of OneSociety, including adding and removing users, configuring settings, and ensuring compliance with these terms. Administrators must ensure that all community members are aware of and comply with these terms.`,
  },
  {
    title: "Intellectual Property",
    content: `The OneSociety platform, including its source code, design, features, and content, is owned by OneSociety and is protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our services without written permission from OneSociety.`,
  },
  {
    title: "Data and Privacy",
    content: `Your use of OneSociety is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, OneSociety shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of or inability to use the service.`,
  },
  {
    title: "Termination",
    content: `We may terminate or suspend your access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the service will cease immediately.`,
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on our platform and updating the effective date. Your continued use of the service after any changes constitutes your acceptance of the new Terms.`,
  },
  {
    title: "Governing Law",
    content: `These Terms are governed by the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Terms & Conditions"
          description="Effective Date: January 1, 2024"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
        />
        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl">
            <p className="text-neutral-dark leading-relaxed mb-8 text-lg">
              Please read these Terms and Conditions carefully before using OneSociety. These terms
              govern your access to and use of our community management platform and all related
              services.
            </p>
            <div className="space-y-10">
              {sections.map((section, index) => (
                <div key={section.title}>
                  <h2 className="font-display font-bold text-primary text-xl mb-3">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-neutral-dark leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-neutral-light rounded-2xl border border-neutral-mid">
              <p className="text-sm text-neutral-dark">
                <strong className="text-primary">Questions about these terms?</strong> Contact us at{" "}
                <a href="mailto:legal@OneSociety.in" className="text-accent hover:underline">
                  legal@OneSociety.in
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
