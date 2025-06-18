import React from 'react';
import clutch from '../assets/clutch-badge.png';
import expertise from '../assets/expertise-badge.png';
import localExcellence from '../assets/local-excellence-badge.png';
import rocket from '../assets/rocket.png';
import avatar from '../assets/avatar.png';
import clutchLogo from '../assets/clutch-logo.png';
import bbb from '../assets/bbb.png';
import googleCloud from '../assets/google-cloud.png';
import meta from '../assets/meta.png';
import googlePartner from '../assets/google-partner.png';
import shopify from '../assets/shopify.png';
import tiktok from '../assets/tiktok.png';
import { Link } from 'react-router-dom';

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaStar,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="bg-black text-white rounded-t-[35px] md:rounded-t-[50px] pt-15   lg:px-0">
      <div className="px-5 md:px-10 lg:px-30 ">
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
          <div className="w-full lg:w-1/2 max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-3 md:mb-6">
              Get a Free <br /> consultation to <br /> boost your business
            </h2>
            <p className="text-white/90 mb-3 md:mb-6">
              A marketing audit is an evaluation of your company’s marketing efforts and their effectiveness. Here what you will get:
            </p>
            <div className="h-px bg-white/20 my-3 md:my-6" />
            <ul className="space-y-4">
              {[
                "Evaluate your target audience to see if they have changed or if you need to adjust your messaging to better reach them.",
                "Analyze your website to ensure it is user-friendly, mobile-responsive, and optimized for search engines.",
                "Review your content marketing efforts, including your blog posts, social media, and email marketing."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#F89E1B] text-xl">✔️</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative bg-white text-black rounded-[40px] p-7 md:p-12 lg:p-15 w-full max-w-xl">
              <img src={rocket} alt="rocket" className="absolute top-0 right-0 md:right-12 lg:right-20 h-34 -mt-8  md:-mt-10 lg:-mt-13 mr-0 md:-mr-8 lg:-mr-10 rotate-35 object-contain" />
              <h3 className="text-2xl font-bold mb-4">Get your free audit</h3>
              <div className="h-1 w-full bg-gray-200 rounded overflow-hidden mb-6">
                <div className="h-full w-1/2 bg-[#F89E1B]" />
              </div>
              <form className="space-y-4">
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none" />
                <button type="submit" className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-[#6754E9] transition">NEXT</button>
              </form>
            </div>

            <div className="pt-12 flex flex-col lg:flex-row items-center justify-center gap-6">
              <div className="text-center lg:text-left">
                <div className="text-white/80 text-sm font-semibold uppercase tracking-wide">Awarded</div>
                <h3 className="text-xl font-bold tracking-wider text-white">Marketing Agency</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <img src={clutch} alt="Clutch Award" className="h-16 object-contain" />
                <img src={expertise} alt="Expertise Award" className="h-16 object-contain" />
                <img src={localExcellence} alt="Local Excellence Award" className="h-16 object-contain" />
              </div>
            </div>
          </div>
        </div>

  <div className="bg-white rounded-t-[40px] shadow-md p-5 lg:p-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <div className="p-0 md:p-6 lg:p-0 flex flex-col items-start gap-4">
      <img src={avatar} alt="Expert" className="w-16 h-16 rounded-full" />
      <p className="text-lg font-medium text-black">Talk to a growth expert</p>
  <div className="w-fit relative group cursor-pointer">
        <a href="mailto:info@digitalmarketingtap.com" className="inline-block text-gray-800 transition-colors duration-300 text-2xl font-bold tracking-wider">+91-729-096-9680</a>
        <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
      </div>
  </div>

  <div className="flex flex-col gap-4">
    <div className="w-16 h-16 bg-[#fff5ea] rounded-full flex items-center justify-center">
      <FaMapMarkerAlt className="text-2xl text-[#f89e1b]" />
    </div>

    <div className="flex items-start gap-2">
      <p className="text-base font-medium text-black">
        Plot Number 32A, First Floor Main <br/> Najafgarh Road Opposite Metro Pillar 773, <br/> Dwarka Mor New Delhi, Delhi, 110059
      </p>
    </div>

    <div className="flex items-center gap-2">
      <div className="w-fit relative group cursor-pointer">
        <a href="mailto:info@digitalmarketingtap.com" className="inline-block text-base text-gray-800 transition-colors duration-300">info@digitalmarketingtap.com</a>
        <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
      </div>
    </div>

    <div className="w-fit relative group cursor-pointer">
      <a href='/' className="inline-block text-base text-gray-800 transition-colors border-b-2 border-[#f89e1b] duration-300">View On Map</a>
      <span className="block absolute left-0 -bottom-.1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
    </div>
  </div>

  <div className="flex justify-between gap-6 items-center">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <p className="text-sm font-semibold text-black">REVIEWED ON</p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => <FaStar key={i} className="text-red-500" />)}
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

        <div className="bg-[#f7f7fa] rounded-b-[40px] col-span-3 py-6 px-4 flex flex-wrap justify-around items-center gap-4 text-gray-700 text-sm">
          {[googleCloud, meta, googlePartner, shopify, tiktok].map((logo, idx) => (
            <div key={idx} className="flex items-center">
              <img src={logo} alt={`Partner ${idx}`} className="h-full w-full" />
            </div>
          ))}
        </div>

        <div className="bg-black text-white py-6 md:py-12 px-1 md:px-5 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
          <div>
            <h3 className="text-lg md:text-sm font-bold mb-2 md:mb-4">SOLUTIONS</h3>
           <ul className="space-y-1 md:space-y-2 text-sm md:text-md">
  {[
    'Content Writing Service',
    'Search engine optimization',
    'Email marketing',
    'Social Media Optimization',
  ].map((text, index) => {
    const path = '/' + text.toLowerCase().replace(/\s+/g, '-');
    return (
      <li key={index} className="w-fit relative group">
        <Link
          to={path}
          className="inline-block text-white group-hover:text-white transition-colors duration-300"
        >
          {text}
          <span className="block absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
        </Link>
      </li>
    );
  })}
</ul>
          </div>
          <div className='mt-0 md:mt-8'>
           <ul className="space-y-1 md:space-y-2 text-sm md:text-md">
  <li className="w-fit relative group">
    <Link to="/social-media-marketing" className="inline-block text-white group-hover:text-white transition-colors duration-300">
      Social Media Marketing
      <span className="block absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
    </Link>
  </li>
  <li className="w-fit relative group">
    <Link to="/graphic-design" className="inline-block text-white group-hover:text-white transition-colors duration-300">
      Graphic Design
      <span className="block absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
    </Link>
  </li>
  <li className="w-fit relative group">
    <Link to="/online-reputation-management" className="inline-block text-white group-hover:text-white transition-colors duration-300">
      Online Reputation Management
      <span className="block absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
    </Link>
  </li>
  <li className="w-fit relative group">
    <Link to="/website-design" className="inline-block text-white group-hover:text-white transition-colors duration-300">
      Website Design
      <span className="block absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
    </Link>
  </li>
</ul>
          </div>
          <div>
            <h3 className="text-lg md:text-sm font-bold mb-2 md:mb-4">WHO WE ARE</h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-md">
               <li className="w-fit relative group">
                <Link to="/awards" className="inline-block text-white group-hover:text-white transition-colors duration-300">Awards
                     <span className="block absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span></Link></li>
                  <li className="w-fit relative group"><Link to="/contact-us" className="inline-block text-white group-hover:text-white transition-colors duration-300">Contact
                     <span className="block absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-sm font-bold mb-2 md:mb-4">WORK</h3>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-md">
              {['About Us', 'Blog'].map((text, index) => (
                <li key={index} className="w-fit relative group">
                  <a href="#" className="inline-block text-white group-hover:text-white transition-colors duration-300">
                    {text}
                    <span className="block absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

     <div className="bg-white rounded-t-[35px] pb-18 md:pb-18 lg:pb-5 pt-5 px-5 md:px-5 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6">
      <div className="flex flex-col md:flex-row items-center text-sm text-black gap-2 md:gap-8 w-full md:w-auto">
    <p className="text-center md:text-left">© 2025 Digital Market Tap</p>

    <div className="flex gap-4">
      <a href="/terms-and-conditions" className="hover:text-[#6754E9]">Terms & Conditions</a>
      <a href="privacy-policy" className="hover:text-[#6754E9]">Privacy Policy</a>
    </div>
  </div>

  <div className="flex items-center gap-4">
    {[FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaYoutube].map((Icon, index) => (
      <div key={index} className="bg-[#f8f9fa] p-2 rounded-full transition-transform duration-200">
        <a href="#"><Icon className="text-black w-5 h-5 md:w-6 md:h-6 hover:text-[#f89e1b]" /></a>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default Footer;
