"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Counter {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

interface CounterSectionProps {
  title?: string;
  description?: string;
  counters?: Counter[];
}


const defaultCounters: Counter[] = [
  {
    value: 27,
    suffix: "K+",
    label: "Communities Powered",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: 5,
    suffix: "M+",
    label: "Residents Connected",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    value: 50,
    suffix: "+",
    label: "Cities Across India",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: 100,
    suffix: "K+",
    label: "Daily Active Users",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];


function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-2xl md:text-3xl font-bold text-primary">
      {count}
      {suffix}
    </span>
  );
}

export default function CounterSection({
  title = "India's Trusted Society Management Software",
  description = "Thousands of apartments, gated communities, and housing societies rely on OneSociety to streamline visitor management, maintenance, communication, and everyday community operations.",
  counters = defaultCounters,
}: CounterSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="">
          {/* Left content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              {title}
            </h2>
            <p className="text-neutral-dark leading-relaxed">{description}</p>
          </div>

          {/* Counters grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {counters.map((counter) => (
              <div
                key={counter.label}
                className="bg-neutral-light rounded-2xl p-6 border border-neutral-mid"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3">
                  {counter.icon}
                </div>
                <AnimatedCounter value={counter.value} suffix={counter.suffix} />
                <p className="font-semibold text-primary mt-1">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
