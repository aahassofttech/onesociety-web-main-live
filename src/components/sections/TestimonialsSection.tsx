"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination"; import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    text: "OneSociety has made managing our apartment society much easier. The visitor management system is simple to use, residents receive instant visitor approvals, and our security team can manage gate entries without paperwork.",
    name: "Ramesh Iyer",
    role: "Secretary, Green Valley Apartments",
    avatar: "RI",
  },
  {
    text: "The society accounting software has completely changed the way we handle maintenance billing and payments. Everything is automated, transparent, and much easier to track than our old spreadsheets.",
    name: "Priya Sharma",
    role: "Treasurer, Sunrise Heights",
    avatar: "PS",
  },
  {
    text: "We wanted an apartment management app that could handle resident communication, complaints, and day-to-day administration. OneSociety brought everything together on one platform, making life easier for both our committee and residents.",
    name: "Anil Mehta",
    role: "President, Lotus Gardens RWA",
    avatar: "AM",
  },
  {
    text: "The maintenance request and complaint management features have made our community operations much more organized. Residents receive timely updates, and our management committee can resolve issues faster with complete transparency.",
    name: "Neha Verma",
    role: "Committee Member, Maple Residency",
    avatar: "NV",
  },
];

export default function TestimonialsSection() {
  return (



    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Why Communities Trust OneSociety"
          subtitle="Trusted by community managers, security teams, and residents looking for reliable society management software that simplifies everyday operations."
          center
        />
        <Swiper
          modules={[Pagination]}
          loop
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-blue-50 rounded-2xl p-6 shadow-card card-hover">

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-neutral-dark text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {t.avatar}
                  </div>

                  <div>
                    <p className="font-semibold text-primary text-sm">{t.name}</p>
                    <p className="text-neutral-dark text-xs">{t.role}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>

  );
}
