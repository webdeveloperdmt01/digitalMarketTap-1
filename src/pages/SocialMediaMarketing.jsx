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
import Box2 from "../assets/seo-box2.png";
import Box3 from "../assets/seo-box3.png";
import SeoImg from "../assets/seoimg.png";
import SeoGoogleExperts from "../assets/SeoGoogleExperts.jpg";
import womanTalking from "../assets/womanTaking-Seo.jpg";
import { NavLink } from "react-router-dom";

const services = [
  {
    icon: (
      <FaSearchDollar className="text-[#f89e1b] text-2xl hover:text-[#000]" />
    ),
    title: "Analytics & Reporting",
    description:
      "Learn in-depth details about what is effective. Reach, engagement, growth, and ROI performance reports are provided, and strategies are modified as necessary so your business can get maximum positive results. So get our social media marketing service now.",
  },
  {
    icon: (
      <FaUserTie className="text-[#f89e1b] text-2xl hover:text-[#000]" />
    ), 
    title: "Expert in PPC management",
    description:
      "We are a trusted and experienced marketing agency. Our paid search managers have years of experience running profitable campaigns across a range of sectors. And the satisfied customers attest to that. So always choose an experience agency for your business.",
  },
  {
    icon: <FaGoogle className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "Google Premier Partnership",
    description:
      "You have an advantage when you work with a Google Partner agency. In addition to being certified in all forms of Google advertising, we also have access to Google's other resources and direct support. This unique insider information directly helps your campaigns.",
  },
];

const faqs = [
  {
    question: "Do you also provide Social Media Marketing?",
    answer:
      "Yes, Absolutely we do provide social media marketing services globally. We have years of experience in studying global trends and insta algorithms so you can rely on us. We will help you to connect globally.",
  },
  {
    question: "Why Social Media Marketing is important for my business?",
    answer:
      "SMM (Social Media Marketing) is very important for any business as it grows your online presence more effectively it also helps you to reach more audience good for brand value and brand awareness. It grows the emotional relationship between you and customers.",
  },
  {
    question: "Which platforms should my business use?",
    answer: "The best platforms depend on your target audience and goals:",
    answerPoints: [
      "Instagram & Facebook: Great for B2C, lifestyle, and e-commerce",
      "LinkedIn: Ideal for B2B and professional services",
      "Twitter: Useful for real-time updates and brand voice",
      "YouTube: Perfect for video content and tutorials",
      "Pinterest: Best for visual and product-based businesses",
    ],
  },
];

const tabs = [
  {
    title: <>Meta ads</>,
    content: {
      heading:
        "Meta Ads are digital ads controlled by Meta's platforms, mainly Facebook, Instagram...",
      features: [
        "Great for online visibility",
        "Connect with the digital world",
        "Great for engagement",
        "Customized audience",
      ],
      link: "/meta-ads",
      percentage: "93%",
      percentageNote:
        "Of customers reported that their online experience begins with search",
    },
  },
  {
    title: (
      <>
       Linkedin ads
      </>
    ),
    content: {
      heading:
        "Through linkedin ads we can run advertisements on linkedin, targeting professionals and businesses. They help...",
      features: [
        "Reach the right people",
        "Great for B2B marketing.",
        "Great for brand awareness campaigns.",
        "Great for targeting professionals & businesses.",
      ],
      link: "/linkedin-ads",
      percentage: "82%",
      percentageNote:
        "Clients saw immediate uplift in lead generation from paid campaigns",
    },
  },
  {
    title: (
      <>
       YouTube ads
      </>
    ),
    content: {
      heading:
        "YouTube Ads are paid video commercials that play on YouTube prior to, during...",
      features: [
        "Google integration.",
        "Great for engagement.",
        "Great for vast audience",
        "Great for brand visibility",
      ],
      link: "/youtube-ads",
      percentage: "82%",
      percentageNote:
        "Clients saw immediate uplift in lead generation from paid campaigns",
    },
  },
];  

const SocialMediaMarketing = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAccordionToggle = (index) => {
    setActiveTabIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      aria-labelledby="seo-heading"
      className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] pt-10 md:pt-18 pb-16 md:pb-18 lg:pb-22 px-5 md:px-16 lg:px-15 xl:px-30"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="space-y-6">
          <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-8 lg:mb-10">
            Social Media Marketing
          </h3>
          <h2
            id="seo-heading"
            className="text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight text-black"
          >
            Social Media Marketing That Delivers Results
          </h2>
          <h6 className="text-gray-700 text-base md:text-lg max-w-lg font-light">
            Struggling to find PPC experts who really understand your business
            and can actually drive long term results? Our world-class marketers
            would love to help your business thrive!
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

      <div className="max-w-7xl mx-auto pt-52 md:pt-88 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-28 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-2 md:mb-6">
            Boost Your Brand Visibility on Every Platform
          </h3>
          <h6 className="text-gray-600 text-sm md:text-[16px] max-w-xl font-light">
            Use the professional social media marketing services from Digital
            Market Tap to increase your online visibility. Using platforms like
            Instagram, Facebook, LinkedIn, Twitter, and YouTube, we develop
            compelling content, manage data-driven advertising campaigns, and
            cultivate enduring audience relationships.
          </h6>
        </div>
        <div className="font-syne border-l-1 border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4">
          {[
            "4x more leads",
            "Creative Campaigns",
            "Organic + Paid Growth",
            "Platform-Specific Strategies",
            "Social Media Marketing Strategy",
            "Marketing ideas according to your niche",
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
          How our social media marketing <br /> service can help grow your{" "}
          <br /> revenue
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
              Engage, Influence, and Convert with Smart Social Strategies
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2 font-light">
              In today's digital world, social media marketing emerges as a game
              changer for businesses that want to establish a stronger online
              presence. With billions of active users on sites like Facebook,
              Instagram, LinkedIn, Twitter (X), and YouTube, social media is now
              more than just a place to connect; it's a powerfull tool for brand
              promotion, traffic generation, and lead generation. <br /> <br />{" "}
              For that, you need social media marketing experts who have enough
              years of experience working with all kinds of businesses because
              regardless of your company's size—startup, small, or large—SMM
              helps you connect with your audience and increase visibility,
              loyalty, and trust, so for engagement, brand awareness,
              visibility, and trust, social media marketing is a must-have
              service. And we provide the best social media marketing service in
              Delhi.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Why choose DMT for social media marketing?
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2 font-light">
              At Digital Market Tap, we combine strategy, data, and creativity
              to create a powerful social media presence for your company. After
              working over 8 years as a marketing agency and working with over
              3000+ brands, we can proudly say we are the best digital marketing
              agency in Delhi, India.
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

      <section className="max-w-7xl mx-auto py-6 md:py-12 lg:py-24">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center pb-6 font-medium md:font-semibold">
          What is included in the social media marketing service?
        </h1>
        <h6 className="font-light text-md md:text-lg max-w-5xl mx-auto text-center pb-8 md:pb-10 lg:pb-18 text-[#5a5a5a]">
          Our social media marketing services include content creation,
          scheduling, audience engagement, analytics tracking, campaign
          strategy, platform management, and brand growth across major social
          platforms.
        </h6>
        <div className="hidden lg:flex rounded-[60px] overflow-hidden bg-black">
          <div className="w-1/3 p-12 flex flex-col gap-4 text-white relative">
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`font-syne !w-[150%] relative cursor-pointer transition-all duration-300 pl-12 pr-16 py-4 text-left text-lg md:text-2xl font-medium leading-tight -ml-8
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
          <div className="w-3/3 bg-[#f7f7fa] py-20 lg:pl-10 xl:pl-36 lg:pr-4 xl:pr-16 flex items-center justify-between gap-15 rounded-[60px] font-syne">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-6 leading-snug text-left">
                {tabs[activeIndex]?.content.heading}
              </h2>
              <ul className="space-y-4 text-md text-black">
                {tabs[activeIndex]?.content.features.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#f89e1b] w-6 h-6" /> {item}
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
           const isOpen = activeTabIndex === index;
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

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">
          The proof is in the numbers
        </p>
        <h1 className="text-3xl lg:text-5xl text-center font-semibold pb-4">
          Why paid search Ads can bring in the numbers{" "}
        </h1>
        <div className="w-full">
          <div className="max-w-8xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6 pt-4">
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  68%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl hover:text-black" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
               of growth rate in brand awareness for businesses that start doing
search ads.
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
              more genuine leads and accurate geographical targeting by paid ads.
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
             more brand awareness and engagement by social media marketing.
              </h6>
            </div>
          </div>
        </div>
      </div>

         <div className="w-full pt-8 md:pt-14 lg:pt-24">
        <div className="flex flex-col md:flex-row items-center bg-[#f7f7fa] rounded-[25px] md:rounded-[50px] overflow-hidden">
          <div className="md:w-1/2 px-6 md:px-12 lg:px-18 py-8">
            <FaQuoteLeft className="text-[#f89e1b] text-3xl mb-4" />
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

            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-white bg-opacity-90 px-5 md:px-8 py-5 md:py-6 rounded-tl-[40px] md:rounded-tl-[60px]">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
                <span className="font-semibold text-sm mt-1 font-syne">
                  5000+ Client reviews
                </span>
              </div>
              <a
                href="/about"
                className="font-syne inline-block text-xs md:text-sm font-semibold md:font-bold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200 uppercase"
              >
                View all reviews
              </a>
            </div>
          </div>
        </div>
      </div>

       <div className="pb-8 pt-12 md:pt-16 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-3">
          Creating Success
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
          What makes our Social Media Marketing services so {" "}
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

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          FAQs about Social Media
          <br />
          Marketing
        </h1>
        <h6 className="text-center text-md md:text-lg font-light text-gray-500 pb-4">
          Looking to learn more about social media marketing for your business?
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
    </section>
  );
};

export default SocialMediaMarketing;
