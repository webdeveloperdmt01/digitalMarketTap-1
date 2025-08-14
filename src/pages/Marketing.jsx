import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MarketingImg from "../assets/Marketing1.png";
import MarketingImg2 from "../assets/Marketing2.png";
import {
  FaArrowRight,
  FaCheckCircle,
  FaArrowUp,
  FaSearchDollar,
  FaUserTie,
  FaGoogle,
} from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import BorderBottom from "../assets/border.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import RocketBlue from "../assets/blueRocket.png";
import GooglePartner1 from "../assets/google-partner-1.png";
import BrandSlider from "../components/BrandSlider";

const faqs = [
  {
    question: "What types of marketing services do you offer?",
    answer:
      " we offer the best marketing service in every niche which includes digital marketing, email marketing, branding and graphic design, Website design & and development, facebook and Google ads, Google my business and many more according to your niche.",
  },
  {
    question:
      "How do you determine which marketing strategy is right for my business?",
    answer:
      " We start with a detailed discovery session and market analysis to understand your goals, audience, competition, and industry trends. Based on that, we create a custom marketing plan that fits your budget, business type, and objectives.",
  },
  {
    question: "Do I need a very expensive budget for marketing?",
    answer:
      " Absolutely, No you don't actually need a very big amount for marketing. Our packages are quite affordable for any small or big business. If u have any doubt feel free to contact us.",
  },
  {
    question: "How do I get started with your marketing services?",
    answer:
      " You can contact us we are available 24/7 or you can visit us. We will offer a free consultation free of cost. We also have free website audit option so we can only work on flaws its also cost efficient.",
  },
];

const Marketing = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tabs = [
    {
      title: (
        <>
          Digital <br /> marketing services
        </>
      ),
      content: {
        heading:
          "Digital Market Tap provides full digital marketing services such as :",
        features: [
          "SEO, PPC, social media marketing",
          "Content Writing, & Website Development",
          "Meta & Goole Ads",
          "Maximum ROI and long-term growth",
          "Online visibility, leads, & selling more",
        ],
        link: "/digital-marketing",
        percentage: "93%",
        percentageNote:
          "Of customers reported that their online experience begins with search",
      },
    },
    {
      title: (
        <>
          Email <br /> marketing
        </>
      ),
      content: {
        heading:
          "Email marketing is very important marketing service for businesses that want to..",
        features: [
          "Build long-term relationships with customers",
          "Very cost-efficient",
          "Engage customers and drive conversions",
          "Expert email marketing management",
          "More Engagement",
        ],
        link: "/email-marketing",
        percentage: "82%",
        percentageNote:
          "Clients saw immediate uplift in lead generation from paid campaigns",
      },
    },
    {
      title: (
        <>
          Content <br /> writing
        </>
      ),
      content: {
        heading:
          "We provide professional content writing services. Which is perfect for..",
        features: [
          "100% seo friend content",
          "Expert content writers",
          "High quantity content",
          "Keyword specific content",
          "Enhance online visibility",
        ],
        link: "/content-writing-service",
        percentage: "71%",
        percentageNote:
          "Improved conversions after optimizing landing pages and forms",
      },
    },
    {
      title: (
        <>
          Quora <br /> marketing
        </>
      ),
      content: {
        heading:
          "We offer professional Quora marketing services to assist businesses in..",
        features: [
          "Enhance your SEO",
          "Enchance brand visibility",
          "Niche-specific content creation",
          "High web traffic",
          "Great for lead generation",
        ],
        link: "/quora-marketing",
        percentage: "86%",
        percentageNote:
          "Reported increased brand awareness via targeted social campaigns",
      },
    },
  ];

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const services = [
    {
      icon: (
        <FaSearchDollar className="text-[#f89e1b] text-2xl hover:text-[#000]" />
      ),
      title: "Generate more qualified leads.",
      description:
        "In today's digital world marketing services are a necessity, and having an experienced digital marketing agency can help in many ways. If you want to generate genuine leads,our ads and SEO service can be very helpful for you. So reach more people at a lower cost than traditional marketing.",
    },
    {
      icon: <FaUserTie className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
      title: "Experienced marketing agency",
      description:
        "We have over 8 years of experience as a marketing agency, working with over 500+ brands under every niche, which makes us experts in marketing. We are known for our punctuality and result-delivering service. That's how we became the best digital marketing in Delhi, India.",
    },
    {
      icon: <FaGoogle className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
      title: "Brand Growth and Awareness",
      description:
        "We help businesses to grow faster and help in building awareness. We make sure your brand is more visible among your targeted audience. By consistent marketing, choosing correct keyword analysis, and correct geographical targeting. As more people recognize and trust your brand",
    },
  ];

  return (
    <>
      <main className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] px-5 md:px-10 lg:px-15 xl:px-30 relative">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 py-6 md:py-8 lg:py-14 items-center">
          <div>
            <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-8">
              Marketing
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2 leading-tight">
              Marketing Solution in every Platform of Social Media
            </h2>
            <h6 className="font-light text-sm md:text-md lg:text-lg text-gray-500 mt-5 mb-10">
              In today's fast-moving digital world, where trends change so fast
              that what works today has no guarantee of working tomorrow. In
              this case, having an experienced and expert digital marketing
              agency is a must because marketing is not a luxury but a necessity
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

          <div className="flex lg:justify-end">
            <img
              src={MarketingImg}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>

        {/* <img src={BorderBottom} alt="border-bottom-line" className="w-full absolute bottom-0 right-0 object-contain pt-22 px-5 md:px-10 lg:px-30"/> */}

        <div className="pt-6 md:pt-14 lg:pt-24 pb-10">
          <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15">
            <div className="flex lg:justify-end">
              <img
                src={MarketingImg2}
                alt="Marketing Visual"
                className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
              />
            </div>
            <div className="pl-2 md:pl-8 lg:pl-12 xl:pl-20 content-center">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
                Digital Market Tap—Smart, Data-Driven Marketing That Delivers
                Results
              </h3>
              <h6 className="font-light text-sm lg:text-[16px] font-base text-[#545e5b] mt-2">
                {" "}
                We are the best digital marketing agency in Delhi because we
                understand marketing is no longer a luxary in this day and age
                of ever-evolving digital space, but a necessity. For companies
                looking to expand, compete, and remain relevant, a well-defined,
                holistic, and customer-centered marketing strategy is
                imperative. At Digital Market Tap, our innovative and
                specialized marketing solutions enable brands to reach, interact
                with, and convert their desired audience. Our goal is to
                understand our client's moral values and needs and then deliver
                results. Marketing is not just randomly posting and running
                random ads; it's a strategy to have your brand get more leads
                and visibility, and we understand all these things very well.
              </h6>
              <a
                href="#"
                className="font-syne group inline-block text-sm font-semibold relative border-b-2 border-[#fbc371] uppercase mt-8"
              >
                more about our company
                <span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="pb-8 pt-8 md:pt-18">
          <p className="text-center text-md font-semibold uppercase pb-3">
            Creating Success
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
            Why choose Digital Market Tap for marketing
            <br /> services?
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

        <section className="max-w-7xl mx-auto py-6 md:py-12 lg:py-24">
          <h1 className="text-2xl md:text-4xl lg:text-5xl max-w-5xl mx-auto text-center pb-6 font-medium md:font-semibold">
            We lead with customer-first strategies:
          </h1>
          <h6 className="font-light text-md md:text-lg max-w-3xl mx-auto text-center pb-8 md:pb-10 lg:pb-18 text-[#5a5a5a]">
            Driving growth through personalized experiences for truly end-to-end
            business building.
          </h6>
          <div className="hidden lg:flex rounded-[60px] overflow-hidden bg-black">
            <div className="w-1/3 p-12 flex flex-col gap-4 text-white relative">
              {tabs.map((tab, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`font-syne !w-[160%] relative cursor-pointer transition-all duration-300 pl-10 pr-16 py-4 text-left text-lg md:text-xl font-medium leading-tight -ml-8
                    ${
                      isActive
                        ? "bg-[#f89e1b] text-white rounded-full z-10"
                        : "text-white hover:text-black hover:bg-white rounded-full z-0"
                    }`}
                  >
                    {tab.title}
                    {isActive && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 transform bg-black text-white rounded-full w-13 h-13 flex items-center justify-center">
                        <FaArrowRight size={18} />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-3/3 bg-[#f7f7fa] py-20 lg:pl-10 xl:pl-36 lg:pr-4 xl:pr-16 flex items-center justify-between gap-15 rounded-[60px] font-syne">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-6 leading-snug text-left">
                  {tabs[activeIndex]?.content.heading}
                </h2>
                <ul className="space-y-4 text-md text-black">
                  {tabs[activeIndex]?.content.features.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#f89e1b] w-6 h-6" />{" "}
                      {item}
                    </li>
                  ))}{" "}
                </ul>
                <div className="text-left mt-8">
                  <a
                    href={tabs[activeIndex]?.content.link}
                    className="group inline-block text-sm font-semibold relative border-b-2 border-[#fbc371]"
                  >
                    LEARN MORE →
                    <span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center bg-white rounded-[30px] p-6">
                <div className="relative w-46 h-46 rounded-full border border-[#ededed] flex items-center justify-center">
                  <div className="relative w-36 h-36 rounded-full border border-[#f89e1b] flex items-center justify-center">
                    <span className="text-4xl font-bold text-black">
                      {tabs[activeIndex]?.content.percentage}
                    </span>
                    <span className="absolute top-[65%] text-[#f89e1b] text-2xl">
                      ↑
                    </span>
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
              const { heading, features, percentage, percentageNote } =
                tab.content;

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
                      <h2 className="text-lg font-semibold mb-4 text-black">
                        {heading}
                      </h2>
                      <ul className="space-y-3 text-sm text-black">
                        {features.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <FaCheckCircle className="text-[#f89e1b]" /> {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 text-left">
                        <a
                           href={tabs[activeIndex]?.content.link}
                          className="text-sm font-semibold text-orange-500 border-b-2 border-orange-300 hover:border-orange-500"
                        >
                          LEARN MORE →
                        </a>
                      </div>
                      <div className="mt-6 flex flex-col items-center justify-center bg-white rounded-3xl p-4">
                        <div className="relative w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full border-2 border-[#f89e1b] flex items-center justify-center relative">
                            <span className="text-3xl font-bold">
                              {percentage}
                            </span>
                            <span className="absolute top-[65%] text-[#f89e1b] text-xl">
                              ↑
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-black mt-3 text-center max-w-[180px]">
                          {percentageNote}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section
          ref={ref}
          className="bg-[#F7F7FA] py-6 md:py-16 rounded-[30px] md:rounded-[60px] px-5 md:px-10 lg:px-20 my-2 md:my-16"
        >
          <h2 className="text-center md:text-left text-2xl md:text-4xl font-semibold mb-4">
            Driving Real Results
          </h2>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full lg:w-2/3 text-center">
              {[
                {
                  value: 3,
                  suffix: "%",
                  label: "Of Google advertisers",
                },
                {
                  value: 100,
                  suffix: "%",
                  label: "Growth clients",
                },
                {
                  value: 91,
                  suffix: "%",
                  label: "Results improved compared to previous agencies",
                },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative w-44 h-44 rounded-full border border-[#D7DEE6] flex items-center justify-center">
                    <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-2 border-[#f89e1b]">
                      <div className="text-3xl font-bold">
                        {inView && <CountUp end={stat.value} duration={4} />}
                        {stat.suffix}
                      </div>
                      <FaArrowUp className="absolute bottom-3 text-[#f89e1b] text-xl" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm md:text-md font-medium text-black">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-orange-200 text-center px-10 py-10 md:px-18 md:py-15 rounded-[40px] lg:w-1/3 w-full">
              <h3 className="text-4xl font-bold mb-2 font-syne">
                {inView && <CountUp end={282000} duration={3} separator="," />}+
              </h3>
              <p className="text-black font-semibold mb-6">
                Leads generated so far...
              </p>
              <a
                href="/contact-us"
                className="font-syne text-sm group relative inline-flex items-center gap-2 rounded-full bg-black px-6 py-2 text-white transition duration-300 hover:bg-orange-400"
              >
                CONTACT US <FaArrowRight />
                <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
              </a>
            </div>
          </div>
        </section>

        <BrandSlider />

        {/* <img src={BorderBottom} alt="border-bottom-line" className="w-full absolute bottom-0 right-0 object-contain pt-22 px-5 md:px-10 lg:px-30"/> */}
        <div className="relative">
          <section className="bg-[#f8f8fb] rounded-[30px] md:rounded-[60px] py-12 px-4 sm:px-6 md:px-12 overflow-hidden max-w-7xl mx-auto my-8 md:my-12 lg:my-24 text-center shadow-sm">
            <img
              src={RocketBlue}
              alt="Custom"
              className="hidden md:block w-14 md:w-18 absolute right-2 md:right-36 lg:right-46 -top-6 -rotate-30 origin-top z-10"
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
              <span className="font-syne relative z-10 flex items-center justify-center gap-1">
                GET A PROPOSAL <FaArrowRight />
                <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </NavLink>
          </section>
        </div>

        <div className="pb-16 md:pb-18 lg:pb-22 pt-8 md:pt-12 lg:pt-18">
          <p className="text-center text-md font-semibold uppercase pb-4">
            FAQ
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
            FAQs about Marketing
          </h1>
          <h6 className="text-center text-md md:text-lg font-light text-gray-500 pb-4">
            Looking to learn more about Marketing for your business? Browse our
            FAQs
          </h6>

          <div className="max-w-5xl mx-auto pt-8 pb-16 md:pb-22 space-y-2 md:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-t border-gray-300 pb-2 md:pb-4"
              >
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
        </div>
      </main>
    </>
  );
};

export default Marketing;
