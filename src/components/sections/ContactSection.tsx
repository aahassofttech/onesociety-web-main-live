"use client";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/data/site";
interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  showHeading?: boolean;
}

const contactInfo = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>, label: "Phone", value: SITE.phone
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>, label: "Email", value: SITE.email
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>, label: "Office", value: SITE.address
  },
  {
  icon: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        strokeWidth={1.5}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7v5l3 2"
      />
    </svg>
  ),
  label: "Support hours",
  value: SITE.hours
},
];

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#1E3A5F]">{label}</label>
      {children}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl border text-sm text-[#1E3A5F] placeholder-slate-400 bg-white outline-none transition-all duration-200 ${hasError
    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
    : "border-slate-200 hover:border-[#1E3A5F]/40 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/10"
  }`;

export default function ContactSection({
  title = "Get in touch with us",
  subtitle = "Have a question, feedback, or want to schedule a demo? Fill out the form and our team will get back to you within 24 hours.",
  showHeading = true,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Full name is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Please enter a valid email address";
    if (!formData.phone.trim() || !/^\+?[\d\s\-()]{10,}$/.test(formData.phone))
      e.phone = "Please enter a valid phone number";
    if (!formData.message.trim() || formData.message.length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const result = (await res.json().catch(() => null)) as { fields?: Record<string, string> } | null;
        setErrors(result?.fields || { message: "Something went wrong. Please try again." });
        return;
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch {
      setErrors({ message: "Something went wrong. Please try again." });
    }
  };

  const set = (key: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => { const n = { ...prev }; delete n[key]; return n; });
  };

  return (
    <section className="section-padding bg-[#F5F7FA]" id="contact">
      <div className="container-custom">
        {showHeading && <SectionHeading tag="Contact" title={title} subtitle={subtitle} center />}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* ── Left: info ───────────────────────────────────────── */}
          <div>
            <h3 className="font-display font-bold text-[#1E3A5F] text-2xl mb-3">Let's connect</h3>
            <p className="text-[#6B7A99] leading-relaxed mb-8">
              Whether you're managing a small society or a large township, our team is ready to
              help you find the right plan and get you set up quickly.
            </p>

            <div className="space-y-5 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center text-[#1E3A5F] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7A99] mb-0.5 font-medium uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-[#1E3A5F] font-semibold text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl bg-[#1E3A5F]/8 h-48 flex items-center justify-center border border-[#1E3A5F]/15 overflow-hidden relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7613.088980542984!2d78.37872726932098!3d17.43363444613077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bd18410b0f%3A0x8d7e3fea891858ce!2sT-Hub!5e0!3m2!1sen!2sin!4v1783927080569!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
            </div>
          </div>

          {/* ── Right: form ──────────────────────────────────────── */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(30,58,95,0.08)]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 h-full">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-[#1E3A5F] text-xl mb-2">Message sent!</h3>
                <p className="text-[#6B7A99] text-sm max-w-xs">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#F5A623] font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-[#1E3A5F] text-xl mb-6">
                  Send us a message
                </h3>
                <div className="space-y-5">
                  <Field label="Full Name" error={errors.name}>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={set("name")}
                      className={inputClass(!!errors.name)}
                    />
                  </Field>

                  <Field label="Email Address" error={errors.email}>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={set("email")}
                      className={inputClass(!!errors.email)}
                    />
                  </Field>

                  <Field label="Phone Number" error={errors.phone}>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={set("phone")}
                      className={inputClass(!!errors.phone)}
                    />
                  </Field>

                  <Field label="Message" error={errors.message}>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your community or your question..."
                      value={formData.message}
                      onChange={set("message")}
                      className={`${inputClass(!!errors.message)} resize-none`}
                    />
                  </Field>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#F5A623] hover:bg-amber-600 active:bg-amber-700 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm tracking-wide shadow-sm"
                  >
                    Send Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
