import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaChartLine,
  FaQuoteLeft,
  FaStar,
  FaSearchDollar,
  FaUserTie,
  FaGoogle,
} from "react-icons/fa";

import AmazonADImg from "../assets/amazonadBanner1.jpg";
import ContentWritingServiceImg2 from "../assets/contentservicemarketing2.png";
import ContentWritingServiceImg3 from "../assets/contentservicemarketing3.png";
import ContentWritingServiceImg4 from "../assets/contentservicemarketing4.png";
import GooglePartner1 from "../assets/google-partner-1.png";
import RocketBlue from "../assets/blueRocket.png";

const services = [
  {
    icon: <FaSearchDollar className="text-2xl text-[#f89e1b] hover:text-black" />,
    title: "Great for boosting brand awareness",
    description:
      "YouTube has more than 2.7 billion monthly active users. YouTube ads are perfect for brand awareness. You just need an expert ad manager who can manage all these. Our team ensures your ads reach the right people and boost brand awareness.",
  },
  {
    icon: <FaUserTie className="text-2xl text-[#f89e1b] hover:text-black" />,
    title: "Experienced YouTube ad experts",
    description:
      "YouTube ads are very great for brand awareness, but finding a digital marketing agency that can target and handle YouTube or any ads like an expert is a big task. Digital Market Tap should be your one-stop solution for all your digital problems.",
  },
  {
    icon: <FaGoogle className="text-2xl text-[#f89e1b] hover:text-black" />,
    title: "Experts in generating quality leads",
    description:
      "Our team guarantees your ads will reach the appropriate audience, increase brand awareness, and create high-quality leads. If you would like to increase sales, market services, or establish a strong online presence, our expert ads manager will handle it all.",
  },
];


const faqs = [
  {
    question: "Do YouTube Ads work for small businesses?",
    answer:
      "Absolutely! YouTube Ads are budget-friendly and enable small businesses to reach precise audiences, create brand recognition, and drive quality leads.",
  },
  {
    question: "What is the cost of YouTube Ads?",
    answer:
      "YouTube Ads generally operate on a pay-per-view or pay-per-click basis. Prices differ based on targeting, competition, and ad type, but you can begin with as low as ₹100–₹500 per day.",
  },
  {
    question: "Will YouTube Ads drive sales?",
    answer:
      "Indeed. With targeted precision and compelling video content, YouTube Ads have the potential to turn viewers into buyers and massively increase sales.",
  },
  {
    question: "What are the different YouTube Ad options?",
    answer:
      "YouTube has a range of ad formats, such as skippable ads, non-skippable ads, bumper ads, discovery ads, and in-feed ads—each designed for various marketing objectives.",
  },

];


const MetaAd = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Transparency");
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAccordionToggle = (index) => {
    setActiveTabIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      aria-labelledby="seo-heading"
      className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] pt-10 md:pt-18 pb-6 md:pb-8 px-5 md:px-10 lg:px-15 xl:px-30"
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
        <div>
          <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-18">
            Youtube ads
          </h3>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mt-2 leading-tight">
            Youtube ads
          </h2>
          <h6 className="text-lg text-gray-500 mt-5 mb-10 font-light">
            In today's fast-paced world, YouTube has emerged as a powerful platform to capture
            audience attention with 2.7 billion monthly active users and billions of hours of video
            viewed every day. YouTube is no longer simply a video-sharing site; it's a marketing
            powerhouse.


          </h6>
          <NavLink
            to="/free-audit"
            className="group bg-black text-white mt-6 px-6 sm:px-8 md:px-10 py-3 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 inline-block relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-1">
              GET A FREE AUDIT <FaArrowRight />
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </span>
          </NavLink>
        </div>
        <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
          <img
            src={AmazonADImg}
            alt="Marketing Visual"
            className="w-full h-[250px] md:h-[520px] object-cover rounded-[30px] md:rounded-[60px]"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 md:pt-22 lg:pt-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-28 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-black leading-tight mb-2 md:mb-6">
            Why Choose YouTube Ads for Your Business?
          </h3>
          <h6 className="text-gray-500 text-sm md:text-md lg:text-md font-light">
            YouTube Ads aren't about advertising a video; they're about building a strategic
            relationship between your brand and your viewers. Here's why companies are spending
            so much money on YouTube advertising:
          </h6>
        </div>
        <div className="border-l-1 border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4">
          {[
            "Massive reach for your brand",
            "Advanced customer targeting",
            "Cost-Effective Advertising",
            "Multiple Ad Formats",
            "Great for brand awareness",
            "Drive sales & generate leads",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-[#f89e1b] text-2xl mt-0.5" />
              <span className="text-gray-700 text-base md:text-md">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <p className="text-center text-md font-semibold uppercase pb-4">
          DIGITAL MARKET TAP
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-8 lg:pb-24">
          YouTube Ads: A Powerful Marketing Tool for 2025

        </h1>
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15">
          <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <img
              src={ContentWritingServiceImg2}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="pl-2 md:pl-8 lg:pl-20">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              YouTube Ads are not just about promoting a video.
            </h3>
            <h6 className="font-light text-sm lg:text-[16px] font-base text-[#545e5b] mt-2">
              They're about reaching the right individuals at the right time. In 2025, YouTube is the
              most effective platform for businesses to scale. With millions of individuals watching
              every day, your advertisement can increase brand awareness, get new customers, and
              drive sales. The best thing is that YouTube allows you to target your audience by their
              interests, location, and behavior. Whether you're a small business or large brand,
              YouTube Ads provide you with an easy and effective means to reach customers and
              build online. But for that you need a social media expert who can run ads with years of
              experience, and Digital Market Tap is the best digital marketing agency in Delhi.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Why are YouTube ads effective & reliable?
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2 font-light">
              If you want to take your business to another level, get a YouTube Ads service. It's not
              just effective but quite reliable for today's digital world, because YouTube ads reach vast
              audiences, allow precise targeting, and produce massive results.
            </h6>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={ContentWritingServiceImg3}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </div>


      <div className="pb-8 pt-18">
        <p className="text-center text-md font-semibold uppercase pb-3">
          Creating Success
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
          Why Digital Market Tap Should Be Your First Choice for YouTube Ads
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-black flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-left">
                  {service.title}
                </h3>
                <p className="text-md text-[#57595b] text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full pt-8 md:pt-14 lg:pt-24">
        <div className="flex flex-col md:flex-row items-center bg-[#f7f7fa] rounded-[25px] md:rounded-[50px] overflow-hidden">
          <div className="md:w-1/2 px-6 md:px-12 lg:px-18 py-8">
            <FaQuoteLeft className="text-[#f89e1b] text-3xl mb-4" />
            <p className="text-md md:text-xl lg:text-2xl italic mb-6">
              "DMT PPC service is light years ahead of the competition because
              of their intelligent, specialized and courteous account managers."
            </p>
            <div>
              <p className="font-bold uppercase tracking-wide">
                Director of Marketing
              </p>
              <p className="text-gray-600">Zarra Home</p>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <img
              src={ContentWritingServiceImg4}
              alt="Testimonial video"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-white bg-opacity-90 px-6 md:px-8 py-4 md:py-6 rounded-tl-[40px] md:rounded-tl-[60px]">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
                <span className="font-syne font-semibold text-xs md:text-sm mt-1">
                  5000+ Client reviews
                </span>
              </div>
              <a
                href="/about"
                className=" font-syne inline-block text-xs md:text-sm font-bold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200 uppercase"
              >
                View all reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">
          The proof is in the numbers
        </p>
        <h1 className="text-3xl lg:text-5xl text-center font-semibold pb-4">
          Boost in business for those who get email marketing service
        </h1>
        <div className="w-full">
          <div className="max-w-8xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6 pt-4">
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  90%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl hover:text-black" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                boost in sales for those who get our YouTube ads service
              </h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  95%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl hover:text-black" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                boost in brand awareness for those who get our YouTube ads service
              </h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  90%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl hover:text-black" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                boost in traffic for those who get our YouTube ads service
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          FAQs about Youtube
          <br />
          Ads
        </h1>
        <h6 className="text-center text-md md:text-lg font-light text-gray-500 pb-4">
          Looking to learn more about Youtube Ads for your business?
          Browse our FAQs
        </h6>
      </div>
      <div className="max-w-5xl mx-auto pt-8 pb-16 md:pb-22 space-y-2 md:space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-300 pb-2 md:pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full font-syne flex justify-between items-center text-left text-lg md:text-xl font-medium hover:text-[#f89e1b] focus:outline-none pt-5"
            >
              <span className="flex-1">{faq.question}</span>
              <span className="ml-3 flex items-center justify-center">
                {openIndex === index ? (
                  <FaMinus className="text-[18px] text-black" />
                ) : (
                  <FaPlus className="text-[18px] text-[#f89e1b]" />
                )}
              </span>
            </button>

            {openIndex === index && (
              <div className="mt-3 text-gray-500 text-md md:text-xl lg:text-lg font-light md:text-md font-kanit">
                <h6>{faq.answer}</h6>

                {faq.answerPoints && Array.isArray(faq.answerPoints) && (
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    {faq.answerPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative">
        <section className=" bg-[#f8f8fb] rounded-[30px] md:rounded-[60px] py-12 px-4 sm:px-6 md:px-12 overflow-hidden max-w-7xl mx-auto my-12 text-center shadow-sm">
          <div className="flex justify-center items-center mb-4">
            <img
              src={RocketBlue}
              alt="Custom"
              className="hidden md:block w-14 md:w-18 absolute right-2 md:right-12 -top-8 -rotate-25 z-10"
            />
            <img
              src={GooglePartner1}
              alt="Partner Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug text-black px-2 sm:px-0">
            Get started with a Free <br className="hidden md:block" />{" "}
            consultation
          </h2>
          <NavLink
            to="/free-audit"
            className="group bg-black text-white mt-6 px-6 sm:px-8 md:px-10 py-3 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 inline-block relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-1">
              GET A PROPOSAL <FaArrowRight />
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </span>
          </NavLink>
        </section>
      </div>
    </section>
  );
};

export default MetaAd;
