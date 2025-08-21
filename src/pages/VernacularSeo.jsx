import React, { useState } from 'react';
import AISeo from "../assets/vernacularImg.jpg";
import AISeo2 from "../assets/vernacularImg2.jpg";
import rocket from "../assets/rocket.png";
import Badge0 from "../assets/clutch-badge.png";
import Badge1 from "../assets/new-badge.png";
import Badge2 from "../assets/new-badge2.png";
import Badge3 from "../assets/new-badge3.png";
import Badge4 from "../assets/logo_hubspot.png";
import SparklingStar from '../assets/sparklingStarBlack.png';
import { FaArrowRight, FaRocket, FaBullseye, FaSearch, FaEnvelope, FaMinus , FaPlus, FaCheckCircle  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const VernacularSeo = () => {
 const [openIndex, setOpenIndex] = useState(null);
 
   const toggleFAQ = (index) => {
     setOpenIndex(openIndex === index ? null : index);
   };

const faqs = [
    {
  question: "How is Vernacular SEO different from Traditional SEO?",
  answerPoints: [
    "Traditional SEO is centered around optimizing content in a single, predominantly global language such as English, while Vernacular SEO adapts your strategy for local languages, reaching a wider and more diverse crowd.",
  ],
},
    {
      question: "Why is Vernacular SEO important?",
      answerPoints: [
        "As more and more internet users browse in regional languages, Vernacular SEO enables companies to:",
    "Extend their reach",
    "Gain the trust of local audiences",
    "Boost conversions by providing content in a user's preferred language"
  ],
    },
    {
      question: "What is Vernacular SEO?",
      answerPoints: [
    "Vernacular SEO entails:",
    "Translating or generating content in native languages",
    "Applying region-based keywords",
    "Optimizing meta tags, titles, and URLs",
    "Taking advantage of local directories and citations",
    "Maintaining multilingual SEO-friendly website architecture",
  ],
    },
    {
      question: "What are the advantages of Vernacular SEO?",
      answerPoints: [
    "Boosts organic traffic from regional searches",
    "Boosts customer engagement",
    "Establishes brand credibility with local users",
    "Boosts voice search optimization in local languages",
    "Provides you with a competitive advantage in untapped markets",
  ],
    },
  ];


   const services = [
      {
        icon: (
          <FaBullseye className="text-[#F89E1B] text-2xl hover:text-black" />
        ),
        title: (
          <>
            Wider Reach in Tier 2 & Tier 3 Cities
          </>
        ),
        description:
          "Most of the users are from non metro regions, and some are from villages, so they don't consume content in English to get connected with every customer. Vernacular SEO is the best for wider reach so users can get content in their preferred language.",
      },
      {
        icon: (
          <FaSearch className="text-[#F89E1B] text-2xl hover:text-black" />
        ),
        title: (
          <>
            Increase in engagement
          </>
        ),
        description:
          "Get more engagement, if your content is available in all the native languages, so the whole nation can consume your content which will automatically increase your engagement and also create a strong relationship with your customers.",
      },
      {
        icon: (
          <FaEnvelope className="text-[#F89E1B] text-2xl hover:text-black" />
        ),
        title: <>Boost brand trust and loyalty</>,
        description:
          "Customers tend to have greater trust in a brand that communicates in a language they find comfortable, which results in increased loyalty and repeat visits. Its create also create a relationship between brand and customer as customer find it more comfortable understandable.",
      },
      {
        icon: (
          <FaRocket className="text-[#F89E1B] text-2xl hover:text-black" />
        ),
        title: (
          <>
            Optimized for Voice Search
          </>
        ),
        description:
          "We all know the rise of mobile assistants and studies show 70% users use voice assistants over typing. It must be that your content is optimized for voice search, users often speak in their native language in the search engine. It increases your visibility chances.",
      },
    
  ];


  return (
    <main className='bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] px-5 md:px-10 lg:px-15 xl:px-30'>
      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
          <div>
            <h5 className="text-sm md:text-base lg:text-md font-semibold text-black pt-4 md:pt-6 lg:pt-10 uppercase">
              Vernacular seo
            </h5>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold pt-3 md:pt-8'>Boost Your Business with SEO in Regional Languages</h1>
            <h6 className="text-sm lg:text-[16px] font-base font-light text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8">Digital Market Tap helps you to connect your business deeply with locals.
Because 70% of users consume data in their native language and get a
better connection when they read their native language.</h6>
            <NavLink to="/" className="font-syne text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#f89e1b]">VIEW OPEN POSITIONS <FaArrowRight /><span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span></NavLink>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={AISeo}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[540px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </div>

<div className=" pt-5 md:pt-12 lg:pt-18">
  <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
    <img src={AISeo2} alt="Team Collaboration" className="w-full object-cover" />
  </div>  
  <div className="max-w-2xl text-left">
    <h2 className="text-2xl md:text-5xl font-semibold text-black mb-6 leading-tight">Why choose Digital Market Tap for vernacular SEO?</h2>
  </div>
</div>

<div className="pt-5 md:pt-8 lg:pt-10 pb-4 md:pb-14 lg:pb-32">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {services.map((service, index) => (
      <div key={index} className="bg-white rounded-3xl p-8 text-black flex flex-col justify-between h-full">
         <div>
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">{service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-left">
                  {service.title}
                </h3>
                <h6 className="text-sm font-light text-[#57595b] mb-8 text-left">
                  {service.description}
                </h6>
              </div>

              <div className="text-left mt-auto">
                <a
                  href="#"
                  className="font-syne group inline-block text-sm font-semibold relative border-b-2 border-[#6754e9]"
                >
                  LEARN MORE
                  <span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
</div>


<div className="pt-4 md:pt-6 lg:pt-8 pb-26 md:pb-28 lg:pb-32">
  <h5 className='text-md font-medium pb-4 uppercase'>A.I. SEO</h5>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-6xl pb-4 md:pb-8'>Elevating Enterprise SEO Services</h1>
              <h3 className="text-left font-semibold text-md md:text-lg text-black pb-3 md:pb-7">
                Looking to learn more about SEO with Ai for your business? Fill the Form: <br />When you partner with Numerique, we take care of the heavy lifting, so you can enjoy more website traffic, leads, and revenue.
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
                <div className="bg-white rounded-[32px] shadow-[12px_12px_0_0_black] px-4 md:px-6 pt-8 pb-10 w-full relative">
                  <h2 className="text-2xl font-semibold text-black pb-6">Get your Quotation</h2>
                   <img src={rocket} alt="rocket" className="absolute top-0 right-0 md:right-12 lg:right-20 h-20 md:h-34 -mt-8 md:-mt-10 lg:-mt-13 mr-0 md:-mr-8 lg:-mr-10 rotate-35 object-contain"/>
                   <img src={SparklingStar} alt="SparklingStar" className="absolute top-0 right-0 md:right-12 lg:right-50 h-10 md:h-14 -mt-4 md:-mt-6 lg:-mt-6 mr-15 md:mr-10 lg:-mr-10 rotate-[35deg] object-contain"/>
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
     <div className="flex flex-col lg:flex-row items-center justify-center gap-8 pt-8 md:pt-12 pb-8 md:pb-10 lg:pt-16 text-center lg:text-left">
            <div className="w-full lg:w-1/3 flex justify-end">
              <p className="text-xl font-semibold text-gray-800 pr-10">Credentials & <br className="hidden md:block" /> Recognition:</p>
            </div>
            <div className="w-full lg:w-2/3 flex justify-center lg:justify-start flex-wrap items-center gap-4 md:gap-6 py-2">
                <img src={Badge0} alt="Badge 0" className="h-16 md:h-20 object-contain" />
                <img src={Badge1} alt="Badge 1" className="h-16 md:h-20 object-contain" />
                <img src={Badge2} alt="Badge 2" className="h-16 md:h-20 object-contain" />
                <img src={Badge3} alt="Badge 3" className="h-16 md:h-20 object-contain" />
                <img src={Badge4} alt="Badge 4" className="h-16 md:h-20 object-contain" />
            </div>
          </div>
<div className="pb-4 pt-8 md:pt-12 lg:pt-18">
              <p className="font-kanit text-center text-md font-semibold uppercase pb-4">FAQ</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
                FAQs about Vernacular
                <br />
                Seo
              </h1>
              <h6 className="text-center text-md md:text-lg font-light text-gray-500 pb-4">
                Looking to learn more about Vernacular Seo for your business?
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

export default VernacularSeo;
