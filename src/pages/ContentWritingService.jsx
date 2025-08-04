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

import ContentWritingServiceImg from "../assets/contentservicemarketing.png";
import ContentWritingServiceImg2 from "../assets/contentservicemarketing2.png";
import ContentWritingServiceImg3 from "../assets/contentservicemarketing3.png";
import ContentWritingServiceImg4 from "../assets/contentservicemarketing4.png";
import GooglePartner1 from "../assets/google-partner-1.png";
import RocketBlue from "../assets/blueRocket.png";

const faqs = [
  {
    question: "What is paid search?",
    answer:
      "Paid search is a digital marketing strategy that involves online ads that appear at the top of search engine results pages (SERPs). Paid search ads typically look similar to organic search listings but have a label that distinguishes them as ads.",
  },
  {
    question: "What are paid search management services?",
    answer:
      "With paid search management services, you can expect a dedicated team of experts who will meticulously review and analyze your campaigns, ensuring that they align with your business objectives. Through continuous optimization, they will fine-tune your advertisements to maximize their effectiveness, reaching the right audience at the right time.",
  },
  {
    question: "How does paid search work?",
    answer:
      "When it comes to paid search ads, Google Ads serves as a prime example of how the process works. Google Ads allows advertisers to bid on specific keywords they want their ads to appear for. When a user conducts a search on Google, the platform uses various factors such as keywords, ad settings, bids, and ad quality score to determine which ads to display.",
  },
  {
    question: "When should you use paid search?",
    answer:
      "Paid search can indeed be a valuable addition to your marketing strategy for several reasons: Audience Research, Precise Targeting, Quick Results, Bottom-of-the-Funnel Leads, Supplementing Organic Search Results. By leveraging the advantages of paid search, businesses can effectively target their audience, generate qualified leads, achieve faster results, and enhance their overall online visibility and conversion rates",
  },
];

const services = [
  {
    icon: <FaSearchDollar className="text-2xl text-[#f89e1b] hover:text-[#000]" />,
    title: "Perfect for website ranking",
    description:
      "In this digital world, brand image is very important for business; that's why we make sure your content turns out 100% SEO optimized and user-friendly with correct placement of high-traffic keywords. We make sure your content reflects your values, which you want to deliver.",
  },
  {
    icon: <FaUserTie className="text-2xl text-[#f89e1b] hover:text-[#000]" />,
    title: "Great for blogs & articles",
    description:
      "We create well-structured blogs and articles for your brand. Which is great for brand awareness and building trust. High-quality, informative content actually helps in generating new potential clients and is also very good for audience engagement, which attracts organic traffic.",
  },
  {
    icon: <FaGoogle className="text-2xl text-[#f89e1b] hover:text-[#000]" />,
    title: "Credibility and authority.",
    description:
      "Top-quality content establishes credibility and authority by demonstrating your expertise, satisfying audience questions, and delivering value day after day. Properly researched, unique content positions your brand as a reliable voice in your market build trust among your audience.",
  },
];

const ContentWritingService = () => {
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
            Content writing service
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2 leading-tight">
            {" "}
            Content Writing Service{" "}
          </h2>
          <h6 className="text-md lg:text-lg text-gray-500 mt-5 mb-10 font-light">
            With today's digital era, content has become the pillar of online
            marketing. Good content not only increases SEO but also contributes
            to building authority for brands in their field. If you aspire to
            expand your web presence, it is important to know the fundamentals
            of content writing.
          </h6>
          <NavLink
            to="/free-audit"
            className="group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden"
          >
            <span className="font-syne relative z-10">
              GET A FREE AUDIT →
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </span>
          </NavLink>
        </div>
        <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
          <img
            src={ContentWritingServiceImg}
            alt="Marketing Visual"
            className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 md:pt-22 lg:pt-42 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-28 items-start">
        <div>
          <h3 className="text-2xl md:text-5xl font-semibold text-black leading-tight mb-2 md:mb-6">
            Why is Content Writing Important for SEO?
          </h3>
          <h6 className="text-gray-500 font-light text-sm md:text-md max-w-2xl">
            Search engine optimization and content writing go hand in hand. It's
            important for websites to have high-quality related content to rank
            in the Google search engine. Following are the key SEO benefits of
            content writing.
          </h6>
        </div>
        <div className="font-syne border-l-1 border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4">
          {[
            "Have your website rank faster",
            "Drive organic traffic to your website",
            "Convert visitors into customers",
            "Makes your content high quality",
            "Builds credibility and authority",
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
          How can our content writing service help grow your revenue?
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
              Get the best content writing service in Delhi.
            </h3>
            <h6 className="text-sm font-light lg:text-[16px] font-base text-[#545e5b] mt-2">
              We are the best digital marketing agency in Delhi; we provide
              high-quality SEO-friendly content for your website so it can rank
              faster. Content writing is one of the most important and strong
              key factors for digital marketing strategy, which helps maintain
              brands digital presence. From blog articles to SEO-friendly
              content, we handle everything. Websites with high-quality content
              rank faster and get better potential customers than websites that
              don't. <br />
              <br /> Also, having well-written content makes your brand look
              better than your competitors. Our authors create interesting
              content that is thoroughly researched. Our editors use your
              feedback to make necessary edits and adjustments to ensure
              accuracy, clarity, and interest.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Professional Content Writing Services That Drive Results
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2 font-light">
              Content writing is an effective digital marketing and SEO tool.
              Through high-quality content that is optimized with keywords and
              designed for the audience, companies can enhance their online
              presence, drive potential customers, and establish long-lasting
              relationships.
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
          What makes our content writing service so effective?
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
                <h6 className="text-md text-[#57595b] text-left font-light">
                  {service.description}
                </h6>
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
                className="font-syne inline-block text-sm font-bold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200 uppercase"
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
          Why Quality Content Matters in Digital Marketing{" "}
        </h1>
        <div className="w-full">
          <div className="max-w-8xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6 pt-4">
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  90%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] hover:text-black text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                more organic traffic those who get our content writing service.
              </h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  95%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] hover:text-black text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                more organized content those get our content writing service.
              </h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  90%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] hover:text-black text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                more brand recognition those who get our content writing
                service.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          FAQs about paid search <br /> management
        </h1>
        <p className="text-center text-md font-base text-gray-500 pb-4">
          Looking to learn more about paid search management for your business?
          Browse our FAQs
        </p>
      </div>

      <div className="max-w-5xl mx-auto pt-8 space-y-2 md:space-y-4 font-syne">
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

export default ContentWritingService;
