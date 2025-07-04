import React, { useEffect, useState, useRef } from "react";
import marketingImg from "../assets/Marketing1.png";
import BlueRocket from "../assets/blueRocket.png";
import GooglePartner from "../assets/google-partner.png";
import marketingStrategy from "../assets/MarketingSolutionStrategy.jpg";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import BrandSlider from "../components/BrandSlider";

import { NavLink } from "react-router-dom";
import {
  FaBullseye,
  FaSearch,
  FaEnvelope,
  FaRocket,
  FaRupeeSign,
  FaAmazon,
  FaGoogle,
  FaComment,
} from "react-icons/fa";

function MarketingSolution() {
  const services = [
    {
      icon: (
        <FaBullseye className="text-[#6754e9] text-2xl hover:text-orange-500" />
      ),
      title: (
        <>
          Paid search <br />
          marketing
        </>
      ),
      description:
        "Craft campaigns — built just for your business — to ensure real and quantifiable ROI.",
    },
    {
      icon: (
        <FaSearch className="text-[#6754e9] text-2xl hover:text-orange-500" />
      ),
      title: (
        <>
          Search engine
          <br />
          optimization
        </>
      ),
      description:
        "Maintain your best spot on the search results page, so you can find new customers and re–engage loyal ones.",
    },
    {
      icon: (
        <FaEnvelope className="text-[#6754e9] text-2xl hover:text-orange-500" />
      ),
      title: <>Email marketing</>,
      description:
        "When it comes to reaching your target audience, you can’t get much closer than direct to their inboxes.",
    },
    {
      icon: (
        <FaRocket className="text-[#6754e9] text-2xl hover:text-orange-500" />
      ),
      title: (
        <>
          Conversion rate
          <br />
          optimization
        </>
      ),
      description:
        "Craft campaigns — built just for your business — to ensure real and quantifiable ROI.",
    },
    {
      icon: (
        <FaComment className="text-[#6754e9] text-2xl hover:text-orange-500" />
      ),
      title: (
        <>
          Social media <br />
          marketing
        </>
      ),
      description:
        "Social Media Management is vital for company and brand awareness",
    },
    {
      icon: (
        <FaGoogle className="text-[#6754e9] text-2xl hover:text-orange-500" />
      ),
      title: <>Google shopping</>,
      description:
        "Google shopping ads are a no-brainer for any eCommerce company with an online presence wishing to increase",
    },
    {
      icon: (
        <FaRupeeSign className="text-[#6754e9] text-2xl hover:text-orange-500" />
      ),
      title: <>Influencer marketing</>,
      description: "Grow your brand with the help of our influencers and marketing experts.",
    },
    {
      icon: (
        <FaAmazon className="text-[#6754e9] text-2xl hover:text-orange-500" />
      ),
      title: <>Amazon shopping</>,
      description: "Marketing on Amazon is all about keywords and presentation.",
    },
  ];
  const stats = [
    { value: 3, suffix: "%", label: "Of Google advertisers" },
    { value: 100, suffix: "%", label: "Growth clients" },
    { value: 15, suffix: "M", label: "Managed budgets" },
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [leadsGenerated, setLeadsGenerated] = useState(0);

  const statsRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted.current) {
            animationStarted.current = true;
            animateNumbers();
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 1500;
    const startTime = performance.now();
    const targetLeads = 282000;

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newValues = stats.map(({ value }) => Math.floor(progress * value));
      setAnimatedValues(newValues);

      setLeadsGenerated(Math.floor(progress * targetLeads));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setAnimatedValues(stats.map(({ value }) => value));
        setLeadsGenerated(targetLeads);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <>
      <section className="bg-[#fdf1e7] py-8 lg:py-20 px-5 md:px-10 lg:px-30">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-18">
              Marketing Solutions
            </h3>
            <h2 className="text-4xl lg:text-6xl font-bold text-black mt-2 leading-tight">
              Solutions for business growth
            </h2>
            <p className="text-md text-black mt-5 mb-10 font-semibold">
              Numerique Marketing is the intersection between creative and
              performance. Our team delivers the perfect combination of creative
              and paid media expertise to maximize results.
            </p>
            <NavLink
              to="/free-audit"
              className="group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#6754E9] transition duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">
                GET A FREE AUDIT →
                <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </NavLink>
          </div>
          <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <img
              src={marketingImg}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fdf1e7] py-8 md:py-12 px-5 md:px-10 lg:px-30">
        <h2 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4">We lead with customer-first <br /> strategies: </h2>
        <p className=" text-center text-sm md:text-md font-semibold text-gray-600 lg:text-md mb-2 md:mb-8">Driving growth through personalized experiences for truly end-to-end business building.</p>
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
                <p className="text-sm text-[#57595b] mb-12 text-left">
                  {service.description}
                </p>
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
      </section>

      <section className="bg-[#fdf1e7] py-8 lg:py-20 px-5 md:px-10 lg:px-30">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <img
              src={marketingStrategy}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="p-2 md:p-8 lg:p-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mt-2 leading-tight">
              We are committed to your strategy{" "}
            </h2>
            <p className="text-md text-black mt-5 mb-10 font-semibold">
              Numerique Marketing is the intersection between creative and
              performance. Our team delivers the perfect combination of creative
              and paid media expertise to maximize results.
            </p>
            <NavLink
              to="/"
              className="group text-black text-sm font-semibold transition duration-300 relative overflow-hidden"
            >
              <a
                href="#"
                className="group inline-block text-xs font-semibold relative border-b-2 border-[#6754e9]"
              >
                MORE ABOUT OUR COMPANY
                <span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </NavLink>
          </div>
        </div>
      </section>

      <section
        ref={statsRef}
        className="py-6 md:py-16 rounded-t-[60px] px-5 md:px-10 lg:px-20 mb-2 md:mb-16"
      >
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-4 md:px-6 lg:px-10 py-10 lg:py-15 rounded-[60px] bg-[#f7f7fa]">
            <div className="flex flex-col items-center w-full lg:w-2/3">
              <h2 className="text-left text-xl md:text-3xl font-semibold mb-8 w-full max-w-3xl">
                Driving Real Results
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full text-center">
                {stats.map(({ suffix, label }, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="relative w-42 h-42 rounded-full border border-[#D7DEE6] flex items-center justify-center">
                      <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-2 border-[#6754e9]">
                        <div className="text-3xl font-bold">
                          {animatedValues[i]}
                          {suffix}
                        </div>
                        <span className="absolute bottom-3 text-[#6754e9] text-md">
                          <FaArrowUp />
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 md:mt-4 text-md md:text-lg font-medium text-black">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#e9e5ff] text-center mt-15 px-10 py-10 md:px-20 md:py-16 rounded-[40px] lg:w-1/3 w-full">
              <h3 className="text-4xl font-bold mb-2">
                {leadsGenerated.toLocaleString()}+
              </h3>
              <p className="text-black font-semibold mb-6">
                Leads generated so far...
              </p>
             <NavLink
  to="/contact-us"
  className="text-sm group relative inline-flex items-center gap-2 rounded-[15px] bg-black px-6 py-2 text-white transition duration-300 hover:bg-[#6754E9]"
>
  CONTACT US <FaArrowRight />
  <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
</NavLink>
            </div>
          </div>
        </div>
      </section>

  <BrandSlider/>
<div className="p-5 md:p-0">
<section className="bg-[#f8f8fb] rounded-[30px] md:rounded-[60px] py-12 px-4 sm:px-6 md:px-12 relative overflow-hidden max-w-7xl mx-auto my-12 text-center shadow-sm">
  <img src={BlueRocket} alt="Custom" className="hidden md:block w-14 md:w-18 absolute right-2 md:right-12 top-0 -rotate-20 origin-top z-10"/>
  <div className="flex justify-center items-center mb-4">
    <img
      src={GooglePartner}
      alt="Partner Logo"
      className="h-8 sm:h-10 w-auto"
    />
  </div>
  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug text-black px-2 sm:px-0">
    Get started with a Free <br className="hidden md:block" /> consultation
  </h2>
  <NavLink
    to="/free-audit"
    className="group bg-black text-white mt-6 px-6 sm:px-8 md:px-10 py-3 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-[#6754E9] transition duration-300 inline-block relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center justify-center gap-1">
      GET A PROPOSAL <FaArrowRight />
      <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
    </span>
  </NavLink>
</section>
</div>
    </>
  );
}

export default MarketingSolution;
