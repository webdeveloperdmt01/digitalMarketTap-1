import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import YellowStar from "../assets/Misc_star.png";
import HighlightedStrokes from "../assets/Highlight_strokes.png";

const testimonials = [
  {
    name: "Rahul Mehra",
    age: 34,
    quote:
      "Their digital solutions truly elevated my business. Very professional and creative team.",
  },
  {
    name: "Priya Sharma",
    age: 28,
    quote:
      "Absolutely loved their design work. It gave our brand a fresh and modern identity.",
  },
  {
    name: "Ankit Verma",
    age: 40,
    quote:
      "They delivered exactly what we needed, on time and with great attention to detail.",
  },
  {
    name: "Sneha Iyer",
    age: 30,
    quote:
      "Excellent quality and a collaborative approach. They understood our brand perfectly.",
  },
  {
    name: "Vikram Desai",
    age: 38,
    quote:
      "We saw a clear growth in engagement after working with them. Highly recommended!",
  },
  {
    name: "Neha Kapoor",
    age: 27,
    quote:
      "Very satisfied with their creativity and professionalism. Would definitely work again.",
  },
  {
    name: "Arjun Nair",
    age: 36,
    quote:
      "One of the best design teams we’ve worked with. They exceeded our expectations.",
  },
  {
    name: "Ritika Joshi",
    age: 32,
    quote:
      "Their branding ideas brought a whole new energy to our business. Great experience!",
  },
  {
    name: "Karan Singh",
    age: 45,
    quote:
      "Impressive work! Their strategies made a real difference to our online presence.",
  },
  {
    name: "Divya Menon",
    age: 29,
    quote:
      "Smooth process from start to finish. They really care about delivering quality.",
  },
];

const GraphicDesignSlider = () => {
  return (
    <div className="pt-20 pb-16 px-5 md:px-10 lg:px-30 text-black text-center relative">
      <img src={YellowStar} alt="star" className="absolute top-[17%] md:top-[10%] right-[16%] md:right-[28%] w-[30px] md:w-[40px]" />
      <img src={HighlightedStrokes} alt="highlight" className="absolute top-[9%] md:top-[10%] left-[11%] md:left-[26%] lg:left-[30%] w-[30px] md:w-[40px]" />
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 relative inline-block"> What our awesome <br />customers say</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 px-4 text-sm md:text-md"> Our team has a successful track record of helping brands scale profitably based on high-performing strategies.</p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4 !pb-10">
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center mx-auto max-w-[350px] min-h-[320px] flex flex-col justify-between my-4 transform transition-transform hover:scale-105 duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-[#f89e1b] rounded-full p-5 text-white text-xl shadow-md">
                  <FaQuoteRight />
                </div>
              </div>
              <p className="text-md font-medium mb-4 text-gray-700 leading-relaxed italic">
                “{testimonial.quote}”
              </p>
              <div className="flex justify-center mb-2 text-[#f89e1b]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">
                – {testimonial.name}, {testimonial.age}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GraphicDesignSlider;
