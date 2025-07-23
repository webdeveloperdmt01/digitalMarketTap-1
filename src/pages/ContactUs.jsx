import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import SparklingStar from "../assets/SparklingStar.png";
import BorderBottomCenter from "../assets/border-center.png";
import { Helmet } from "react-helmet";

function ContactUs() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.service.trim()) newErrors.service = "Please select a Service";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        service: "",
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  return (
<>
 <Helmet>
  <meta name="title" content="Digital Marketing agency in Delhi | Digital Market Tap"/>
  <meta  name="description" content="Looking for a top digital marketing company in Delhi? Contact Digital Market Tap for expert SEO, PPC, social media, web solutions & a free website audit"/>
  <meta name="keywords" content="website designing agency in Delhi, graphical designing agency in Delhi, digital marketing company in delhi"/>
  <meta name="robots" content="index, follow" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="language" content="English" />
  <meta meta name="revisit-after" content="2 days"/>
</Helmet>
    <section className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] py-8 lg:py-20 px-5 md:px-10 lg:px-15 xl:px-30">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div>
          <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-5 md:mb-10 lg:mb-6">
            Contact Us
          </h3>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-black mt-2">
            We’re Here to Help – Contact Us Now
          </h2>
          <h6 className="text-md text-black mt-5 font-light">
            At Digital Market Tap, we think that the first step to change is
            communication. We're only a message away, whether you want to
            dominate local search results, need a new website, or want to grow
            your business online! – still searching for digital marketing
            company in delhi contact us now.
          </h6>

          <div className="mt-4 lg:mt-10 block lg:flex justify-between items-start w-full">
            <p className="text-black text-xl group mb-4 lg:mb-0">
              <span className="text-[#4f4f4f] font-semibold text-sm">
                Phone number:
              </span>
              <br />
              <a
                href="tel:+917290969680"
                className="relative inline-block cursor-pointer text-black no-underline"
              >
                +91-7290969680
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </p>
            <p className="text-black text-xl group">
              <span className="text-[#4f4f4f] font-semibold text-sm">
                Email address:
              </span>
              <br />
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
              className="flex flex-col items-center space-y-4 text-[#a4a4a4] px-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 md:px-4 md:py-3 border ${
                  errors.name ? "border-red-500" : "border-[#ababab]"
                } hover:border-[#6754E9] rounded-[8px] outline-none`}
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
                className={`w-full px-3 py-2 md:px-4 md:py-3 border ${
                  errors.email ? "border-red-500" : "border-[#ababab]"
                } hover:border-[#6754E9] rounded-[8px] outline-none`}
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
                className={`w-full px-3 py-2 md:px-4 md:py-3 border ${
                  errors.company ? "border-red-500" : "border-[#ababab]"
                } hover:border-[#6754E9] rounded-[8px] outline-none`}
              />
              {errors.company && (
                <p className="text-red-500 text-sm -mt-2">{errors.company}</p>
              )}
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone.replace(/\D/g, "")}
                onChange={handleChange}
                maxLength="10"
                className={`w-full px-3 py-2 md:px-4 md:py-3 border ${
                  errors.phone ? "border-red-500" : "border-[#ababab]"
                } hover:border-[#6754E9] rounded-[8px] outline-none`}
                inputMode="numeric"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm -mt-2">{errors.phone}</p>
              )}

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-3 py-2 md:px-4 md:py-3 border ${
                  errors.service ? "border-red-500" : "border-[#ababab]"
                } hover:border-[#6754E9] rounded-[8px] outline-none`}
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
                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>
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
                } hover:border-[#6754E9] rounded-[8px] outline-none resize-none h-28`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm -mt-2">{errors.message}</p>
              )}

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

      <div className="pt-10 lg:pt-18 relative">
        <img
          src={BorderBottomCenter}
          alt="border-bottom-line"
          className="w-full top-0 bottom-0 right-0 object-contain pb-3 md:pb-24"
        />
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 lg:mb-12">
          Location
        </h2>

        <div className="w-full bg-[#f7f7fa] rounded-4xl px-4 lg:px-8 py-8 md:py-12 space-y-4">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center justify-center bg-gray-200 rounded-full w-10 h-10 flex-shrink-0">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-orange-500 w-14 h-14"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-left">
              New Delhi
            </h3>
            <p className="text-gray-900 font-semibold text-lg">
              Plot Number 32A, First Floor, Main Najafgarh Road, Opposite Metro
              Pillar 773, Dwarka Mor, New Delhi, Delhi, 110059
            </p>
          </div>

          <p className="text-black text-xl group">
            <span className="text-[#4f4f4f] font-semibold text-sm">
              Phone number:
            </span>
            <br />
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
