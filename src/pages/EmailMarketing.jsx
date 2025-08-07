import React, { useState } from "react";
import {
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaSearchDollar,
  FaUserTie,
  FaGoogle,
  FaQuoteLeft,
  FaStar,
  FaChartLine,
} from "react-icons/fa";
import EmailMarketingImg from "../assets/email-mkt.jpg";
import SeoImg from "../assets/seoimg.png";
import SeoGoogleExperts from "../assets/SeoGoogleExperts.jpg";
import womanTalking from "../assets/womanTaking-Seo.jpg";
import { NavLink } from "react-router-dom";
import RocketBlue from "../assets/blueRocket.png";
import GooglePartner1 from "../assets/google-partner-1.png";

const faqs = [
  {
    question: "How often should I send emails?",
    answer:
      "It depends on your audience and business type or how often you want to create brand visibility (before any sale, new launch update, any big new update, etc.).",
  },
  {
    question: "What are common mistakes to avoid in email marketing?",
    answer:
      "Oversending of email without any value, as it gets counted as spammy, can affect your brand negatively. Avoiding mobile optimization.",
  },
  {
    question: "Do you provide email marketing service?",
    answer:
      "Yes, we provide all the digital marketing services under every niche, so if you want help in any service, you can contact us or visit us.",
  },
];

const services = [
  {
    icon: (
      <FaSearchDollar className="text-[#f89e1b] text-2xl hover:text-[#000]" />
    ),
    title: "Higher Sales & Conversions",
    description:
      "Email marketing is a very powerful yet affordable marketing strategy for businesses, and with the help of the latest powerful AI and our strategy, we always deliver high sales and conversions through our marketing service. That's why we are the best digital marketing agency in Delhi.",
  },
  {
    icon: <FaUserTie className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "Higher return on investment",
    description:
      "Email marketing is a very affordable marketing service for your business visibility. By sending emails to thousands of subscribers with minimal effort, increase your brand visibility and also increase your chances of getting picked, and it's actually more cost-effective than other marketing services.",
  },
  {
    icon: <FaGoogle className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "Increased Brand Awareness",
    description:
      "In email marketing we send thousands of emails at a time, which makes it more powerful than other marketing services. In a few minutes your email will get delivered to thousands of subscribers. It's actually great for quick brand awareness and great for your brand's digital visibility",
  },
];

const EmailMarketing = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Transparency");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="seo-heading"
      className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] pt-10 md:pt-18 pb-6 md:pb-8 px-5 md:px-10 lg:px-15 xl:px-30"
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
        <div>
          <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-14">
            Email marketing
          </h3>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mt-2 leading-tight">
            Email marketing
          </h2>
          <h6 className="text-md md:text-lg text-gray-500 mt-5 mb-10 font-light">
            Email marketing isn't about broadcasting promotional messages; it's
            about relationship-building, educating your audience, and keeping
            them top-of-mind. Whether you're a startup or an eCommerce business,
            email allows you to speak with your audience.
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
            src={EmailMarketingImg}
            alt="Marketing Visual"
            className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 md:pt-18 lg:pt-38 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-28 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-2 md:mb-6">
            Why Email Marketing Is Important for Your Business
          </h3>
          <h6 className="text-gray-600 text-sm md:text-md max-w-2xl font-light">
            Email marketing is one of the most powerful and cost-effective
            digital marketing strategies used by business owners to build
            relationships with their audience. Key benefits of email marketing
            are.:
          </h6>
        </div>
        <div className="font-syne border-l-1 border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4">
          {[
            "Very cost effective",
            "High targeting audience",
            "Drives high traffic",
            "Builds Customer Loyalty",
            "High audience engagement",
            "Great for brand awareness",
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
          Digital Market tap
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-10 lg:pb-24">
          What is email marketing? A Complete Guide for 2025
        </h1>
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15">
          <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <img
              src={SeoImg}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="pl-2 md:pl-8 lg:pl-20">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Connect with the audience without distraction.
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2 font-light">
              Email marketing allows you to connect with your audience directly
              without any interruptions. In 2025 here AI is taking over
              everything; email marketing is still very powerful and always
              delivers returns on investment (ROI). Email marketing is the act
              of sending targeted mail to a list of subscribers with the aim of
              selling products or services or establishing customer
              relationships. It's not just sending promotional emails. It's
              about sending value at the right moment to your audience. We all
              understand how powerful email marketing is, and having an expert
              digital marketing agency for managing all this is most important,
              and we provide the best digital marketing service in Delhi, India.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Why is email marketing reliable & effective?
            </h3>
            <h6 className="text-sm lg:text-[16px] font-light text-[#545e5b] mt-2">
              Email marketing is still one of the most effective and trusty
              tools for digital marketers in 2025. Given the right strategy,
              tailor-made content, and regular campaigns, you can foster
              relationships, drive sales, and develop a loyal following.
            </h6>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={SeoGoogleExperts}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </div>

      <div className="py-8">
        <p className="text-center text-md font-semibold uppercase pb-3">
          Creating Success
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
          Why choose Digital Market Tap for email marketing?
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

      <div className="pb-4 pt-2 md:pt-8 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">
          what you get
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          What is included in our paid search <br /> marketing services?{" "}
        </h1>
        <p className="text-center text-md font-base text-gray-500 pb-4">
          When you partner with Numerique, you’ll gain access to our full range
          of paid SEM services. These services are designed to <br /> optimize
          every facet of your paid advertising, including:
        </p>
      </div>

      <div className="w-full pt-8 md:pt-14 lg:pt-24">
        <div className="flex flex-col md:flex-row items-center bg-[#f7f7fa] rounded-[25px] md:rounded-[50px] overflow-hidden">
          <div className="md:w-1/2 px-6 md:px-12 lg:px-18 py-8">
            <FaQuoteLeft className="text-orange-400 text-3xl mb-4" />
            <p className="text-md md:text-xl lg:text-2xl italic mb-6">
              “DMT PPC service is light years ahead of the competition because
              of their intelligent, specialized and courteous account managers.”
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
              src={womanTalking}
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
                className="font-syne inline-block text-xs lg:text-sm font-bold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200 uppercase"
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
          Boost in business for those who get email marketing service{" "}
        </h1>
        <div className="w-full">
          <div className="max-w-8xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6 pt-4">
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  90%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                growth in brand awareness for those who got our email marketing
                service.
              </h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  95%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                growth in leads who got our email marketing service
              </h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  90%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                growth in brand visibility for those who got our email marketing
                service.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          FAQs about email <br /> marketing
        </h1>
        <p className="text-center text-md font-base text-gray-500 pb-4">
          Looking to learn more about email marketing for your business?
          Browse our FAQs
        </p>
      </div>
      <div className="max-w-5xl mx-auto pt-8 space-y-2 md:space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-300 pb-2 md:pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left font-bold text-sm md:text-lg lg:text-xl md:font-medium hover:text-[#f89e1b] focus:outline-none pt-5"
            >
              {faq.question}
              {openIndex === index ? (
                <FaMinus className="text-[#000000]" />
              ) : (
                <FaPlus className="text-[#f89e1b]" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-500 text-xs font-semibold md:text-md">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="p-5 md:p-0 relative">
        <section className="bg-[#f8f8fb] rounded-[30px] md:rounded-[60px] py-12 px-4 sm:px-6 md:px-12 overflow-hidden max-w-7xl mx-auto my-12 text-center shadow-sm">
          <img
            src={RocketBlue}
            alt="Custom"
            className="hidden md:block w-14 md:w-18 absolute right-2 md:right-12 -top-8 -rotate-30 origin-top z-10"
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
            className="font-syne group bg-black text-white mt-6 px-6 sm:px-8 md:px-10 py-3 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 inline-block relative overflow-hidden"
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

export default EmailMarketing;
