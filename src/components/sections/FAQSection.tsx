"use client";
import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  showCTA?: boolean;
}



function AccordionItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
        open ? "border-[#1E3A5F]/30 bg-white shadow-[0_2px_16px_rgba(30,58,95,0.07)]" : "border-[#E8ECF2] bg-white hover:border-[#1E3A5F]/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <h3 className={`text-sm font-semibold leading-snug transition-colors ${open ? "text-[#1E3A5F]" : "text-[#1E3A5F]"}`}>
          {faq.question}
        </h3>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            open ? "bg-[#1E3A5F] rotate-180" : "bg-[#F5F7FA]"
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors ${open ? "text-white" : "text-[#1E3A5F]"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Animated answer panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 pt-0 text-[#6B7A99] text-sm leading-relaxed border-t border-[#F0F4F8]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Have questions about our society management software? Find answers to some of the most common questions",
  faqs,
  showCTA = true,
}: FAQSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <SectionHeading title={title} subtitle={subtitle} center />

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {showCTA && (
          <p className="text-center text-sm text-[#6B7A99] mt-8">
            Still have questions?{" "}
            <Link href="/contact" className="text-[#F5A623] font-semibold hover:underline">
              Contact our team
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
