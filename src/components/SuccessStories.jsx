import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ZaraImg from "../assets/ZaraImg.jpg";
import IkeaImg from "../assets/IkeaImg.jpg";
import LaprimaImg from "../assets/LaprimaImg.jpg";
import HommeImg from "../assets/HommeImg.jpg";

const slides = [
  {
    brand: "ZARA",
    image: ZaraImg,
    growth: "+40%",
    growthType: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
  },
  {
    brand: "Homme",
    image: HommeImg,
    growth: "+50%",
    growthType: "Engagement rates",
    tags: ["Organic Social Media", "Paid Social"],
  },
  {
    brand: "IKEA",
    image: IkeaImg,
    growth: "+40%",
    growthType: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
  },
  {
    brand: "LAPRIMA",
    image: LaprimaImg,
    growth: "+40%",
    growthType: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
  },
];

export default function SuccessStories() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const slidesPerView = window.innerWidth < 768 ? 1 : 2;
  const totalGroups = Math.ceil(slides.length / slidesPerView);

  const handleDotClick = (index) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const isMobile = window.innerWidth < 768;
      const perView = isMobile ? 1 : 2;
      const cardWidth = containerWidth / perView;

      scrollRef.current.scrollTo({
        left: index * cardWidth * perView,
        behavior: "smooth",
      });
    }
  };

  const tagRoutes = {
    "SEO": "/seo-tag",
    "Paid Social": "/paid-social-tag",
    "Paid Search": "/paid-search-tag",
    "Organic Social Media": "/organic-social-media",
  };

  return (
    <div className="w-full px-5 md:px-10 lg:px-30 py-10 lg:py-20 bg-white flex flex-col lg:flex-row items-start gap-12">

      <div className="w-full lg:w-1/3 flex flex-col justify-start">
        <h4 className="text-md text-left font-bold uppercase text-black tracking-wide">
          Business Outcomes
        </h4>
        <h2 className="text-left text-md md:text-[38px] lg:text-[48px] font-bold leading-[1.1] text-black mt-6 md:mt-16 tracking-tight">
          we create strategies that drive businesses forward and fuel lasting growth.
        </h2>
        <button className="mt-6 md:mt-16 text-sm font-semibold text-black border-b-3 border-orange-500 hover:opacity-80 w-fit">
          VIEW ALL
        </button>
      </div>

      <div className="w-full lg:w-2/3">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth gap-3 md:gap-6 hide-scrollbar"
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="min-w-[270px] md:min-w-[calc(50%-12px)] relative rounded-[35px] md:rounded-[50px] overflow-hidden shadow-lg h-[340px] md:h-[420px]"
            >
              <img
                src={slide.image}
                alt={slide.brand}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 px-5 md:px-6 lg:px-10 py-8 flex flex-col justify-between">
                <h2
                  onClick={() => navigate(`/brand/${slide.brand.toLowerCase()}`)}
                  className="text-white text-left text-xl font-bold cursor-pointer hover:underline hover:text-yellow-300 transition-colors duration-200"
                >
                  {slide.brand}
                </h2>
                <div>
                  <div className="flex flex-col gap-2 items-start">
                    <h2 className="text-white text-4xl font-bold">{slide.growth}</h2>
                    <h3 className="text-white text-lg font-medium uppercase">
                      {slide.growthType}
                    </h3>
                  </div>

                  <div className="border-b border-white my-4"></div>
                  <div className="flex flex-wrap gap-2">
                    {slide.tags.map((tag, i) => (
                      <span
                        key={i}
                        onClick={() => tagRoutes[tag] && navigate(tagRoutes[tag])}
                        className="bg-white text-black text-sm px-4 py-1 rounded-full font-medium transition-colors duration-200 hover:text-[#6754E9] cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-3">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="w-2 h-2 rounded-full transition-all duration-300 bg-gray-300 hover:bg-black"
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
