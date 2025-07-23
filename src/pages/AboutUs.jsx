import React, { useState } from "react";
import {
  FaEye,
  FaShieldAlt,
  FaLightbulb,
  FaTachometerAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

import AboutUsImg from "../assets/AboutUs-banner-left-img.jpg";
import AboutUsWideImg from "../assets/AboutUs-wide-img.jpg";

import F7 from "../assets/F7.png";
import Caridad from "../assets/caridad.png";
import Petmania from "../assets/petmania.png";
import Jolie from "../assets/jolie.png";
import Scuola from "../assets/Scuola_Logo.png";
import Technologia from "../assets/tecnologia.png";

import lineArrow from "../assets/Line-arrow-2.png";

import Badge0 from "../assets/clutch-badge.png";
import Badge1 from "../assets/new-badge.png";
import Badge2 from "../assets/new-badge2.png";
import Badge3 from "../assets/new-badge3.png";
import Badge4 from "../assets/logo_hubspot.png";
import SuccessStories from "../components/SuccessStories";
import { Helmet } from "react-helmet";


const services = [
  {
    icon: <FaEye className="text-2xl text-[#F89E1B] hover:text-black" />,
    title: "Transparency",
    description:
      "We follow a 100% transparency policy and we don't charge any hidden fees. We believe in being genuine with all our clients and provide transparent information.",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-[#F89E1B] hover:text-black" />,
    title: "Integrity",
    description:
      "We value being truthful and establishing relationships of trust with each and every one of our clients. We provide sincere service and always put our moral principles first.",
  },
  {
    icon: <FaLightbulb className="text-2xl text-[#F89E1B] hover:text-black" />,
    title: "Simplicity",
    description:
      "We believe in simplicity, marketing experts should sound understandable and straightforward and not complicated. We deliver genuine results without making it complex.",
  },
  {
    icon: (
      <FaTachometerAlt className="text-2xl text-[#F89E1B] hover:text-black" />
    ),
    title: "Performance",
    description:
      "We have years of experience in this field, our trained digital marketing experts will make sure to deliver genuine, our every service delivers real results with failure.",
  },
];

const logos = [
  { src: F7 },
  { src: Caridad },
  { src: Petmania },
  { src: Jolie },
  { src: Scuola },
  { src: Technologia },
];

const BrandStaticLine = () => {
  return (
    <div className="px-5 md:px-10 lg:px-28 py-10 text-center">
      <h2 className="text-xl sm:px-5 font-bold mb-10 md:mb-12 text-left">
        OUR CLIENTS
      </h2>
      <div className="flex justify-evenly flex-wrap gap-10 max-w-7xl mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="max-h-16 flex items-center">
            <img
              src={logo.src}
              alt={`brand-logo-${index}`}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: "Our website was slow and had SEO issues. Their quick fixes improved load speed and dropped our bounce rate by 30%. Highly effective work.",
    name: "Kareena Tanwar",
    role: "Ecommerce Business Owner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Partnering with Digital Market Tap boosted our organic traffic by 60% in 3 months. Their SEO strategies and communication are simply excellent.",
    name: "Reshmi Sharma",
    role: "Founder, Weaves by Weavers",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Digital Market Tap’s SEO, Google Ads, and social media strategies grew my brand’s visibility and delivered high-quality leads within weeks.",
    name: "Muskan Sangwan",
    role: "Lifestyle Influencer",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    text: "Their tailored social media strategy helped us 4x our followers and significantly increase leads. The team truly understands platform-specific marketing.",
    name: "Manish Yadav",
    role: "Sales Director, FinEdge Solutions",
  },
];

const AboutUs = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const prev = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { text, name, role, avatar } = testimonials[testimonialIndex];

  return (
    <>
 <Helmet>
  <meta name="title" content="Digital Marketing agency in Delhi | Digital Market Tap"/>
  <meta name="description" content="Delhi’s top digital marketing agency with 8+ years of experience & 10,000+ clients. Get tailored, result-driven digital solutions today."/>
  <meta name="keywords" content="digital marketing agency, digital marketing agency in Delhi, SEO services in Delhi, social media agency in Delhi"/>
  <meta name="robots" content="index, follow" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="language" content="English" />
  <meta meta name="revisit-after" content="2 days"/>
</Helmet>

      <section className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] py-8 lg:py-20 px-5 md:px-10 lg:px-15 xl:px-28">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-16">
              About Us
            </h3>
            <h2 className="text-4xl lg:px-5xl xl:text-6xl font-bold text-black mt-2 leading-tight">
              Leading Digital Marketing Agency in Delhi
            </h2>
          </div>
          <div className="flex lg:justify-end ">
            <img
              src={AboutUsImg}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-15 xl:px-28 pt-5 pb-5">
        <div className="max-w-3xl mx-auto text-lg md:text-3xl font-bold text-left pb-8 md:pb-16 lg:pb-28">
          We provide the best digital marketing services across Delhi. We have
          over 5 years of experience; we have served over 10,000 satisfied
          clients and worked with over a hundred brands, and with the help of a
          highly experienced and trained expert team, we have never failed to
          deliver the best result-oriented services. No matter what issues
          you're facing, Digital Market Tap is a one-stop digital marketing
          destination for complete digital solutions tailored to your business
          needs.
        </div>
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
          <img
            src={AboutUsWideImg}
            alt="Team Collaboration"
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="py-8 md:py-12 px-5 md:px-10 lg:px-15 xl:px-30">
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-4 font-bold text-black text-center leading-tight">
          Our Values
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl px-8 pt-8 text-black flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-left">
                  {service.title}
                </h3>
                <p className="text-md text-[#57595b] mb-8 text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BrandStaticLine />
      <SuccessStories />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-5 md:px-10 lg:px-8 xl:px-30 py-16">
        <div className="w-full md:w-1/3 items-center text-center lg:text-left">
          <p className="text-xl font-semibold text-gray-800 leading-snug">
            Credentials & <br className="hidden md:block" /> Recognition:
          </p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center items-center gap-4 md:gap-6 flex-wrap md:flex-nowrap py-2">
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
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <a
            href="/contact-us"
            className="inline-flex items-center text-sm font-medium rounded-[15px] bg-black px-6 md:px-8 py-3 text-white hover:bg-[#F89E1B] group transition-all duration-300"
          >
            <span className="relative">
              GET PROPOSAL
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <FaArrowRight className="ml-2 text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
      <section className="px-5">
        <div className="bg-[#f7f7fa] rounded-[40px] overflow-hidden flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto mt-10 pt-8 md:pt-30 px-5 md:px-10 lg:px-10 pb-5 md:pb-15 relative gap-12 mb-12">
          <div className="lg:w-1/2 w-full relative pt-5">
            <div className="flex items-center mb-4">
              <span className="text-orange-500 text-[60px] leading-none font-bold mr-2 font-mono absolute">
                “
              </span>
            </div>
            <p className="text-xl md:text-2xl italic text-black leading-relaxed mb-6">
              “{text}”
            </p>
            <div className="mb-6">
              <p className="text-left text-lg font-bold text-black">{name}</p>
              <p className="text-left font-semibold text-sm text-gray-500">
                {role}
              </p>
            </div>
            <div className="flex gap-4 text-orange-500 text-xl">
              <button
                onClick={prev}
                className="hover:scale-110 transition-transform"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={next}
                className="hover:scale-110 transition-transform"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative flex flex-col items-center md:items-end">
            <img
              src={lineArrow}
              alt="Curved arrow"
              className="hidden lg:block absolute -top-12 right-16 lg:w-[280px] w-40 h-auto pointer-events-none"
            />

            <div className="block md:flex items-center gap-6 mt-0 md:mt-4 lg:mt-52 ml-5 lg:ml-20 mb-2">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="flex text-yellow-500 text-xl">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-black mt-2">
                  5000+ Client reviews
                </p>
              </div>

              <div className="block justify-center md:flex items-center gap-4">
                <div className="flex -space-x-3 pb-4 md:pb-0">
                  {[...Array(3)].map((_, i) => (
                    <img
                      key={i}
                      src={testimonials[i].avatar}
                      alt={`Client ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>

                <a
                  href="https://g.co/kgs/VtCEEcM"
                  className="inline-flex items-center text-sm font-medium text-black hover:text-orange-500 group transition-all duration-300"
                >
                  <span className="relative">
                    View all reviews
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <FaArrowRight className="ml-1 text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
