import React, { useState } from "react";
import TransparencyImage from "../assets/Stats.png";
import TeamOfExpertsImage from "../assets/Stats2.png";
import ResultsImage from "../assets/peopleDiscussOnTopic.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const contentData = {
  Transparency: {
    // title: "100% Campaign transparency",
    title: (
        <>
         100% Campaign <br /> transparency
        </>
      ),
    description:
      "We believe in 100% transparency, that’s why we don’t charge any hidden fees, and we'll be accountable to our clients, because we believe in honesty and building trust, we are known for our honesty and delivering high-end results yet at an affordable price.",
    image: TransparencyImage,
  },
  "Team of Experts": {
    title: "Highly trained expert team",
    description:
      "Our team consists of highly trained, experienced and dedicated expert members who try their level best to deliver real results which satisfy your needs. We ensure that you get personalized support.",
    image: TeamOfExpertsImage,
  },
  Results: {
    title: "Choose a partner who delivers result",
    description:
      "We focus on delivering measurable results; improve your business goals which satisfy your needs. That's why we can proudly say we are The Best Digital Marketing Agency in Delhi.",
    image: ResultsImage,
  },
};

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState("Transparency");
  const navigate = useNavigate();

  return (
    <div className="px-5 md:px-10 lg:px-15 xl:px-30 pt-8 md:pt-16 pb-12 md:pb-24 w-full">
      <div className="flex justify-start">
        <div className="inline-flex rounded-full">
          {Object.keys(contentData).map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-syne text-xs md:text-base font-semibold infoTabsPadding transition-all duration-200 rounded-t-[15px] md:rounded-t-[25px] lg:rounded-t-[30px] ${
                activeTab === tab
                  ? "bg-[#ffdfbe]"
                  : "text-black"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-30 items-start">
        <div className="bg-[#ffdfbe] py-4 px-2 md:pt-10 md:pb-14 md:px-8 rounded-b-3xl w-full order-1 md:order-1">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-8 text-left">
            {contentData[activeTab].title}
          </h2>
          <h6 className="text-gray-700 mb-4 text-xs md:text-sm lg:text-base leading-relaxed text-left font-light">
            {contentData[activeTab].description}
          </h6>

          <div className="rounded-[20px]">
            <img
              src={contentData[activeTab].image}
              alt={`${activeTab} chart`}
              className="w-full"
            />
          </div>
        </div>
        <div className="max-w-xl order-2 md:order-2">
          <h2 className="text-2xl md:text-3xl lg:text-[44px] font-bold leading-tight mb-5 md:mb-6 text-left">
            How we became The Best Digital Marketing Agency in Delhi.
          </h2>
          <h6 className="text-gray-700 text-sm md:text-base mb-8 md:mb-6 text-left font-light">
            Our latest marketing strategies made us the best digital marketing
            agency in Delhi by delivering the most reliable services like SEO
            service, Paid ads, website design & development, and social media
            services across Delhi. We first analyze your issues and then provide
            services accordingly. We provide personalized service according to
            your needs.
          </h6>

          <div className="flex justify-start">
            <button
              onClick={() => navigate("/about-us")}
              className="font-syne group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
               ABOUT US
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTabs;
