import React, { useState, useRef } from "react";
import LocalSeo from "../assets/localSeo-1.png";
import LocalSeo2 from "../assets/localSeo-2.jpg";
import LocalSeo3 from "../assets/localSeo-3.png";
import LocalSeo4 from "../assets/localSeo-4.png";
import LocalSeo5 from "../assets/localSeo-5.png";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPlus,
  FaMinus,
  FaGamepad,
  FaHeartbeat,
  FaPiggyBank,
  FaBalanceScale,
  FaHome,
  FaBus,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function ImageComparisonSlider({ leftImage, rightImage }) {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let clientX;

    if (e.touches) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    let pos = (clientX - rect.left) / rect.width;
    pos = Math.min(Math.max(pos, 0), 1);
    setSliderPosition(pos * 100);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
      onTouchMove={handleDrag}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 600,
        height: 400,
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        margin: "auto",
        borderRadius: 30,
      }}
    >
      <img
        src={rightImage}
        alt="Right"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "fill",
          borderRadius: 30,
        }}
      />
      <img
        src={leftImage}
        alt="Left"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "fill",
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)`,
          borderRadius: 30,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: `${sliderPosition}%`,
          width: 3,
          height: "100%",
          backgroundColor: "#f89e1b",
          transform: "translateX(-1.5px)",
          zIndex: 10,
          borderRadius: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${sliderPosition}%`,
          width: 20,
          height: 20,
          backgroundColor: "#f89e1b",
          borderRadius: "50%",
          border: "2px solid white",
          transform: "translate(-50%, -50%)",
          cursor: "ew-resize",
          zIndex: 20,
          boxShadow: "0 0 5px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}

export default function LocalSeoPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      icon: (
        <FaHeartbeat className="text-[#f89e1b] text-2xl hover:text-black" />
      ),
      title: "Increase Local visibility",
      description:
        "Local SEO increases your visibility in local nearby areas. So when a customer is searching for services in their nearby areas, your business will appear in a higher rank. It makes it easier for customers to find your business and get their preferred services.",
    },
    {
      icon: (
        <FaPiggyBank className="text-[#f89e1b] text-2xl hover:text-black" />
      ),
      title: "Higher website traffic",
      description:
        "Local SEO helps in increasing website traffic from local users. If you have linked your website in GMB Whenever a customer searches for services and your GMB appears,they will go through your website, and you will get website traffic from local users.",
    },
    {
      icon: (
        <FaBalanceScale className="text-[#f89e1b] text-2xl hover:text-black" />
      ),
      title: "More leads, calls, and traffic",
      description:
        "Local SEO allows you to get more calls, directions, and in-store visits from potential clients as a result of optimizing your Google My Business (GMB) profile. Potential customers who will be searching for service will definitely visit or call you because of optimized GMB",
    },
    {
      icon: <FaHome className="text-[#f89e1b] text-2xl hover:text-black" />,
      title: "Increase customer trust.",
      description:
        "Having an optimized GMB will help you to increase customer trust, because customers can see both positive and negative reviews, company posts and photos, location, and all the important details, and customer reviews boost your credibility and trustworthiness.",
    },
    {
      icon: <FaBus className="text-[#f89e1b] text-2xl hover:text-black" />,
      title: "Cost-Effective Marketing",
      description:
        "Compared to ads and campaigns Local SEO is an affordable way to get online recognition, and it provides long-term results. It's also the most organic way to get more traffic and online visibility. So it's not just budget-friendly but also helpful in many ways.",
    },
    {
      icon: <FaGamepad className="text-[#f89e1b] text-2xl hover:text-black" />,
      title: "Stronger Presence on Google Maps",
      description:
        "You may establish a more powerful presence on Google Maps by using local SEO. A well-structured GMB listing and local citations improve your Google Maps ranking,which attracts customers to your business. More potential clients and a more robust Google Maps presence are the results.",
    },
  ];

  const faqs = [
    {
      question: "What is paid search management?",
      answer:
        "Paid search management involves creating, managing, and optimizing pay-per-click (PPC) advertising campaigns on search engines like Google and Bing to drive targeted traffic to your website.",
    },
    {
      question: "How much does paid search management cost?",
      answer:
        "The cost varies depending on your budget, industry, and campaign complexity. We offer flexible pricing models to suit different business needs and budgets.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "You can start seeing traffic immediately once campaigns are live, but meaningful results and optimization typically occur within 2-4 weeks of continuous management.",
    },
    {
      question: "Do you provide reporting and analytics?",
      answer:
        "Yes, we provide detailed monthly reports showing campaign performance, key metrics, and recommendations for improvement.",
    },
  ];

  return (
    <main className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] px-5 md:px-10 lg:px-15 xl:px-30">
      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
          <div>
            <h5 className="uppercase text-sm md:text-base lg:text-md font-semibold text-black pt-4 md:pt-6 lg:pt-0 xl:pt-10">
              Local SEO
            </h5>
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pt-3 md:pt-8">
              Rank Higher in Local Searches with Expert Local SEO
            </h1>
            <h6 className="text-sm lg:text-[16px] font-light text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8">
              Digital Market Tap provides best local services that are intended
              to literally put your company on the map. Your clients are
              currently looking for you if you are a brick and mortar company or
              a local service provider. Allow us to assist you in being found.
            </h6>
            <NavLink
              to="/"
              className="font-syne text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#f89e1b]"
            >
              VIEW OPEN POSITIONS <FaArrowRight />
              <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
            </NavLink>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={LocalSeo}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </div>

      <div className="pt-12 md:pt-28 lg:pt-28 xl:pt-38">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-center">
          <div className="flex lg:justify-end">
            <img
              src={LocalSeo2}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="pl-2 md:pl-8 lg:pl-0 xl:pl-20">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              What is local SEO
            </h3>
            <h6 className="text-sm lg:text-[16px] font-light text-[#545e5b] pt-2 pb-6">
              Local SEO (search engine optimization) is a way to optimize your
              Google My Business and get a higher rank in your selected area.
              When someone searches “near me” or service in your area, local SEO
              services make sure that your business appears on top. It increases
              leads and engagement and also increases customer trust. It
              attracts more physical customers who are searching for services in
              their nearby areas, and it also increases chances to get more
              genuine leads.
            </h6>
            <a
              href="#"
              className="font-syne group inline-block text-sm font-semibold relative border-b-2 border-[#4118d2]"
            >
              MEET OUR TEAM
              <span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-10 md:pt-20 lg:pt-28 pb-16">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase mb-6">
                Company Values
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">
                Rank Higher in Maps & Local Listings — Stay Ahead of Competitors
              </h1>
            </div>
            <div className="text-gray-700 font-light pl-0 md:pl-16 lg:pl-0 xl:pl-22">
              <h6>
                We have the best SEO service in Delhi, India. We have highly
                trained SEO experts who have years of experience in this field
                and know all the latest updates and ways to make sure your
                business gets a higher rank. To put your business at the top of
                search results, we combine innovative SEO methods with a
                comprehensive awareness of the local market. Our individualized
                strategy and open reporting guarantee that you see significant
                growth quickly.
              </h6>
            </div>
          </div>
          <div className="mt-10 md:mt-16 lg:mt-20 max-w-8xl mx-auto">
            <div className="relative flex justify-between items-center border-t border-dashed border-gray-300">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full bg-[#f89e1b] relative -top-2"
                />
              ))}
            </div>
            <div className="font-syne flex justify-between mt-3 md:mt-5 max-w-8xl mx-auto text-sm font-semibold text-black">
              <span className="text-xs md:text-sm">Celebrate creativity</span>
              <span className="text-xs md:text-sm">Honest & integrity</span>
              <span className="text-xs md:text-sm">
                Teamwork & collaboration
              </span>
              <span className="text-xs md:text-sm">Social responsibility</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
          <img
            src={LocalSeo3}
            alt="Team Collaboration"
            className="w-full object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="py-4 md:py-6 lg:py-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold pb-4 lg:pb-14">
          Benefits
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-md text-[#57595b] text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pt-3 md:pt-8">
              Get the updated <br />
              iPad <span className="text-[#f89e1b]"> Templates </span>
            </h1>
            <p className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8">
              You can also reduce the extra loading time in your WordPress
              websites. Leverage the best addons pack for the Elementor page
              builder.
            </p>
            <p className="text-sm lg:text-[16px] font-base pt-1 md:pt-3 pb-1 md:pb-3">
              Sync to Cloud
            </p>
            <p className="text-sm lg:text-[16px] font-base pt-1 md:pt-3 pb-1 md:pb-3">
              Create Your Own Palylist
            </p>
            <p className="text-sm lg:text-[16px] font-base pt-1 md:pt-3 pb-1 md:pb-3">
              Share Instantly
            </p>
          </div>
          <div className="flex lg:justify-end">
            <ImageComparisonSlider
              leftImage={LocalSeo4}
              rightImage={LocalSeo5}
            />
          </div>
        </div>
      </div>

      <div className="py-8 md:py-12 lg:py-18">
        <h5 className="text-md font-medium pb-4 uppercase">Local SEO</h5>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-6xl pb-4 md:pb-8">
          Elevating Enterprise SEO Services
        </h1>
        <h3 className="text-left font-semibold text-md md:text-lg text-black pb-3 md:pb-7">
          Looking to learn more about SEO with Ai for your business? Fill the
          Form: <br />
          When you partner with Numerique, we take care of the heavy lifting, so
          you can enjoy more website traffic, leads, and revenue.
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
                <h2 className="text-2xl font-semibold text-black pb-6">
                  Get your Quotation
                </h2>

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
    </main>
  );
}
