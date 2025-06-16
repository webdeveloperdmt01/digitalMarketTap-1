import React from "react";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import StarImg from "../assets/star.png";
import GraphicDesign1 from "../assets/GraphicDesign1.png";
import GraphicDesign2 from "../assets/GraphicDesign2.png";
import GraphicDesign3 from "../assets/GraphicDesign3.png";
import { FaChessKnight, FaTags, FaPrint } from "react-icons/fa";

const GraphicDesign = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const services = [
  {
    icon: <FaChessKnight className="text-black text-2xl" />,
    title: "Logo Design",
    description:
      "Increasing conversions, repeat traffic, and online authority across your website is our top priority.",
  },
  {
    icon: <FaTags className="text-white text-2xl" />,
    title: "Branding",
    description:
      "In order for your funnel to be successful, you need to make it as smooth as possible.",
    bgColor: "bg-[#f89e1b]",
  },
  {
    icon: <FaPrint className="text-black text-2xl" />,
    title: "Print Design",
    description:
      "Leads are nurtured through our email, SMS, and automation services, resulting in customer acquisition and retention.",
  },
];  

  const stats = [
    { value: 4800, suffix: "K", label: "JOBS COMPLETED" },
    { value: 15, suffix: "+", label: "INDUSTRY EXPERIENCE" },
    { value: 3600, suffix: "K+", label: "GLOBAL CLIENTS" },
    { value: 130, suffix: "+", label: "AWARDS WINNED" }, 
  ];

  return (
    <main className="bg-gradient-to-b from-[#fdf1e7] to-white px-5 md:px-10 lg:px-30">
      <div className="w-full flex flex-col items-center justify-center text-center relative pt-20 pb-12">
        <img
          src={StarImg}
          alt="star"
          className="absolute top-[10%] right-[15%] w-[60px] object-contain"
        />
        <h1 className="text-6xl md:text-7xl font-bold text-black leading-tight pb-6">
          Visual Motion <br /> Graphics
        </h1>
        <p className="text-lg md:text-xl text-black pb-10">
          Improve your business by appearance.
        </p>
        <NavLink
          to="/free-audit"
          className="group bg-black text-white hover:text-black px-12 py-4 rounded-[10px] text-lg font-semibold border border-black hover:bg-transparent transition duration-300 relative overflow-hidden"
        >
          <span className="relative z-10">
            GET STARTED
            <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300" />
          </span>
        </NavLink>
      </div>

      <div className="w-full pb-12 pt-12 relative">
        <div className="flex justify-center gap-8 relative z-10 px-4 flex-wrap">
          <img
            src={GraphicDesign1}
            alt="Graphic 1"
            className="w-[350px] h-[380px] object-fill rounded-3xl"
          />

          <div className="relative flex flex-col items-center mt-24">
            <img
              src={GraphicDesign2}
              alt="Graphic 2"
              className="w-[350px] h-[380px] object-fill rounded-3xl"
            />

            <div className="w-[200px] h-[200px] -mt-27 relative flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  animation: "spin 15s linear infinite",
                }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <circle cx="100" cy="100" r="95" fill="black" />
                  <text
                    fontSize="14"
                    fill="white"
                    fontWeight="bold"
                    letterSpacing="2"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      •Best Marketing Agency: DMT DIGITAL MARKETING TAP•
                    </textPath>
                  </text>
                </svg>
              </div>
              <img
                src={StarImg}
                alt="star"
                className="w-[40px] h-[40px] z-10 object-contain"
              />
            </div>
          </div>

          <img
            src={GraphicDesign3}
            alt="Graphic 3"
            className="w-[350px] h-[380px] object-fill rounded-3xl"
          />
        </div>
      </div>

      <div ref={ref} className="flex justify-around flex-wrap py-12 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="w-1/2 md:w-1/4 mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black">
              {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}
              {stat.suffix}
            </h2>
            <p className="text-gray-500 mt-2 font-bold uppercase tracking-wide text-sm">
              {stat.label}
            </p>
            </div>
            ))}
      </div>

 <div className="relative py-20 px-4 sm:px-8 md:px-16">
      <img
        src={StarImg}
        alt="star"
        className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-[30px] h-[30px] object-contain z-10"
      />
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-left">
          Our services solve any <br /> business problem
        </h2>
        <p className="text-gray-500 text-md md:text-lg">
          Our team has a successful track record of helping brands scale
          profitably based on high-performing strategies.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] shadow-md p-8 transition duration-300 hover:shadow-xl"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${
                service.bgColor || "bg-gray-100"
              }`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>



    </main>
  );
};

export default GraphicDesign;
