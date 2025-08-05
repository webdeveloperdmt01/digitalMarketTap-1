import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CcLogo from '../assets/CC-logo.webp';
import PwLogo from '../assets/pw-logo.webp';
import SehajLogo from '../assets/sehaj-bg.webp';
import CraftoriumLogo from '../assets/craftorium-bg.webp';
import DDLogo from '../assets/dd-logo.webp';
import ShreyaLogo from '../assets/shreya-logo.webp';
import WeavesLogo from '../assets/weaves-logo.webp';
import BorderBottomCenter from '../assets/border-center.png';

const logos = [
  { src: CcLogo },
  { src: PwLogo },
  { src: SehajLogo },
  { src: CraftoriumLogo },
  { src: DDLogo },
  { src: ShreyaLogo },
  { src: WeavesLogo },
];

const BrandSlider = () => {
  return (
    <div className="sm:px-5 pb-15 lg:pb-30 pt-8 md:pt-14 text-center relative">
      <h2 className="text-2xl md:text-4xl lg:text-5xl px-5 font-bold mb-8 md:mb-12 lg:mb-18">
        Digital Market Tap - <br /> First choice of industry leaders.
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
            <img src={logo.src} alt={`brand-${index}`} className="mx-auto max-h-22" />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .custom-swiper .swiper-button-prev,
          .custom-swiper .swiper-button-next {
            color: #f89e1b;
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
          .swiper-pagination-bullet {background-color: gray-300;}
          .swiper-pagination-bullet-active {background-color: #f89e1b !important;}
        `}
      </style>
       <img src={BorderBottomCenter} alt="border-bottom-line" className="w-full absolute bottom-0 right-0 object-contain pb-3 md:pb-6 px-5 md:px-10 lg:px-30"/>
    </div>
  );
};

export default BrandSlider;
