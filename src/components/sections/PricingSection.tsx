import Link from "next/link";
import { Button } from "@heroui/react";

const plans = [
  {
    name: "Starter",
    features: ["Up to 50 units", "Visitor management", "Basic reporting", "Email support"],
    highlighted: false,
  },
  {
    name: "Community",
    features: ["Up to 200 units", "All Starter features", "Billing & payments", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    features: ["Unlimited units", "All Community features", "Custom integrations", "Dedicated manager"],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="section-padding bg-white" id="pricing">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              Switch to OneSociety now
            </h2>
            <p className="text-neutral-dark leading-relaxed mb-6">
              Start managing your community smarter with OneSociety. Choose the plan that fits your
              community size and discover how easy community management can be.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "No setup fees",
                "30-day free trial",
                "Cancel anytime",
                "Free onboarding & training",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-neutral-dark">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors inline-block"
            >
              Get started now
            </Link>
          </div>

          {/* Right pricing table */}
          <div className="bg-neutral-light rounded-2xl border border-neutral-mid overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-4 border-b border-neutral-mid">
              <div className="p-4 text-sm font-semibold text-primary">Feature</div>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-4 text-center text-sm font-bold ${plan.highlighted ? "bg-primary text-white" : "text-primary"
                    }`}
                >
                  {plan.name}
                </div>
              ))}
            </div>
            {/* Feature rows */}
            {[
              "Visitor Management",
              "Resident App",
              "Billing & Payments",
              "Maintenance Requests",
              "Notice Board",
              "Analytics Dashboard",
              "API Access",
            ].map((feature, rowIdx) => (
              <div
                key={feature}
                className={`grid grid-cols-4 border-b border-neutral-mid ${rowIdx % 2 === 0 ? "bg-white" : ""}`}
              >
                <div className="p-3 text-xs text-neutral-dark">{feature}</div>
                {plans.map((plan, planIdx) => (
                  <div
                    key={plan.name}
                    className={`p-3 flex items-center justify-center ${plan.highlighted ? "bg-primary/5" : ""}`}
                  >
                    {planIdx === 0 && rowIdx < 3 ? (
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : planIdx === 1 && rowIdx < 6 ? (
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : planIdx === 2 ? (
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
