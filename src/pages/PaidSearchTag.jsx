import React from "react";
import { Link } from "react-router-dom";
import ZaraImg from "../assets/ZaraImg.jpg";
import IkeaImg from "../assets/IkeaImg.jpg";
import LaprimaImg from "../assets/LaprimaImg.jpg";
import JolieImg from "../assets/JolieImg.jpg";
// import HommeImg from "../assets/HommeImg.jpg";
import NikoImg from "../assets/NikoImg.jpg";
import MarcPolImg from "../assets/MarcpolImg.jpg";
import KinImg from "../assets/KinImg.jpg";
import BenettonImg from "../assets/Benetton.jpg";
import CosImg from "../assets/cosImg.jpg";

const data = [
  {
    brand: "ZARA",
    image: ZaraImg,
    growth: "+40%",
    growthType: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
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
    brand: "MarcPol",
    image: MarcPolImg,
    growth: "+55%",
    growthType: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
  },
  {
    brand: "KIN",
    image: KinImg,
    growth: "+50%",
    growthType: "Engagement rates",
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

const PaidSearchTag = () => {
  return (
    <div className="font-syne !bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] pt-12 md:pt-18 lg:pt-24 pb-10 px-5 md:px-10 lg:px-15 xl:px-30">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-6 md:mb-12 lg:mb-16">
        Tag: <span className="text-black">Paid Search</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
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
    </div>
  );
};

export default PaidSearchTag;
