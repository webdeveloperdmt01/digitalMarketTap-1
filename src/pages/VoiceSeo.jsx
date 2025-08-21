import React, { useState } from "react";
import AISeo from "../assets/voiceImg.jpeg";
import AISeo2 from "../assets/voiceImg2.jpg";
import Badge0 from "../assets/clutch-badge.png";
import Badge1 from "../assets/new-badge.png";
import Badge2 from "../assets/new-badge2.png";
import Badge3 from "../assets/new-badge3.png";
import Badge4 from "../assets/logo_hubspot.png";
import rocket from "../assets/rocket.png";
import SparklingStar from "../assets/sparklingStarBlack.png";
import {
  FaArrowRight,
  FaRocket,
  FaBullseye,
  FaSearch,
  FaEnvelope,
  FaPlus,
  FaMinus,
  FaCheckCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const VoiceSeo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      icon: <FaBullseye className="text-[#F89E1B] text-2xl hover:text-black" />,
      title: <>We Focus on local SEO.</>,
      description:
        "It's also majorly focused and supports local businesses as users search for services “near me,” and if your business is voice search optimized, it increases your chances of getting selected, and it will also increase your ranking, so get your brand heard first by smart assistants like Alexa, Siri, and Google",
    },
    {
      icon: <FaSearch className="text-[#F89E1B] text-2xl hover:text-black" />,
      title: <>Stay Ahead of the Competition</>,
      description:
        "There are still many businesses ignoring voice search optimization because they don’t understand its importance, so it's still a big opportunity to get your content voice search optimized to get ahead of big competitors. For that, Digital Market Tap will help you to get the best SEO service",
    },
    {
      icon: <FaEnvelope className="text-[#F89E1B] text-2xl hover:text-black" />,
      title: <>Faster Website Loading</>,
      description:
        "Voice search optimization increases website overall performance and increases website speed load. Voice SEO also improves overall SEO performance by emphasizing speed and mobile optimization, so you can rank faster on search engines and get more traffic and leads.",
    },
    {
      icon: <FaRocket className="text-[#F89E1B] text-2xl hover:text-black" />,
      title: <>Increased Website Traffic & Conversions</>,
      description:
        "Voice SEO increases website traffic & conversions because it makes your content voice search optimized, and many people use voice search more than typing, so if your content is voice search friendly, then it increases your chance to get picked. The more it is seen, the more leads and traffic you will get.",
    },
  ];

  const faqs = [
    {
  question: "How is Voice SEO affecting local businesses?",
  answerPoints: [
    "The majority of voice searches are location-based queries, such as \"best pizza near me\" or \"salon near Dwarka Mor.\" Voice SEO + local SEO optimization benefits your business:",
    "Showing up in \"near me\" searches",
    "Capturing high-intent customers",
    "Enhancing foot traffic and local visibility",
  ],
},
    {
      question: "Why is Voice SEO so essential?",
      answerPoints: [
        "As voice-enabled searches grow in popularity, users are moving from typing to speaking queries. Voice SEO benefits companies by:",
    "Showing up in voice search results",
    "Attract mobile and smart speaker users",
    "Enhance local SEO performance",
    "Get ahead of the competition",
  ],
    },
    {
      question: "How does Voice SEO function?",
      answerPoints: [
    "Utilizing long-tail and question-based keywords",
    "Optimizing for featured snippets",
    "Enhancing page speed and mobile-friendliness",
    "Offering clear, concise user answers",
  ],
    },
    {
      question: "What's the difference between Voice SEO and Traditional SEO?",
      answerPoints: [
    "Traditional SEO prioritizes typed keywords",
    "Voice SEO is optimized around spoken queries, which tend to be longer and more conversational Example:",
    "Typed search: \" Best restaurants Delhi\" ",
    "Voice search: \"Which are the best restaurants near me in Delhi?\"",
  ],
    },
  ];

  return (
    <main className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] px-5 md:px-10 lg:px-16 xl:px-30">
      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-30">
          <div>
            <h5 className="text-sm md:text-base lg:text-md font-semibold text-black pt-4 md:pt-6 lg:pt-10">
              Voice SEO
            </h5>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-3 md:pt-8">
              Optimize for Voice, Not Just Text
            </h1>
            <h6 className="text-sm font-light lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8">
              The best digital marketing agency in Delhi. Digital Marketing Tap
              presents you Voice SEO, in which your website will be optimized
              for voice, not just for text, because over 50% of searches are
              voice-based
            </h6>
            <NavLink
              to="/"
              className="font-syne text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#F89E1B]"
            >
              VIEW OPEN POSITIONS <FaArrowRight />
              <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
            </NavLink>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={AISeo}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </div>

      <div className=" pt-5">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
          <img
            src={AISeo2}
            alt="Team Collaboration"
            className="w-full object-cover"
          />
        </div>
        <div className="max-w-2xl text-left">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3">
            {" "}
            Our Capabilities
          </p>
          <h2 className="text-2xl md:text-5xl font-semibold text-black mb-6 leading-tight">
            Dominate Voice Search with Smart SEO Tactics
          </h2>
          <button className="font-syne group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden">
            <span className="relative z-10 flex items-baseline gap-2">
              View All Solutions <FaArrowRight />
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
          </button>
        </div>
      </div>

      <div className="pt-5 md:pt-8 lg:pt-10 pb-4 md:pb-14 lg:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 lg:p-6 xl:p-8 text-black flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-left">
                  {service.title}
                </h3>
                <p className="text-sm text-[#57595b] mb-2 text-left">
                  {service.description}
                </p>
              </div>

              <div className="text-left mt-auto">
                <a
                  href="#"
                  className="font-syne group inline-block text-sm font-semibold relative border-b-2 border-[#6754e9]"
                >
                  LEARN MORE
                  <span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-[#F89E1B] group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 md:pt-6 lg:pt-8 pb-26 md:pb-28 lg:pb-32">
        <h5 className="text-md font-medium pb-4 uppercase">A.I. SEO</h5>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-6xl pb-4 md:pb-8">
          Elevating Enterprise SEO Services
        </h1>
        <h3 className="text-left font-semibold text-md md:text-lg text-black pb-3 md:pb-7">
          Looking to learn more about SEO with Ai for your business? Fill the
          Form: <br />
          When you partner with Numerique, we take care of the heavy lifting, so
          you can enjoy more website traffic, leads, and revenue.
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-15 lg:gap-40">
          <div>
            <hr className="border border-gray-200" />

            {[
              "Review your marketing goals: Begin by reviewing your marketing goals and objectives",
              "Evaluate your target audience to see if they have changed or if you need to adjust your messaging to better reach them.",
              "Analyze your website to ensure it is user-friendly, mobile-responsive, and optimized for search engines.",
              "Review your content marketing efforts, including your blog posts, social media, and email marketing.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-md text-[#444] pt-3 md:pt-6 lg:pt-8"
              >
                <FaCheckCircle className="text-[#F89E1B] text-2xl mt-1 shrink-0" />
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -top-8 right-4 flex items-center gap-2"></div>
            <div className="px-1">
              <div className="bg-white rounded-[32px] shadow-[12px_12px_0_0_black] px-4 md:px-6 pt-8 pb-10 w-full">
                <h2 className="text-2xl font-semibold text-black pb-6">
                  Get your Quotation
                </h2>
                <img
                  src={rocket}
                  alt="rocket"
                  className="absolute top-0 right-0 md:right-12 lg:right-20 h-20 md:h-34 -mt-8 md:-mt-10 lg:-mt-13 mr-0 md:-mr-8 lg:-mr-10 rotate-35 object-contain"
                />
                <img
                  src={SparklingStar}
                  alt="SparklingStar"
                  className="absolute top-0 right-0 md:right-12 lg:right-50 h-10 md:h-14 -mt-4 md:-mt-6 lg:-mt-6 mr-15 md:mr-10 lg:-mr-10 rotate-[35deg] object-contain"
                />
                <form className="font-syne flex flex-col space-y-6 text-[#a4a4a4]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#F89E1B] rounded-2xl outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#F89E1B] rounded-2xl outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#F89E1B] rounded-2xl outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#F89E1B] rounded-2xl outline-none"
                  />
                  <textarea
                    placeholder="What can we help you with?"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#F89E1B] rounded-2xl outline-none resize-none h-28"
                  ></textarea>
                  <button
                    type="submit"
                    className="relative w-full bg-black text-white font-semibold py-3 rounded-2xl hover:bg-[#F89E1B] transition duration-300 group"
                  >
                    <span className="relative inline-block">
                      SEND ME A PROPOSAL →
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 pt-8 md:pt-12 pb-8 md:pb-10 lg:pt-16 text-center lg:text-left">
        <div className="w-full lg:w-1/3 flex justify-end">
          <p className="text-xl font-semibold text-gray-800 pr-10">
            Credentials & <br className="hidden md:block" /> Recognition:
          </p>
        </div>
        <div className="w-full lg:w-2/3 flex justify-center lg:justify-start flex-wrap items-center gap-4 md:gap-6 py-2">
          <img
            src={Badge0}
            alt="Badge 0"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={Badge1}
            alt="Badge 1"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={Badge2}
            alt="Badge 2"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={Badge3}
            alt="Badge 3"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={Badge4}
            alt="Badge 4"
            className="h-16 md:h-20 object-contain"
          />
        </div>
      </div>
<div className="pb-4 pt-8 md:pt-12 lg:pt-18">
              <p className="font-kanit text-center text-md font-semibold uppercase pb-4">FAQ</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
                FAQs about Voice
                <br />
                Seo
              </h1>
              <h6 className="text-center text-md md:text-lg font-light text-gray-500 pb-4">
                Looking to learn more about Voice Seo for your business?
                Browse our FAQs
              </h6>
            </div>
            <div className="max-w-5xl mx-auto pt-8 pb-16 md:pb-12 xl:pb-22 space-y-2 md:space-y-4">
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
          {faq.answerPoints && Array.isArray(faq.answerPoints) ? (
            <ul className="list-disc ml-5 mt-2 space-y-1">
              {faq.answerPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{faq.answer}</p>
          )}
        </div>
      )}
    </div>
  ))}
</div>

    </main>
  );
};

export default VoiceSeo;
