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
    title: "Build Brand Authority",
    description:
      "If you share knowledge-driven ads, it builds trust and positions your brand in view of professionals, who are more likely to turn into future clients. By creating credibility and attracting a professional audience, you can be an expert in your field. So make your brand stand out from others.",
  },
  {
    icon: <FaUserTie className="text-2xl text-[#f89e1b] hover:text-black" />,
    title: "Achieve higher ROI.",
    description:
      "LinkedIn ads provide high ROI. By focusing on precise targeting and by creating engaging ads, you can achieve higher ROI. But for that you need an expert digital marketing agency that has years of experience in this field, and we are the best digital marketing agency in Delhi.",
  },
  {
    icon: <FaGoogle className="text-2xl text-[#f89e1b] hover:text-black" />,
    title: "High-Quality Leads",
    description:
      "With the help of LinkedIn ads, you can get high-quality leads. Unlike random clicks from random platforms, LinkedIn Ads' advanced targeting helps you to get connected with the right audience, who are likely to be your loyal customers, and also helps to build brand authority in your niche.",
  },
];


const faqs = [
  {
    question: "Do LinkedIn Ads work for B2B marketing?",
    answer:
      "Yes, LinkedIn Ads are very effective for B2B marketing since they target professionals, decision-makers, and business leaders directly.",
  },
  {
    question: "How expensive are LinkedIn Ads?",
    answer:
      "LinkedIn Ads operate on a CPC (cost-per-click) or CPM (cost-per-impression) model. Although they are a bit more expensive than other mediums, they generate higher-quality leads and ROI.",
  },
  {
    question: "What kinds of LinkedIn Ads are there?",
    answer:
      "Popular formats are sponsored content, text ads, video ads, carousel ads, and message ads. Each of these has varying business objectives, such as awareness, engagement, or lead generation.",
  },
 {
    question: "Can LinkedIn Ads produce quality leads?",
    answer:
      "Yes. LinkedIn Ads pinpoint users by job title, industry, skills, and location, allowing you to connect with applicable and interested professionals.",
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
            linkedin ads
          </h3>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mt-2 leading-tight">
            Linkedin Ads
          </h2>
          <h6 className="text-lg text-gray-500 mt-5 mb-10 font-light">
            While sites such as Facebook and Instagram are great for wide targeting, LinkedIn is
            the strongest professional network for B2B marketing. With more than 1 billion active
            users globally, LinkedIn has become a platform of decision-makers, professionals, and
            business leaders.
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
            Why Should You Choose LinkedIn Advertising?
          </h3>
          <h6 className="text-gray-500 text-sm md:text-md lg:text-md font-light">
            LinkedIn ads are paid advertisements run across LinkedIn platforms. These ads help
            businesses to promote services, products, and upcoming events. Here are some
            reasons that make LinkedIn ads so effective:
          </h6>
        </div>
        <div className="border-l-1 border-gray-300 pl-4 md:pl-12 lg:pl-26 space-y-4">
          {[
            "High-quality leads",
            "Provide Measurable Results",
            "Perfect for Brand Authority",
            "Great for Precise Targeting",
            "Promote services and products",
            "Best for businesses selling services",
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
          Benefits of LinkedIn Advertising for Businesses
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
              Best Practices for LinkedIn Ads in 2025
            </h3>
            <h6 className="font-light text-sm lg:text-[16px] font-base text-[#545e5b] mt-2">
              LinkedIn Ads enable companies to reach professionals, decision-makers, and industry
              specialists directly. They drive high-quality leads, establish credibility for brands, and
              provide job title, industry, and skill-based precise targeting. LinkedIn advertising, unlike
              other platforms, targets a professional audience, making it perfect for B2B marketing,
              sales expansion, and long-term client relationship building. And if you're looking for the
              best digital marketing agency in Delhi, contact us now because, to be successful with
              LinkedIn Ads in 2025, establish definitive goals, leverage advanced targeting, and post
              compelling content optimized for your audience. Engage video and carousel ads for
              more interaction. Optimize landing pages, employ LinkedIn Lead Gen Forms, and
              frequently A/B test campaigns. Constant monitoring guarantees maximum ROI and
              lasting growth.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Why Businesses in 2025 Can’t Ignore LinkedIn Ads
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2 font-light">
              With growing AI-based marketing and more online competition, companies require
              platforms that deliver precision with impact. LinkedIn has emerged as one of the most
              reliable platforms for connecting with serious buyers and industry influencers
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


      <div className="pb-8 pt-12 md:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-3">
          Creating Success
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
       Benefits of Using LinkedIn Ads for Your Business
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
            <p className="text-md md:text-lg lg:text-2xl italic mb-6">
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
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-4">
      How can LinkedIn ads boost your business so effectively?
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
            more brand authority for those who get our LinkedIn ads service
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
              boost in sales for those who get our LinkedIn ads service
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
              boost in quality leads who get our LinkedIn ads service
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          FAQs about Linkedin
          <br />
          Ads
        </h1>
        <h6 className="text-center text-md md:text-lg font-light text-gray-500 pb-4">
          Looking to learn more about Linkedin Ads for your business?
          Browse our FAQs
        </h6>
      </div>
      <div className="max-w-5xl mx-auto pt-8 pb-8 md:pb-12 xl:pb-22 space-y-2 md:space-y-4">
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
