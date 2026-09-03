import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CounterSection from "@/components/sections/CounterSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumb from "@/components/layout/breadcrumb";
import { SITE, teamMembers } from "@/data/site";

export const metadata: Metadata = buildMetadata({
    path: "/about",
    title: "About Us",
    description:
        "Learn about OneSociety - our mission, story, and the team building the future of community management.",
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



export default function AboutPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <main>

        {/* Our Story */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  tag="Our Story"
                  title="Simplifying Community Management for Everyone"
                />
                <p className="text-neutral-dark leading-relaxed mb-4">
                  Managing a community shouldn't mean juggling spreadsheets, registers, and multiple apps. OneSociety brings visitor management, accounting, resident communication, and everyday operations together in one platform, helping apartments, gated communities, and RWAs manage their communities more efficiently.
                </p>
              </div>
              <div className="bg-neutral-light rounded-2xl p-10 text-center border border-neutral-mid">
                <img src="images/one-society-logo.png" alt="OneSociety logo" width={300} className="mx-auto"/>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-neutral-light">
          <div className="container-custom">
            <SectionHeading
              tag="Our Values"
              title="The Principles That Drive Everything We Do"
              subtitle="Every feature we build and every decision we make is guided by one goal, helping communities become safer, more connected, and easier to manage."
              center
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {values.map((value) => (
                <div key={value.title} className="bg-white rounded-2xl p-6 text-center card-hover border border-neutral-mid">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-display font-bold text-primary text-lg mb-2">{value.title}</h3>
                  <p className="text-neutral-dark text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeading tag="Team" title="Meet the team" subtitle="The passionate people behind OneSociety." center />
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-10 items-center justify-center">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-3">
                    {member.initials}
                  </div>
                  <h4 className="font-semibold text-primary">{member.name}</h4>
                  <p className="text-neutral-dark text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Want to bring OneSociety to your community?"
          subtitle="Join thousands of communities already managing smarter with OneSociety."
        />

        <CounterSection />
        
      </main>
      <Footer />
    </>
  );
}
