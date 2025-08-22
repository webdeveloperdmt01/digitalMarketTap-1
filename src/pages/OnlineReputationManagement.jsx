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
import OnlineReputationManagementImg from "../assets/onlineReputationMgmt.jpg";
import SeoImg from "../assets/seoimg.png";
import SeoGoogleExperts from "../assets/SeoGoogleExperts.jpg";
import Stats from "../assets/Stats.png";
import Stats2 from "../assets/Stats2.png";
import PeopleDiscuss from "../assets/peopleDiscussOnTopic.png";
import womanTalking from "../assets/womanTaking-Seo.jpg";
import { NavLink } from "react-router-dom";
import RocketBlue from "../assets/blueRocket.png";
import GooglePartner1 from "../assets/google-partner-1.png";
import InfoTabs from "../components/InfoTabs";

const faqs = [
  {
    question: " Why is online Reputation Management Service is important ?",
    answer:
      " Online Reputation Management is the practice promoting, improving, and balancing brand or an individual online reputation. It involves managing reviews, social media mentions, search engine results, and public perception to ensure a positive and trustworthy online image",
  },
  {
    question: " Do you provide Online Reputation Management services?",
    answer:
      " Absolutely, yes we do provide online reputation service to improve, and monitor your online reputation. As we all know in today's digital world online reputation matters the most, as it increases marketing value, customer trust. Positive online reputation is very important for any business.",
  },
  {
    question: " What services are included in ORM?",
    answer:
      " Our ORM services typically include review monitoring and response, Google my business optimization which is very important for any business, Online listing management, press releases and positive content creation for positive brand values",
  },
];

const services = [
  {
    icon: (
      <FaSearchDollar className="text-[#f89e1b] text-2xl hover:text-[#000]" />
    ),
    title: "We Boost your positive content.",
    description:
      "If you are looking for the best digital marketing agency in Delhi to uplift your online reputation, you're at the right place. We will help you to boost your positive content and create positive brand awareness. We push down negative results and promote positive, trustworthy content. To boost your online reputation.",
  },
  {
    icon: (
      <FaUserTie className="text-[#f89e1b] text-2xl hover:text-[#000]" />
    ),
    title: "We Improve brand appearance.",
    description:
      "In our online reputation service, we help you to improve brand appearance by delivering positive reviews. We create positive brand values about your business so that other users can trust your brand, and a positive image of your brand can be generated in the market so your audience sees your best side—always.",
  },
  {
    icon: <FaGoogle className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "We handle negative feedback smartly.",
    description:
      "We manage your negative criticism intelligently, amplify your good content, and make your audience see your best side—every time. Whether you're a new business, mature business, or public personality, we keep your credibility safe and enable you to build trust, draw more customers, and develop with assurance",
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

const OnlineReputationManagement = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Transparency");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="seo-heading"
      className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] pt-10 md:pt-18 pb-6 md:pb-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 xl:gap-30 items-center px-6 md:px-10 lg:px-15 xl:px-30">
        <div className="pb-8">
          <h3 className="uppercase text-xs md:text-sm font-bold tracking-widest text-black mb-8 md:mb-10 lg:mb-18">
            ONLINE REPUTATION MANAGEMENT
          </h3>
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mt-2 leading-tight">
            {" "}
            Online Reputation <br />
            Management
          </h2>
          <h6 className="text-md md:text-lg text-gray-500 mt-5 mb-10 font-light">
            In today's online age, your reputation online is your initial
            impression. Digital Market Tap provides professional online
            reputation management (ORM) solutions that assist companies in
            establishing, defending, and enhancing their corporate image on
            search engines, social media sites, and review sites.
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
            src={OnlineReputationManagementImg}
            alt="Marketing Visual"
            className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
          />
        </div>
      </div>

      <div className="pt-12 md:pt-28 lg:pt-38 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-28 items-start px-6 md:px-10 lg:px-15 xl:px-30">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-2 md:mb-6">
            What is online reputation management?
          </h3>
          <h6 className="text-gray-600 text-sm md:text-md max-w-2xl font-light">
            Online Reputation Management (ORM) is the practice of tracking,
            shaping, and enhancing the way your business is viewed on the web.
            Whether you're responding to bad reviews, sharing good news, or
            making sure accurate details are visible in the top search results,
            ORM keeps you in charge of your company story. This includes:
          </h6>
        </div>
        <div className="font-syne border-l-1 border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4">
          {[
            " Review Monitoring & Response",
            " Search Engine Result Optimization",
            " Brand Protection Strategy",
            "Reputation Analytics & Reporting",
            " Content Creation & PR",
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
        <h1 className="text-xl md:text-3xl lg:text-5xl text-center font-semibold pb-6 md:pb-10 lg:pb-24">
          How our ORM service can help <br /> grow your revenue
        </h1>
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15">
          <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <img
              src={SeoImg}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="pl-2 lg:pl-8 xl:pl-20">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Why ORM Matters for Your Business
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2 font-light">
              The online reputation of your business creates a positive effect
              on other clients. If your online reputation is weak, then you're
              probably losing a lot of customers already, because 90% of users
              check online reviews before visiting or taking their service, so
              if your reviews are not positive or sufficient, then they will not
              choose you, and it will also lead to lost sales and trust. ORM
              helps your business stay ahead of false information and
              competitors tactics. Your online reputation can break your brand
              presence, so it's better to build a strong online reputation.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24 px-5 md:px-10 lg:px-15 xl:px-30">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Stay Ahead with a Strong Digital Presence

            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2 font-light">
            In the current competitive online market, your reputation can either make or break your
business. With Digital Market Tap, you'll remain ahead of the game with a solid, positive
online reputation. With our online reputation management, we assist in tracking,
controlling, and enhancing the way your brand looks on search engines, reviews, and
social media
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

      <div className="pt-10 md:pt-12 pb-8 px-5 md:px-10 lg:px-15 xl:px-30">
        <p className="text-center text-md font-semibold uppercase pb-1 md:pb-3">
          Creating Success
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
       What makes our ORM services so effective?
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

      <div className="pb-4 pt-2 md:pt-8 lg:pt-18 px-5 md:px-10 lg:px-15 xl:px-30">
        <p className="text-center text-md font-semibold uppercase pb-2 md:pb-4">
          what you get
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-2 md:pb-4">
          What is included in our paid search marketing services?{" "}
        </h1>
        <p className="text-center text-md font-base text-gray-500 pb-4">
          When you partner with Numerique, you’ll gain access to our full range
          of paid SEM services. These services are designed to <br /> optimize
          every facet of your paid advertising, including:
        </p>
      </div>
       <InfoTabs/>

      <div className="w-full pt-4 md:pt-14 lg:pt-24 px-5 md:px-10 lg:px-15 xl:px-30">
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

            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-white bg-opacity-90 px-8 py-6 rounded-tl-[30px] md:rounded-tl-[60px]">
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

      <div className="pb-4 pt-10 md:pt-12 lg:pt-18 px-5 md:px-10 lg:px-15 xl:px-30">
        <p className="text-center text-md font-semibold upperca se pb-4">
          The proof is in the numbers
        </p>
        <h1 className="text-3xl lg:text-5xl text-center font-semibold pb-4">
        How online reputation can bring in
the numbers?{" "}
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
                 users notice 4x interaction rate after managing online reputation.

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
                users notice more traffic and engagement after managing online reputation

              </h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">
                  98%
                </h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#f89e1b] hover:text-black text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">
               users notice boost in their business after managing online reputation
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 md:py-0 px-5 md:px-10 lg:px-15 xl:px-30 relative">
        <section className="bg-[#f8f8fb] rounded-[30px] md:rounded-[60px] py-12 px-4 sm:px-6 md:px-12 overflow-hidden max-w-7xl mx-auto my-12 text-center shadow-sm">
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
            className="font-syne group bg-black text-white mt-6 px-6 sm:px-8 md:px-10 py-3 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 inline-block relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-1">
              GET A PROPOSAL <FaArrowRight />
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </span>
          </NavLink>
        </section>
      </div>

      <div className="pb-16 md:pb-18 lg:pb-22 pt-8 md:pt-12 lg:pt-18 px-0 md:px-10 lg:px-30">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          FAQs about Online Reputation Management
        </h1>
        <h6 className="text-center font-light text-md md:text-lg text-gray-500 pb-4">
          Looking to learn more about Online Reputation Management for your
          business? Browse our FAQs
        </h6>

        <div className="max-w-5xl mx-auto pt-2 md:pt-8 space-y-2 md:space-y-4 px-5 md:px-0">
  {faqs.map((faq, index) => (
    <div key={index} className="border-t border-gray-300 pb-0 md:pb-4">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full font-syne flex justify-between items-center text-left text-lg md:text-xl font-medium hover:text-[#f89e1b] focus:outline-none pt-2 md:pt-5"
      >
        <span className="flex-1">{faq.question}</span>
        <div className="flex-none w-7 h-7 md:w-8 md:h-8 flex justify-center items-center">
          {openIndex === index ? (
            <FaMinus className="w-full h-[15px] text-[#000000]" />
          ) : (
            <FaPlus className="w-full h-[15px] text-[#f89e1b]" />
          )}
        </div>
      </button>
      {openIndex === index && (
        <p className="mt-3 text-gray-500 text-md md:text-xl lg:text-lg font-light md:text-md font-kanit">
          {faq.answer}
        </p>
      )}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default OnlineReputationManagement;
