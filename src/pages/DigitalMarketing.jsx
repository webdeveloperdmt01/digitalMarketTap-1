import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaPlus, FaMinus } from "react-icons/fa";

// Images
import heroImg from "../assets/digitalMarketingHeroImg.jpg";
import emailImg from "../assets/email-mkt.jpg";
import paidSearchImg from "../assets/PaidMarketing1.png";
import quoraImg from "../assets/quora-mkt.png";
import ormImg from "../assets/onlineReputationMgmt.jpg";
import socialMediaImg from "../assets/SocialMediaOpt.jpg";
import RocketBlue from "../assets/rocket.png";
import GooglePartner1 from "../assets/google-partner-1.png";

const faqs = [
  {
    question: "What is Digital Market Tap?",
    answer:
      "Digital Market Tap is a full-service digital marketing agency focused on helping businesses grow their online presence, attract qualified leads, and drive measurable results. We combine strategy, creativity, and data-driven insights to deliver impactful marketing campaigns.",
  },
  {
    question: "What services does Digital Market Tap offer?",
    answer:
      "We offer a wide range of digital marketing services, including SEO, paid search (PPC), social media marketing, email marketing, Quora marketing, influencer marketing, online reputation management, and affiliate marketing. Our goal is to create tailored strategies that align with your business goals.",
  },
  {
    question: "How does Digital Market Tap help businesses grow?",
    answer:
      "Our team uses a data-driven approach combined with creative strategies to help businesses drive more traffic, generate high-quality leads, and improve conversion rates. We focus on the complete funnel—from attracting the right audience to converting them into loyal customers.",
  },
  {
    question: "How quickly can I expect results?",
    answer:
      "Depending on the service, you can typically expect to see noticeable improvements within 30-60 days. Paid advertising often delivers quicker results, while SEO and content strategies compound over time for long-term growth.",
  },
  {
    question: "Do you offer customized marketing plans?",
    answer:
      "Yes. Every business is unique, and so are our strategies. We provide fully customized digital marketing plans based on your industry, goals, audience, and budget.",
  },
  {
    question: "Is Digital Market Tap suitable for small businesses?",
    answer:
      "Absolutely. We work with businesses of all sizes—from startups and local businesses to large enterprises. Our flexible and scalable strategies are designed to fit your needs and budget.",
  },
  {
    question: "How do I get started with Digital Market Tap?",
    answer:
      "Simply contact us for a free consultation. Our experts will analyze your current online presence, understand your goals, and recommend a strategy tailored to your success.",
  },
];

const services = [
  {
    img: emailImg,
    title: "Email Marketing",
    desc: "Engage customers with personalized, automated, and effective email campaigns.",
    link: "/email-marketing",
  },
  {
    img: paidSearchImg,
    title: "Paid Search Marketing",
    desc: "Drive targeted traffic using Google Ads, Bing Ads, and PPC strategies.",
    link: "/paid-marketing",
  },
  {
    img: quoraImg,
    title: "Quora Marketing",
    desc: "Boost credibility and visibility by engaging with niche audiences on Quora.",
    link: "/quora-marketing",
  },
  {
    img: ormImg,
    title: "Online Reputation Management",
    desc: "Build and protect your brand's online reputation and handle reviews.",
    link: "/online-reputation-management",
  },
  {
    img: socialMediaImg,
    title: "Social Media Marketing",
    desc: "Grow your audience with campaigns across Facebook, Instagram, LinkedIn, and more.",
    link: "/social-media-marketing",
  },
];


const tabs = [
  {
    title: <>Email Marketing</>,
    content: {
      heading: "Email Marketing Solutions",
      about:
        "Nurture leads, retain customers, and drive conversions with our targeted Email Marketing campaigns. We craft personalized, automated, and data-driven emails that keep your audience engaged, helping your brand stay top-of-mind while boosting ROI and customer loyalty.",
    },
    link: "/email-marketing",
  },
  {
    title: <>Quora Marketing</>,
    content: {
      heading: "Quora Marketing Services",
      about:
        "Build authority, drive targeted traffic, and engage niche audiences with our Quora Marketing strategies. We help you answer relevant questions, position your brand as an industry expert, and subtly promote your products or services to users actively seeking solutions.",
    },
    link: "/quora-marketing",
  },
  {
    title: <>Paid Marketing</>,
    content: {
      heading: "Paid Advertising & PPC Campaigns",
      about:
        "Accelerate growth with data-driven paid advertising. From Google Ads and Bing to Facebook, Instagram, and LinkedIn, our Paid Marketing strategies focus on hyper-targeted campaigns that drive quality leads, maximize conversions, and deliver measurable ROI fast.",
    },
    link: "/paid-marketing",
  },
  {
    title: <>Social Media Marketing</>,
    content: {
      heading: "Social Media Growth Solutions",
      about:
        "Engage, grow, and convert audiences across platforms like Facebook, Instagram, LinkedIn, and X (Twitter). Our Social Media Marketing includes strategy development, content creation, ad management, and community building to boost your online presence and brand loyalty.",
    },
    link: "/social-media-marketing",
  },
  {
    title: <>Online Reputation Marketing</>,
    content: {
      heading: "Online Reputation Management",
      about:
        "Protect and enhance your brand's online reputation. Our ORM services focus on monitoring reviews, responding to feedback, removing negative content where possible, and promoting positive customer experiences—helping you build trust and credibility in the digital world.",
    },
    link: "/online-reputation-management",
  },
];

const stats = [
  { value: 88, label: "Client Retention Rate", suffix: "%" },

  { value: 6.3, label: "Average Conversion Rate", suffix: "%" },

  { value: 2.4, label: "Million Ad Spend Managed", suffix: "M+" },

  { value: 960, label: "Campaigns Executed", suffix: "+" },
];

const DigitalMarketing = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAccordionToggle = (index) => {
    setActiveTabIndex(activeTabIndex === index ? null : index);
  };

  return (
    <main className="bg-gradient-to-b from-[#fdf1e7] to-white px-5 md:px-15 lg:px-30">
      <section className="py-8 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 text-left lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Achieve Sustainable Growth with <br />{" "}
              <span className="text-[#F89E1B] italic text-3xl md:text-4xl lg:text-5xl">
                Digital Market Tap
              </span>
            </h1>
            <h6 className="my-6 text-md md:text-lg text-gray-600 font-light max-w-lg">
              We are a results-driven digital marketing agency offering services
              that help you grow, engage, and convert—across every digital
              platform.
            </h6>
            <NavLink
              to="/"
              className="text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#6754E9]"
            >
              GET STARTED
              <FaArrowRight />
              <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
            </NavLink>
          </div>
          <div className="lg:w-1/2 w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              loop
            >
              <SwiperSlide>
                <img
                  src={heroImg}
                  alt="Hero"
                  className="w-full h-[250px] md:h-[400px] object-cover rounded-3xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={heroImg}
                  alt="Hero 2"
                  className="w-full h-[250px] md:h-[400px] object-cover rounded-3xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto text-center py-12">
        <div className=" border-l-6 border-[#F89E1B] rounded-3xl p-6 md:p-10 lg:p-12 relative">
          <div className="absolute top-4 left-6 text-5xl text-[#F89E1B] font-mono">“</div>
          <h6 className="text-sm md:text-lg text-gray-700 font-light leading-relaxed">
            <strong>
              Digital marketing is the engine behind modern business growth.
            </strong>{" "}
            It uses online channels like search engines, social media, email,
            and paid ads to connect businesses with their ideal customers. In
            today’s competitive market, having a strong digital presence isn’t
            optional—it’s essential. At{" "}
            <span className="text-[#F89E1B] font-semibold">
              Digital Market Tap
            </span>
            , we combine creativity, data-driven strategies, and industry
            expertise to help your business thrive. Whether it’s boosting
            traffic, generating qualified leads, or improving online reputation,
            our tailored solutions deliver real results.{" "}
            <strong>
              Choose DMT because we don’t just run campaigns—we fuel growth,
              drive ROI, and become a true partner in your success.
            </strong>
          </h6>
          <div className="absolute bottom-2 md:bottom-8 lg:bottom-10 right-6 md:right-34 lg:right-124 text-5xl text-[#F89E1B] font-mono">
            ”
          </div>
        </div>
      </div>

      <div className="text-center mb-14 pt-8 md:pt-16 lg:pt-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          {" "}
          Your One-Stop Digital Growth Partner
        </h1>
        <p className="mt-4 text-md md:text-lg text-gray-600 max-w-3xl mx-auto font-light">
          Explore our suite of tailored digital marketing services—from SEO and
          paid ads to social media and content marketing.{" "}
          <span className="font-semibold text-[#F89E1B] italic">
            Digital Market Tap
          </span>{" "}
          fuels your growth with data-driven strategies and measurable success.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl p-6 overflow-hidden hover:shadow-2xl transition hover:scale-105"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover rounded-xl mb-6"
            />

            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h4>
            <p className="text-gray-600">{service.desc}</p>

            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-90 group-hover:backdrop-blur-lg flex flex-col justify-center items-center transition duration-500 rounded-3xl">
              <h4 className="text-xl text-white font-semibold mb-4">
                {service.title}
              </h4>
              <NavLink
                to={service.link}
                className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-[#F89E1B] hover:text-white transition"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        ))}
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
                  className={`!w-[160%] relative cursor-pointer transition-all duration-300 pl-10 pr-16 py-5 text-left text-lg md:text-xl font-medium leading-tight -ml-8
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
                  <span className="relative z-10">
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

      <section className="py-8 md:py-14 lg:py-20 rounded-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Success by the Numbers
          </h2>
          <h6 className="mt-4 text-md md:text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Our proven track record reflects the growth, satisfaction, and
            success we've delivered to clients across industries.
          </h6>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transition rounded-3xl p-8 text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 bg-[#FCD9A0] flex items-center justify-center rounded-full mb-6">
                <span className="text-4xl font-bold text-[#fff]">
                  <CountUp end={stat.value} duration={3} />
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-lg text-gray-700 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="relative">
        <section className="bg-[#f8f8fb] rounded-[30px] md:rounded-[60px] py-12 px-4 sm:px-6 md:px-12 overflow-hidden max-w-7xl mx-auto my-12 text-center shadow-sm">
          <img
            src={RocketBlue}
            alt="Custom"
            className="absolute top-0 right-0 md:right-12 lg:right-20 h-20 md:h-34 -mt-8 md:-mt-10 lg:-mt-13 mr-0 md:-mr-8 lg:-mr-10 -rotate-35 object-contain"
          />
          <div className="flex justify-center items-center mb-4">
            <img
              src={GooglePartner1}
              alt="Partner Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug text-black px-2 sm:px-0">
            Unlock Growth with a Free <br className="hidden md:block" />{" "}
            Strategy Session
          </h2>
          <NavLink
            to="/free-audit"
            className="group bg-black text-white mt-6 px-6 sm:px-8 md:px-10 py-3 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-[#6754E9] transition duration-300 inline-block relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-1">
              GET A PROPOSAL <FaArrowRight />
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </span>
          </NavLink>
        </section>
      </div>

      <div className="pt-10 pb-4 ">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold pb-4">
          Frequently Asked Questions <br /> About Digital Market Tap
        </h1>
        <h6 className="text-center text-md font-light text-gray-500 pb-4">
          Got questions about how we help brands grow with digital marketing?
          Browse the answers below to learn more.
        </h6>
      </div>

      <div className="max-w-5xl mx-auto pt-8 pb-12 md:pb-16 space-y-2 md:space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-300 pb-2 md:pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left font-bold text-sm md:text-lg lg:text-xl md:font-medium hover:text-[#6754E9] focus:outline-none pt-5"
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
    </main>
  );
};

export default DigitalMarketing;
