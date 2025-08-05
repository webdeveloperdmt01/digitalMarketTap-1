import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import StarImg from "../assets/star.png";
import GraphicDesign1 from "../assets/GraphicDesign1.png";
import GraphicDesign2 from "../assets/GraphicDesign2.png";
import GraphicDesign3 from "../assets/GraphicDesign3.png";
import {
  FaChessKnight,
  FaPlus,
  FaMinus,
  FaTags,
  FaPrint,
  FaArrowRight,
} from "react-icons/fa";
import GraphicDesign4 from "../assets/GraphicDesign4.png";
import GraphicDesign7 from "../assets/GraphicDesign7.png";
import HighlightedStrokes from "../assets/Highlight_strokes.png";
import GraphicDesign8 from "../assets/GraphicDesign8.png";
import GraphicDesign9 from "../assets/GraphicDesign9.png";
import GraphicDesign10 from "../assets/GraphicDesign10.png";
import GraphicDesign11 from "../assets/GraphicDesign11.png";
import YellowStar from "../assets/Misc_star.png";
import GraphicDesignSlider from "../components/GraphicDesignSlider";

const GraphicDesign = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const faqs = [
    {
      question:
        " What is graphic design and why is it important for my business?",
      answer:
        "Graphic design is the art of visually communicating messages through typography, images, colors, and layout. It plays a crucial role in branding,marketing, and communication. High-quality design builds trust, improves brand recognition, and makes your content more engaging and professional.",
    },
    {
      question: "Do you also design logos for business?",
      answer:
        " Absolutely! We specialize in customized logo design tailored to your business. Our expert graphic design team brings years of experience in understanding brand vision and creating logos that truly represent your identity.",
    },
    {
      question: "What types of graphic design services do you offer?",
      answer: " We offer a wide range of design services, including:",
      answerPoints: [
        "Logo & brand identity design",
        "Social media graphics",
        "Business cards & brochures",
        "Website and UI/UX design",
        "Banners, flyers, and posters",
        "Packaging and label design",
        "Presentation & pitch deck design",
      ],
    },
    {
      question: "What tools do you use for graphic design?",
      answer:
        "Our designers have years of experience on work with industry-standard tools like:",
      answerPoints: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva Pro",
        "Figma (for UI/UX)",
        "Adobe InDesign (for print design)",
        "Corel draw",
      ],
    },
  ];

  const stats = [
    { value: 4800, suffix: "K", label: "JOBS COMPLETED" },
    { value: 15, suffix: "+", label: "INDUSTRY EXPERIENCE" },
    { value: 3600, suffix: "K+", label: "GLOBAL CLIENTS" },
    { value: 130, suffix: "+", label: "AWARDS WINNED" },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF]">
      <div className="w-full flex flex-col items-center justify-center text-center relative pt-28 pb-12">
        <img
          src={StarImg}
          alt="star"
          className="absolute top-[45%] right-[18%] w-[30px] md:w-[40px] lg:w-[60px] object-contain"
        />
        <img
          src={HighlightedStrokes}
          alt="star"
          className="absolute top-[20%] md:top-[15%] left-[10%] md:left-[18%] lg:left-[26%] w-[30px] md:w-[40px] object-contain"
        />
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black leading-tight pb-6 z-10 relative">
          <div className="absolute top-0 md:-top-[2%] lg:top-[2%] -left-[11%] w-[80px] h-[40px] md:w-[120px] lg:w-[180px] md:h-[70px] lg:h-[90px] bg-[#f89e1b] rounded-full -z-1"></div>
          Visual Motion <br /> Graphics
        </h1>
        <p className="text-lg md:text-xl text-black pb-15 lg:pb-10 px-5 md:px-0 lg:px-0">
          Improve your business by appearance.
        </p>
        <NavLink
          to="/free-audit"
          className="font-syne group bg-black text-white hover:text-black px-6 md:px-12 py-2 md:py-4 rounded-[10px] text-lg font-semibold border border-black hover:bg-transparent transition duration-300 relative overflow-hidden"
        >
          <span className="relative z-10">
            GET STARTED
            <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300" />
          </span>
        </NavLink>
      </div>

      <div className="w-full pb-6 lg:pb-12 pt-4 md:pt-8 lg:pt-12 relative px-5 md:px-10 lg:px-15 xl:px-30">
        <div className="flex justify-center gap-8 relative z-10 px-0 md:px-4 flex-wrap">
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

      <div
        ref={ref}
        className="flex justify-around flex-wrap px-5 md:px-10 lg:px-30 py-6 md:py-8 lg:py-12 text-center"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="w-1/2 md:w-1/4 mb-8 md:mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
              {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}
              {stat.suffix}
            </h2>
            <p className="text-gray-500 mt-2 font-semibold uppercase tracking-wide text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="relative py-4 md:py-12 lg:py-20 px-5 md:px-10 lg:px-15 xl:px-30">
        <img
          src={StarImg}
          alt="star"
          className="absolute top-[35%] left-[35%] transform -translate-x-1/2 w-[50px] h-[50px] object-contain z-10"
        />
      <div className="flex flex-col justify-between min-h-[30px] md:min-h-[40px] lg:min-h-[50px] mb-8 md:mb-12 lg:mb-16">
  <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-black mb-4 text-left">
    From Concept to Creation <br /> – We Design It All
  </h2>
  
  <h6 className="text-gray-500 text-[15px] md:text-sm lg:text-lg text-right font-light max-w-lg ml-auto">
    At Digital Market Tap, we create designs that not only look great but also
    perform well, helping your business attract, engage, and convert
    customers. That's why we are the best Digital Marketing agency in Delhi.
  </h6>
</div>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10">
          <div className="bg-white rounded-[30px] shadow-md p-8 transition duration-300 hover:shadow-xl mt-[10px]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-gray-100">
              <FaChessKnight className="text-black hover:text-[#f89e1b] text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Logo design & Branding
            </h3>
            <h6 className="text-gray-500 text-sm leading-relaxed font-light">
              We design logos that are memorable and meaningful, conveying your
              values and vision. Whether startups or established companies, we
              assist brands in establishing a distinct identity through
              customized logo design and full branding solutions
            </h6>
          </div>

          <div className="bg-white rounded-[30px] shadow-md p-8 transition duration-300 hover:shadow-xl mt-[30px]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-[#f89e1b]">
              <FaTags className="text-white hover:text-black text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Infographics & Illustrations
            </h3>
            <h6 className="text-gray-500 text-sm leading-relaxed font-light">
              Complicated information or concepts? No issue. We transform them
              into captivating infographics and unique illustrations that boost
              content shareability and streamline your message.
            </h6>
          </div>

          <div className="bg-white rounded-[30px] shadow-md p-8 transition duration-300 hover:shadow-xl mt-[60px]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-gray-100">
              <FaPrint className="text-black hover:text-[#f89e1b] text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Social Media Post Designs
            </h3>
            <h6 className="text-gray-500 text-sm leading-relaxed font-light">
              We design high quality eye-catching social media posts for
              instagram, facebook, linkedin, youtube thumbnail or covers, and
              for other platforms, to boost your social media presence.
            </h6>
          </div>
        </div>
      </div>

      <div className="pt-12 md:pt-14 pb-12 md:pb-14 lg:pb-18 px-5 md:px-10 lg:px-15 xl:px-30">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-center">
          <div className="flex lg:justify-end">
            <img
              src={GraphicDesign4}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div className="pl-2 md:pl-8 lg:pl-4 xl:pl-20">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-14">
              Why Choose Digital Market Tap for Graphic Design?
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-2 pb-6 font-light">
              Our team has years of experience in graphic designing, our
              talented designer will make sure to deliver high-quality graphics,
              We think as well as design. Every graphic is made with the
              intention of delivering value, arousing emotion, and motivating
              action. We respect your time, that's why we deliver graphics on
              time, so if you're looking for a graphic designing agency in Delhi
              contact us.
            </h6>
            <NavLink
              to="/about-us"
              className="font-syne text-md border-b-2 border-[#f89e1b] font-semibold group relative inline-flex items-center gap-2  text-black transition duration-300"
            >
             GET STARTED <FaArrowRight />
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#f89e1b] transition-all duration-300 group-hover:w-[calc(100%-0rem)]"></span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-15 md:pt-20 lg:pt-30 relative overflow-hidden">
        <img
          src={YellowStar}
          alt="star"
          className="absolute top-[1%] md:top-[4%] lg:top-[6%] left-[9%] w-[30px] md:w-[40px] object-contain"
        />
        <svg
          className="absolute md:top-22 lg:top-28 md:-right-14 lg:right-28 hidden md:block rotate-75"
          width="250"
          height="200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d=" M10 150 C30 30, 90 30, 90 150 C90 220, 30 180, 80 100 C160 0, 250 250, 195 1000"
            stroke="#FFF"
            strokeWidth="1.5"
            strokeDasharray="5 6"
            strokeLinecap="round"
          />
        </svg>

        <div className="px-5 md:px-10 lg:px-15 xl:px-30 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8">
            Make your Brand more <br /> effective
          </h2>
          <h6 className="text-gray-300 max-w-xl mx-auto mb-12 font-light">
            E-commerce brands can acquire and retain new customers using
            solutions that span the entire customer journey.
          </h6>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
            <div className="md:col-span-4 bg-[#F4DD86] text-black rounded-3xl px-8 pt-8 flex flex-col justify-between shadow-md">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-left">
                  Appealing Logo
                </h3>
                <h6 className="text-base font-light leading-relaxed mb-6 text-black text-left">
                  A great logo is the foundation of a brand that's remembered.
                  It shows your personality, establishes trust, and provides
                  instant recognition. At Digital Market Tap, we create logos
                  that are distinctive, enduring, and in alignment with your
                  values, helping you make a lasting impression on all platforms
                  and touchpoints
                </h6>
                <div className="w-full flex justify-start">
                  {/* <NavLink
                    to="/about-us"
                    className="text-md font-semibold group relative inline-flex items-center gap-2 text-black transition duration-300 hover:text-white"
                  >
                    LEARN MORE <FaArrowRight />
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#f89e1b] transition-all duration-300 group-hover:w-full"></span>
                  </NavLink> */}
                </div>
              </div>
              <img
                src={GraphicDesign8}
                alt="Appealing Logo"
                className="mt-8 w-full max-w-[280px] self-center"
              />
            </div>

            <div className="md:col-span-8 bg-[#9E98F8] text-black rounded-3xl px-8 pt-8 flex flex-col justify-between shadow-md">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-left">
                  Eye Catching Color Theory
                </h3>
                <h6 className="text-sm mb-6 text-left font-light">
                  Choosing colour is very important for any brand, we will
                  create brand-kit according to your brand and logo for better
                  branding. To attract attention and direct viewers,
                  eye-catching designs employ complementary palettes,
                  contrasting hues, and clever colour psychology. At Digital
                  Market Tap, we employ colour theory to produce eye-catching
                  visuals that immediately engage your audience. That's why we
                  are the best graphic designing agency in Delhi, India.
                </h6>
                {/* <div className="w-full flex justify-start">
                  <NavLink
                    to="/about-us"
                    className="text-md font-semibold group relative inline-flex items-center gap-2 text-black transition duration-300 hover:text-white"
                  >
                    LEARN MORE <FaArrowRight />
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#f89e1b] transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                </div> */}
              </div>
              <img src={GraphicDesign9} alt="Color Theory" className="mt-4" />
            </div>

            <div className="md:col-span-12 bg-[#F1F1F1] text-black rounded-3xl px-8 pt-10 flex flex-col md:flex-row justify-between items-center shadow-md">
              <div className="mb-4 md:mb-0 max-w-xl">
                <h3 className="text-2xl font-semibold mb-4 text-left">
                  Design Uniformity
                </h3>
                <h6 className="text-sm mb-6 text-left font-light">
                  Uniformity of design guarantees consistency on every aspect of
                  a brand's visual content. It entails employing the same shade
                  of color, typography, style of arrangement, and tone across
                  your website, social media, packaging, and marketing
                  materials.
                </h6>
                {/* <div className="w-full flex justify-start">
                  <NavLink
                    to="/about-us"
                    className="text-md font-semibold group relative inline-flex items-center gap-2 text-black transition duration-300 hover:text-white"
                  >
                    LEARN MORE <FaArrowRight />
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#f89e1b] transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                </div> */}
              </div>
              <img
                src={GraphicDesign10}
                alt="Design Uniformity"
                className="w-full md:w-[50%] max-w-md"
              />
            </div>
          </div>

          <div className="pt-15 md:pt-28 lg:pt-38 pb-20">
            <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-center">
              <div className="flex lg:justify-end">
                <img
                  src={GraphicDesign11}
                  alt="Marketing Visual"
                  className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
                />
              </div>
              <div className="pl-2 md:pl-8 lg:pl-20">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 md:mb-4 lg:mb-8 text-left">
                  Let’s Bring Your Vision to Life
                </h3>
                <h6 className="text-sm lg:text-[16px] font-base text-gray-400 pt-2 pb-6 text-left font-light">
                  Whether you're introducing a new brand, running a seasonal
                  promotion, or require a full design refresh, Digital Market
                  Tap is your partner in creativity. Our crew hears you,
                  conceptualizes your vision, and provides design material that
                  says it all for your brand.
                </h6>

                <div className="bg-black text-[#F4DD86] py-8 px-4 lg:px-0 flex flex-col md:flex-row items-center justify-start gap-12">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold lg:text-6xl text-left">
                      5K+
                    </h2>
                    <p className="text-white font-semibold text-sm md:text-lg mt-2 text-left">
                      Advertising Partners
                    </p>
                  </div>

                  <div className="text-center">
                    <h2 className="text-4xl font-bold lg:text-6xl text-left">
                      90%
                    </h2>
                    <p className="text-white font-semibold text-sm md:text-lg mt-2 text-left">
                      Increase in ROAS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GraphicDesignSlider />

      <div className="pt-12 md:pt-20 lg:pt-38 md:pb-15 px-5 md:px-10 lg:px-15 xl:px-30">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-center">
          <div className="pl-2 md:pl-8 lg:pl-20">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-14">
              24/7 Customers Support <br /> Service
            </h3>
            <h6 className="text-sm lg:text-[16px] font-base text-[#545e5b] pt-2 pb-6 font-light">
              In order to scale new customer acquisition and retention for
              e-commerce brands, we work across the entire customer journey. Our
              team has a successful track record of helping brands scale
              profitably based on high-performing strategies.
            </h6>
            <NavLink
              to="/contact-us"
              className="font-syne text-md border-b-2 border-[#f89e1b] font-semibold group relative inline-flex items-center gap-2  text-black transition duration-300"
            >
              CONTACT US <FaArrowRight />
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#f89e1b] transition-all duration-300 group-hover:w-[calc(100%-0rem)]"></span>
            </NavLink>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={GraphicDesign7}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center text-center relative pt-18 pb-12">
        <img
          src={StarImg}
          alt="star"
          className="absolute top-[10%] right-[15%] w-[60px] object-contain"
        />
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black leading-tight pb-6 z-2">
          Ready for your <br />
          digital success?
        </h1>
        <h6 className="text-lg md:text-xl text-black pb-12 md:pb-20 lg:pb-30 font-light">
          Our services solve any business problem.
        </h6>
        <NavLink
          to="/free-audit"
          className="font-syne group bg-black text-white hover:text-black px-6 md:px-12 py-2 md:py-4 rounded-[10px] text-lg font-semibold border border-black hover:bg-transparent transition duration-300 relative overflow-hidden"
        >
          <span className="relative z-10">
            GET STARTED
            <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300" />
          </span>
        </NavLink>
        <img
          src={HighlightedStrokes}
          alt="highlight"
          className="absolute top-[62%] md:top-[65%] lg:top-[70%] left-[14%] md:left-[30%] lg:left-[40%] w-[30px] md:w-[40px]"
        />
        <div className="absolute top-[19.5%] md:top-[16%] lg:top-[14%] xl:top-[14%] left-[14%] md:left-[22%] lg:left-[19.5%] xl:left-[28%] w-[90px] md:w-[120px] lg:w-[150px] h-[45px] md:h-[60px] lg:h-[80px] bg-[#f89e1b] rounded-full z-1"></div>
        <img
          src={HighlightedStrokes}
          alt="highlight"
          className="absolute top-[84%] left-[78%] md:left-[66%] lg:left-[59%] w-[30px] md:w-[40px] rotate-160"
        />
      </div>

      <div className="pb-4 pt-8 md:pt-12 lg:pt-18 px-5 md:px-10 lg:px-15 xl:px-30">
        <p className="text-center text-md font-semibold uppercase pb-4">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold pb-4">
          FAQs about Graphic <br />
          Designing
        </h1>
        <h6 className="text-center text-md md:text-lg font-light text-gray-500 pb-4">
          Looking to learn more about Graphic Designing for your business?
          Browse our FAQs
        </h6>
      </div>

      <div className="pt-8 pb-16 md:pb-22 space-y-2 md:space-y-4 px-5 md:px-10 lg:px-15 xl:px-30">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-300 pb-2 md:pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full font-syne flex justify-between items-center text-left text-lg md:text-xl font-medium hover:text-[#f89e1b] focus:outline-none pt-5"
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
              <div className="mt-3 text-gray-500 text-md md:text-xl lg:text-lg font-light md:text-md font-kanit">
                <h6>{faq.answer}</h6>

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
  );
};

export default GraphicDesign;
