import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import F7 from '../assets/F7.png';
import Caridad from '../assets/caridad.png';
import Petmania from '../assets/petmania.png';
import Jolie from '../assets/jolie.png';
import Scuola from '../assets/Scuola_Logo.png';
import Technologia from '../assets/tecnologia.png';
import BorderBottomCenter from '../assets/border-center.png';

const logos = [
  { src: F7 },
  { src: Caridad },
  { src: Petmania },
  { src: Jolie },
  { src: Scuola },
  { src: Technologia },
];

const BrandSlider = () => {
  return (
    <div className="sm:px-5 pb-15 lg:pb-30 pt-14 text-center relative">
      <h2 className="text-xl px-5 font-bold mb-10 md:mb-12">
        Digital Market Tap is the choice of industry leaders.
      </h2>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-11/12 mx-auto pt-18 custom-swiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo.src} alt={`brand-${index}`} className="mx-auto max-h-16" />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .custom-swiper .swiper-button-prev,
          .custom-swiper .swiper-button-next {
            color: black;
            top: 45%;
            transform: translateY(-50%);
            width: 24px;
            height: 24px;
            z-index: 10;
          }

          .custom-swiper .swiper-button-prev::after,
          .custom-swiper .swiper-button-next::after {
            font-size: 16px;
            font-weight: bold;
          }

          .custom-swiper .swiper-pagination {
            margin-top: 1rem;
            position: relative;
          }
        `}
      </style>
       <img src={BorderBottomCenter} alt="border-bottom-line" className="w-full absolute bottom-0 right-0 object-contain pb-3 md:pb-6 px-5 md:px-10 lg:px-30"/>
    </div>
  );
};

export default BrandSlider;
