import React, { useState } from 'react';
import TransparencyImage from '../assets/Stats.png';
import TeamOfExpertsImage from '../assets/Stats2.png';
import ResultsImage from '../assets/peopleDiscussOnTopic.png';

const contentData = {
  Transparency: {
    title: "100% Campaign transparency",
    description:
      "We cultivate an environment of transparency and communication in all we do. You don’t have to wonder what is going on with your campaign – we will keep you in the loop and in control.",
    image: TransparencyImage,
  },
  "Team of Experts": {
    title: "Team of Marketing Experts",
    description:
      "Our seasoned professionals bring years of industry experience and proven track records. From SEO wizards to social media strategists, our team is built to elevate your brand.",
    image: TeamOfExpertsImage,
  },
  Results: {
    title: "Results that Matter",
    description:
      "Our strategies drive measurable results. From traffic growth to conversion rates, we provide clear ROI on every campaign.",
    image: ResultsImage,
  },
};

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState("Transparency");

  return (
   <div className="px-6 md:px-10 lg:px-30 py-8 md:py-16 bg-white w-full">
  <div className="flex justify-start mb-4 md:mb-8">
    <div className="inline-flex rounded-full p-2 md:p-1">
      {Object.keys(contentData).map((tab, idx) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-xs md:text-base font-semibold px-3 py-1 md:px-5 md:py-2 transition-all duration-200 rounded-full ${
            activeTab === tab
              ? 'bg-black text-white'
              : 'text-black/60 hover:text-orange-500'
          }`}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-32 items-start">
    <div className="bg-[#ffdfbe] py-4 px-2 md:py-10 md:px-8 rounded-3xl w-full order-1 md:order-1">
      <h2 className="text-xl md:text-2xl font-bold mb-2">{contentData[activeTab].title}</h2>
      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
        {contentData[activeTab].description}
      </p>

      <div className="bg-white rounded-xl">
        <img
          src={contentData[activeTab].image}
          alt={`${activeTab} chart`}
          className="w-full rounded-lg"
        />
      </div>
    </div>
    <div className="max-w-xl order-2 md:order-2">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-3 md:mb-6 text-left">
       
Discover Why Digital Market Tap is the Right Partner for You
      </h2>
      <p className="text-gray-700 text-sm md:text-base mb-6 text-left">
       We are the best digital marketing agency delivering tailored strategies, transparent communication, and expert solutions that drive growth, increase brand visibility, and maximise ROI through Social Media Marketing, SEO and Paid Ads – Helping your business succeed in today’s competitive digital World.
      </p>

      <div className="flex justify-start">
        <button className="group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden">
          <span className="relative z-10">
            Get Proposal →
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
