import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Badge0 from "../assets/clutch-badge.png";
import Badge1 from "../assets/new-badge.png";
import Badge2 from "../assets/new-badge2.png";
import Badge3 from "../assets/new-badge3.png";
import Badge4 from "../assets/logo_hubspot.png";
import SparklingStar from "../assets/SparklingStar.png";

function FreeAudit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "", 
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits.";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // Hide message after 3s
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        service: "",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <section className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] py-8 lg:py-10 px-5 md:px-10 lg:px-15 xl:px-30">
      <div className="py-4 md:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-15 lg:gap-40">
          {/* LEFT SECTION */}
          <div>
            <h5 className="text-md font-medium pb-8 uppercase">Free Audit</h5>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl pb-4 md:pb-8">
              Let’s Unlock Your <br /> Growth Potential
            </h1>
            <h3 className="text-left font-light text-md md:text-lg text-gray-500 pb-3 md:pb-7">
              Partner with Digital Market Tap and leave the heavy lifting to us.
              From boosting website traffic to turning leads into customers, we
              help you grow with less stress and more results.
            </h3>

            <hr className="border border-gray-200" />
            {[
              "We’ll review your current marketing goals and understand your vision.",
              "We’ll check if your messaging aligns with your ideal customer.",
              "We’ll audit your website for usability, mobile experience, and SEO.",
              "We’ll evaluate your blog, emails, and social media for consistency and impact.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-md text-[#444] pt-3 md:pt-6 lg:pt-8 font-kanit"
              >
                <FaCheckCircle className="text-[#f89e1b] text-2xl mt-1 shrink-0" />
                <p>{text}</p>
              </div>
            ))}
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="flex lg:justify-end justify-center pt-2.5 pr-2.5 pb-2.5 pl-0 lg:p-0">
            <div className="bg-white rounded-4xl shadow-[12px_12px_0_0_black] px-2 lg:px-5 pt-14 lg:pt-20 pb-5 lg:pb-10 relative max-w-[490px] w-full">
              {showSuccess && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#6754E9] text-white px-6 py-3 rounded-xl shadow-lg z-50 text-sm font-medium">
                  ContactUs Form Submitted!
                </div>
              )}

              <img
                src={SparklingStar}
                alt="SparklingStar"
                className="absolute top-0 right-0 md:right-12 lg:right-50 h-10 md:h-14 -mt-4 md:-mt-6 lg:-mt-6 mr-15 md:mr-10 lg:-mr-10 rotate-[35deg] object-contain"
              />

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center space-y-4 text-[#a4a4a4] px-4 font-syne"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.name ? "border-red-500" : "border-[#ababab]"
                  } hover:border-[#f89e1b] rounded-[8px] outline-none`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm -mt-2">{errors.name}</p>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-[#ababab]"
                  } hover:border-[#f89e1b] rounded-[8px] outline-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm -mt-2">{errors.email}</p>
                )}

                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.company ? "border-red-500" : "border-[#ababab]"
                  } hover:border-[#f89e1b] rounded-[8px] outline-none`}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  inputMode="numeric"
                  className={`w-full px-4 py-3 border ${
                    errors.phone ? "border-red-500" : "border-[#ababab]"
                  } hover:border-[#f89e1b] rounded-[8px] outline-none`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm -mt-2">{errors.phone}</p>
                )}

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.service ? "border-red-500" : "border-[#ababab]"
                  } hover:border-[#f89e1b] rounded-[8px] outline-none`}
                >
                  <option value="">Services We Provide</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="Search Engine Optimization">
                    Search Engine Optimization
                  </option>
                  <option value="Social Media Optimization">
                    Social Media Optimization
                  </option>
                  <option value="Google Ads">Google Ads</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Paid Marketing">Paid Marketing</option>
                  <option value="Online Reputation Management">
                    Online Reputation Management
                  </option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm -mt-2">{errors.service}</p>
                )}

                <textarea
                  name="message"
                  placeholder="What can we help you with?"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.message ? "border-red-500" : "border-[#ababab]"
                  } hover:border-[#f89e1b] rounded-[8px] outline-none resize-none h-28`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm -mt-2">{errors.message}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-[#f89e1b] transition duration-300"
                >
                  Get In Touch →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* BADGES */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 pt-8 md:pt-12 pb-8 md:pb-10 lg:pt-16 text-center lg:text-left">
          <div className="w-full lg:w-1/3 flex justify-end">
            <p className="text-xl font-semibold text-gray-800 pr-10">
              Credentials & <br className="hidden md:block" /> Recognition:
            </p>
          </div>
          <div className="w-full lg:w-2/3 flex justify-center lg:justify-start flex-wrap items-center gap-4 md:gap-6 py-2">
            {[Badge0, Badge1, Badge2, Badge3, Badge4].map((src, i) => (
              <img key={i} src={src} alt={`Badge ${i}`} className="h-16 md:h-20 object-contain" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeAudit;
