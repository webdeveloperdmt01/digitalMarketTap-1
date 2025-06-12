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

import redFrok from "../assets/redm frok.jpg";
import pinkKurti from "../assets/pink kurti.jpg";
import lineArrow from "../assets/Line-arrow-2.png";

import Badge0 from "../assets/clutch-badge.png";
import Badge1 from "../assets/new-badge.png";
import Badge2 from "../assets/new-badge2.png";
import Badge3 from "../assets/new-badge3.png";
import Badge4 from "../assets/logo_hubspot.png";


const services = [
  {
    icon: <FaEye className="text-2xl text-[#F89E1B]" />,
    title: "Transparency",
    description:
      "No smoke and mirrors here. We believe in being genuine in dealing with all our clients. We’ll say what we’ll do, and then do what we say.",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-[#F89E1B]" />,
    title: "Integrity",
    description:
      "We prioritize honesty and integrity, always striving to build relationships rooted in trust. We understand that trust is earned by consistently upholding our uncompromising standards",
  },
  {
    icon: <FaLightbulb className="text-2xl text-[#F89E1B]" />,
    title: "Simplicity",
    description:
      "We believe that being an expert should not mean sounding complicated. We are straightforward with our approach, always doing our best to simplify what’s seemingly complex.",
  },
  {
    icon: <FaTachometerAlt className="text-2xl text-[#F89E1B]" />,
    title: "Performance",
    description:
      "Being in the digital marketing space, data is a given. But we aren’t just talking about having access to reports on certain metrics. We ensure each campaign translates into real business growth.",
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

const slides = [
  {
    brand: "ZARA",
    image: redFrok,
    imageHover: pinkKurti,
    stat: "+40%",
    description: "Ecommerce growth",
    tags: ["Paid Search", "Paid Social", "SEO"],
  },
  {
    brand: "Homme",
    image: pinkKurti,
    imageHover: redFrok,
    stat: "+50%",
    description: "Engagement rates",
    tags: ["Organic Social Media", "Paid Social"],
  },
  {
    brand: "Trendy",
    image: redFrok,
    imageHover: pinkKurti,
    stat: "+30%",
    description: "Conversion boost",
    tags: ["Email", "SMS"],
  },
  {
    brand: "Stylez",
    image: pinkKurti,
    imageHover: redFrok,
    stat: "+70%",
    description: "Customer growth",
    tags: ["Affiliate", "Influencer"],
  },
];

const BrandStaticLine = () => {
  return (
    <div className="bg-[#fdf1e7] px-5 md:px-10 lg:px-28 py-10 text-center">
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

function SuccessStories() {
  const [current, setCurrent] = useState(0);
  const [showAltImage, setShowAltImage] = useState(false);

  const slidesPerView = 2;
  const totalGroups = Math.ceil(slides.length / slidesPerView);
  const visibleSlides = slides.slice(current, current + slidesPerView);

  const handleDotClick = (index) => {
    setCurrent(index * slidesPerView);
    setShowAltImage((prev) => !prev);
  };

  return (
    <div className="w-full px-5 md:px-10 lg:px-30 py-10 lg:py-24 bg-[#fdf1e7] flex flex-col lg:flex-row items-start gap-12">
      <div className="w-full lg:w-1/3 flex flex-col justify-start">
        <h4 className="text-sm text-left font-bold uppercase text-black tracking-wide">
          TEAM
        </h4>
        <h2 className="text-left text-[38px] md:text-[54px] font-semibold leading-[1.1] text-black mt-6 md:mt-16 tracking-tight">
          Meet the Numerique revenue revolutionaries
        </h2>
        <button className="mt-6 md:mt-16 text-md font-semibold text-black border-b-3 border-orange-500 hover:opacity-80 w-fit">
          VIEW ALL
        </button>
      </div>
      <div className="w-full lg:w-2/3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleSlides.map((slide, idx) => {
            const imgSrc = showAltImage ? slide.imageHover : slide.image;
            return (
              <div
                key={idx}
                className="rounded-[60px] overflow-hidden relative h-[420px] bg-black"
              >
                <div className="text-left absolute top-0 left-0 right-0 z-10 bg-opacity-50 text-orange-500 text-lg font-semibold px-6 py-4">
                  {slide.brand}
                </div>

                <img
                  src={imgSrc}
                  alt={slide.brand}
                  className="object-fit transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
                  <span className="text-white text-4xl font-bold mt-2 block">
                    {slide.stat}
                  </span>
                  <span className="text-white text-xl font-medium mt-1 block">
                    {slide.description}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {slide.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#fdf1e7] text-black text-sm px-5 py-1 rounded-full font-medium transition-colors duration-300 hover:text-[#8E81FA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-6 gap-3">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index * slidesPerView
                  ? "bg-black scale-110"
                  : "bg-gray-300"
              }`}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
const testimonials = [
  {
    text: "This company transformed our business. Highly recommended!",
    name: "John Doe",
    role: "CEO, ExampleCorp",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Exceptional service and great results every time.",
    name: "Jane Smith",
    role: "Marketing Head, Acme Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Their digital marketing strategy boosted our revenue immensely.",
    name: "Sam Wilson",
    role: "Founder, Startup XYZ",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
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
      <section className="bg-[#fdf1e7] py-8 lg:py-20 px-5 md:px-10 lg:px-28">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-16">
              About Us
            </h3>
            <h2 className="text-4xl lg:text-6xl font-bold text-black mt-2 leading-tight">
              Digital marketing solutions designed to generate revenue for your
              business
            </h2>
          </div>
          <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <img
              src={AboutUsImg}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fdf1e7] px-5 md:px-10 lg:px-28 pt-5 pb-5">
        <div className="max-w-3xl mx-auto text-lg md:text-3xl font-bold text-left pb-8 md:pb-16 lg:pb-28">
          Numerique was established 20 years ago with the belief that advertising
          could drive significant business leverage for our clients. Initially,
          our focus was on the entertainment industry, including live events and
          record labels. Over time, we have expanded our services and
          successfully partnered with both major and niche brands. Our client
          base spans globally, with a growing roster of local clients.
        </div>
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
          <img
            src={AboutUsWideImg}
            alt="Team Collaboration"
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[#fdf1e7] py-8 md:py-12 px-5 md:px-10 lg:px-30">
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
                <p className="text-md text-[#57595b] mb-12 text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BrandStaticLine />
      <SuccessStories />

<div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-5 md:px-10 lg:px-30 py-16">
  <div className="w-full md:w-1/3 items-center text-center lg:text-left">
    <p className="text-xl font-semibold text-gray-800 leading-snug">
      Credentials & <br className="hidden md:block" /> Recognition:
    </p>
  </div>

  <div className="w-full md:w-1/3 flex justify-center items-center gap-4 md:gap-6 flex-wrap md:flex-nowrap py-2">
      <img src={Badge0} alt="Badge 0" className="h-16 md:h-20 object-contain" />
    <img src={Badge1} alt="Badge 1" className="h-16 md:h-20 object-contain" />
    <img src={Badge2} alt="Badge 2" className="h-16 md:h-20 object-contain" />
    <img src={Badge3} alt="Badge 3" className="h-16 md:h-20 object-contain" />
    <img src={Badge4} alt="Badge 4" className="h-16 md:h-20 object-contain" />
  </div>

  {/* Right: CTA */}
  <div className="w-full md:w-1/3 flex justify-center md:justify-end">
    <a
      href="/testimonials"
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
      <div className="bg-[#f7f7fa] rounded-[40px] overflow-hidden flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto mt-10 pt-5 md:pt-30 px-5 md:px-10 lg:px-10 pb-5 md:pb-15 relative gap-12 mb-12">
        <div className="lg:w-1/2 w-full relative pt-5">
          <div className="flex items-center mb-4">
            <span className="text-orange-500 text-[60px] leading-none font-bold mr-2 font-sans">
              “
            </span>
          </div>
          <p className="text-xl md:text-2xl italic text-black leading-relaxed mb-6">
            “{text}”
          </p>
          <div className="mb-6">
            <p className="text-left text-lg font-bold text-black">{name}</p>
            <p className="text-left font-semibold text-sm text-gray-500">{role}</p>
          </div>
          <div className="flex gap-4 text-orange-500 text-xl">
            <button onClick={prev} className="hover:scale-110 transition-transform">
              <FaArrowLeft />
            </button>
            <button onClick={next} className="hover:scale-110 transition-transform">
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
                href="/testimonials"
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
