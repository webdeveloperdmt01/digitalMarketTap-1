import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BlogImgg1 from "../assets/blogNews1.png";
import BlogImgg2 from "../assets/blogNews2.png";
import Badge0 from "../assets/clutch-badge.png";
import Badge1 from "../assets/new-badge.png";
import Badge2 from "../assets/new-badge2.png";
import Badge3 from "../assets/new-badge3.png";
import Badge4 from "../assets/logo_hubspot.png";
import { FaArrowRight, FaEnvelope, FaPlus , FaMinus , FaBullseye, FaSearchengin ,FaCheckCircle } from "react-icons/fa";

const faqs = [
    {
      question: "Why do I need a blog or news site for my company?",
      answer: "A blog or news site assists with creating authority, enhancing SEO ranks, driving organic traffic, and engaging your audience with new, useful content."
    },
    {
      question: "What are the must-have features for a professional news website?",
      answer: "Key elements are category-oriented articles, author profiles, SEO-optimized structure, quick page loading time, social sharing buttons, comment boxes, and advertisement placement for monetization."
    },
    {
      question: "Will my news blog website be SEO-optimized?",
      answer: "Yes. We make sure of on-page SEO, keyword optimization, schema implementation, and speed optimization so your content is ranked higher on search engines."
    },
  ];

const services = [
  {
    icon: <FaSearchengin className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "Experienced & Experts",
    description: "Looking for the best website design agency in Delhi? We got you. Get your dream website today. And take blogging to the next level.You're at the right place. We have years of experience in this field, which makes us experts.",
    link: "/content-writing-service",
  },
  {
    icon: <FaBullseye className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "Custom-built websites",
    description: "We create a 100% customized Blog News website in Delhi, which not only performs great but also looks beautiful. We use all the latest UI & UX to increase website performance and visuals. Get your custom-built website now.",
    link: "/search-engine-optimization",
  },
  {
    icon: <FaEnvelope className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
    title: "Latest technologies",
    description: "We use the latest technologies so that your website can run smoothly without any errors. Take your blogs to the next level with the help of our experienced and professional website developer so Get your dream website today.",
    link: "/email-marketing",
  },
];
const BlogNewsWebsite = () => {
const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
   <div className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] px-5 md:px-10 lg:px-15 xl:px-30">
       <div className="pb-4 pt-22">
          <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
            <div>
               <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-3 md:mb-6 lg:mb-8">Blog Website</h3>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pr-5 md:pr-0 lg:pr-0">
             Blog Website
              </h1>
              <h6 className="text-sm lg:text-[18px] font-light text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8 pr-5 md:pr-0 lg:pr-0">
             We create a high-performing SEO-optimized blog news website that effortlessly delivers news and blogs perfect for today's generation. Want to level up your blogs, journalists, and content creation journey to the next level? You're at the right place. We present you the best blog news website with the following key points.
             </h6>
              <NavLink
                to="/"
                className="font-syne text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#f89e1b] uppercase"
              >
               view open positions <FaArrowRight />
                <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
              </NavLink>
            </div>
            <div className="flex lg:justify-end">
              <img
                src={BlogImgg1}
                alt="Marketing Visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


  <div className="pt-5 pb-10">
           <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
             <img src={BlogImgg2} alt="Team Collaboration" className="w-full h-[155px] md:h-[285px] lg:h-[520px] object-fit" />
           </div>
   
           <div className="max-w-2xl text-left px-0 md:px-5 lg:px-2">
             <h2 className="text-2xl md:text-5xl font-bold text-black mb-6 leading-tight"> Why choose us for your blog news website?</h2>
           </div>
    </div>

  <div className="py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {services.map((service, index) => (
      <div key={index} className="bg-white rounded-3xl p-8 text-black flex flex-col h-full border border-gray-100">
        <div className="flex-grow">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-4 text-left">{service.title}</h3>
          <p className="text-md text-[#57595b] text-left">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

<div className="py-4 md:py-6 lg:py-8">
  <h5 className='text-md font-medium pb-4'>A.I. SEO</h5>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-6xl pb-4 md:pb-8'>USP's of SEO with Artificial Intelligence</h1>
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
                <div className="bg-white rounded-[32px] shadow-[12px_12px_0_0_black] px-4 md:px-6 pt-8 pb-10 w-full">
                  <h2 className="text-2xl font-semibold text-black pb-6">Get your Quotation</h2>

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
    <div className="w-full lg:w-1/3 flex md:justify-start lg:justify-end">
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
            FAQs about Blog News
            Website
          </h1>
          <h6 className="text-center text-md md:text-lg font-light text-gray-500 pb-4">
            Looking to learn more about Blog News Website for your business?
            Browse our FAQs
          </h6>
        </div>
        <div className="max-w-5xl mx-auto pt-2 pb-16 md:pb-12 xl:pb-22 space-y-2 md:space-y-4">
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

    </div>
  );
};

export default BlogNewsWebsite;
