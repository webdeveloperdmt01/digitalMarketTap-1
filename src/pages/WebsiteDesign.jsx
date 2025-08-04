import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaCrown,
  FaPlus,
  FaMinus,
  FaBullhorn,
  FaChartLine,
  FaBullseye,
  FaLightbulb,
  FaRocket,
  FaEnvelope,
  FaUserFriends,
  FaCertificate,
  FaChartBar,
  FaDollarSign,
  FaSearch,
  FaComments,
  FaQuoteRight,
  FaMapMarkerAlt,
  FaAmazon,
  FaGoogle,
  FaCheckCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import WebsiteDesign1 from "../assets/websiteDevelopment.webp";
import WebsiteDesign2 from "../assets/websitedesign2.png";
import PowerEliteIcon from "../assets/vamtam-elite-WD.png";
import ElementorIcon from "../assets/Elementor-Logo-Full-WD.png";
import TabletPic from "../assets/Tablets-WD.png";
import PhonePic from "../assets/Phone-WD.png";

const iconList = [
  FaBullhorn,
  FaChartLine,
  FaBullseye,
  FaLightbulb,
  FaRocket,
  FaEnvelope,
  FaUserFriends,
  FaCertificate,
  FaChartBar,
  FaDollarSign,
  FaSearch,
  FaComments,
  FaUserFriends,
  FaQuoteRight,
  FaMapMarkerAlt,
  FaAmazon,
  FaGoogle,
  FaCheckCircle,
];

const tabs = [
  {
    title: (
      <>
        Ecommerce
        <br /> Website
      </>
    ),
    content: {
      heading:
        "We design your website very carefully, especially when it comes to Ecommerce websites. It took so much effort to create, design ideas, and creativity to deliver an Ecommerce website which is as unique as your business. Following are the key points which we add in Ecommerce website to increase its performance",
      features: [
        "Add Social Media Integration.",
        "Add content management system.",
        "Effective Search Functionality.",
        "Add high quality product images.",
        "Focus on SEO and mobile optimization.",
        "Check securities and speed of page loads.",
        "We ensure your website is accessible for users.",
      ],
      link: "/e-commerce-website-development",
      percentage: "93%",
      percentageNote:
        "Of customers reported that their online experience begins with search",
    },
  },
  {
    title: (
      <>
        Blog
        <br />
        News Website
      </>
    ),
    content: {
      heading:
        "We create a high-performing SEO optimized Blog News Website which effortlessly delivers news and blogs perfect for today's generation. Want to level-up your blogs, journalist, content creation journey to the next level you're at the right place we present you the best Blog News Website with following key points",
      features: [
        "Ad & Affiliate Ready.",
        "Category & Tag Management.",
        "Multi-Author Functionality.",
        "Social Sharing Integration.",
        "SEO and Mobile optimized website.",
        "Tailored High-performing Blog News Website.",
        "Customized designs and latest technologies.",
      ],
      link: "blog-news-website",
      percentage: "93%",
      percentageNote:
        "Of customers reported that their online experience begins with search",
    },
  },
  {
    title: (
      <>
        Educational <br /> Website
      </>
    ),
    content: {
      heading:
        "Digital Market Tap presents you the best high-performing 100% customized Educational website yet at the most affordable rates to transform every institute, school, tuition classes, and e-learning platforms digital presence. Our customized educational website helps you deliver your knowledge and values more efficiently",
      features: [
        "Fast page load.",
        "Fees payment & admission form.",
        "100 % SEO and mobile optimized.",
        "Detailed updated course listing.",
        "Latest designs and technologies.",
        "Specially customized for learning.",
        "Latest technologies for security check.",
      ],
      link: "/education-website",
      percentage: "93%",
      percentageNote:
        "Of customers reported that their online experience begins with search",
    },
  },
  {
    title: (
      <>
        Business <br /> Website
      </>
    ),
    content: {
      heading:
        "Looking for 100% customized latest UI and UX design business website service in Delhi? Which wouldn't hurt your pocket and increase your business, digital performance, and reflect and maintain your strong business presence. Following are key points we added to your website to attract customers and generate leads.",
      features: [
        "Talore made designs.",
        "High-quality graphics.",
        "SSL-secured and GDPR-compliant.",
        "Latest technologies and designs.",
        "Logo design for your unique brand.",
        "100% SEO Friendly and Mobile optimized.",
        "Fast performing and personalized support.",
      ],
      link: "/buisness-website",
      percentage: "93%",
      percentageNote:
        "Of customers reported that their online experience begins with search",
    },
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
    question: "What does website development do?",
    answer:
      "In website development, we create high-end websites according to your needs. Our task is to create, build, and maintain websites. Our expert web developers are trained to deliver the best website development service.",
  },
  {
    question: "Is your website SEO and mobile-friendly?",
    answer:
      " Absolutely yes! Our websites are 100% SEO and mobile optimized because, as we know, 70% people use mobile more than laptops and computers. And our websites are totally SEO friendly, so they can rank in Google search engine.",
  },
  {
    question: "How many types of websites do you create?",
    answer:
      "We create almost all kinds of websites including e-commerce websites, business websites, blog websites, portfolio websites, social media websites, educational websites, and entertainment websites according to your niche.",
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
      <section className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] relative overflow-hidden">
        <div className="pb-4 pl-5 md:pl-10 lg:pl-15 xl:pl-30">
          <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-30">
            <div>
              <h5 className="text-sm md:text-base lg:text-md font-semibold text-black pt-4 md:pt-6 lg:pt-12">
                WEBSITE DEVELOPMENT
              </h5>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-8 md:pt-12 lg:pt-18 pr-5 md:pr-0 lg:pr-0">
                Website development company in Delhi
              </h1>
              <h6 className="text-sm lg:text-[18px] font-light text-gray-500 pt-4 md:pt-8 pb-6 md:pb-8 pr-5 md:pr-0 lg:pr-0">
                Searching for the best website development company in Delhi,
                your search ends here.{" "}
                <span className="font-semibold text-gray-500">
                  Digital Marketing Tap
                </span>
                provides the best website development and designing services all
                across Delhi. With the help of your expert website developers
                and graphic designers, we never fail to deliver high-performing
                websites, we use the latest UI, UX designs to evaluate the
                overall look of the website, our websites are 100% mobile
                optimized and SEO friendly so don't have to be worried about
                website ranking and performance, we use all the latest
                technologies, designs, and animations to increase overall look
                and performance of our website. That's what makes us the best
                website development agency in Delhi.
              </h6>

              <NavLink
                to="/"
                className="font-syne text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#f89e1b]"
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

        <div className="py-8 md:py-16 px-5 md:px-10 lg:px-15 xl:px-30">
          <div className="bg-[#f7f7fa] rounded-2xl p-5 md:p-12 flex flex-col lg:flex-row justify-between items-start md:items-center gap-6">
            <div className="items-start gap-4 max-w-xl">
              <div className="text-[#f89e1b] text-3xl md:text-5xl">
                <FaCrown />
              </div>
              <div>
                <h2 className="text-2xl md:text-lg lg:text-2xl xl:text-3xl font-bold pt-6 text-black">
                  High-performance tailored website— by The Best Website
                  Development Company in Delhi
                </h2>
              </div>
            </div>
            <div className="max-w-md">
              <h6 className="text-md text-gray-500 pt-10 text-left font-light">
                We want to help you get the best tailored website according to
                your needs, which will be as unique as your brand value, as
                beautiful as your services and products, and as secure as your
                mindset. We allow 100% customization, we can turn your
                imagination into reality. With the help of our expert and
                experienced website developers and graphic designers we make
                sure the website turns out 100% secure, eye catchy visuals, 100%
                mobile optimized and seo friendly.
              </h6>
            </div>
          </div>
        </div>

        <div className="relative pb-8 md:pb-16">
          <img
            src={WebsiteDesign2}
            alt="big-banner"
            className="w-full h-auto"
          />
          <div className="absolute  top-[14%] md:top-[18%] lg:top-[19%] left-1/2 transform -translate-x-1/2 max-w-2xl bg-white shadow-lg px-4 md:px-6 lg:px-16 py-4 md:py-6 lg:py-10 z-10">
            <div className="text-center">
              <h1 className="text-xl md:text-4xl lg:text-6xl font-bold leading-tight text-black text-left">
                Details,
                <br />
                not only in
                <br />
                home pages...
              </h1>
              <div className="flex items-center justify-start gap-4 md:gap-18 mt-4 md:mt-8 lg:mt-16">
                <div className="flex items-center gap-2">
                  <img
                    src={PowerEliteIcon}
                    alt="Power Elite"
                    className="h-6 md:h-10"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={ElementorIcon}
                    alt="Elementor"
                    className="h-6 md:h-10"
                  />
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
                  transform: isLaptopScreen
                    ? `translateY(${offsetY * 0.2}px)`
                    : "translateY(0px)",
                  transition: "transform 0.1s linear",
                }}
              />
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-3 lg:pt-20">
                2025
                <br />
                Modern UI/UX
              </h1>
              <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8 pr-5 md:pr-0 lg:pr-0">
                It has purpose oriented design and it is suitable for users with
                zero programming skills as well as advanced developers.
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
                <div
                  key={i}
                  className="w-4 h-4 rounded-full bg-[#f89e1b] relative -top-2"
                />
              ))}
            </div>
            <div className="flex justify-between mt-3 md:mt-5 max-w-8xl mx-auto text-sm font-semibold text-black font-syne">
              <span className="text-xs md:text-sm">
                Our customers have raised <br /> over $350mn in Funding
              </span>
              <span className="text-xs md:text-sm">
                In over 2 years, we've <br />
                never lost a customer
              </span>
              <span className="text-xs md:text-sm">
                We work with the world's <br /> fastest growing startups
              </span>
              <span className="text-xs md:text-sm">
                Distributed team of over 20 of <br /> the worlds best marketers,{" "}
                <br />
                podcasters and copywriters
              </span>
            </div>
          </div>
        </div>

        <div className="w-full px-5 py-10 lg:py-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
            <div className="max-w-xs text-left">
              <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">
                Icons
              </h2>
              <p className="text-lg text-black">
                Custom created icons crafted for your personal needs.
              </p>
            </div>
            <div className="w-full md:flex-1 p-8 md:p-12 lg:p-16 rounded-md bg-[#ffeacd]">
              <div className="grid grid-cols-5 gap-8 md:gap-18">
                {iconList.map((Icon, idx) => (
                  <Icon
                    key={idx}
                    className="text-black hover:text-[#f89e1b] text-2xl md:text-4xl"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>


        <section className="max-w-7xl mx-auto py-6 md:py-12 lg:py-24 px-5 md:px-10 lg:px-15 xl:px-0">
           <p className="text-center text-md font-semibold uppercase pb-4">
            what you get
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl max-w-5xl mx-auto text-center pb-6 font-medium md:font-semibold">
            We lead with customer-first strategies:
          </h1>
          <h6 className="font-light text-md md:text-lg max-w-3xl mx-auto text-center pb-8 md:pb-10 lg:pb-18 text-[#5a5a5a]">
            Driving growth through personalized experiences for truly end-to-end
            business building.
          </h6>
          <div className="hidden lg:flex rounded-[60px] overflow-hidden bg-black">
            <div className="w-1/3 p-12 flex flex-col gap-4 text-white relative">
              {tabs.map((tab, index) => {
                const isActive = index === activeTabIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveTabIndex(index)}
                    className={`font-syne !w-[160%] relative cursor-pointer transition-all duration-300 pl-12 pr-16 py-4 text-left text-lg md:text-2xl font-medium leading-tight -ml-8
                          ${
                            isActive
                              ? "bg-[#f89e1b] text-white rounded-full z-10"
                              : "text-white hover:text-black hover:bg-white rounded-full z-0"
                          }`}
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
            <div className="w-3/3 bg-[#f7f7fa] py-20 lg:pl-10 xl:pl-36 lg:pr-4 xl:pr-16 flex items-center justify-between gap-15 rounded-[60px] font-syne">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-6 leading-snug text-left">
                  {tabs[activeTabIndex]?.content.heading}
                </h2>
                <ul className="space-y-4 text-md text-black">
                  {tabs[activeTabIndex]?.content.features.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#f89e1b] w-6 h-6" />{" "}
                      {item}
                    </li>
                  ))}{" "}
                </ul>
                <div className="text-left mt-8">
                  <a
                    href={tabs[activeTabIndex]?.content.link}
                    className="group inline-block text-sm font-semibold relative border-b-2 border-[#fbc371]"
                  >
                    LEARN MORE →
                    <span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center bg-white rounded-[30px] p-6">
                <div className="relative w-46 h-46 rounded-full border border-[#ededed] flex items-center justify-center">
                  <div className="relative w-36 h-36 rounded-full border border-[#f89e1b] flex items-center justify-center">
                    <span className="text-4xl font-bold text-black">
                      {tabs[activeTabIndex]?.content.percentage}
                    </span>
                    <span className="absolute top-[65%] text-[#f89e1b] text-2xl">
                      ↑
                    </span>
                  </div>
                </div>
                <p className="text-sm mt-4 max-w-[180px] text-black">
                  {tabs[activeTabIndex]?.content.percentageNote}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            {tabs.map((tab, index) => {
              const isOpen = activeTabIndex === index;
              const { heading, features, percentage, percentageNote } =
                tab.content;

              return (
                <div
                  key={index}
                  className="mb-6 border border-gray-200 rounded-3xl overflow-hidden"
                >
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
                      <h2 className="text-lg font-semibold mb-4 text-black">
                        {heading}
                      </h2>
                      <ul className="space-y-3 text-sm text-black">
                        {features.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <FaCheckCircle className="text-[#f89e1b]" /> {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 text-left">
                        <a
                          href={tabs[activeTabIndex]?.content.link}
                          className="text-sm font-semibold text-orange-500 border-b-2 border-orange-300 hover:border-orange-500"
                        >
                          LEARN MORE →
                        </a>
                      </div>
                      <div className="mt-6 flex flex-col items-center justify-center bg-white rounded-3xl p-4">
                        <div className="relative w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full border-2 border-[#f89e1b] flex items-center justify-center relative">
                            <span className="text-3xl font-bold">
                              {percentage}
                            </span>
                            <span className="absolute top-[65%] text-[#f89e1b] text-xl">
                              ↑
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-black mt-3 text-center max-w-[180px]">
                          {percentageNote}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="pb-16 md:pb-18 lg:pb-22 pt-8 md:pt-12 lg:pt-18 px-5 md:px-10 lg:px-15 xl:px-30">
          <p className="text-center text-md font-semibold uppercase pb-4">
            FAQ
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
            FAQs about Website <br /> Development
          </h1>
          <p className="text-center text-md md:text-lg font-base text-gray-500 pb-4">
            Looking to learn more about website design & development for your
            business? Browse our FAQs
          </p>

          <div className="max-w-5xl mx-auto pt-8 space-y-2 md:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-t border-gray-300 pb-2 md:pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-lg md:text-2xl font-medium hover:text-[#f89e1b] focus:outline-none pt-5"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <FaMinus className="text-[#000000]" />
                  ) : (
                    <FaPlus className="text-[#f89e1b]" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-3 text-gray-500 text-md md:text-xl lg:text-lg font-medium md:text-md">
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
