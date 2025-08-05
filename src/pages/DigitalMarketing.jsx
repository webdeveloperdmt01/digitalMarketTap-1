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

import SocialMediaOptimisationImg from "../assets/digitalMarketingHeroImg.jpg";
import ContentWritingServiceImg2 from "../assets/contentservicemarketing2.png";
import ContentWritingServiceImg3 from "../assets/contentservicemarketing3.png";
import ContentWritingServiceImg4 from "../assets/contentservicemarketing4.png";
import GooglePartner1 from "../assets/google-partner-1.png";
import RocketBlue from "../assets/blueRocket.png";

const faqs = [
  {
    question: " What will you do in social media optimization?",
    answer:
      "Social Media Optimization (SMO) is a process in which we enhance your social media profile and content to prove your social media visibility,engagement, and traffic by optimizing Bio, keyword selection, and improve posting time.",
  },
  {
    question: "How is SMO different from SMM?",
    answer:
      "SMO focuses on organic growth by optimizing profile and content quality. Meanwhile SMM includes paid promotions through campaigns .SMM is a quick way to increase visibility and traffic but if you want an organic way SMO is the best way.",
  },
  {
    question: "What platforms do you optimize for?",
    answer: "We optimize all major platforms, including:",
    answerPoints: [
      "Pinterest",
      "Instagram",
      "LinkedIn",
      "Twitter (X)",
      "YouTube",
      "Facebook",
    ],
  },
  {
    question: "What’s included in your SMO service?",
    answer: " Our SMO services typically include:",
    answerPoints: [
      "Profile setup or optimization",
      "Bio and description refinement",
      "Keyword and hashtag strategy",
      "Visual consistency (logos, banners, etc.)",
      "Content formatting and posting guidance",
      "Engagement strategy and timing optimization",
    ],
  },
];

const services = [
  {
    icon: (
      <FaSearchDollar className="text-2xl text-[#f89e1b] hover:text-black" />
    ),
    title: "Smart Strategies That Deliver Results",
    description:
      "After having more than 8 years in digital marketing, our strategies ensure measurable growth in every niche. From handling your social media to building tailored websites, we handle everything in every niche. We track results and optimize strategies for higher ROI.",
  },
  {
    icon: <FaUserTie className="text-2xl text-[#f89e1b] hover:text-black" />,
    title: "Transparent Reporting & Analytics",
    description:
      "We provide a 100% weekly transparent report of analytics that shows how much better your business is performing after getting our digital marketing service. Also, our latest tools and insights to help you stay ahead in a competitive landscape. We believe in building trust.",
  },
  {
    icon: <FaGoogle className="text-2xl text-[#f89e1b] hover:text-black" />,
    title: "Get Customized Marketing Plans",
    description:
      "We develop personalized marketing strategies that are unique to your business objectives. Our plans aim for maximum ROI, enhancing brand visibility, and achieving specific results through tailored SEO, social media, content, and paid campaigns that actually deliver.",
  },
];

const tabs = [
  {
    title: "1.PPC audit service",
    content: {
      heading: "PPC audit services",
      about:
        "One of the first things we'll do for your business is provide you with a full PPC audit. In the audit, we'll evaluate every significant element of your existing PPC campaign and compile a report of what's working and what isn't. The report will break down every aspect of your PPC strategy and determine what you could improve. In addition, we'll offer recommendations on how to improve them. In fact, if your business has over four employees and spends more than $1000 per month on PPC, you qualify for a free PPC audit! Just get in touch with us to get started.",
    },
  },
  {
    title: "2.Remarketing services",
    content: {
      heading: "Remarketing services",
      about:
        "At Numerique, we specialize in helping you harness the full potential of remarketing, particularly through platforms like Google Ads. With Google Ads, you gain the ability to track the traffic to specific pages on your website and deliver targeted ads to those users who have visited those pages. Our team is dedicated to assisting you in setting up the necessary tracking mechanisms and creating captivating remarketing ads that effectively capture the attention and interest of your target audience.",
    },
  },
  {
    title: "3.Geofencing ad services",
    content: {
      heading: "Geofencing ad services",
      about:
        "Numerique is here to provide you with comprehensive support in harnessing the potential of geofencing, ensuring that your ad campaigns are optimized for maximum impact. Our team of experts will assist you in identifying the ideal outer limits for your geofences and seamlessly integrate them into your Google Ads strategy. Using this information, we will assist in setting up geofences that precisely align with your objectives, reaching the right people at the right time and maximizing the efficiency of your advertising efforts.",
    },
  },
  {
    title: "4.Social media ad services",
    content: {
      heading: "Social media ad services",
      about:
        "While Google Ads is undoubtedly a powerful advertising platform, it's important to recognize that there are various other avenues to effectively display ads and engage with your target audience. Social media platforms, in particular, offer compelling paid advertising options that shouldn't be overlooked. With users spending approximately 28% of their Internet time on social media, these platforms present a fantastic opportunity to connect with your audience.",
    },
  },
];

const DigitalMarketing = () => {
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
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
        <div>
          <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-18">
            Digital Marketing Service
          </h3>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mt-2 leading-tight uppercase">
            {" "}
            Digital Marketing Service
          </h2>
          <h6 className="text-md text-gray-500 mt-5 mb-10 font-light">
            We are the best digital marketing company in Delhi. Our digital
            marketing services include SEO, social media marketing, PPC
            advertising, content marketing, email marketing, and more—all
            focused on driving traffic, generating leads, and increasing sales.
          </h6>
          <NavLink
            to="/free-audit"
            className="font-syne group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">
              GET A FREE AUDIT →
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </span>
          </NavLink>
        </div>
        <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
          <img
            src={SocialMediaOptimisationImg}
            alt="Marketing Visual"
            className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 md:pt-22 lg:pt-42 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-28 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-2 md:mb-6">
            Why Is Digital Marketing Essential for Your Business?
          </h3>
          <h6 className="text-gray-600 text-sm md:text-md max-w-2xl font-light">
            In today's fast-moving digital world, digital marketing services are
            essential for brand visibility and awareness. When making purchases,
            consumers mainly rely on websites, social media, and search engines.
            You benefit from digital marketing:
          </h6>
        </div>
        <div className="border-l-1 border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4 font-syne">
          {[
            "Reach a larger audience",
            "Target the best audience",
            "Increase engagement",
            "Give higher ROI",
            "Stay ahead of competitors",
            "Improve your brand visibility",
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
          digital market tap
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-10 lg:pb-24">
          How Our Digital Marketing Service Improves Your Visibility
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
              Our Core Digital Marketing Services
            </h3>
            <h6 className="text-sm lg:text-[16px] font-light text-[#545e5b] mt-2">
              Our digital marketing service stands out by delivering outstanding
              results specially tailored for your business goals. We integrate
              data-driven insights, creative content, and cutting-edge tools to
              optimize ROI on SEO, PPC, social media, and more. With an emphasis
              on transparency, performance, and innovation, we deliver
              measurable growth and brand visibility. Our expert team stays in
              front of industry trends to create campaigns that attract, engage,
              and convert. From startup to established business, we deliver
              customized solutions that drive your online success. Hire us for
              effective, budget-friendly, and innovative online marketing that
              generates tangible business outcomes. That's why we are the best
              digital marketing company in Delhi, India.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Ready to Boost Your Online Presence?
            </h3>
            <h6 className="text-sm lg:text-[16px] font-light text-[#545e5b] mt-2">
              Get the best digital marketing service in Delhi. Let's make your
              brand digital-ready. Contact us today for a free consultation or
              request a customized digital marketing plan tailored to your
              business goals
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
          What is included in our paid search <br /> marketing services?{" "}
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
              <h6 className="text-gray-600 text-base mb-8 leading-relaxed font-light">
                {tabs[activeTabIndex]?.content.about}
              </h6>
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
                        className="hidden xl:inline-block group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Get A Free Audit <FaArrowRight />
                          <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
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

      <div className="pb-8 pt-8 md:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-3">
          Creating Success
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
          What makes our digital marketing service so effective?
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
            <FaQuoteLeft className="text-orange-400 text-3xl mb-4" />
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
                className="font-syne inline-block text-xs md:text-sm  font-semibold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200 uppercase"
              >
                View all reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-1- md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">
          The proof is in the numbers
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-4">
          How digital marketing services boost your business.
        </h1>
        <div className="w-full">
          <div className="max-w-8xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6 pt-4">
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  98%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#F89E1B] hover:text-black text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                more genuine leads who get our digital marketing service
              </h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  95%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#F89E1B] hover:text-black text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                more social media engagement for those who get our digital
                marketing service.
              </h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  90%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#F89E1B] hover:text-black text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                more business growth for those who got our digital marketing
                service.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-0 relative">
        <section className="bg-[#f8f8fb] rounded-[30px] md:rounded-[60px] py-12 px-4 sm:px-6 md:px-12 overflow-hidden max-w-7xl mx-auto my-12 text-center shadow-sm">
          <img
            src={RocketBlue}
            alt="Custom"
            className="hidden md:block w-14 md:w-18 absolute right-2 md:right-12 -top-8 -rotate-25 z-10"
          />
          <div className="flex justify-center items-center mb-4">
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
            className="font-syne group bg-black text-white mt-6 px-6 sm:px-8 md:px-10 py-3 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-[#F89E1B] transition duration-300 inline-block relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-1">
              GET A PROPOSAL <FaArrowRight />
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </span>
          </NavLink>
        </section>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          FAQs about Digital Marketing <br />
          Services
        </h1>
        <p className="text-center text-md md:text-lg font-base text-gray-500 pb-4">
          Looking to learn more about Social Media Optimization for your
          business? Browse our FAQs
        </p>
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
              <div className="mt-3 text-gray-500 text-md md:text-xl lg:text-lg font-light md:text-md">
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
    </section>
  );
};

export default DigitalMarketing;
