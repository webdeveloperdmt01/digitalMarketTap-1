import React, { useState } from "react";
import {
  FaCheckCircle,
  FaSearchDollar,
  FaUserTie,
  FaGoogle,
  FaQuoteLeft,
  FaStar,
  FaChartLine,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SeoImg from "../assets/seoimg.png";
import SeoGoogleExperts from "../assets/SeoGoogleExperts.jpg";
import Stats from "../assets/Stats.png";
import Stats2 from "../assets/Stats2.png";
import PeopleDiscuss from "../assets/peopleDiscussOnTopic.png";
import womanTalking from "../assets/womanTaking-Seo.jpg";

const services = [
  {
    icon: (
      <FaSearchDollar className="text-[#f89e1b] text-2xl hover:text-black" />
    ),
    title: "Increase global & local customers.",
    description:
      "Multilingual SEO optimizes your website in different languages, which helps you to connect with global and local customers. It builds trust & credibility across borders. It expands global reach and emotionally connects you with your customer.",
  },
  {
    icon: <FaUserTie className="text-[#f89e1b] text-2xl hover:text-black" />,
    title: "100% transparency and customer support",
    description:
      "We follow 100% transparency. It means being honest with our customers regarding prices, and results. We don't charge any hidden fees and provide weekly reports to your customers and also provide personalized support to better understand your business. ",
  },
  {
    icon: <FaGoogle className="text-[#f89e1b] text-2xl hover:text-black" />,
    title: "Get Rank Higher in Every Language and Region",
    description:
      "When you partner with Digital market tap we unlock all your success and connect you with your customers globally & locally. Get The Best SEO service in Delhi.",
  },
];

const contentData = {
  Transparency: {
    title: "100% Campaign transparency",
    description:
      "We cultivate an environment of transparency and communication in all we do...",
    image: Stats,
  },
  "Team of Experts": {
    title: "Team of Marketing Experts",
    description:
      "Our seasoned professionals bring years of industry experience...",
    image: Stats2,
  },
  Results: {
    title: "Results that Matter",
    description: "Our strategies drive measurable results...",
    image: PeopleDiscuss,
  },
};

const MultilingualSeo = () => {
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
      <div>
        <p className="text-gray-600 text-sm md:text-md font-bold uppercase text-center">
          Create your own
        </p>
        <h3 className="text-2xl md:text-5xl font-semibold text-black mb-2 md:mb-6 text-center">
          Various Countries various Language{" "}
          <span className="hover:text-[#f89e1b] cursor-pointer"> Barriers</span>
        </h3>
        <p className="text-gray-600 text-sm md:text-md text-center">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. <br />
          It is a paradisematic country, in which...
        </p>
        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <NavLink
            to="/"
            className="group bg-[#f89e1b] text-white px-5 py-3 md:px-10 md:py-4 rounded-[30px] text-sm font-semibold border border-transparent hover:bg-white hover:text-[#f89e1b] hover:border-[#f89e1b] transition duration-300 relative overflow-hidden text-center"
          >
            <span className="relative z-10">PURCHASE NOW</span>
          </NavLink>

          <NavLink
            to="/"
            className=" group bg-white text-[#f89e1b] border border-[#f89e1b] px-5 py-3 md:px-10 md:py-4 rounded-[30px] text-sm font-semibold hover:bg-[#f89e1b] hover:text-white transition duration-300 relative overflow-hidden text-center"
          >
            <span className="relative z-10">TRY IT FOR FREE!</span>
          </NavLink>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 md:pt-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-28 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-black leading-tight mb-2 md:mb-6">
            Reach Global Audiences with Local Precision
          </h3>
          <h6 className="text-gray-600 text-sm md:text-md max-w-2xl font-light">
            Digital Market Tap offers Multilingual SEO to take your online
            presence globally. It helps you to take your content beyond borders
            and increases overall visibility, whether you are targeting
            international markets or multilingual regions it will help in all.
          </h6>
        </div>
        <div className="font-syne border-l-1 border-gray-300 pl-4 md:pl-12 lg:pl-26 space-y-4">
          {[
            "Language-specific keyword search",
            "Website structure and URL",
            "Translate meta tags and URL",
            "Localize content",
            "International backlink building",
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
          {" "}
          Multilingual SEO
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-10 lg:pb-24">
          What is Multilingual SEO?
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
              Why you need Multilingual Seo for global recognition
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base font-light text-[#545e5b] mt-2">
              The process of optimizing your website in many languages to rank
              in local search engines for various regions is known as
              multilingual SEO. We localize content—modifying keywords, content,
              and metadata for cultural relevance and search behavior—instead of
              just translating it. <br /> <br /> Multilingual SEO concentrates
              on optimizing for particular languages and the geographical areas
              where those languages are spoken. Multilingual SEO is great for
              businesses that want references globally; it helps in global
              recognition so you can connect with customers globally. If you're
              looking for the best SEO service in Delhi, we can help you.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Your Global Growth Partner in Multilingual SEO
            </h3>
            <h6 className="text-sm lg:text-[16px] font-light font-base text-[#545e5b] mt-2">
              We have over 5 years of experience in this field. Our multilingual
              SEO experts will make sure to deliver the best service by using
              both technical and linguistic accuracy, which will guarantee that
              your material works in a variety of markets.
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
        <h6 className="text-center font-light text-sm uppercase pb-3">
          Get global recognition—Digital Market Tap
        </h6>
        <h1 className="text-xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
          Improve Rankings on Global & Local Search Engines
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
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-left">
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
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          What is included in our paid search <br /> marketing services?{" "}
        </h1>
        <p className="text-center text-md font-base text-gray-500 pb-4">
          When you partner with Numerique, you’ll gain access to our full range
          of paid SEM services. These services are designed to <br /> optimize
          every facet of your paid advertising, including:
        </p>
      </div>

      <div className="w-full pt-4 md:pt-14 lg:pt-24">
        <div className="flex justify-start mb-4 md:mb-8">
          <div className="inline-flex rounded-full bg-orange-100 p-2 md:p-1">
            {Object.keys(contentData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs md:text-base font-semibold px-3 py-1 md:px-5 md:py-2 transition-all duration-200 rounded-full ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "text-black/60 hover:text-orange-500"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 items-start">
          <div className="bg-[#ffdfbe] py-4 px-2 md:py-10 md:px-8 rounded-3xl w-full order-1 md:order-1">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              {contentData[activeTab].title}
            </h2>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              {contentData[activeTab].description}
            </p>
            <div className="bg-white rounded-xl">
              <img
                src={contentData[activeTab].image}
                alt={`${activeTab} chart`}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="max-w-xl order-2 md:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-3 md:mb-6 text-left">
              Why digital market <br /> tap is your top- <br /> choice
            </h2>
            <h6 className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 text-left font-light">
              We are a five-star rated holistic full-service digital marketing
              agency, serving thousands of clients. Our digital agency covers
              all aspects of internet marketing: SEO, social media, and PPC
              management, all the way to email marketing, website design, and
              web development.
            </h6>
            <div className="flex justify-start">
              <button className="font-syne group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden">
                <span className="relative z-10">
                  Get Proposal →
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
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

            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-white bg-opacity-90 px-8 py-6 rounded-tl-[18px] md:rounded-tl-[40px] md:rounded-tl-[60px]">
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
          The proof is in the results
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-4">
          Reach the Right Audience, in the Right Language
        </h1>
        <div className="w-full">
          <div className="max-w-8xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6 pt-4">
            <div className="text-left px-6 md:px-8 py-8 md:py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  75%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                of brand awareness and increase in businesses that started SEO
                service.
              </h6>
            </div>
            <div className="text-left px-6 md:px-8 py-8 md:py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  100%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                Of satisfaction percentage rate, by businesses those who get our
                services.
              </h6>
            </div>
            <div className="text-left px-6 md:px-8 py-8 md:py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  85%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
                Of genuine leads and increase in website traffic, and higher
                keyword ranking.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 md:py-6 lg:py-8">
        <h5 className="text-md font-medium pb-4 uppercase">Multilingual SEO</h5>
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
                <FaCheckCircle className="text-[#f89e1b] text-2xl mt-1 shrink-0" />
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

                <form className="font-syne flex flex-col space-y-6 text-[#a4a4a4]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#f89e1b] rounded-2xl outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#f89e1b] rounded-2xl outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#f89e1b] rounded-2xl outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#f89e1b] rounded-2xl outline-none"
                  />
                  <textarea
                    placeholder="What can we help you with?"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#f89e1b] rounded-2xl outline-none resize-none h-28"
                  ></textarea>
                  <button
                    type="submit"
                    className="relative w-full bg-black text-white font-semibold py-3 rounded-2xl hover:bg-[#f89e1b] transition duration-300 group"
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
    </section>
  );
};

export default MultilingualSeo;
