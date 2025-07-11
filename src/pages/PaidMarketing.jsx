import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FaArrowRight , FaMinus , FaPlus } from "react-icons/fa";
import PaidMarketing1 from '../assets/PaidMarketing1.png'; 
import PaidMarketing2 from '../assets/PaidMarketing2.png'; 
import PaidMarketing3 from '../assets/PaidMarketing3.png'; 
import PaidMarketing4 from '../assets/PaidMarketing4.png'; 
// import PaidMarketing5 from '../assets/PaidMarketing5.png'; 
import Brand1 from '../assets/google-partner-1.png'; 
import GoogleAdImg from '../assets/GoogleAds.png'; 
import AmazonAdImg from '../assets/AmazonAds.png'; 
import teamImage from '../assets/many-guys-discuss-on-laptop.webp';
import PaidMarketingBgImage from '../assets/PaidMarketing5.png';

const faqs = [
  {
    question: " What is paid marketing?",
    answer:
      " Paid marketing refers to online advertising strategies where you pay to display their ads to a targeted audience. We provide paid marketing on platforms like Google Ads, Facebook & Instagram Ads, LinkedIn Ads, and more. It’s a fast way to drive traffic, generate leads, and boost conversions",
  },
  {
    question: " What type of paid marketing advertisement can you run?",
    answer:
      "Our expert marketing team have years of experience in running lead generation, website traffic, brand awareness, Retargeting & remarketing ads and many more campaigns.",
  },
 {
  question: " Which platforms do you offer paid marketing services on?",
  answer: "We manage ads across:",
  answerPoints: [
    "Google Search & Display Network",
    "Facebook & Instagram (Meta Ads)",
    "YouTube Ads",
    "LinkedIn Ads",
    "Twitter (X) Ads",
    "Interest Ads",
  ],
},
];

const brandLogos = [
  {  id: 1, name: "Brand1", src: Brand1 },
  { id: 2, name: "Brand2", src: Brand1  },
  { id: 3, name: "Brand3", src: Brand1  },
  { id: 4, name: "Brand4", src: Brand1  },
  { id: 5, name: "Brand5", src: Brand1  },
];

const PaidMarketing = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    <main className="bg-gradient-to-b from-[#fdf1e7] to-white">
       <div className="pb-4 pl-5 md:pl-10 lg:pl-30">
          <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pt-20 md:pt-25 lg:pt-48 pr-5 md:pr-0 lg:pr-0">Marketing that instant works</h1>
              <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8 pr-5 md:pr-0 lg:pr-0">
               This lovely niche theme is built and suitable for any business operating in the Digital Marketing industry.
              </p>
              <NavLink
                to="/"
                className="text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#6754E9]"
              >
                GET QUOTE <FaArrowRight />
                <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
              </NavLink>
            </div>
            <div className="flex lg:justify-end">
              <img
                src={PaidMarketing1}
                alt="Marketing Visual"
                className="w-full h-full object-fit"
              />
            </div>
          </div>
        </div>

    <div className="bg-[#f6f6f6] relative md:py-12 lg:py-16">
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        {/* <svg
          className="relative block w-full"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,60 960,0 1440,60 L1440,0 L0,0 Z"
            fill="#fff"
          ></path>
        </svg> */}
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 pt-6 md:mb-6 lg:mb-12">Supported by over 5,000 companies</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brandLogos.map((logo) => (
            <div key={logo.id} className="w-26 h-26 grayscale opacity-70 hover:opacity-100 transition-opacity">
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-18 md:mb-16 lg:mb-24">Here are our Major Paid <br /> Marketing Services</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-30 max-w-6xl mx-auto">
        <div className="bg-[#f5f5f5] pt-16 pb-8 px-4 md:px-6 lg:px-8 text-left relative w-full md:w-1/2">
          <img
            src={GoogleAdImg}
            alt="Google Ads"
            className="w-34 h-34 absolute -top-12 left-4"
          />
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Google AD's
            </h3>
            <p className="text-gray-600 mb-6 text-left">Our team has developed an online course on creating and promoting a personal brand on social media. The Online Intensive is an amazing course for anyone looking to start making money on social media.</p>
           <button className="relative bg-black text-white px-10 py-3 rounded-xl text-md transition group cursor-pointer" style={{ boxShadow: '0 8px 13px rgba(248, 158, 27, 0.5)' }} onClick={() => navigate('/google-ads')}> <span className="relative">KNOW MORE <span className="block h-0.5 bg-[#F89E1B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span> </span></button>
          </div>
        </div>

        <div className="bg-[#f5f5f5] pt-16 pb-8 px-4 md:px-6 lg:px-8 text-left relative w-full md:w-1/2">
          <img
            src={AmazonAdImg}
            alt="Amazon Ads"
            className="w-44 h-44 absolute -top-16 left-0"
          />
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Amazon AD's
            </h3>
            <p className="text-gray-600 mb-6 text-left">Our team has developed an online course on creating and promoting a personal brand on social media. The Online Intensive is an amazing course for anyone looking to start making money on social media.</p>
          <button className="relative bg-black text-white px-10 py-3 rounded-xl text-md transition group cursor-pointer" style={{ boxShadow: '0 8px 13px rgba(248, 158, 27, 0.5)' }} onClick={() => navigate('/amazon-ads')}> <span className="relative"> KNOW MORE<span className="block h-0.5 bg-[#F89E1B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span></button>
          </div>
        </div>
      </div>
    </div>


    <section className="px-5 md:px-10 lg:px-30 pt-5 pb-10">
           <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
             <img src={teamImage} alt="Team Collaboration" className="w-full h-[155px] md:h-[285px] lg:h-[520px] object-cover" />
           </div>
   
           <div className="max-w-2xl text-left px-0 md:px-5 lg:px-2">
             <p className="text-sm font-bold uppercase tracking-widest mb-5">
               Our Best Services
             </p>
             <h2 className="text-2xl md:text-5xl font-bold text-black mb-6 leading-tight"> Smart digital marketing Solutions centred on data and your audience</h2>
             <button className="group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden"><span className="relative z-10"> View All Solutions<FaArrowRight className="inline ml-2 items-center"/><span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span></span></button>
           </div>
    </section> 

      <div className="pb-4 px-5 md:px-10 lg:px-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-5 md:pt-8 lg:pt-48 pr-5 md:pr-0 lg:pr-0">You'll know how to schedule your social media campaigns</h2>
              <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8 pr-5 md:pr-0 lg:pr-0">Baza has developed an online course on creating and promoting a personal brand on social networks.</p>
              <NavLink to="/"className="text-lg font-semibold group relative inline-flex items-center gap-2 rounded-[15px] px-8 py-3 text-black transition duration-300 uppercase">Learn more <FaArrowRight/><span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-[#F89E1B] transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span></NavLink>
            </div>
             <div className="flex lg:justify-end">
                <img src={PaidMarketing2} alt="Marketing Visual" className="w-full h-[320px] md:h-[450px] lg:h-[520px] object-contain moveLeftAnimation"/>
           </div>
          </div>
        </div>
        <div className="pb-4 px-5 md:px-10 lg:px-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
            <div className="flex lg:justify-end">
              <img
                src={PaidMarketing3}
                alt="Marketing Visual"
                className="w-full h-[320px] md:h-[450px] lg:h-[520px] object-contain moveRightAnimation"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-5 md:pt-8 lg:pt-48 pr-5 md:pr-0 lg:pr-0">Discover how to build relationships with your audience</h2>
              <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8 pr-5 md:pr-0 lg:pr-0">Baza has developed an online course on creating and promoting a personal brand on social networks.</p>
              <NavLink to="/"className="text-lg font-semibold group relative inline-flex items-center gap-2 rounded-[15px] px-8 py-3 text-black transition duration-300 uppercase">Learn more <FaArrowRight/><span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-[#F89E1B] transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span></NavLink>
            </div>
          </div>
        </div>
         <div className="pb-14 px-5 md:px-10 lg:px-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-5 md:pt-8 lg:pt-48 pr-5 md:pr-0 lg:pr-0">You'll know how to schedule your social media campaigns</h2>
              <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8 pr-5 md:pr-0 lg:pr-0">Baza has developed an online course on creating and promoting a personal brand on social networks.</p>
              <NavLink to="/"className="text-lg font-semibold group relative inline-flex items-center gap-2 rounded-[15px] px-8 py-3 text-black transition duration-300 uppercase">Learn more <FaArrowRight/><span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-[#F89E1B] transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span></NavLink>
            </div>
            <div className="flex lg:justify-end">
              <img
                src={PaidMarketing4}
                alt="Marketing Visual"
                className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-contain moveLeftAnimation"
              />
            </div>
          </div>
        </div>
  
   <section className="bg-cover bg-center py-24 px-6 text-center bg-[#ffeacd]" style={{ backgroundImage: `url(${PaidMarketingBgImage})` }}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6">Join other 5000+ people who already have a bright future</h2>
      <NavLink to="/"className="text-lg group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-10 py-3 text-white transition duration-300">JOIN NOW<span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-[#F89E1B] transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span></NavLink>
        <div className="mt-4 block md:flex justify-center gap-6 text-sm text-black">
          <p className="flex items-center gap-1 justify-center pt-4 mb-4">✔ No credit card required</p>
          <p className="flex items-center gap-1 justify-center text-left">✔ Cancel any time</p>
       </div>
    </section>


 <div className="pb-4 pt-8 md:pt-12 lg:pt-18 px-5 md:px-10 lg:px-30">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">FAQs about Paid  <br /> Marketing</h1>
        <p className="text-center text-md font-base text-gray-500 pb-4">Looking to learn more about Paid Marketing for your business? Browse our FAQs</p>
      </div>
   <div className="max-w-5xl mx-auto pt-8 pb-16 md:pb-22 space-y-2 md:space-y-4 px-5">
   {faqs.map((faq, index) => (
     <div key={index} className="border-t border-gray-300 pb-2 md:pb-4">
       <button
         onClick={() => toggleFAQ(index)}
         className="w-full flex justify-between items-center text-left text-lg md:text-xl font-medium hover:text-[#6754E9] focus:outline-none pt-5"
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
         <div className="mt-3 text-gray-500 text-md md:text-xl lg:text-lg font-medium md:text-md">
           <p>{faq.answer}</p>
 
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
     </main>
    </>
  );
};

export default PaidMarketing;
