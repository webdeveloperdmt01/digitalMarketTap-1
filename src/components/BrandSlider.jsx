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

const logos = [
  { src: F7,},
  { src: Caridad,},
  { src: Petmania,},
  { src: Jolie,},
  { src: Scuola, },
  { src: Technologia,},
];

const BrandSlider = () => {
  return (
    <div className=" sm:px-5 py-10 text-center">
      <h2 className="text-xl sm:px-5 font-semibold mb-10 md:mb-12">The best brands choose Numerique</h2>

      <Swiper
        slidesPerView={3}
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
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-11/12 mx-auto pt-18 custom-swiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo.src} alt={logo.name} className="mx-auto max-h-16" />
            <p className="mt-2 font-bold">{logo.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .custom-swiper .swiper-pagination {
            margin-top: 1rem;
            position: relative;
          }
        `}
      </style>
    </div>
  );
};

export default BrandSlider;
