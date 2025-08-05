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
    title: "Audience-Based Targeting",
    description:
      "We will make sure to target the audience according to your niche. We target shoppers based on their browsing and purchase behavior, so it will increase your chance to get selected. We target high-converting keywords for better return on investment (ROI).",
  },
  {
    icon: <FaUserTie className="text-2xl text-[#f89e1b] hover:text-black" />,
    title: "Increase Brand Awareness",
    description:
      "These ads get visible beyond Amazon, like in search results, customer review sections, third-party websites, and apps. These ads appear in different placements and on multiple devices; shoppers repeatedly see your logo, products, and brand name, building familiarity and trust.",
  },
  {
    icon: <FaGoogle className="text-2xl text-[#f89e1b] hover:text-black" />,
    title: "Ads Expert",
    description:
      "Amazon Ads are quite effective, especially when someone experienced is handling them. We have over 8 years of experience in digital marketing, and we have worked on over 80,000+ projects in every niche. Our experienced ad expert makes sure to deliver 4x ROI.",
  },
];

const tabs = [
  {
    title: "Sponsor product",
    content: {
      heading: "Sponsor product",
      about:
        "Sponsor products are Amazon Ads that only promote individual product listings on Amazon. These ads appear in search results and on product page results, making it easier to get noticed and increasing your chance to get purchased by customers. It increases product visibility, improves organic ranking, and boosts sales",
    },
  },
  {
    title: "Sponsor brand",
    content: {
      heading: "Sponsor brand",
      about:
        "Sponsored Brands is an Amazon PPC ad type that exists to push your brand name as opposed to the name of a specific product. Sponsored Brands show up on top of Amazon search pages with your brand logo, your own headline, and several products from your inventory. In this you can display multiple products at a time. Great for building trust and credibility.",
    },
  },
  {
    title: "Sponsor display",
    content: {
      heading: "Sponsor display",
      about:
        "Sponsored Display Ads are Amazon PPC ads that enable sellers to find shoppers on and off Amazon. Sponsored Display Ads are visible on Amazon product detail pages and customer review pages, as well as on third-party websites or apps. In this we can retarget shoppers who viewed but didn’t purchase and improve brand visibility on multiple platforms.",
    },
  },
];

const AmazonAD = () => {
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
            Amazon ads
          </h3>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mt-2 leading-tight">
            Amazon Ads
          </h2>
          <h6 className="text-lg text-gray-500 mt-5 mb-10 font-light">
            Boost your sales with targeted Amazon Ads. Reach the right
            customers, increase product visibility, and maximize ROI with
            data-driven campaigns designed to put your products ahead of the
            competition.
          </h6>
          <NavLink
            to="/free-audit"
            className="group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">
              GET A FREE AUDIT →
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
          <h3 className="text-2xl md:text-5xl font-semibold text-black leading-tight mb-2 md:mb-6">
            Why amazon ads is beneficial
          </h3>
          <h6 className="text-gray-500 text-sm md:text-md lg:text-md font-light">
            Reaching highly targeted customers who are already looking for
            comparable products is made easier for businesses via Amazon Ads.
            Amazon ads are very beneficial because. :
          </h6>
        </div>
        <div className="border-l-1 border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4">
          {[
            "Highly Targeted customers",
            "Largest e-commerce platform",
            "Cost effective advertisement",
            "High traffic & visibility",
            "High boost in sales",
            "Improves brand recognition",
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
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-10 lg:pb-24">
          Why Choose Digital Market Tap for Amazon Ads Management?
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
              Experienced Amazon PPC specialists
            </h3>
            <h6 className="font-light text-sm lg:text-[16px] font-base text-[#545e5b] mt-2">
              We are the best digital marketing agency in Delhi, and we have
              over 8 years of experience in this field. We have experienced
              Amazon PPC (pay-per-click) specialists, who will make sure to
              deliver measurable ROI through data-driven campaigns. We create
              customized strategies for your product according to your niche,
              and through regular optimization, it will ACOS (advertising cost
              of sale), which makes it affordable. <br /> <br /> We charge a
              100% transparent fee without any hidden charge to maintain
              transparency, and we provide a weekly transparent report and
              ROI-driven approach. Our primary focus is to guarantee that each
              rupee you spend on advertising delivers maximum return. We put
              together data analysis and tried approaches to make powerful
              campaigns that increase your Amazon sales.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Grow Your Amazon Business with Us
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2 font-light">
              While Amazon is among the best platforms for business growth for
              sellers, it is sometimes hard to gain the right clients without
              proper advertising. With Digital Market Tap, it is easier to
              operate successful Amazon PPC campaigns that increase visibility,
              increase rankings, and increase conversions. <br /> <br />
              To start your Amazon Ads journey and boost sales, contact us now!
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

      <div className="pb-4 pt-2 md:pt-8 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">
          what you get
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          What is included in our Amazon Ads services?{" "}
        </h1>
        <p className="text-center text-md font-base text-gray-500 pb-4">
          When you partner with Numerique, you'll gain access to our full range
          of paid SEM services. These services are designed to <br /> optimize
          every facet of your paid advertising, including:
        </p>
      </div>

      <div className="max-w-7xl mx-auto pt-8 md:pt-12 px-0 md:px-4">
        <div className="hidden lg:flex rounded-[60px] overflow-hidden bg-black">
          <div className="w-1/3 p-12 flex flex-col gap-6 text-white relative">
            {tabs.map((tab, index) => {
              const isActive = index === activeTabIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveTabIndex(index)}
                  className={`font-syne !w-[160%] relative cursor-pointer transition-all duration-300 pl-6 pr-16 py-5 text-left text-lg md:text-xl font-medium leading-tight -ml-8
            ${
              isActive
                ? "bg-[#f89e1b] text-white rounded-full z-10"
                : "text-white hover:text-black hover:bg-white rounded-full z-0"
            }`}
                >
                  {tab.title}
                  {isActive && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 transform bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <FaArrowRight size={18} />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="w-3/3 bg-[#f7f7fa] py-20 pl-38 pr-22 flex items-center rounded-[60px]">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 leading-snug text-left text-black">
                {tabs[activeTabIndex]?.content.heading}
              </h2>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                {tabs[activeTabIndex]?.content.about}
              </p>
              <div className="text-left">
                <NavLink
                  to="/free-audit"
                  className="font-syne hidden xl:inline-block group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get A Free Audit <FaArrowRight />
                    <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          {tabs.map((tab, index) => {
            const isOpen = activeTabIndex === index;
            const { heading, about } = tab.content;

            return (
              <div
                key={index}
                className="mb-6 border border-gray-200 rounded-3xl overflow-hidden"
              >
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
                    <h2 className="text-2xl font-bold mb-4 text-black">
                      {heading}
                    </h2>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {about}
                    </p>
                    <div className="text-left">
                      <NavLink
                        to="/free-audit"
                        className="font-syne hidden xl:inline-block group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Get A Free Audit <FaArrowRight />
                          <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="pb-8 pt-18">
        <p className="text-center text-md font-semibold uppercase pb-3">
          Creating Success
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
          What makes our Amazon Ads <br /> services so effective?
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

            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-white bg-opacity-90 px-8 py-6 rounded-tl-[40px] md:rounded-tl-[60px]">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
                <span className="font-syne font-semibold text-sm mt-1">
                  5000+ Client reviews
                </span>
              </div>
              <a
                href="/about"
                className=" font-syne inline-block text-sm font-bold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200 uppercase"
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
          Amazon Ads Services—Boost Sales <br /> with Expert PPC Campaigns{" "}
        </h1>
        <div className="w-full">
          <div className="max-w-8xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6 pt-4">
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  80%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl hover:text-black" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                more brand visibility for those who get our Amazon Ads service
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
                more sales for those who get our Amazon Ads service
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
                more brand awareness for those who got our Amazon Ads service
              </h6>
            </div>
          </div>
        </div>
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

export default AmazonAD;
