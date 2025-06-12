import React, { useState } from "react";
import redFrok from "../assets/redm frok.jpg";
import pinkKurti from "../assets/pink kurti.jpg";

const slides = [
  {
    brand: "ZARA",
    image: redFrok,
    imageHover: pinkKurti,
    stat: "+40%",
    description: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
  },
  {
    brand: "Homme",
    image: pinkKurti,
    imageHover: redFrok,
    stat: "+50%",
    description: "Engagement rates",
    tags: ["Organic Social Media", "Paid Social"],
  },
  {
    brand: "Trendy",
    image: redFrok,
    imageHover: pinkKurti,
    stat: "+30%",
    description: "Conversion boost",
    tags: ["Email", "SMS"],
  },
  {
    brand: "Stylez",
    image: pinkKurti,
    imageHover: redFrok,
    stat: "+70%",
    description: "Customer growth",
    tags: ["Affiliate", "Influencer"],
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);
  const [showAltImage, setShowAltImage] = useState(false);

  const slidesPerView = 2;
  const totalGroups = Math.ceil(slides.length / slidesPerView);
  const visibleSlides = slides.slice(current, current + slidesPerView);

  const handleDotClick = (index) => {
    setCurrent(index * slidesPerView);
    setShowAltImage((prev) => !prev);
  };

  return (
    <div className="w-full px-5 md:px-10 lg:px-30 py-10 lg:py-24 bg-white flex flex-col lg:flex-row items-start gap-12">
      <div className="w-full lg:w-1/3 flex flex-col justify-start">
        <h4 className="text-sm text-left font-semibold uppercase text-black tracking-wide">
          SUCCESS STORIES
        </h4>
        <h2 className="text-left text-[38px] md:text-[54px] font-semibold leading-[1.1] text-black mt-6 md:mt-16 tracking-tight">
          Our work drives <br /> businesses forward
        </h2>
        <button className="mt-6 md:mt-16 text-md font-semibold text-black border-b-3 border-orange-500 hover:opacity-80 w-fit">
          VIEW ALL
        </button>
      </div>
      <div className="w-full lg:w-2/3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleSlides.map((slide, idx) => {
            const imgSrc = showAltImage ? slide.imageHover : slide.image;
            return (
              <div
                key={idx}
                className="rounded-[60px] overflow-hidden relative h-[420px] bg-black"
              >
                <div className="text-left absolute top-0 left-0 right-0 z-10 bg-opacity-50 text-orange-500 text-lg font-semibold px-6 py-4">
                  {slide.brand}
                </div>

                <img
                  src={imgSrc}
                  alt={slide.brand}
                  className="object-fit transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
                  <span className="text-white text-4xl font-bold mt-2 block">{slide.stat}</span>
                  <span className="text-white text-xl font-medium mt-1 block">{slide.description}</span>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {slide.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-white text-black text-sm px-5 py-1 rounded-full font-medium transition-colors duration-300 hover:text-[#8E81FA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-6 gap-3">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index * slidesPerView ? "bg-black scale-110" : "bg-gray-300"
              }`}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
