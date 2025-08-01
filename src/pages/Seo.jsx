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
import Box1 from "../assets/seo-box1.png";
import { NavLink } from "react-router-dom";
import Box2 from "../assets/seo-box2.png";
import Box3 from "../assets/seo-box3.png";
import SeoImg from "../assets/seoimg.png";
import SeoGoogleExperts from "../assets/SeoGoogleExperts.jpg";
import Stats from "../assets/Stats.png";
import Stats2 from "../assets/Stats2.png";
import PeopleDiscuss from "../assets/peopleDiscussOnTopic.png";
import womanTalking from "../assets/womanTaking-Seo.jpg";
import InfoTabs from "../components/InfoTabs";

const tabs = [
  {
    title: <>Enterprise SEO</>,
    content: {
      heading: "Enterprise SEO",
      about:
        "Enterprise SEO denotes a strategic method for enhancing extensive websites—usually comprising thousands of pages or products—to boost organic search effectiveness. Following are the important keypoint for Enterprise SEO......",
    },
    link: "/enterprise-seo",
  },
  {
    title: <>e-Commerce SEO</>,
    content: {
      heading: "e-Commerce SEO",
      about:
        "In e-commerce SEO is the process to work on e-commerce websites to increase products and categories that appear in higher search engine results. The goal is to drive organic traffic and generate genuine leads.following are the essential key element for e-commerce SEO......",
    },
    link: "/ecommerce-seo",
  },
  {
    title: <>Local SEO</>,
    content: {
      heading: "Local SEO",
      about:
        "Local SEO, or Local Search Engine Optimization, involves enhancing your online visibility to ensure that your business appears in local search outcomes, particularly on Google Search and Google Maps. Following are key elements for Local SEO......",
    },
    link: "/local-seo",
  },
  {
    title: <>Multilingual SEO</>,
    content: {
      heading: "Multilingual SEO",
      about:
        "Multilingual SEO is optimization for websites in multiple languages. It's a smart way to rank your website in different languages and countries. The goal is to reach more audiences and get more traffic. Following are the key points for multilingual SEO.....",
    },
    link: "/multilingual-seo",
  },
  {
    title: <>Ai SEO</>,
    content: {
      heading: "Ai SEO",
      about:
        "AI SEO, or Artificial Intelligence SEO, pertains to the utilization of AI-driven tools and technologies aimed at automating, analyzing, and improving search engine optimization strategies. Following are the Artificial Intelligence SEO......",
    },
    link: "/ai-seo",
  },
  {
    title: <>Vernacular SEO</>,
    content: {
      heading: "Vernacular SEO",
      about:
        "Vernacular SEO is optimizing content in regional or local languages to get contact with users. It creates a relation between you and users because now they read content in their native language like Hindi, Bengali, Assamese, etc. The following are key elements of vernacular SEO.....",
    },
    link: "/vernacular-seo",
  },
  {
    title: <>Hyperlocal SEO</>,
    content: {
      heading: "Hyperlocal SEO",
      about:
        "Hyperlocal SEO represents a specialized form of local SEO (GMB) that focuses on specific neighborhoods, streets, or small local areas to draw in nearby customers. Rather than aiming at an entire city, hyperlocal SEO concentrates on micro-locations. Following are the key points for Hyperlocal SEO.",
    },
    link: "/hyperlocal-seo",
  },
  {
    title: <>Voice SEO</>,
    content: {
      heading: "Voice SEO",
      about:
       "Voice SEO refers to the practice of enhancing your website and content to cater to voice search inquiries conducted via devices such as smartphones, voice assistants (including Google Assistant, Siri, and Alexa), and smart speakers following are the key points for voice SEO ",
    },
    link: "/voice-seo",
  },
];

const faqs = [
  {
    question: "Why is SEO service important?",
    answer:
      "To get ranked in Google search engine, SEO service is the most organic and effective way. Without SEO service your website can't get ranked in Google. Paid services give quick results SEO provide long term organic results.",
  },
  {
    question: "Can I get traffic by getting an SEO service?",
    answer:
      "SEO (Search Engine Optimization) is crucial for website traffic, SEO service increases website visibility by increasing website ranking. By correct content analyzing and keyword research you can get best results.",
  },
  {
    question: "How many types of SEO services do you provide?",
    answer:
      "We provide all kinds of SEO services which includes SEO on-page, SEO off-page, and technical SEO so no need to get worried. Our SEO experts who have years of experience and strategies to get fast and effective results.",
  },
  {
    question: "How effective your off-page SEO services are?",
    answer:
      "Our off-page service is very much effective as our SEO experts have years of experience in both on-page and off-page, we create high-quality backlinks to increase website DA (domain authority) and PA (page authority). So you can rely on us without getting worried.",
  },
];

const services = [
  {
    icon: (
      <FaSearchDollar className="text-[#f89e1b] text-2xl hover:text-[#000]" />
    ),
    title: "Match search intent at every touchpoint",
    description:
      "Picking the right keywords will only get you so far. We understand how to match the search intent of your target keywords with ad copy, CTAs, and landing pages that turn clicks into ROI.",
  },
  {
    icon: (
      <FaUserTie className="text-[#f89e1b] text-2xl hover:text-[#000]" />
    ),
    title: "Experienced PPC management",
    description:
      "How do you know what works if you’ve never gotten results before? Our paid search managers have years of experience managing successful campaigns in a variety of industries. And we have the happy clients to back it up.",
  },
  {
    icon: <FaGoogle className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "Google Premier Partnership",
    description:
      "Working with a Google Partner agency gives you a leg up. Not only are we certified in all types of Google advertising, but we also get access to direct support and other resources provided by Google. Your campaigns benefit directly from this exclusive insider knowledge.",
  },
];

const Seo = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleAccordionToggle = (index) => {
    setActiveTabIndex(activeTabIndex === index ? null : index);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="seo-heading"
      className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] pt-10 md:pt-18 pb-16 md:pb-18 lg:pb-22"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-5 md:px-10 lg:px-15 xl:px-30">
        <div className="space-y-6">
          <h2
            id="seo-heading"
            className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-black"
          >
            Search Engine <br />
            Optimization
          </h2>
          <h6 className="text-gray-700 font-light text-base md:text-lg max-w-md">
            Search engine optimization, or SEO, is the practice of increasing
            the volume of traffic to a website by raising its visibility in
            search engine results. It's the most organic way to get traffic and
            online visibility. Get the best SEO services in Delhi.
          </h6>

          <div className="relative">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="font-syne relative bg-white rounded-[30px] shadow-[10px_10px_0_0_rgba(0,0,0,0.7)] px-5 py-4 flex flex-col md:flex-row items-center gap-4"
            >
              <div className="absolute top-0 left-10 h-1 w-18 bg-yellow-400 rounded-md" />
              <div className="w-full md:w-1/2 border border-[#E3E3E8] rounded-[15px] p-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent outline-none text-sm md:text-base text-gray-700 placeholder-gray-400 px-2"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-1/2 flex items-center justify-center gap-2 px-6 py-4 bg-black text-white text-sm md:text-base font-semibold rounded-2xl hover:bg-[#f89e1b] transition duration-300"
              >
                NEXT <FaArrowRight />
              </button>
            </form>
          </div>
        </div>

        <div className="relative w-full h-[300px] lg:h-[400px]">
          <div className="absolute top-[35%] right-[50%] bg-white rounded-3xl shadow-xl p-4">
            <img
              src={Box2}
              alt="Generated traffic and leads"
              className="w-[250px] h-[180px] md:h-[270px] object-contain"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[0%] left-[55%] bg-white rounded-3xl shadow-xl p-4">
            <img
              src={Box1}
              alt="SEO performance chart"
              className="w-[250px] h-[180px] md:h-[270px] object-contain"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[85%] left-[55%] bg-white rounded-3xl shadow-xl p-4">
            <img
              src={Box3}
              alt="Conversion rate graph"
              className="w-[250px] h-[180px] md:h-[270px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="pt-52 md:pt-88 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-28 items-start px-5 md:px-10 lg:px-15 xl:px-30">
        <div>
          <h3 className="text-2xl md:text-5xl font-semibold text-black leading-tight mb-2 md:mb-6">
            How Search Engine Optimization works
          </h3>
          <h6 className="text-gray-600 text-sm font-light md:text-md max-w-2xl">
            Search engine optimization works to improve website visibility,
            generate leads, and increase website traffic. It's the most organic
            way to increase website visibility, unlike paid services which
            deliver fast growth. SEO is known for long-term results. It involves
            refining the content and structure of a website to enhance its
            attractiveness to search engines such as Google.
          </h6>
        </div>
        <div className="border-l-1 border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4 font-syne">
          {[
            "Keyword research & and analysis.",
            "On-page SEO & off-page SEO.",
            "Technical SEO and Speed check.",
            "Quality Backlinks creation.",
            "Plagiarism Checker Check.",
            "AEO & GEO ",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-[#f89e1b] text-2xl mt-0.5" />
              <span className="text-gray-700 text-base md:text-md">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24 px-5 md:px-10 lg:px-15 xl:px-30">
        <p className="text-center text-md font-semibold uppercase pb-4">
          Digital Market tap
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-10 lg:pb-24">
          Get More Traffic & Leads with
          <br /> Proven SEO Techniques
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
              The Best SEO service in Delhi
            </h3>
            <h6 className="text-sm lg:text-[16px] font-light font-base text-[#545e5b] mt-2">
              At Digital Market Tap, we focus on offering budget-friendly,
              effective SEO services in Delhi aimed at boosting your website
              traffic, enhancing your online presence, and helping you achieve a
              better ranking on Google. In the current competitive digital
              landscape, just having a website won’t cut it—you need smart SEO
              strategies to reach your target audience. <br /> <br /> That's why we are the
              best SEO company in Delhi. When 90% of work started online, SEO
              became the most effective and organic way to drive more visibility
              and traffic to your website. It's not only good for organic
              traffic, but it also boosts brand credibility and generates
              quality leads
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24 px-5 md:px-10 lg:px-15 xl:px-30">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Why Choose Digital Market Tap?
            </h3>
            <h6 className="text-sm font-light lg:text-[16px] font-base text-[#545e5b] mt-2">
              For trusted and the most genuine SEO service in Delhi. We provide monthly Transparent reports to our clients, which includes keyword performance, website traffic checker, and website keyword position check, over-all backlinks report and many more. We follow 100% transparency rules. It means we would charge any hidden fees and also will provide a transparent report to the clients. We provide 24/7 customer support for every inconvenience. 
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

      <div className="pt-8 md:pt-12 px-5 md:px-10 lg:px-15 xl:px-30">
        <div className="hidden lg:flex rounded-[60px] overflow-hidden bg-black">
          <div className="w-1/3 p-12 flex flex-col gap-6 text-white relative">
            {tabs.map((tab, index) => {
              const isActive = index === activeTabIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveTabIndex(index)}
                  className={`font-syne !w-[160%] relative cursor-pointer transition-all duration-300 pl-10 pr-16 py-5 text-left text-lg md:text-xl font-medium leading-tight -ml-8
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
                  to={tabs[activeTabIndex]?.link}
                  className="mt-6 group text-black py-2 text-md font-semibold transition duration-300 relative overflow-hidden inline-flex items-center"
                >
                  <span className="font-syne relative z-10">
                    LEARN MORE
                    <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
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
                        className="hidden xl:inline-block group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#6754E9] transition duration-300 relative overflow-hidden"
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

      <div className="pb-8 pt-12 md:pt-16 lg:pt-18 px-5 md:px-10 lg:px-15 xl:px-30">
        <p className="text-center text-md font-semibold uppercase pb-3">
          Creating Success
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
          What makes our paid search management services so {" "}
          effective?
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

      <div className="pb-4 pt-2 md:pt-8 lg:pt-18 px-5 md:px-10 lg:px-15 xl:px-30">
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

      <InfoTabs/>

      <div className="w-full pt-8 md:pt-14 lg:pt-24 px-5 md:px-10 lg:px-15 xl:px-30">
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

            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-white bg-opacity-90 px-6 md:px-8 py-4 md:py-6 rounded-tl-[35px] md:rounded-tl-[60px]">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
                <span className="font-semibold text-sm mt-1">
                  5000+ Client reviews
                </span>
              </div>
              <a
                href="/about"
                className="font-syne inline-block text-xs md:text-sm font-bold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200 uppercase"
              >
                View all reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18 px-5 md:px-10 lg:px-15 xl:px-30">
        <p className="text-center text-md font-semibold uppercase pb-4">
          The proof is in the numbers
        </p>
        <h1 className="text-3xl lg:text-5xl text-center font-semibold pb-4">
          Why paid search Ads can bring in <br /> the numbers{" "}
        </h1>
        <div className="w-full">
          <div className="max-w-8xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6 pt-4">
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  38%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl" />
                </div>
              </div>
              <p className="text-[#5c5f61]">
                of growth rate in brand awareness for businesses that start
                doing Search Ads
              </p>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  100%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl" />
                </div>
              </div>
              <p className="text-[#5c5f61]">
                of total clicks on search results page are Search Ads, serving
                as proof that a dependence on SEO alone limits your potential
                for more traffic and leads.
              </p>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  82%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl" />
                </div>
              </div>
              <p className="text-[#5c5f61]">
                of clicks on Search Ads are more likely to buy, making for
                better leads.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18 px-5 md:px-10 lg:px-15 xl:px-30">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          FAQs about Search Engine <br /> Optimization
        </h1>
        <p className="text-center text-md md:text-lg font-base text-gray-500 pb-4">
          Looking to learn more about search engine optimization for your
          business? Browse our FAQs
        </p>
      </div>
      <div className="max-w-5xl mx-auto pt-8 space-y-2 md:space-y-4  px-5 md:px-10 lg:px-15 xl:px-0">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-300 pb-2 md:pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg md:text-xl font-medium hover:text-[#F89E1B] focus:outline-none pt-5"
            >
              {faq.question}
              {openIndex === index ? (
                <FaMinus className="text-[#000000]" />
              ) : (
                <FaPlus className="text-[#f89e1b]" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-500 text-md md:text-xl lg:text-lg font-medium md:text-md">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Seo;
