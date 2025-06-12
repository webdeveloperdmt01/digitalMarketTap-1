import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  return (
    <>
<section className="bg-[#fdf1e7] py-8 lg:py-20 px-5 md:px-10 lg:px-30">
  <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
    <div>
      <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-18">Contact</h3>
      <h2 className="text-4xl lg:text-6xl font-bold text-black mt-2 leading-tight">
        We’re here to help you grow
      </h2>
      <p className="text-md text-black mt-5 font-semibold">
        Feel free to reach out to us through your preferred method of contact. 
        We are eager to connect with you and explore how our digital marketing 
        team can contribute to your success.
      </p>

      <div className="mt-4 lg:mt-10 block lg:flex justify-between items-start w-full">
  <p className="text-black text-xl group mb-4 lg:mb-0">
    <span className="text-[#4f4f4f] font-semibold text-sm">Phone number:</span><br />
    <a
      href="tel:+917290969680"
      className="relative inline-block cursor-pointer text-black no-underline"
    >
      +91-7290969680
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </p>

  <p className="text-black text-xl group">
    <span className="text-[#4f4f4f] font-semibold text-sm">Email address:</span><br />
    <a
      href="mailto:info@digitalmarkettap.com"
      className="relative inline-block cursor-pointer text-black no-underline"
    >
      info@digitalmarkettap.com
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </p>
</div>
</div>
    <div className="flex lg:justify-end pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
      <div className="bg-white rounded-4xl shadow-[12px_12px_0_0_black] px-2 lg:px-5 pt-14 lg:pt-20 pb-5 lg:pb-10 relative w-full">
        <div className="absolute -top-4 -right-4"></div>
        <form className="flex flex-col items-center space-y-4 text-[#a4a4a4] px-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-[#ababab] hover:border-[#6754E9] rounded-xl outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-[#ababab] hover:border-[#6754E9] rounded-xl outline-none"
          />
          <input
            type="text"
            placeholder="Company name"
            className="w-full px-4 py-3 border border-[#ababab] hover:border-[#6754E9] rounded-xl outline-none"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full px-4 py-3 border border-[#ababab] hover:border-[#6754E9] rounded-xl outline-none"
          />
          <textarea
            placeholder="What can we help you with?"
            className="w-full px-4 py-3 border border-[#ababab] hover:border-[#6754E9] rounded-xl outline-none resize-none h-28"
          ></textarea>
          <button
            type="submit"
            className="relative w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-[#6754E9] transition duration-300 group"
          >
            <span className="relative inline-block">
              Get In Touch →
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
<div className="pt-10 lg:pt-18">
  <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6 lg:mb-12">LOCATION</h2>
 <div className="w-full bg-[#f7f7fa] rounded-4xl px-4 lg:px-8 py-8 md:py-12 space-y-4">
  <div className="flex flex-col items-start gap-4">
    <div className="flex items-center justify-center bg-gray-200 rounded-full w-10 h-10 flex-shrink-0">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 w-14 h-14" />
    </div>
    <p className="text-gray-900 font-semibold text-lg">
    <h3 className="text-xl font-semibold text-gray-900 text-left">New Delhi</h3>
      Plot Number 32A, First Floor, Main Najafgarh Road, Opposite Metro Pillar 773, Dwarka Mor, New Delhi, Delhi, 110059
    </p>
  </div>

  <p className="text-black text-xl group">
    <span className="text-[#4f4f4f] font-semibold text-sm">Phone number:</span><br />
    <a
      href="tel:+917290969680"
      className="relative inline-block cursor-pointer text-black no-underline"
    >
      +91-7290969680
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </p>

  <a
    href="https://www.google.com/maps?q=Plot+Number+32A,+Dwarka+Mor+New+Delhi+Delhi+110059"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block text-black font-semibold cursor-pointer no-underline group"
  >
    <span className="relative inline-block border-b-2 border-amber-400">
      View On Map
      <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </span>
  </a>
</div>

</div>

</section>
    </>
  );
}

export default ContactUs;
