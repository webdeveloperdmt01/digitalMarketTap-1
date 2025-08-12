import React, { useState } from "react";
import { FaArrowRight, FaPlus, FaMinus, FaCheckCircle, FaSearchDollar, FaUserTie, FaGoogle, FaQuoteLeft, FaStar, FaChartLine } from "react-icons/fa";
import QuoraMarketingImg from "../assets/quora-mkt.png";
import SeoImg from "../assets/seoimg.png";
import SeoGoogleExperts from "../assets/SeoGoogleExperts.jpg";
import womanTalking from "../assets/womanTaking-Seo.jpg";
import { NavLink } from "react-router-dom";
import RocketBlue from "../assets/blueRocket.png"
import GooglePartner1 from "../assets/google-partner-1.png";




const faqs = [
  {
    question: "How can Quora help my business grow?",
    answer:
      " Quora is a question-and-answer platform with more than 300 million active users, so by providing valuable knowledge about your resource, you can increase brand visibility, drive traffic, and build trust.",
  },
  {
    question: "Is Quora helpful for SEO purposes?",
    answer:
      "Yes, Quora can be very helpful for SEO purposes because Quora has high domain authority, and well-written questions also get ranked on Google. Great for backlinks.",
  },
  {
    question: " What are Quora Spaces, and how can they help in marketing?",
    answer:
      "Quora Spaces are specialized communities in Quora where you share content, answer questions, and interact with focused audiences, allowing you to build stronger connections and credibility in the particular subjects.",
  },

];


const services = [
  {
    icon: <FaSearchDollar className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "Great for Trust and Authority Building",
    description:
      "By continuously providing valuable, insightful, and correct information on Quora, you gain credibility and demonstrate your expertise. This places you as a trustworthy authority within your niche, prompting your audience to be more inclined towards engaging with and believing your suggestions.",
  },
  {
    icon: <FaUserTie className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "Great for High-Authority Backlinks",
    description:
      "Quora is a great platform for questions and answers where you can ask SEO-optimized questions, and these questions also appear in the Google search engine in frequently asked questions. Quora has a very strong domain authority, and linking your website can improve your website ranking.",
  },
  {
    icon: <FaGoogle className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "Provide Massive Organic Reach",
    description:
      "Quora questions and answers tend to show up in Google search results. If you can answer SEO-tuned, helpful questions, you can attract search traffic without huge ad spending. For that you need an expert digital marketing agency, and we are the best digital marketing agency in Delhi.",
  },
];

const QuoraMarketing = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-labelledby="seo-heading" className="bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] pt-10 md:pt-18 pb-6 md:pb-8 px-5 md:px-10 lg:px-15  xl:px-30">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-30">
        <div>
          <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-18">Quora Marketing</h3>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mt-2 leading-tight">Quora marketing</h2>
          <h6 className="text-md text-gray-500 mt-5 mb-10 font-light">Quora is one space that is still on the rise in terms of power but underutilized by most
            companies. With more than 300 million monthly active users, Quora is not merely a
            Q&A site, it is a goldmine waiting to be tapped for brand creation, lead capture, and
            SEO.

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
            src={QuoraMarketingImg}
            alt="Marketing Visual"
            className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
          />
        </div>
      </div>

      <div className=" pt-12 md:pt-18 lg:pt-38 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-28 items-start">
        <div>
          <h3 className="text-2xl md:text-5xl font-semibold text-black leading-tight mb-2 md:mb-6">
            What is Quora marketing?
          </h3>
          <h6 className="text-gray-500 text-sm md:text-md max-w-2xl font-light">
            Quora is a platform where you can promote your brand by questions and answers. You
            can answer most trending questions related to your niche and even ask questions for
            your brand and products. And key benefits of Quora marketing are:

          </h6>
        </div>
        <div className="font-syne border-l-1 border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4">
          {["Great for brand visibility", "Great for organic traffic", "Generate high-quality leads", "Help in SEO backlinks", "Connect with audience", "Establish you as an industry expert",].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-[#f89e1b] text-2xl mt-0.5" />
              <span className="text-gray-700 text-base md:text-md">{item}</span>
            </div>))}
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <p className="text-center text-md font-semibold uppercase pb-4">Digital Market tap</p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-10 lg:pb-24">Why Quora Marketing Matters in 2025</h1>
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15">
          <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <img
              src={SeoImg}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="pl-2 md:pl-8 lg:pl-20">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">Here’s why Quora marketing is crucial in 2025:s</h3>
            <h6 className="text-sm lg:text-[16px] font-light text-gray-500 mt-2">
              Quora is a great platform for organic traffic with more than 300 million active users. It
              became great for organic traffic because questions and answers from Quora often
              appear on Google; you can get traffic without spending much on ads. By providing
              valuable answers in your niche, you can be a go-to expert. It also helps greatly in
              SEO-optimized, valuable answers because rather than creating posts which vanish in
              sometime quora answers keep on generating leads for years. <br /> <br /> If you want a site where
              your content works for you years after posting it, Quora is your solution. Begin now, be
              regular, and your brand visibility and leads will start growing.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              Future of Quora Marketing: Trends to Watch in 2025

            </h3>
            <h6 className="text-sm lg:text-[16px] font-light text-gray-500 mt-2">Quora marketing is amongst the cheapest digital marketing strategies for 2025. With
              value delivery through detailed answers, audience interaction, and using both organic
              and paid features, you can establish credibility, drive relevant traffic, and enhance the
              brand's online influence.
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

      <div className="pb-8 pt-10 md:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-3">Creating Success</p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">Top Benefits of Quora Marketing for Businesses</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-black flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-left">{service.title}</h3>
                <p className="text-md text-[#57595b] text-left">{service.description}</p>
              </div>
            </div>))}
        </div>
      </div>

      <div className="w-full pt-8 md:pt-14 lg:pt-24">
        <div className="flex flex-col md:flex-row items-center bg-[#f7f7fa] rounded-[25px] md:rounded-[50px] overflow-hidden">
          <div className="md:w-1/2 px-6 md:px-12 lg:px-18 py-8">
            <FaQuoteLeft className="text-orange-400 text-3xl mb-4" />
            <p className="text-md md:text-xl lg:text-2xl italic mb-6">
              “DMT PPC service is light years ahead of the competition because of their intelligent, specialized and courteous account managers.”
            </p>
            <div>
              <p className="font-bold uppercase tracking-wide">Director of Marketing</p>
              <p className="text-gray-600">Zarra Home</p>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <img src={womanTalking} alt="Testimonial video" className="w-full h-full object-cover" />

            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-white bg-opacity-90 px-8 py-6 rounded-tl-[40px] md:rounded-tl-[60px]">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
                <span className="font-syne font-semibold text-sm mt-1">5000+ Client reviews</span>
              </div>
              <a href="/about" className="font-syne inline-block text-sm font-bold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200 uppercase">View all reviews</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">The proof is in the numbers</p>
        <h1 className="text-3xl lg:text-5xl text-center font-semibold pb-4">Boost your business by getting Quora marketing service.
        </h1>
        <div className="w-full">
          <div className="max-w-8xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6 pt-4">
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">90%</h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#F89E1B] text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">more growth in organic traffic for those who get our Quora marketing service.</h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">95%</h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#F89E1B] text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light"> more growth in organic reach for those who get our Quora marketing service.</h6>
            </div>
            <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
              <div className="flex items-center gap-4 mb-6 justify-between">
                <h3 className="text-5xl font-bold text-black leading-tight">90%</h3>
                <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                  <FaChartLine className="text-[#F89E1B] text-2xl" />
                </div>
              </div>
              <h6 className="text-[#5c5f61] font-light">more growth in brand visibility for those who get our Quora marketing service.</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          FAQs about Quora
          <br />
          Marketing
        </h1>
        <h6 className="text-center text-md md:text-lg font-light text-gray-500 pb-4">
          Looking to learn more about Quora marketing for your business?
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

export default QuoraMarketing;
