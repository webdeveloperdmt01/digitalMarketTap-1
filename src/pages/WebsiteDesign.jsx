import React, { useState, useEffect } from "react";
import { FaArrowRight, FaCrown, FaPlus, FaMinus ,FaBullhorn, FaChartLine, FaBullseye, FaLightbulb, FaRocket, FaEnvelope, FaUserFriends, FaCertificate, FaChartBar, FaDollarSign, FaSearch, FaComments, FaQuoteRight, FaMapMarkerAlt, FaAmazon, FaGoogle  } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import WebsiteDesign1 from "../assets/websitedesign.png";
import WebsiteDesign2 from "../assets/websitedesign2.png";
import PowerEliteIcon from "../assets/vamtam-elite-WD.png";
import ElementorIcon from "../assets/Elementor-Logo-Full-WD.png";
import TabletPic from "../assets/Tablets-WD.png";
import PhonePic from "../assets/Phone-WD.png";

const iconList = [
  FaBullhorn, FaChartLine, FaBullseye, FaLightbulb, FaRocket,
  FaEnvelope, FaUserFriends, FaCertificate, FaChartBar, FaDollarSign,
  FaSearch, FaComments, FaUserFriends, FaQuoteRight, FaMapMarkerAlt,
  FaAmazon, FaGoogle , FaArrowRight,
];

const tabs = [
  {
   title: <>Ecommerce<br />Website</>,
    content: {
      heading: "Ecommerce Website",
      about: "One of the first things we'll do for your business is provide you with a full PPC audit. In the audit, we'll evaluate every significant element of your existing PPC campaign and compile a report of what's working and what isn't. The report will break down every aspect of your PPC strategy and determine what you could improve. In addition, we'll offer recommendations on how to improve them. In fact, if your business has over four employees and spends more than $1000 per month on PPC, you qualify for a free PPC audit! Just get in touch with us to get started."
    },
     link: "/e-commerce-website-development",
  },
  {
   title: <>Blog News<br />Website</>,
    content: {
      heading: "Blog News Website",
      about: "At Numerique, we specialize in helping you harness the full potential of remarketing, particularly through platforms like Google Ads. With Google Ads, you gain the ability to track the traffic to specific pages on your website and deliver targeted ads to those users who have visited those pages. Our team is dedicated to assisting you in setting up the necessary tracking mechanisms and creating captivating remarketing ads that effectively capture the attention and interest of your target audience."
    },
     link: "/blog-news-website",
  },
  {
   title: <>Educational<br />Website</>,
    content: {
      heading: "Educational Website",
      about: "Numerique is here to provide you with comprehensive support in harnessing the potential of geofencing, ensuring that your ad campaigns are optimized for maximum impact. Our team of experts will assist you in identifying the ideal outer limits for your geofences and seamlessly integrate them into your Google Ads strategy. Using this information, we will assist in setting up geofences that precisely align with your objectives, reaching the right people at the right time and maximizing the efficiency of your advertising efforts."
    },
     link: "/education-website",
  },
  {
    title: <>Business<br />Website</>,
    content: {
      heading: "Buisness Website",
      about: "While Google Ads is undoubtedly a powerful advertising platform, it's important to recognize that there are various other avenues to effectively display ads and engage with your target audience. Social media platforms, in particular, offer compelling paid advertising options that shouldn't be overlooked. With users spending approximately 28% of their Internet time on social media, these platforms present a fantastic opportunity to connect with your audience."
    },
     link: "/buisness-website",
  },
];

const plugins = [
  { name: "WP101 Video Tutorials", img: "GroupLogo-Wd.png" },
  { name: "Elementor Page Builder", img: "ElementorLogo-WD.png" },
  { name: "Elementor PRO Page Builder", img: "ElementorLogo-pro-WD.png" },
  { name: "WooCommerce", img: "woocommerce-logo-WD.png" },
  { name: "Yoast SEO", img: "yoastLogo-WD.png" },
  { name: "Contact Form WPForms", img: "WPForms-icon-Wd.png" },
  { name: "UpdraftPlus Backup Plugin", img: "udp-logo-WD.png" },
  { name: "Wordfence Security WooCommerce", img: "wordfence-security-WD.png" },
  { name: "Translate Multilingual Sites", img: "icon-WD(2).png" },
  { name: "Really Simple SSL", img: "really-simple-WD.png" },
  { name: "Loco Translate", img: "loco-WD.png" },
  { name: "Limit Login Attempts Reloaded", img: "Limit-login-WD.png" },
  { name: "Monsterinsights", img: "Monsterlights-WD.png" },
  { name: "Advanced Custom Fields", img: "acf-Wd.png" },
  { name: "Cookie Notice for GDPR & CCPA", img: "icon-WD.png" },
  { name: "LiteSpeed Cache", img: "Rectangle-4-WD.png" },
];

const faqs = [
  {
    question: "What is paid search?",
    answer:
      "Paid search is a digital marketing strategy that involves online ads that appear at the top of search engine results pages (SERPs). Paid search ads typically look similar to organic search listings but have a label that distinguishes them as ads.",
  },
  {
    question: "What are paid search management services?",
    answer:
      "With paid search management services, you can expect a dedicated team of experts who will meticulously review and analyze your campaigns, ensuring that they align with your business objectives. Through continuous optimization, they will fine-tune your advertisements to maximize their effectiveness, reaching the right audience at the right time.",
  },
  {
    question: "How does paid search work?",
    answer:
      "When it comes to paid search ads, Google Ads serves as a prime example of how the process works. Google Ads allows advertisers to bid on specific keywords they want their ads to appear for. When a user conducts a search on Google, the platform uses various factors such as keywords, ad settings, bids, and ad quality score to determine which ads to display.",
  },
  {
    question: "When should you use paid search?",
    answer:
      "Paid search can indeed be a valuable addition to your marketing strategy for several reasons: Audience Research, Precise Targeting, Quick Results, Bottom-of-the-Funnel Leads, Supplementing Organic Search Results. By leveraging the advantages of paid search, businesses can effectively target their audience, generate qualified leads, achieve faster results, and enhance their overall online visibility and conversion rates",
  },
];

const WebsiteDesign = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isLaptopScreen, setIsLaptopScreen] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleAccordionToggle = (index) => {
  setActiveTabIndex(activeTabIndex === index ? null : index);
};


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLaptopScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    const handleScroll = () => {
      if (isLaptopScreen) {
        setOffsetY(window.scrollY);
      }
    };

    const handleResize = () => {
      checkScreenSize();
      if (!isLaptopScreen) {
        setOffsetY(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLaptopScreen]);

  return (
    <>
      <section className="bg-gradient-to-b from-[#fdf1e7] to-white relative overflow-hidden">
        <div className="pb-4 pl-5 md:pl-10 lg:pl-30">
          <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-20 md:pt-25 lg:pt-68 pr-5 md:pr-0 lg:pr-0">
                Stay Ready for Future<br />of Your Website
              </h1>
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
                src={WebsiteDesign1}
                alt="Marketing Visual"
                className="w-full h-full object-fit"
              />
            </div>
          </div>
        </div>

        <div className="py-8 md:py-16 px-5 md:px-10 lg:px-30">
          <div className="bg-[#f7f7fa] rounded-2xl p-5 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="items-start gap-4 max-w-xl">
              <div className="text-[#f89e1b] text-3xl md:text-5xl">
                <FaCrown />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold pt-6 text-black">
                  Get $245 Worth of Premium Stock Images FREE with Your Package!
                </h2>
              </div>
            </div>
            <div className="max-w-sm">
              <p className="font-bold text-black text-right">
                Premium<br /><span className="font-normal text-sm">Stock images</span>
              </p>
              <p className="text-sm text-black pt-10 text-left">
                All images shown on the demo website come with the demo content, and can be used in your next project, without the need to buy any additional licences.
              </p>
            </div>
          </div>
        </div>

        <div className="relative pb-8 md:pb-16">
          <img src={WebsiteDesign2} alt="big-banner" className="w-full h-auto" />
          <div className="absolute  top-[14%] md:top-[18%] lg:top-[19%] left-1/2 transform -translate-x-1/2 max-w-2xl bg-white shadow-lg px-4 md:px-6 lg:px-16 py-4 md:py-6 lg:py-10 z-10">
            <div className="text-center">
              <h1 className="text-xl md:text-4xl lg:text-6xl font-bold leading-tight text-black text-left">
                Details,<br />not only in<br />home pages...
              </h1>
              <div className="flex items-center justify-start gap-4 md:gap-18 mt-4 md:mt-8 lg:mt-16">
                <div className="flex items-center gap-2">
                  <img src={PowerEliteIcon} alt="Power Elite" className="h-6 md:h-10" />
                </div>
                <div className="flex items-center gap-2">
                  <img src={ElementorIcon} alt="Elementor" className="h-6 md:h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

 <div className="bg-black pb-10 md:pb-24 lg:pb-42 pt-6 md:pt-8 lg:pt-24 px-5 md:px-10 lg:px-30 text-white space-y-6">
  <h1 className="font-semibold text-2xl md:text-3xl lg:text-6xl pb-3 md:pb-8">
    Compatible plugins
  </h1>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    {plugins.map((plugin, idx) => (
      <div
        key={idx}
        className="bg-[#111] hover:bg-[#1a1a1a] rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-lg transition duration-300 ease-in-out"
      >
        <img
          src={`/src/assets/${plugin.img}`}
          alt={plugin.name}
          className="w-16 h-16 object-contain mb-4"
        />
        <p className="text-sm font-semibold">{plugin.name}</p>
      </div>
    ))}
  </div>
</div>



        <div className="relative pb-4 pl-5 md:pl-10 lg:pl-30">
          <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
            <div className="relative pt-8 md:pt-12 lg:pt-32 min-h-[250px]">
              <img
                src={PhonePic}
                alt=""
                className="absolute -top-148 left-[52.5rem] h-40 w-40 object-contain md:h-[25.5rem] md:w-[25.5rem]"
                style={{
                  transform: isLaptopScreen ? `translateY(${offsetY * 0.2}px)` : 'translateY(0px)',
                  transition: "transform 0.1s linear",
                }}
              />
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-3 lg:pt-20">
                2025<br />Modern UI/UX
              </h1>
              <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8 pr-5 md:pr-0 lg:pr-0">
                It has purpose oriented design and it is suitable for users with zero programming skills as well as advanced developers.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <img
                src={TabletPic}
                alt="Marketing Visual"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="px-5 md:px-10 lg:px-30">
          <div className="mt-10 md:mt-16 lg:mt-20 max-w-8xl mx-auto">
            <div className="relative flex justify-between items-center border-t border-dashed border-gray-300">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-[#f89e1b] relative -top-2" />
              ))}
            </div>
            <div className="flex justify-between mt-3 md:mt-5 max-w-8xl mx-auto text-sm font-semibold text-black">
              <span className='text-xs md:text-sm'>Our customers have raised <br /> over $350mn in Funding</span>
              <span className='text-xs md:text-sm'>In over 2 years, we've  <br />never lost a customer</span>
              <span className='text-xs md:text-sm'>We work with the world's <br /> fastest growing startups</span>
              <span className='text-xs md:text-sm'>Distributed team of over 20 of <br /> the worlds best marketers, <br />podcasters and copywriters</span>
            </div>
          </div>
        </div>

        <div className="w-full px-5 py-10 lg:py-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
            <div className="max-w-xs text-left">
              <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">Icons</h2>
              <p className="text-lg text-black">
                Custom created icons crafted for your personal needs.
              </p>
            </div>
            <div className="w-full md:flex-1 p-8 md:p-12 lg:p-16 rounded-md bg-[#ffeacd]">
              <div className="grid grid-cols-5 gap-8 md:gap-18">
                {iconList.map((Icon, idx) => (
                  <Icon key={idx} className="text-black hover:text-[#6754E9] text-2xl md:text-4xl" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4 pt-2 md:pt-8 lg:pt-18 px-5 md:px-10 lg:px-30">
          <p className="text-center text-md font-semibold uppercase pb-4">what you get</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">What is included in our paid search <br /> marketing services? </h1>
          <p className="text-center text-md font-base text-gray-500 pb-4">When you partner with Numerique, you’ll gain access to our full range of paid SEM services. These services are designed to <br /> optimize every facet of your paid advertising, including:</p>
  </div>
<div className="px-5 md:px-10 lg:px-30">
        <div className="max-w-7xl mx-auto pt-8 md:pt-12 px-0 md:px-4">
  <div className="hidden lg:flex rounded-[60px] overflow-hidden bg-black">
    <div className="w-1/3 p-12 flex flex-col gap-6 text-white relative">
      {tabs.map((tab, index) => {
        const isActive = index === activeTabIndex;
        return (
          <div
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`!w-[160%] relative cursor-pointer transition-all duration-300 pl-10 pr-16 py-5 text-left text-lg md:text-xl font-medium leading-tight -ml-8
            ${isActive ? "bg-[#f89e1b] text-white rounded-full z-10" : "text-white hover:text-black hover:bg-white rounded-full z-0"}`}
          >
            {tab.title}
            {isActive && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 transform bg-black text-white rounded-full w-15 h-15 flex items-center justify-center">
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
        <NavLink to={tabs[activeTabIndex]?.link} className="mt-6 group text-black py-2 text-md font-semibold transition duration-300 relative overflow-hidden inline-flex items-center"><span className="relative z-10">LEARN MORE<span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span></span></NavLink>
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
</div>

        <div className="pb-4 pt-8 md:pt-12 lg:pt-18 px-5 md:px-10 lg:px-30">
          <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">FAQs about paid search <br /> management</h1>
          <p className="text-center text-md font-base text-gray-500 pb-4">Looking to learn more about paid search management for your business? Browse our FAQs</p>
          
          <div className="max-w-5xl mx-auto pt-8 space-y-2 md:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-gray-300 pb-2 md:pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left font-bold text-sm md:text-lg lg:text-xl md:font-medium hover:text-[#6754E9] focus:outline-none pt-5"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <FaMinus className="text-[#000000]" />
                  ) : (
                    <FaPlus className="text-[#f89e1b]" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-3 text-gray-500 text-xs font-semibold md:text-md">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteDesign;