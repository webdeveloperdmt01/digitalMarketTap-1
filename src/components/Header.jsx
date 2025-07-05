import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Bold, IndianRupee } from 'lucide-react';
import {
  FaHome,
  FaBullhorn,
  FaSearch,
  FaInfoCircle,
  FaPhoneAlt,
  FaCode,
  FaImage,
  FaEnvelope,
  FaCommentDots,
  FaHashtag,
  FaKeyboard,
  FaStar,
  FaArrowRight,
  FaSearchLocation,
  FaBuilding,
  FaShoppingCart,
  FaLanguage,
  FaBlog,
  FaQuora
} from 'react-icons/fa';
import logo from '../assets/dmt-main-logo.png';
import targetIcon from '../assets/rocket.png';

const Header = () => {
  const [marketingSolutionsVisible, setMarketingSolutionsVisible] = useState(false);
  const [seoDropdownVisible, setSeoDropdownVisible] = useState(false);

  const marketingRef = useRef(null);
  const seoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (marketingRef.current && !marketingRef.current.contains(event.target)) {
        setMarketingSolutionsVisible(false);
      }
      if (seoRef.current && !seoRef.current.contains(event.target)) {
        setSeoDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-[#fff7ee] flex items-center justify-between px-5 md:px-10 lg:px-15 xl:px-30">
        <NavLink to="/" className="bg-[#fff5ea]">
          <img src={logo} alt="Logo" className="h-19" />
        </NavLink>
        <nav className="font-semibold font-syne hidden xl:flex items-center space-x-6 text-sm relative">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'border-b-2 border-[#F89E1B]' : 'border-b-2 border-transparent')}>
            HOME  
          </NavLink>

          <div ref={marketingRef} onMouseEnter={() => setMarketingSolutionsVisible(true)} className="relative">
           <NavLink to="/marketing-solution" onMouseEnter={() => setMarketingSolutionsVisible(true)} className={({ isActive }) => `font-semibold text-sm border-b-2 flex items-center ${ isActive || marketingSolutionsVisible ? 'border-[#F89E1B]' : 'border-transparent'}`}> MARKETING SOLUTIONS</NavLink>
            {marketingSolutionsVisible && (
              <div className="absolute top-full justify-around left-[160px] -translate-x-1/2 mt-8 bg-white shadow-lg rounded-3xl z-50 px-5 py-6 flex space-x-10 w-[1260px]">
                <div className="flex flex-col space-y-1">
                 <HoverService icon={<FaCode color="#000" />} text="Website Development" to="/website-design" />
                  <HoverService icon={<FaSearch color='#E0E0E0' />} text="Search Engine Optimization" to="/search-engine-optimization" />
                  {/* <HoverService icon={<FaEnvelope  />} text="Email Marketing" to="/email-marketing" /> */}
                  {/* <HoverService icon={<FaQuora color="#D53716" />} text="Quora Marketing" to="/quora-marketing" /> */}
                  <HoverService icon={<FaCommentDots color="#8e81fa" />} text="Social Media Marketing" to="/social-media-marketing" />
                  <HoverService icon={<FaStar color='yellow' />} text="Online Reputation Management" to="/online-reputation-management" />
                </div>
                <div className="flex flex-col space-y-1">
                  <HoverService icon={<FaImage  color="#097B11" />} text="Graphic Designing" to="/graphic-design" />
                  <HoverService icon={<FaHashtag color="purple" />} text="Social Media Optimization" to="/social-media-optimisation" />
                  {/* <HoverService icon={<FaKeyboard color='black' />} text="Content Writing Service" to="/content-writing-service" /> */}
                  <HoverService icon={<FaBullhorn color='blue' />} text="Marketing" to="/marketing" />
                  <HoverService icon={<IndianRupee size={18} color="black" strokeWidth={3} />}  text="Paid Marketing" to="/paid-marketing"/>
                </div>
                 
                <div className="bg-[#ffc187] rounded-3xl px-5 pt-10 pb-6 flex flex-col items-center w-[240px] relative">
                  <img src={targetIcon} alt="target" className="w-20 h-25 absolute -top-5 right-0 -translate-x-1/2"/>
                    <div className="w-full flex items-center justify-between mt-auto">
                      <p className="text-sm font-semibold hover:text-white"> Explore all <br/>solutions</p>
                      <FaArrowRight className="bg-black text-white rounded-[12px] p-2 text-3xl hover:bg-white hover:text-[#8e81fa]"/>
                    </div>
                </div>


              </div>
            )}
          </div>

          {/* <div ref={seoRef} className="relative" onMouseEnter={() => setSeoDropdownVisible(true)}>
          <NavLink to="/seo" onMouseEnter={() => setSeoDropdownVisible(true)} className={({ isActive }) => `font-semibold text-sm border-b-2 flex items-center ${ isActive || seoDropdownVisible ? 'border-[#F89E1B]' : 'border-transparent' }`}> SEO</NavLink>
            {seoDropdownVisible && (
              <div className="absolute top-full mt-8 bg-white rounded-3xl shadow-lg px-5 py-3 w-[300px] z-50 space-y-2">
                <DropdownItem icon={<FaStar />} text="ON Page OFF Page SEO" to="/onpage-offpage-seo" />
                <DropdownItem icon={<FaSearchLocation />} text="Local SEO" to="/local-seo" />
                <DropdownItem icon={<FaBuilding />} text="Enterprise SEO" to="/enterprise-seo" />
                <DropdownItem icon={<FaShoppingCart />} text="Ecommerce SEO" to="/ecommerce-seo" />
                <DropdownItem icon={<FaLanguage />} text="Multilingual SEO" to="/multilingual-seo" />
                <DropdownItem icon={<FaLanguage />} text="A.I. SEO" to="/ai-seo" />
              </div>
            )}
          </div> */}

          <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'border-b-2 border-[#F89E1B]' : 'border-b-2 border-transparent')}>
            ABOUT US
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'border-b-2 border-[#F89E1B]' : 'border-b-2 border-transparent')}>
            BLOG
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? 'border-b-2 border-[#F89E1B]' : 'border-b-2 border-transparent')}
          >
            CONTACT US
          </NavLink>
        </nav>

       <NavLink
  to="/free-audit"
  className="hidden xl:inline-block group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden"
>
  <span className="relative z-10 flex items-center gap-2">
    <span className="font-mono relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
      FREE AUDIT
    </span>
    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

  </span>
</NavLink>
      </header>

<div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md border-t-2 border-yellow-400 xl:hidden">
  <div className="grid grid-cols-5 text-xs">
    {[
      { to: "/about-us", icon: <FaInfoCircle/>, label: "About" },
      { to: "/blog", icon: <FaBlog/>, label: "Blogs" },
      { to: "/", icon: <FaHome/>, label: "Home" },
      { to: "/marketing-solution", icon: <FaBullhorn/>, label: "Marketing" },
      { to: "/contact-us", icon: <FaPhoneAlt/>, label: "Contact" },
    ].map(({ to, icon, label }, index) => (
      <NavLink
        key={index}
        to={to}
        className={({ isActive }) =>
          `relative flex flex-col items-center justify-end pt-4 pb-2 transition-all duration-200 ${
            isActive ? "text-orange-500" : "text-[#8e81fa]"
          }`
        }
      >
        {({ isActive }) => (
          <>
          {isActive && (
        <div className="absolute bottom-0 w-14 h-19 bg-[#000] rounded-t-full border-t-4 border-t-amber-500 shadow-inner backdrop-blur-sm" />
)}
            <div className="z-10 text-lg">{icon}</div>
            <span className="z-10">{label}</span>
          </>
        )}
      </NavLink>
    ))}
  </div>
</div>

    </>
  );
};

const HoverService = ({ icon, text, to = '#' }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <NavLink
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center space-x-6 p-2 rounded-xl no-underline cursor-pointer transition-colors duration-200 ${
        hovered ? 'bg-[#ededed]' : ''
      }`}
    >
      <div className="bg-[#f7f7f7] text-[#F89E1B] p-3 rounded-full text-lg">{icon}</div>
      <span className="font-medium text-black hover:text-[#8e81fa]">{text}</span>
    </NavLink>
  );
};

const DropdownItem = ({ icon, text, to = '#' }) => (
  <NavLink
    to={to}
    className="flex items-center space-x-4 p-2 rounded-md hover:text-[#8e81fa] hover:bg-[#ededed] transition-colors duration-200 no-underline text-black"
  >
    <div className="bg-[#fff5ea] text-[#F89E1B] p-2 rounded-full text-lg">{icon}</div>
    <span className="font-medium">{text}</span>
  </NavLink>
);

export default Header;
