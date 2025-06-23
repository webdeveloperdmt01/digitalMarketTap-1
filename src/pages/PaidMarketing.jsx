import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight  } from "react-icons/fa";
import PaidMarketing1 from '../assets/PaidMarketing1.png'; 
import Brand1 from '../assets/google-partner-1.png'; 
import GoogleAdImg from '../assets/GoogleAds.png'; 
import AmazonAdImg from '../assets/AmazonAds.jpg'; 



const brandLogos = [
  {  id: 1, name: "Brand1", src: Brand1 },
  { id: 2, name: "Brand2", src: Brand1  },
  { id: 3, name: "Brand3", src: Brand1  },
  { id: 4, name: "Brand4", src: Brand1  },
  { id: 5, name: "Brand5", src: Brand1  },
];

const PaidMarketing = () => {
  return (
    <>
    <main className="bg-gradient-to-b from-[#fdf1e7] to-white">
       <div className="pb-4 pl-5 md:pl-10 lg:pl-30">
          <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-20 md:pt-25 lg:pt-48 pr-5 md:pr-0 lg:pr-0">Marketing that instant works</h1>
              <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8 pr-5 md:pr-0 lg:pr-0">
               This lovely niche theme is built and suitable for any business operating in the Digital Marketing industry.
              </p>
              <NavLink
                to="/"
                className="text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#6754E9]"
              >
                GET QUOTE <FaArrowRight />
                <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
              </NavLink>
            </div>
            <div className="flex lg:justify-end">
              <img
                src={PaidMarketing1}
                alt="Marketing Visual"
                className="w-full h-full object-fit"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#f6f6f6] relative py-16">
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        {/* <svg
          className="relative block w-full"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,60 960,0 1440,60 L1440,0 L0,0 Z"
            fill="#fff"
          ></path>
        </svg> */}
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
          Supported by over 5,000 companies
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {brandLogos.map((logo) => (
            <div key={logo.id} className="w-26 h-26 grayscale opacity-70 hover:opacity-100 transition-opacity">
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

       <div className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Here are our Major Paid <br /> Marketing Services
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-6xl mx-auto">
        <div className="bg-[#f5f5f5] p-6 rounded-xl shadow-lg text-left relative w-full md:w-1/2">
          <img
            src={GoogleAdImg}
            alt="Google Ads"
            className="w-24 h-24 absolute -top-12 left-4"
          />
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Google AD's
            </h3>
            <p className="text-gray-600 mb-6">
              Our team has developed an online course on creating and promoting
              a personal brand on social media. The Online Intensive is an
              amazing course for anyone looking to start making money on social
              media.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              KNOW MORE
            </button>
          </div>
        </div>

        <div className="bg-[#f5f5f5] p-6 rounded-xl shadow-lg text-left relative w-full md:w-1/2">
          <img
            src={AmazonAdImg}
            alt="Amazon Ads"
            className="w-24 h-24 absolute -top-12 left-4"
          />
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Amazon AD's
            </h3>
            <p className="text-gray-600 mb-6">
              Our team has developed an online course on creating and promoting
              a personal brand on social media. The Online Intensive is an
              amazing course for anyone looking to start making money on social
              media.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
     </main>
    </>
  );
};

export default PaidMarketing;
