import React, { useState, useEffect } from "react";
import { FaArrowRight, FaCrown, FaPlus, FaMinus ,FaBullhorn, FaChartLine, FaBullseye, FaLightbulb, FaRocket, FaEnvelope, FaUserFriends, FaCertificate, FaChartBar, FaDollarSign, FaSearch, FaComments, FaQuoteRight, FaMapMarkerAlt, FaAmazon, FaGoogle  } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import WebsiteDesign1 from "../assets/WebsiteDesign1.png";
import WebsiteDesign2 from "../assets/WebsiteDesign2.jpg";
import PowerEliteIcon from "../assets/vamtam-elite-WD.png";
import ElementorIcon from "../assets/Elementor-Logo-Full-WD.png";
import TabletPic from "../assets/Tablets-WD.png";
import PhonePic from "../assets/Phone-WD.png";

const iconList = [
  FaBullhorn, FaChartLine, FaBullseye, FaLightbulb, FaRocket,
  FaEnvelope, FaUserFriends, FaCertificate, FaChartBar, FaDollarSign,
  FaSearch, FaComments, FaUserFriends, FaQuoteRight, FaMapMarkerAlt,
  FaAmazon, FaGoogle,
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