import React from "react";
import clutch from "../assets/clutch-badge.png";
import expertise from "../assets/expertise-badge.png";
import localExcellence from "../assets/local-excellence-badge.png";
import rocket from "../assets/blueRocket.png";
import avatar from "../assets/avatar.png";
import clutchLogo from "../assets/clutch-logo.png";
import bbb from "../assets/bbb.png";
import googleCloud from "../assets/google-cloud.png";
import meta from "../assets/meta.png";
import googlePartner from "../assets/google-partner.png";
import shopify from "../assets/shopify.png";
import tiktok from "../assets/tiktok.png";
import SparklingStar from "../assets/SparklingStar.png";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
const socialLinks = [
  {
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/digitalmarkettap",
  },
  { Icon: FaTwitter, url: "https://x.com/DmtWebservices" },
  { Icon: FaInstagram, url: "https://www.instagram.com/digitalmarkettap/" },
  { Icon: FaFacebookF, url: "https://www.facebook.com/digitalmarkettap" },
  { Icon: FaYoutube, url: "https://www.youtube.com/@DigitalMarketTap" },
];

const Footer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
    }

    if (step === 2) {
      if (!formData.company.trim())
        newErrors.company = "Company name is required";
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{1,10}$/.test(formData.phone)) {
        newErrors.phone = "Phone number must be 10 digits";
      }
    }

    if (step === 3) {
      if (!formData.message.trim()) newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Form Submitted:", formData);
      alert("Your Proposal have been sent successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        website: "",
        message: "",
      });
      setStep(1);
    }
  };
  return (
    <section className="bg-black text-white rounded-t-[35px] md:rounded-t-[50px] pt-15   lg:px-0">
      <div className="px-5 md:px-10 lg:px-15 xl:px-30 ">
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
          <div className="w-full lg:w-1/2 max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-3 md:mb-6">
              Get a Free <br /> consultation to <br /> boost your business
            </h2>
            <h6 className="text-white/90 mb-3 md:mb-6 font-light text-sm md:text-base">
              Get a free audit of your website to check if your website has
              issues or not. Read below to know why you need to audit the
              website.
            </h6>
            <div className="h-px bg-white/20 my-3 md:my-6 text-sm md:text-base" />
            <ul className="space-y-4 font-syne">
              {[
                " A website audit will show the results of your website's overall performance which we can help to fix.",
                " We can analyze all the duplicate content which can risk your website spam score and help to fix it.",
                " In the audit report, you can check overall traffic on your website and also check your keyword ranking, traffic, and volume.",
                "In website audit report, you can check loading speed of the website and page and we can help to fix it to increase website performance",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#FFF] text-2xl mt-1 shrink-0" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative bg-white text-black rounded-[30px] md:rounded-[40px] p-7 md:p-12 lg:p-15 w-full max-w-xl">
              <img
                src={rocket}
                alt="rocket"
                className="absolute top-0 right-0 md:right-12 lg:right-20 h-20 md:h-30 -mt-8 md:-mt-10 lg:-mt-12 mr-0 md:-mr-0 lg:-mr-8 rotate-35 object-contain"
              />
              <img
                src={SparklingStar}
                alt="SparklingStar"
                className="absolute top-0 right-0 md:right-12 lg:right-50 h-10 md:h-14 -mt-4 md:-mt-6 lg:-mt-6 mr-17 md:mr-30 lg:-mr-6 rotate-[35deg] object-contain"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Get your free audit
              </h3>
              <div className="h-1 w-full bg-gray-200 rounded overflow-hidden mb-6">
                <div
                  className="h-full bg-[#F89E1B] transition-all duration-500"
                  style={{
                    width: step === 1 ? "33%" : step === 2 ? "66%" : "100%",
                  }}
                />
              </div>

              <form className="font-syne space-y-4" onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full px-3 md:px-4 py-2 md:py-2.5 rounded-xl border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } focus:outline-none`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={`w-full px-3 md:px-4 py-2 md:py-2.5 rounded-xl border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } focus:outline-none`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="font-syne w-full bg-black text-white text-sm md:text-[17px] font-semibold py-2 md:py-3 rounded-xl hover:bg-[#F89E1B] transition duration-300"
                    >
                      <span className="group relative inline-block">
                        <span className="relative z-10">NEXT</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border ${
                          errors.company ? "border-red-500" : "border-gray-300"
                        } focus:outline-none`}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.company}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone.replace(/\D/g, "")}
                        onChange={handleChange}
                        maxLength="10"
                        className={`w-full px-3 py-2 md:px-4 md:py-3 border ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } rounded-[8px] outline-none`}
                        inputMode="numeric"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="w-1/2 bg-gray-200 text-sm md:text-md text-black font-semibold py-2 md:py-3 rounded-xl hover:bg-[#F89E1B] hover:text-white transition group"
                      >
                        <span className="relative inline-block">
                          <span className="relative z-10">PREVIOUS</span>
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-1/2 bg-black text-white font-semibold py-2 md:py-3 rounded-xl hover:bg-[#F89E1B] transition group"
                      >
                        <span className="relative inline-block">
                          <span className="relative z-10">NEXT</span>
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <div>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Your Website (optional)"
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 focus:outline-none"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or requirements..."
                        rows={4}
                        className={` resize-none w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        } focus:outline-none`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="w-1/2 bg-gray-200 text-sm md:text-md text-black font-semibold py-2 md:py-3 rounded-xl hover:bg-[#F89E1B] hover:text-white transition group"
                      >
                        <span className="relative inline-block">
                          <span className="relative z-10">PREVIOUS</span>
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>

                      <button
                        type="submit"
                        className="w-1/2 bg-black text-sm md:text-md text-white font-semibold py-2 md:py-3 rounded-xl hover:bg-[#F89E1B] transition group"
                      >
                        <span className="relative inline-block">
                          <span className="relative z-10">SEND PROPOSAL</span>
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>

            <div className="pt-12 flex flex-col lg:flex-row items-center justify-center gap-6">
              <div className="text-center lg:text-left">
                <div className="text-white/80 text-sm font-semibold uppercase tracking-wide">
                  Awarded
                </div>
                <h3 className="text-xl font-bold tracking-wider text-white">
                  Marketing Agency
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <img
                  src={clutch}
                  alt="Clutch Award"
                  className="h-16 object-contain"
                />
                <img
                  src={expertise}
                  alt="Expertise Award"
                  className="h-16 object-contain"
                />
                <img
                  src={localExcellence}
                  alt="Local Excellence Award"
                  className="h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-t-[30px] md:rounded-t-[40px] shadow-md p-5 lg:p-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-20">
          <div className="p-0 md:p-6 lg:p-0 flex flex-col items-start gap-4">
            <img src={avatar} alt="Expert" className="w-16 h-16 rounded-full" />
            <p className="text-lg font-medium text-black">
              Talk to a growth expert
            </p>
            <div className="w-fit relative group cursor-pointer">
              <a
                href="tel:+917290969680"
                className="font-syne inline-block text-gray-800 transition-colors duration-300 text-2xl font-bold tracking-wider"
              >
                +91-729-096-9680
              </a>
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 bg-[#fff5ea] rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-2xl text-[#f89e1b]" />
            </div>

            <div className="flex items-start gap-2">
              <p className="text-base font-medium text-black">
                Plot Number 32A, First Floor Main <br /> Najafgarh Road Opposite
                Metro Pillar 773, <br /> Dwarka Mor New Delhi, Delhi, 110059
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-fit relative group cursor-pointer">
                <a
                  href="mailto:info@digitalmarketingtap.com"
                  className="font-syne inline-block text-base text-gray-800 transition-colors duration-300"
                >
                  info@digitalmarketingtap.com
                </a>
                <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>

            <div className="w-fit relative group cursor-pointer">
              <a
                href="https://www.google.com/maps/place/Digital+Market+Tap/@28.6193963,77.0314992,17z/data=!3m1!4b1!4m6!3m5!1s0x390d0537617778cd:0x766c783a3d1b2311!8m2!3d28.6193963!4d77.0340741!16s%2Fg%2F11mgq84k_y?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                className="font-syne inline-block text-base text-gray-800 transition-colors border-b-2 border-[#FFCF92] duration-300"
              >
                View On Map
              </a>
              <span className="block absolute left-0 -bottom-[1px] h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
            </div>
          </div>

          <div className="flex justify-between gap-3 items-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <p className="text-xs md:text-sm font-semibold text-black">
                  REVIEWED ON
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#f89e1b]" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src={clutchLogo} alt="Clutch" className="h-6" />
                <span className="text-gray-800 font-medium">4.9 Rating</span>
              </div>
            </div>
            <img src={bbb} alt="BBB Accredited" className="h-[70px] w-[70px]" />
          </div>
        </div>

        <div className="bg-[#f7f7fa] rounded-b-[30px] md:rounded-b-[40px] col-span-3 py-6 px-4 flex flex-wrap justify-around items-center gap-4 text-gray-700 text-sm">
          {[googleCloud, meta, googlePartner, shopify, tiktok].map(
            (logo, idx) => (
              <div key={idx} className="flex items-center">
                <img
                  src={logo}
                  alt={`Partner ${idx}`}
                  className="h-full w-full"
                />
              </div>
            )
          )}
        </div>

        <div className="bg-black text-white py-6 md:py-12 px-1 md:px-5 lg:px-12 xl:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
          <div>
            <h3 className="text-lg md:text-md lg:text-lg font-bold mb-2 md:mb-4">
              OUR SERVICES
            </h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-md">
              {[
                "Website Development",
                "Search Engine Optimization",
                "Social Media Marketing",
                "Online Reputation Management",
              ].map((text, index) => {
                const path = "/" + text.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={index} className="w-fit relative group">
                    <Link
                      to={path}
                      className="font-syne inline-block text-white group-hover:text-white transition-colors duration-300"
                    >
                      {text}
                      <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-0 md:mt-8">
            <ul className="space-y-1 md:space-y-2 text-sm md:text-md">
              <li className="w-fit relative group">
                <Link
                  to="/graphic-design"
                  className="font-syne inline-block text-white group-hover:text-white transition-colors duration-300 mt-3"
                >
                  Graphic Design
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="w-fit relative group">
                <Link
                  to="/social-media-optimisation"
                  className="font-syne inline-block text-white group-hover:text-white transition-colors duration-300"
                >
                  Social Media Optimization
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="w-fit relative group">
                <Link
                  to="/marketing"
                  className="font-syne inline-block text-white group-hover:text-white transition-colors duration-300"
                >
                  Marketing
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="w-fit relative group">
                <Link
                  to="/paid-marketing"
                  className="font-syne inline-block text-white group-hover:text-white transition-colors duration-300"
                >
                  Paid Marketing
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-md lg:text-lg font-bold mb-2 md:mb-4">
              WHO WE ARE
            </h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-md">
              <li className="w-fit relative group">
                <Link
                  to="/about-us"
                  className="font-syne inline-block text-white group-hover:text-white transition-colors duration-300"
                >
                  About-Us
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="w-fit relative group">
                <Link
                  to="/contact-us"
                  className="inline-block text-white group-hover:text-white transition-colors duration-300"
                >
                  Contact-Us
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-md lg:text-lg font-bold mb-2 md:mb-4">
              WORK
            </h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-md">
              {["Blog"].map((text, index) => (
                <li key={index} className="w-fit relative group">
                  <a
                    href="#"
                    className="font-syne inline-block text-white group-hover:text-white transition-colors duration-300"
                  >
                    {text}
                    <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-t-[30px] md:rounded-t-[40px] pb-22 md:pb-18 lg:pb-5 pt-5 px-5 md:px-5 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6">
        <div className="flex flex-col md:flex-row items-center text-sm text-black gap-2 md:gap-8 w-full md:w-auto">
          <p className="text-center md:text-left">© 2025 Digital Market Tap</p>

          <div className="flex gap-4 font-syne">
            <a href="/terms-and-conditions" className="hover:text-[#f89e1b]">
              Terms & Conditions
            </a>
            <a href="privacy-policy" className="hover:text-[#f89e1b]">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ Icon, url }, index) => (
            <div
              key={index}
              className="bg-[#f8f9fa] p-2 rounded-full transition-transform duration-200 hover:scale-105"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon className="text-black w-5 h-5 md:w-6 md:h-6 hover:text-[#f89e1b]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
