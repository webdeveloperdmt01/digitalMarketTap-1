import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountUp from "react-countup";
import { FaArrowUp, FaCheckCircle } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import ProjectData from "../data/ProjectData";
import BorderBottomCenter from "../assets/border-center.png";
import Rocket1 from "../assets/rocket.png";
import googlePartner from "../assets/google-partner-1.png";

const ProjectDetailPage = () => {
  const { brandName } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(50);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = ProjectData.find(
        (item) => item.brandName.toLowerCase() === brandName.toLowerCase()
      );
      setProject(result);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [brandName]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-pulse">
        <div className="w-12 h-12 border-4 border-t-transparent border-purple-500 rounded-full animate-spin mb-6"></div>
        <p className="text-xl text-gray-700 font-medium">Fetching your project data...</p>
      </div>
    );

  if (!project)
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-red-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856C19.07 19 20 17.985 20 16.824V7.176C20 6.015 19.07 5 17.918 5H6.082C4.93 5 4 6.015 4 7.176v9.648C4 17.985 4.93 19 6.082 19z"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-red-500 mb-2">Project Not Found</h2>
        <p className="text-gray-500 text-center max-w-md">
          We couldn't locate the project you're looking for. Please check the URL or explore other case studies.
        </p>
      </div>
    );

  return (
    <main className="bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] px-5 md:px-10 lg:px-15 xl:px-30 relative">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center pt-8 md:pt-16 pb-6 md:pb-10">
        <div>
          <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-4 md:mb-6 lg:mb-8">
            {project.brandName}
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mt-2 leading-tight">
            {project.growthRate}
          </h2>
          <h6 className="text-md md:text-lg text-black mt-5 mb-4 md:mb-10 font-light">
            {project.description}
          </h6>
        </div>
        <div className="flex lg:justify-end">
          <img
            src={project.brandImage}
            alt={`${project.brandName} Visual`}
            className="w-full md:w-full lg:w-[85%] h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
          />
        </div>
      </div>

      <img
        src={BorderBottomCenter}
        alt="border-bottom-line"
        className="w-full object-contain pb-3 pt-2 md:pt-10 md:pb-24"
      />

      <div className="py-5">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-left">{project.aboutBrand}</h3>
        </div>
      </div>

      <div className="pt-3 md:pt-10 lg:pt-22">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
          <div className="flex lg:justify-end">
            <img
              src={project.challengePhoto}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
              {project.challengeHeading}
            </h3>
            <h6 className="text-sm lg:text-[16px] font-light text-[#545e5b] mt-2">
              {project.challengeDescription}
            </h6>
          </div>
        </div>
      </div>

      <div className="py-6 md:py-12 lg:py-18">
        <div className="bg-[#f7f7fa] rounded-[35px] md:rounded-[60px] p-4 md:p-6 text-black flex flex-col justify-between h-full">
          <h4 className="text-md md:text-lg font-bold mb-2 text-center uppercase">Services Used:-</h4>
          <h6 className="text-sm md:text-md text-center font-light">{project.servicesUsed}</h6>
        </div>
      </div>

      <div className="py-6 md:py-8 relative">
        <h4 className="text-sm md:text-md font-bold mb-2 text-center uppercase">{project.impactHeading}</h4>
        <h2 className="text-center font-semibold text-3xl lg:text-5xl pt-4">{project.impactType}</h2>
        <h6 className="text-center font-light max-w-4xl mx-auto pt-5 md:pt-8">
          {project.impactDescription}
        </h6>

        <div
          ref={ref}
          className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 lg:pt-16"
        >
          {project.impactStats?.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-45 h-45 rounded-full border border-[#D7DEE6] flex items-center justify-center">
                <div className="relative w-34 h-34 flex items-center justify-center rounded-full border-2 border-[#6754e9]">
                  <div className="text-3xl font-bold text-black">
                    {inView ? <CountUp end={stat.value} duration={3} /> : "0"}
                    {stat.suffix}
                  </div>
                  <FaArrowUp className="absolute bottom-5 text-[#6754e9] text-lg" />
                </div>
              </div>
              <p className="mt-4 text-center text-md font-medium text-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <img
        src={BorderBottomCenter}
        alt="border-bottom-line"
        className="w-full object-contain pb-3 pt-2 md:pt-10 md:pb-24"
      />

      <div className="max-w-7xl mx-auto pb-14 md:pb-16 lg:pb-22 pt-8 md:pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-28 items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-2 md:mb-8">
            Esteemed digital marketing solutions
          </h1>
          <h6 className="text-gray-600 text-md font-light mb-2 md:mb-8">
            As part of our partnership, Zara has the advantage of having a dedicated Numerique
            account manager who serves as the primary point of contact, working closely with our
            team of experts to ensure that the partnership yields the desired outcomes. Zara has
            expressed their satisfaction with our collaboration, saying
          </h6>
          <h3 className="text-2xl md:text-3xl font-lightbold">
            “Numerique has become an extension of our marketing team. They provide us with a robust
            digital strategy that we wouldn’t have been able to achieve without their support. Our
            marketing team is small, but with Numerique, we can accomplish so much more.”
          </h3>
        </div>
        <div className="font-syne border-l-1 h-full border-gray-300 pl-4 md:pl-16 lg:pl-26 space-y-4">
          <h2 className="text-xl md:text-3xl font-semibold text-black leading-tight mb-2 md:mb-8">
            For Zara, we put together a robust digital strategy that includes:
          </h2>
          {[
            "Search engine optimization (SEO)",
            "Pay-per-click (PPC) advertising",
            "Social media",
            "Web design",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-[#f89e1b]  text-2xl mt-0.5" />
              <span className="text-gray-700 text-sm md:text-md">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="font-syne relative flex flex-col lg:flex-row items-center justify-between pt-10 pb-16 md:pb-20 lg:pb-30 gap-8 md:gap-0 text-center">
        {[
          { value: "+40 %", label: "Ecommerce growth" },
          { value: "236 %", label: "Increase in organic sessions" },
          { value: "131 %", label: "Increase in organic contact form submissions" },
        ].map((item, index) => (
          <div key={index} className="block lg:flex items-center gap-2">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">{item.value}</p>
            <p className="text-sm md:text-sm ml-1 md:ml-4 font-medium text-left">
              {item.label.split(" ").slice(0, 2).join(" ")} <br />
              {item.label.split(" ").slice(2).join(" ")}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#ebebf4] mb-20 px-2 md:px-4 lg:px-6 pt-6 md:pt-10 lg:pt-16 pb-10 md:pb-11 lg:pb-22 rounded-[55px] max-w-8xl mx-auto text-center">
        <div className="mb-6 relative">
          <img
            src={Rocket1}
            alt="Rocket"
            className="absolute right-2 md:right-14 -rotate-24 top-[-60px] md:top-[-80px] lg:top-[-120px] w-12 md:w-18 lg:w-28"
          />
          <img src={googlePartner} alt="Google Partner" className="mx-auto mb-4 w-40" />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 pb-5 md:pb-18 lg:pb-28">
            Start driving SEO results with <br />
            <span className="text-black">Digital Market Tap</span>
          </h1>
        </div>

        <h2 className="text-xl md:text-4xl font-semibold text-gray-800 mb-2">Pricing Plans</h2>
        <p className="text-md text-gray-500 mb-8">Choose the perfect plan for your needs</p>

        <div className="font-syne bg-[#ededf0] rounded-lg px-6 py-4 shadow-md mb-6">
          <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
            <span>Basic</span>
            <span>Premium</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-2 rounded-lg cursor-pointer appearance-none bg-[#e0e0e0]"
            style={{
              background: `linear-gradient(to right, #f89e1b 0%, #facc15 ${price}%, #e0e0e0 ${price}%, #e0e0e0 100%)`,
              accentColor: "black",
            }}
          />
          <div className="text-right text-xs text-gray-500 mt-1">{price}</div>
        </div>

        <div className="font-syne text-5xl font-bold text-[#f89e1b] mb-6">
          ₹{Number(price).toFixed(2)}{" "}
          <span className="text-gray-500 text-2xl font-medium">/month</span>
        </div>

        <ul className="font-syne text-left mb-6 space-y-2 px-2 md:px-0">
          {[
            { label: "Basic Feature", included: price >= 1 },
            { label: "Advanced Feature", included: price >= 35 },
            { label: "Premium Feature", included: price >= 75 },
          ].map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              {feature.included ? (
                <p className="!text-green-500 font-bold">✔</p>
              ) : (
                <p className="text-gray-500 font-bold">✖</p>
              )}
              <span className={feature.included ? "text-black" : "text-gray-500"}>
                {feature.label}
              </span>
            </li>
          ))}
        </ul>

        <button className="font-syne bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-[5px] font-semibold hover:bg-[#4054b2] transition">
          Choose Plan
        </button>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
