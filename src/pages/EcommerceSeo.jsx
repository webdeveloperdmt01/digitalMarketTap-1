import React, { useState } from 'react';
import EcommerceSeo from "../assets/ecommerceSeo.jpg";
import EcommerceSeo2 from "../assets/ecommerceSeo2.jpg";
import EcommerceSeo3 from "../assets/ecommerceSeo3.jpg";
import { FaArrowRight,FaCheckCircle , FaPlus, FaMinus, FaGamepad, FaHeartbeat, FaPiggyBank, FaBalanceScale, FaHome, FaBus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';


const EcommerceSeoPage= () => {
  const [openIndex, setOpenIndex] = useState(null);
   const [startCounting, setStartCounting] = useState(false);
     const funFactRef = useRef();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      icon: <FaHeartbeat className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
      title: "Increase online traffic. ",
      description:
        "e-commerce SEO-optimized categories and products help your store get higher in search engines and attract more traffic and customers. SEO is the most organic way to get more leads and traffic. If you want to get more visible without paying extra on ads, get SEO service now—save your money and get max results.",
    },
    {
      icon: <FaPiggyBank className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
      title: "Better product visibility. ",
      description:
        "When you get e-commerce SEO done, customers are more likely to come into your store when your products show up in search results. SEO improves brand and product discoverability by making your product listings prominent for both long-tail and short-tail keywords, so increase your online visibility now.",
    },
    {
      icon: <FaBalanceScale className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
      title: "Higher conversion rate.",
      description:
        "e-commerce SEO increases website traffic, which means you will get higher conversions. Will search for a particular product, and you have already done SEO on your website. Your website will be shown in a higher rank, which increases chances of getting more leads, so you will get a higher conversion rate.",
    },
    {
      icon: <FaHome className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
      title: "Magnify product page performance.",
      description:
        "In e-commerce SEO, we focus on meta tags, schema markup, and product descriptions that are optimized for search engines to make your products easier for search engines to understand and more clickable in search results. It also increases your overall website performance.",
    },
    {
      icon: <FaBus className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
      title: "Experienced SEO expert",
      description:
        "Our team has experienced SEO experts who have years of experience in this field and deliver the best service. From improving your site’s architecture and navigation to load speed, we make sure to deliver the best possible service in the given time—we focus on providing long-term results. ",
    },
    {
      icon: <FaGamepad className="text-[#f89e1b] text-2xl hover:text-[#000]" />,
      title: "Improve site structure & user experience. ",
      description:
        "e-commerce: optimize your website, improve page-loading time and overall website structure, provide a better user experience, lower bounce rates, and improve customer satisfaction. reduced bounce rates, along with enhanced customer satisfaction. reduced bounce rates, along with enhanced customer satisfaction.",
    },
  ];

  const faqs = [
    {
      question: "What is E-Commerce SEO?",
      answer: "E-Commerce SEO is optimizing a web store such that its categories and products come up higher on search engines like Google. It inclines to bring more quality visitors who are actively searching for products that you offer."
    },
    {
      question: "Why is SEO important for e-commerce websites?",
      answer: "SEO drives free, constant, and high-intent traffic. SEO is distinct from paid advertisement because SEO drives long-term results and creates brand authority, resulting in increased sales and reduced customer acquisition costs."
    },
    {
        question: "What is E-Commerce SEO compared to normal SEO??",
  answerPoints: [
    "Whilst normal SEO works with content & service sites, E-Commerce SEO works with:",
    "Product & category page optimization",
    "Handling duplicate content for SKUs",
    "Site speed and UX optimization for conversion",
    "Schema for rich snippets & structured data",
  ],
}
  ];

  const stats = [
    { value: "2593+", label: "Happy Customers" },
    { value: "254+", label: "Project Complete" },
    { value: "2M+", label: "Registered Members" },
    { value: "578", label: "Awards Winning" },
  ];

 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (funFactRef.current) {
      observer.observe(funFactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const useCountUp = (end, start = 0, duration = 4000) => {
    const [count, setCount] = useState(start);
    useEffect(() => {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, [end]);
    return count;
  };

  return (
    <main className='!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] px-5 md:px-15 lg:px-30'>
      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
          <div>
            <h5 className="text-sm md:text-base lg:text-md font-semibold text-black pt-4 md:pt-6 lg:pt-10">
        Ecommerce SEO
            </h5>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold pt-3 md:pt-8 leading-tight'>Boost Your Online Store <br />Visibility with Expert <br /> E-Commerce SEO</h1>
            <h6 className="text-sm font-light lg:text-[18px] text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8">Digital Market Tap provides the best SEO service in Delhi. We will help you to boost your online store visibility with our best e-commerce SEO service. Which is personally created for e-commerce platforms.</h6>
            <NavLink to="/" className="text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#f89e1b]">VIEW OPEN POSITIONS <FaArrowRight /><span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span></NavLink>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={EcommerceSeo}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </div>

      <div className="pt-12 md:pt-28 lg:pt-38">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-center">
          <div className="flex lg:justify-end">
            <img
              src={EcommerceSeo2}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="pl-2 md:pl-8 lg:pl-20">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">E-commerce SEO—Rank Higher, Sell More</h3>
            <h6 className="text-sm font-light lg:text-[16px] font-base text-[#545e5b] pt-2 pb-6">Online shopping The practice of making an online store's website more visible in search engines like Google is known as SEO. In order to help your business draw in high-intent organic traffic that turns into purchases, it focuses on optimizing product pages, category pages, metadata, technical structure, and content. Making your website visible to your customer is a task e-commerce SEO is especially for e-commerce websites to get more leads, traffic, and brand awareness. 
            </h6>
            <a href="#" className="group inline-block text-sm font-semibold relative border-b-2 border-[#4118d2]">MEET OUR TEAM<span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
          </div>
        </div>
      </div>

      <div className="pt-10 md:pt-20 lg:pt-28 pb-16">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase mb-6">Company Values</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Why You Need e-Commerce SEO
              </h1>
            </div>
            <div className="text-gray-700 pl-0 md:pl-16 lg:pl-22 font-light">
              <h6>
              Just having an e-commerce website is not enough for leads and traffic. There are thousands of e-commerce websites listed online; SEO plays a crucial role in standing out among e-commerce websites. It not only generates leads but also increases website traffic, which is good for brand awareness. It's very beneficial for higher rankings for product-related keywords, driving more conversions with SEO-focused content, and driving more traffic to category and product pages. But for that, you must need an expert SEO specialist company, and we are the best SEO service provider in Delhi.
              </h6>
            </div>
          </div>
          <div className="mt-10 md:mt-16 lg:mt-20 max-w-8xl mx-auto">
            <div className="relative flex justify-between items-center border-t border-dashed border-gray-300">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-[#f89e1b] relative -top-2" />
              ))}
            </div>
            <div className="flex justify-between mt-3 md:mt-5 max-w-8xl mx-auto text-sm font-semibold text-black">
              <span className='text-xs md:text-sm'>Celebrate creativity</span>
              <span className='text-xs md:text-sm'>Honest & integrity</span>
              <span className='text-xs md:text-sm'>Teamwork & collaboration</span>
              <span className='text-xs md:text-sm'>Social responsibility</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
          <img src={EcommerceSeo3} alt="Team Collaboration" className="w-full object-cover" />
        </div>
      </div>

      <div className="py-4 md:py-6 lg:py-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">Benefits</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-black flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-left">{service.title}</h3>
                <p className="text-md text-[#57595b] text-left">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
            <h1 className="text-center text-sm md:text-md lg:text-xl text-[#f89e1b] font-base pt-3 md:pt-8">Funfact</h1>
            <p className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold pt-2 md:pt-4 pb-6 md:pb-8">Radius with thin border</p>
        <div ref={funFactRef} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-3 md:py-8">
           {stats.map((stat, index) => {
            const finalValue = parseInt(stat.value.replace(/\D/g, ''), 10);
            const displayValue = useCountUp(finalValue, 0, 3000);
    return (
        <div key={index} className="h-46 flex flex-col justify-center items-center rounded-2xl border-2 border-[#f9ae4a] bg-white transition p-4" style={{ boxShadow: '4px 4px 8px rgba(0,0,0,0.1), -4px 4px 8px rgba(0,0,0,0.1)' }}>
          <div className="text-2xl md:text-3xl font-bold text-gray-800"> {startCounting ? `${displayValue}${stat.value.replace(/[0-9]/g, '')}` : '0'}</div>
          <div className="text-sm md:text-md text-gray-400 mt-1">{stat.label}</div>
      </div>);})}
    </div>
 </div>

     <div className="py-4 md:py-6 lg:py-8">
  <h5 className='text-md font-medium pb-4 uppercase'>Ecommerce Seo</h5>
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
                <div className="bg-white rounded-[32px] shadow-[12px_12px_0_0_black] px-4 md:px-6 pt-8 pb-10 w-full">
                  <h2 className="text-2xl font-semibold text-black pb-6">Get your Quotation</h2>

                  <form className="flex flex-col space-y-6 text-[#a4a4a4]">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-[#ababab] hover:border-[[#f89e1b] rounded-2xl outline-none"
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

<div className="pb-4 pt-8 md:pt-12 lg:pt-18">
              <p className="font-kanit text-center text-md font-semibold uppercase pb-4">FAQ</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
                FAQs about Enterprise
                <br />
                Seo
              </h1>
              <h6 className="text-center text-md md:text-lg font-light text-gray-500 pb-4">
                Looking to learn more about Enterprise Seo for your business?
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

export default EcommerceSeoPage;
