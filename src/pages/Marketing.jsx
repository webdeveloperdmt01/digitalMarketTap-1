import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MarketingImg from "../assets/Marketing1.png";
import MarketingImg2 from "../assets/Marketing2.png";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import BorderBottom from '../assets/border.png';

const Marketing = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: <>Search engine<br />optimization</>,
      content: {
        heading: "Increase your organic traffic by ranking high on search engines and AI discovery tools like ChatGPT",
        features: [
          "Keyword and competitor research",
          "SKAGS (single keyword ad groups)",
          "Negative keyword pruning",
          "Ad copy optimization",
          "Backlink Generation",
        ],
        percentage: "93%",
        percentageNote: "Of customers reported that their online experience begins with search",
      },
    },
    {
      title: <>Paid search <br /> marketing</>,
      content: {
        heading: "Struggling to find PPC experts who drive long term results? Our world-class marketers would love to help your business thrive!",
        features: [
          "Google Ads campaign setup",
          "Budget optimization",
          "A/B testing for ad creatives",
          "Real-time analytics",
          "Landing page alignment",
        ],
        percentage: "82%",
        percentageNote: "Clients saw immediate uplift in lead generation from paid campaigns",
      },
    },
    {
      title: <>Conversion rate <br /> optimization</>,
      content: {
        heading: "Unlock your website’s full potential and boost your revenue with Numerique’s top-notch conversion rate optimization services.",
        features: [
          "User behavior analysis",
          "A/B testing on CTAs",
          "Form optimization",
          "Heatmaps and session recordings",
          "Funnel tracking",
        ],
        percentage: "71%",
        percentageNote: "Improved conversions after optimizing landing pages and forms",
      },
    },
    {
      title: <>Social media <br /> marketing</>,
      content: {
        heading: "Finding the balance between staying current and relying on proven strategies is essential for staying competitive in the ever-changing landscape of marketing.",
        features: [
          "Platform-specific strategy",
          "Post scheduling and automation",
          "Influencer collaboration",
          "Ad targeting by interests",
          "Analytics and sentiment tracking",
        ],
        percentage: "86%",
        percentageNote: "Reported increased brand awareness via targeted social campaigns",
      },
    },
  ];

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <main className="bg-gradient-to-b from-[#fdf1e7] to-white px-5 md:px-10 lg:px-30 relative">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 py-14 items-center">
          <div>
            <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-18">Marketing</h3>
            <h2 className="text-4xl lg:text-6xl font-bold text-black mt-2 leading-tight">
              Marketing Solution in every Platform of Social Media
            </h2>
            <p className="text-md text-black mt-5 mb-10 font-semibold">
              Numerique Marketing is the intersection between creative and performance. Our team delivers the perfect combination of creative and paid media expertise to maximize results.
            </p>
            <NavLink
              to="/free-audit"
              className="group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#6754E9] transition duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">
                GET A FREE AUDIT →
                <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </NavLink>
          </div>

          <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <img
              src={MarketingImg}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>

    
        <section className="max-w-7xl mx-auto py-24">
            <h1 className="text-2xl md:text-4xl lg:text-5xl max-w-4xl mx-auto text-center pb-6 font-semibold">We lead with customer-first strategies:</h1>
            <h6 className="font-light text-md md:text-lg max-w-3xl mx-auto text-center pb-18 text-[#5a5a5a]">Driving growth through personalized experiences for truly end-to-end business building.</h6>
          <div className="hidden lg:flex rounded-[60px] overflow-hidden bg-black">
            <div className="w-1/3 p-12 flex flex-col gap-6 text-white relative">
              {tabs.map((tab, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`!w-[160%] relative cursor-pointer transition-all duration-300 pl-12 pr-16 py-4 text-left text-lg md:text-xl font-medium leading-tight -ml-8
                    ${isActive ? "bg-[#f89e1b] text-white rounded-full z-10" : "text-white hover:text-black hover:bg-white rounded-full z-0"}`}
                  >
                    {tab.title}
                    {isActive && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 transform bg-black text-white rounded-full w-15 h-15 flex items-center justify-center">
                        <FaArrowRight size={18} />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-3/3 bg-[#f7f7fa] py-20 pl-36 pr-16 flex items-center justify-between gap-15 rounded-[60px]">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-6 leading-snug text-left">
                  {tabs[activeIndex]?.content.heading}
                </h2>
                <ul className="space-y-4 text-md text-black">
                  {tabs[activeIndex]?.content.features.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#f89e1b] w-6 h-6" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="text-left mt-8">
                  <a href="#" className="group inline-block text-sm font-semibold relative border-b-2 border-[#fbc371]">
                    LEARN MORE →
                    <span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center bg-white rounded-[30px] p-6">
                <div className="relative w-46 h-46 rounded-full border border-[#ededed] flex items-center justify-center">
                  <div className="relative w-36 h-36 rounded-full border border-[#f89e1b] flex items-center justify-center">
                    <span className="text-4xl font-bold text-black">{tabs[activeIndex]?.content.percentage}</span>
                    <span className="absolute top-[65%] text-[#f89e1b] text-2xl">↑</span>
                  </div>
                </div>
                <p className="text-sm mt-4 max-w-[180px] text-black">
                  {tabs[activeIndex]?.content.percentageNote}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            {tabs.map((tab, index) => {
              const isOpen = activeIndex === index;
              const { heading, features, percentage, percentageNote } = tab.content;

              return (
                <div key={index} className="mb-6 border border-gray-200 rounded-3xl overflow-hidden">
                  <button
                    onClick={() => handleAccordionToggle(index)}
                    className={`w-full flex justify-between items-center px-6 py-4 font-semibold text-left text-white ${
                      isOpen ? "bg-[#f89e1b]" : "bg-black"
                    }`}
                  >
                    <span>{tab.title}</span>
                    <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
                  </button>
                  {isOpen && (
                    <div className="bg-[#f7f7fa] px-6 py-8">
                      <h2 className="text-lg font-semibold mb-4 text-black">{heading}</h2>
                      <ul className="space-y-3 text-sm text-black">
                        {features.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <FaCheckCircle className="text-[#f89e1b]" /> {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 text-left">
                        <a
                          href="#"
                          className="text-sm font-semibold text-orange-500 border-b-2 border-orange-300 hover:border-orange-500"
                        >
                          LEARN MORE →
                        </a>
                      </div>
                      <div className="mt-6 flex flex-col items-center justify-center bg-white rounded-3xl p-4">
                        <div className="relative w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full border-2 border-[#f89e1b] flex items-center justify-center relative">
                            <span className="text-3xl font-bold">{percentage}</span>
                            <span className="absolute top-[65%] text-[#f89e1b] text-xl">↑</span>
                          </div>
                        </div>
                        <p className="text-sm text-black mt-3 text-center max-w-[180px]">{percentageNote}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        {/* <img src={BorderBottom} alt="border-bottom-line" className="w-full absolute bottom-0 right-0 object-contain pt-22 px-5 md:px-10 lg:px-30"/> */}
        </section>

         <div className="pt-8 md:pt-14 lg:pt-24 pb-10">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15">
          <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <img
              src={MarketingImg2}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="pl-2 md:pl-8 lg:pl-20 content-center">
            <h3 className="text-xl md:text-3xl lg:text-5xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">We are committed to your strategy</h3>
            <p className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2"> We are committed to your strategy and intuitively understand how to deliver value in the digital economy. Through the most effective digital marketing options, Renaissance makes it happen seamlessly. Every day, we help brands think big, execute smart and deliver growth. We employ an intelligent digital marketing strategy to consistently unlock value from digital investments in a rapidly advancing world. From simple to the infinitely complex.</p>

          </div>
        </div>
     </div>

      </main>
    </>
  );
};

export default Marketing;
