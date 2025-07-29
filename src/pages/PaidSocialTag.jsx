import React, { useState } from "react";
import { Link } from "react-router-dom";

import ZaraImg from "../assets/ZaraImg.jpg";
import IkeaImg from "../assets/IkeaImg.jpg";
import LaprimaImg from "../assets/LaprimaImg.jpg";
import JolieImg from "../assets/JolieImg.jpg";
import HommeImg from "../assets/HommeImg.jpg";
import NikoImg from "../assets/NikoImg.jpg";
import MarcPolImg from "../assets/MarcpolImg.jpg";
import BenettonImg from "../assets/Benetton.jpg";
import CosImg from "../assets/cosImg.jpg";
import SubwayImg from "../assets/SubwayImg.jpg";
import NestlleImg from "../assets/NestlleImg.jpg";

const data = [
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
    growthType: "Еngagement rates",
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
  {
    brand: "Subway",
    image: SubwayImg,
    growth: "+50%",
    growthType: "Increase in organic sessions",
    tags: ["Organic Social Media", "Paid Social"],
  },
  {
    brand: "Jolie",
    image: JolieImg,
    growth: "+40%",
    growthType: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
  },
  {
    brand: "NIKO",
    image: NikoImg,
    growth: "+40%",
    growthType: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
  },
  {
    brand: "Nestlle",
    image: NestlleImg,
    growth: "+50%",
    growthType: "Increase in organic transactions",
    tags: ["Organic Social Media", "Paid Social"],
  },
  {
    brand: "MarcPol",
    image: MarcPolImg,
    growth: "+55%",
    growthType: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
  },
  {
    brand: "Benetton",
    image: BenettonImg,
    growth: "+45%",
    growthType: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO", "Organic Social Media"],
  },
  {
    brand: "Cos",
    image: CosImg,
    growth: "+50%",
    growthType: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
  },
];

const PaidSocialTag = () => {
  const [visibleItems, setVisibleItems] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleItems(data.length);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="font-syne !bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] pt-12 md:pt-18 lg:pt-24 pb-10 px-5 md:px-10 lg:px-30">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-6 md:mb-12 lg:mb-16">
        Tag: <span className="text-black">Paid Social</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.slice(0, visibleItems).map((item, index) => (
          <div
            key={index}
            className={`relative rounded-[35px] md:rounded-[50px] overflow-hidden shadow-lg w-full h-[340px] md:h-[420px] ${
              index % 3 === 1 ? "lg:mt-16" : ""
            }`}
          >
            <div className="w-full h-full">
              <img
                src={item.image}
                alt={item.brand}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-black/50 px-5 md:px-6 lg:px-10 py-8 flex flex-col justify-between">
              <Link
                to={`/brand/${item.brand.toLowerCase()}`}
                className="text-white text-xl font-bold hover:underline hover:text-yellow-300 transition-colors duration-200"
              >
                {item.brand}
              </Link>

              <div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-white text-4xl font-bold">{item.growth}</h2>
                  <h3 className="text-white text-lg font-medium uppercase">
                    {item.growthType}
                  </h3>
                </div>

                <div>
                  <div className="border-b border-white my-4"></div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <Link
                        key={idx}
                        to={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                        className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 hover:text-[#6754E9]"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < data.length && (
        <div className="mt-10 text-center">
          {loading ? (
            <div className="flex justify-center">
              <div className="w-10 h-10 border-4 border-t-transparent border-[#6754E9] rounded-full animate-spin"></div>
            </div>
          ) : (
        <h4 onClick={handleLoadMore} className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 ease-in-out rounded-2xl group bg-gradient-to-r from-[#6754E9] to-[#3A27C9] shadow-md hover:shadow-2xl hover:scale-105">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-[#1a1a1a] to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Load More</span>
         </h4>

          )}
        </div>
      )}
    </div>
  );
};

export default PaidSocialTag;
