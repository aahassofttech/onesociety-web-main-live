import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import Breadcrumb from "@/components/layout/breadcrumb";


export const metadata: Metadata = buildMetadata({
    path: "/contact",
    title: "Contact Us",
    description:
        "Get in touch with the OneSociety team. We'd love to hear from you.",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <main>

        <ContactSection showHeading={false} />

      </main>
      <Footer />
    </>
  );
}
