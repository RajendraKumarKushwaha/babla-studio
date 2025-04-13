'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySlider({ testimonials }) {
  return (
    <div className="relative w-[90%] mx-auto  ">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className=" z-100 min-h-100   w-full h-full flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover min-h-100 w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev z-1000 absolute left-3 top-1/2 transform -translate-y-1/2  p-3 rounded-full">
        <ChevronLeft className="text-white w-8 h-8" />
      </button>
      <button className="swiper-button-next z-1000 absolute right-3 top-1/2 transform -translate-y-1/2  p-3 rounded-full">
        <ChevronRight className="text-white w-8 h-8" />
      </button>
    </div>
  );
}
