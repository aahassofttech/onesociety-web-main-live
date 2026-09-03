"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesCarouselProps {
  features: Feature[];
}

export default function FeaturesCarousel({
  features,
}: FeaturesCarouselProps) {
  return (
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
      {features.map((feature, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#E6F3FF] rounded-[15px] shadow-md p-8 h-[220px] flex flex-col justify-between">
            <div>
              <div className="w-[52px] h-[52px] bg-[#082052] rounded-[10px] flex items-center justify-center text-2xl text-white">
                {feature.icon}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-black/80">
                {feature.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}