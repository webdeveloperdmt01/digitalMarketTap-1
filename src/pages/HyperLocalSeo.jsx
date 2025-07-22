import React, { useState } from "react";
import AISeo from "../assets/hyperlocalImg.jpeg";
import AISeo2 from "../assets/hyperlocalImg2.jpg";
import rocket from "../assets/rocket.png";
import Badge0 from "../assets/clutch-badge.png";
import Badge1 from "../assets/new-badge.png";
import Badge2 from "../assets/new-badge2.png";
import Badge3 from "../assets/new-badge3.png";
import Badge4 from "../assets/logo_hubspot.png";
import SparklingStar from "../assets/sparklingStarBlack.png";
import {
  FaArrowRight,
  FaRocket,
  FaBullseye,
  FaSearch,
  FaEnvelope,
  FaCrown,
  FaCheckCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HyperLocalSeo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      icon: <FaBullseye className="text-[#F89E1B] text-2xl hover:text-black" />,
      title: (
        <>
         More potential customers
        </>
      ),
      description:
        "Hyperlocal SEO is a powerful digital marketing strategy for targeting potential customers. Hyperlocal searches have stronger buyer intent because, for example, if a coffee shop is near me (as they are planning to go for a coffee there nearby), they’re more likely to visit or call immediately.",
    },
    {
      icon: <FaSearch className="text-[#F89E1B] text-2xl hover:text-black" />,
      title: (
        <>
        Great for Mobile-optimized
        </>
      ),
      description:
        "Most of these hyperlocal searches are made via smartphones, so Google prioritizes sites that are optimized for mobile devices and tailored to specific locations in its ranking results. So it's important your website is mobile-optimized. Get the best SEO service in Delhi, India.",
    },
    {
      icon: <FaEnvelope className="text-[#F89E1B] text-2xl hover:text-black" />,
      title: <>Great for local businesses</>,
      description:
        "Whether you are running a clinic, workshop, or any service center. Hyperlocal SEO service is something you need. It's not only great for targeting potential customers but also great for targeting all the hyper-local geographical areas; it helps you to beat all the big brands in your neighborhood.",
    },
    {
      icon: <FaRocket className="text-[#F89E1B] text-2xl hover:text-black" />,
      title: (
        <>
        Ready for Voice search trend
        </>
      ),
     description: 
    'The "Near Me" and voice search trends are exploding day by day. More than 60% of people use Alexa and Siri for finding their preferred service, so it has become very important that your business is voice search optimized to increase your chances of getting more leads and traffic',
    }
  ];

  return (
    <main className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] px-5 md:px-10 lg:px-16 xl:px-30">
      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
          <div>
            <h5 className="text-sm md:text-base lg:text-md font-semibold text-black pt-4 md:pt-6 lg:pt-10">
              Hyperlocal SEO
            </h5>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold pt-3 md:pt-8">
              Hyperlocal SEO
            </h1>
            <h6 className="text-sm font-light lg:text-[16px] font-base text-[#545e5b] pt-4 md:pt-8 pb-6 md:pb-8">
              Hyperlocal SEO is the art of targeting your business to hyper-local areas, allowing it to
reach even the smallest geographical locations. And if you're looking for the best SEO
service in Delhi, contact us now
            </h6>
            <NavLink
              to="/"
              className="text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-8 py-3 text-white transition duration-300 hover:bg-[#6754E9]"
            >
              VIEW OPEN POSITIONS <FaArrowRight />
              <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
            </NavLink>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={AISeo}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </div>
      <div className="py-8 md:py-16">
        <div className="bg-[#f7f7fa] rounded-2xl p-5 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="items-start gap-4 max-w-xl">
            <div className="text-[#f89e1b] text-3xl md:text-5xl">
              <FaCrown />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold pt-6 text-black">
                Hyperlocal SEO: The Key to Dominating Nearby Searches
              </h2>
            </div>
          </div>
          <div className="max-w-md">
            <p className="font-bold text-black text-right">
              Premium
              <br />
              <span className="font-normal text-sm">Stock images</span>
            </p>
            <h6 className="text-sm font-light text-black pt-10 text-left">
              want to dominate all nearby areas? Get a Hyperlocal seo service right now. Your
company's secret weapon is hyperlocal SEO. It helps you show up in Google's local
3-pack, draw in local clients, and rank higher in location-based searches.

            </h6>
          </div>
        </div>
      </div>

      <div className=" pt-5">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
          <img
            src={AISeo2}
            alt="Team Collaboration"
            className="w-full object-cover"
          />
        </div>
        <div className="max-w-2xl text-left">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3">
            {" "}
            Our Capabilities
          </p>
          <h2 className="text-2xl md:text-5xl font-semibold text-black mb-6 leading-tight">
       What is hyperlocal SEO, and why does it matter in 2025?
          </h2>
          <button className="group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden">
            <span className="relative z-10 flex items-baseline gap-2">
              View All Solutions <FaArrowRight />
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
          </button>
        </div>
      </div>

      <div className="pt-5 md:pt-8 lg:pt-10 pb-4 md:pb-14 lg:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-black flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-left">
                  {service.title}
                </h3>
                <h6 className="text-sm text-[#57595b] mb-6 text-left font-light">
                  {service.description}
                </h6>
              </div>

              <div className="text-left mt-auto">
                <a
                  href="#"
                  className="group inline-block text-sm font-semibold relative border-b-2 border-[#6754e9]"
                >
                  LEARN MORE
                  <span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 md:pt-6 lg:pt-8 pb-26 md:pb-28 lg:pb-32">
        <h5 className="text-md font-medium pb-4 uppercase">A.I. SEO</h5>
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
                <FaCheckCircle className="text-[#6754E9] text-2xl mt-1 shrink-0" />
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
                <img
                  src={rocket}
                  alt="rocket"
                  className="absolute top-0 right-0 md:right-12 lg:right-20 h-20 md:h-34 -mt-8 md:-mt-10 lg:-mt-13 mr-0 md:-mr-8 lg:-mr-10 rotate-35 object-contain"
                />
                <img
                  src={SparklingStar}
                  alt="SparklingStar"
                  className="absolute top-0 right-0 md:right-12 lg:right-50 h-10 md:h-14 -mt-4 md:-mt-6 lg:-mt-6 mr-15 md:mr-10 lg:-mr-10 rotate-[35deg] object-contain"
                />
                <form className="flex flex-col space-y-6 text-[#a4a4a4]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#6754E9] rounded-2xl outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#6754E9] rounded-2xl outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#6754E9] rounded-2xl outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#6754E9] rounded-2xl outline-none"
                  />
                  <textarea
                    placeholder="What can we help you with?"
                    className="w-full px-4 py-3 border border-[#ababab] hover:border-[#6754E9] rounded-2xl outline-none resize-none h-28"
                  ></textarea>
                  <button
                    type="submit"
                    className="relative w-full bg-black text-white font-semibold py-3 rounded-2xl hover:bg-[#6754E9] transition duration-300 group"
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
          <p className="text-xl font-semibold text-gray-800 pr-10">
            Credentials & <br className="hidden md:block" /> Recognition:
          </p>
        </div>
        <div className="w-full lg:w-2/3 flex justify-center lg:justify-start flex-wrap items-center gap-4 md:gap-6 py-2">
          <img
            src={Badge0}
            alt="Badge 0"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={Badge1}
            alt="Badge 1"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={Badge2}
            alt="Badge 2"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={Badge3}
            alt="Badge 3"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={Badge4}
            alt="Badge 4"
            className="h-16 md:h-20 object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default HyperLocalSeo;
