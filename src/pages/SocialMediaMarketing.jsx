import React, { useState } from "react";
import { FaArrowRight, FaPlus, FaMinus, FaCheckCircle, FaSearchDollar, FaUserTie, FaGoogle,  FaQuoteLeft, FaStar,FaChartLine  } from "react-icons/fa";
import Box1 from "../assets/seo-box1.png";
import Box2 from "../assets/seo-box2.png";
import Box3 from "../assets/seo-box3.png";
import SeoImg from "../assets/seoimg.png";
import SeoGoogleExperts from "../assets/SeoGoogleExperts.jpg";
import Stats from "../assets/Stats.png";
import Stats2 from "../assets/Stats2.png";
import PeopleDiscuss from "../assets/peopleDiscussOnTopic.png";
import womanTalking from "../assets/womanTaking-Seo.jpg";
import { NavLink } from "react-router-dom";



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
}


];


const services = [
  {
    icon: <FaSearchDollar className="text-[#f89e1b] text-2xl hover:text-[#6754E9]" />,
    title: "Match search intent at every touchpoint",
    description:
      "Picking the right keywords will only get you so far. We understand how to match the search intent of your target keywords with ad copy, CTAs, and landing pages that turn clicks into ROI.",
  },
  {
    icon: <FaUserTie className="text-[#f89e1b] text-2xl hover:text-[#6754E9]" />,
    title: "Experienced PPC management",
    description:
      "How do you know what works if you’ve never gotten results before? Our paid search managers have years of experience managing successful campaigns in a variety of industries. And we have the happy clients to back it up.",
  },
  {
    icon: <FaGoogle className="text-[#f89e1b] text-2xl hover:text-[#6754E9]" />,
    title: "Google Premier Partnership",
    description:
      "Working with a Google Partner agency gives you a leg up. Not only are we certified in all types of Google advertising, but we also get access to direct support and other resources provided by Google. Your campaigns benefit directly from this exclusive insider knowledge.",
  },
];

const tabs = [
  {
    title: "1.PPC audit service",
    content: {
      heading: "PPC audit services",
      about: "One of the first things we'll do for your business is provide you with a full PPC audit. In the audit, we'll evaluate every significant element of your existing PPC campaign and compile a report of what's working and what isn't. The report will break down every aspect of your PPC strategy and determine what you could improve. In addition, we'll offer recommendations on how to improve them. In fact, if your business has over four employees and spends more than $1000 per month on PPC, you qualify for a free PPC audit! Just get in touch with us to get started."
    },
  },
  {
    title: "2.Remarketing services",
    content: {
      heading: "Remarketing services",
      about: "At Numerique, we specialize in helping you harness the full potential of remarketing, particularly through platforms like Google Ads. With Google Ads, you gain the ability to track the traffic to specific pages on your website and deliver targeted ads to those users who have visited those pages. Our team is dedicated to assisting you in setting up the necessary tracking mechanisms and creating captivating remarketing ads that effectively capture the attention and interest of your target audience."
    },
  },
  {
    title: "3.Geofencing ad services",
    content: {
      heading: "Geofencing ad services",
      about: "Numerique is here to provide you with comprehensive support in harnessing the potential of geofencing, ensuring that your ad campaigns are optimized for maximum impact. Our team of experts will assist you in identifying the ideal outer limits for your geofences and seamlessly integrate them into your Google Ads strategy. Using this information, we will assist in setting up geofences that precisely align with your objectives, reaching the right people at the right time and maximizing the efficiency of your advertising efforts."
    },
  },
  {
    title: "4.Social media ad services",
    content: {
      heading: "Social media ad services",
      about: "While Google Ads is undoubtedly a powerful advertising platform, it's important to recognize that there are various other avenues to effectively display ads and engage with your target audience. Social media platforms, in particular, offer compelling paid advertising options that shouldn't be overlooked. With users spending approximately 28% of their Internet time on social media, these platforms present a fantastic opportunity to connect with your audience."
    },
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
    description:
      "Our strategies drive measurable results...",
    image: PeopleDiscuss,
  },
};

const SocialMediaMarketing = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Transparency");
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

   const handleAccordionToggle = (index) => {
    setActiveTabIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
  <section aria-labelledby="seo-heading" className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] pt-10 md:pt-18 pb-16 md:pb-18 lg:pb-22 px-5 md:px-16 lg:px-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="space-y-6">
          <h2
            id="seo-heading"
            className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-black"
          >
           Social Media <br />
           Marketing <br />Service
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-md">
            Struggling to find PPC experts who really understand your business
            and can actually drive long term results? Our world-class marketers
            would love to help your business thrive!
          </p>

          <div className="relative">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative bg-white rounded-[30px] shadow-[10px_10px_0_0_rgba(0,0,0,0.7)] px-5 py-4 flex flex-col md:flex-row items-center gap-4"
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
          <h3 className="text-2xl md:text-5xl font-semibold text-black leading-tight mb-2 md:mb-6">
           ROI-Driven paid search <br />optimization
          </h3>
          <p className="text-gray-600 text-sm md:text-md max-w-2xl">
          Our relationship with you relies on getting results, and paid search marketing results are measured in ROI. Each and every day, our primary focus is building ROI by interpreting real data and creating campaigns that convert. This includes:
          </p>
        </div>
        <div className="border-l-1 border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4">
        {["Keyword and competitor research","SKAGS (single keyword ad groups)","Negative keyword pruning","Ad copy optimization","Landing page creation & optimization","Search engine retargeting", ].map((item, idx) => (
        <div key={idx} className="flex items-start gap-3">
        <FaCheckCircle className="text-[#f89e1b] text-2xl mt-0.5" />
        <span className="text-gray-700 text-base md:text-md">{item}</span>
        </div>))}
       </div>
    </div>

    <div className="pt-8 md:pt-14 lg:pt-24">
          <p className="text-center text-md font-semibold uppercase pb-4">Numerique</p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold pb-10 lg:pb-24">How our paid search marketing <br /> service can help grow your <br /> revenue</h1>
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15">
          <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <img
              src={SeoImg}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="pl-2 md:pl-8 lg:pl-20">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">Combining Social Media <br /> Marketing with <br /> conversion rate <br /> optimization (CRO)</h3>
            <p className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2">
             The secret to a successful SEM campaign is much more than just making your website appear on Google. Other SEM agencies in Singapore would just set your ads to appear on Google, and leave it there. These campaigns are not performing up to its optimal level. <br/> <br />

             The secret to achieving optimal SEM results lies in the ability to get as many people as possible to call/contact you after they click on your ad and land on your website. For example, your current SEM ads are getting 2% conversion rate on your landing page. That means out of 100 people that visit your page, 2 people contact you.
            </p>
          </div>
        </div>
     </div>

    <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
             Real certified Google Ads professionals
            </h3>
            <p className="text-sm lg:text-[16px] font-base text-[#545e5b] mt-2">Get a team of certified Google Adwords / SEM specialists who have a minimum of 2 years experience managing various SEM campaigns locally. We help you create the perfect combination of strategy and implementation to ensure we achieve your goals.</p>
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


  <div className="pb-4 pt-2 md:pt-8 lg:pt-18">
          <p className="text-center text-md font-semibold uppercase pb-4">what you get</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">What is included in our paid search <br /> marketing services? </h1>
          <p className="text-center text-md font-base text-gray-500 pb-4">When you partner with Numerique, you’ll gain access to our full range of paid SEM services. These services are designed to <br /> optimize every facet of your paid advertising, including:</p>
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
            className={`!w-[160%] relative cursor-pointer transition-all duration-300 pl-6 pr-16 py-5 text-left text-lg md:text-xl font-medium leading-tight -ml-8
            ${isActive ? "bg-[#f89e1b] text-white rounded-full z-10" : "text-white hover:text-black hover:bg-white rounded-full z-0"}`}
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
    </div>
  </div>
 
  <div className="lg:hidden">
    {tabs.map((tab, index) => {
      const isOpen = activeTabIndex === index;
      const { heading, about } = tab.content;

      return (
        <div key={index} className="mb-6 border border-gray-200 rounded-3xl overflow-hidden">
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
              <h2 className="text-2xl font-bold mb-4 text-black">{heading}</h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{about}</p>
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
      </div> )}
    </div>); })}
  </div>
</div>


    <div className="py-8">
          <p className="text-center text-md font-semibold uppercase pb-3">Creating Success</p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">What makes our paid search <br /> management services so <br /> effective?</h1>
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
  <span className="font-semibold text-sm mt-1">5000+ Client reviews</span>
</div>
                     <a href="/about" className="inline-block text-sm font-bold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200 uppercase">View all reviews</a>
        </div>
      </div>
    </div>
</div>

<div className="pb-4 pt-8 md:pt-12 lg:pt-18">
          <p className="text-center text-md font-semibold uppercase pb-4">The proof is in the numbers</p>
          <h1 className="text-3xl lg:text-5xl text-center font-semibold pb-4">Why paid search Ads can bring in <br /> the numbers </h1>
      <div className="w-full">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6 pt-4">
          <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
            <div className="flex items-center gap-4 mb-6 justify-between">
              <h3 className="text-5xl font-bold text-black leading-tight">38%</h3>
              <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                <FaChartLine className="text-orange-500 text-2xl" />
              </div>
            </div>
            <p className="text-[#5c5f61]">of growth rate in brand awareness for businesses that start doing Search Ads</p>
          </div>
          <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
            <div className="flex items-center gap-4 mb-6 justify-between">
              <h3 className="text-5xl font-bold text-black leading-tight">100%</h3>
              <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                <FaChartLine className="text-orange-500 text-2xl" />
              </div>
            </div>
            <p className="text-[#5c5f61]">of total clicks on search results page are Search Ads, serving as proof that a dependence on SEO alone limits your potential for more traffic and leads.</p>
          </div>
          <div className="text-left px-8 py-10 border border-[#E2E2E2] rounded-[40px] bg-white">
            <div className="flex items-center gap-4 mb-6 justify-between">
              <h3 className="text-5xl font-bold text-black leading-tight">82%</h3>
              <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                <FaChartLine className="text-orange-500 text-2xl" />
              </div>
            </div>
            <p className="text-[#5c5f61]">of clicks on Search Ads are more likely to buy, making for better leads.</p>
          </div>
        </div>
      </div>
</div>

<div className="pb-4 pt-8 md:pt-12 lg:pt-18">
          <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">FAQs about Social Media<br />Marketing</h1>
          <p className="text-center text-md md:text-lg font-base text-gray-500 pb-4">Looking to learn more about social media marketing for your business? Browse our FAQs</p>
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

    </section>
  );
};

export default SocialMediaMarketing;
