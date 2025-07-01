import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorImg from "../assets/errorImg.jpg";
import CountUp from "react-countup";


const Error = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const pages = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Blog", path: "/blog" },
    { name: "Marketing Solution", path: "/marketing-solution" },
    { name: "Website Design", path: "/website-design" },
    { name: "About Us", path: "/about-us" },
    { name: "SEO", path: "/search-engine-optimization" },
    { name: "OnPage OffPage SEO", path: "/onpage-offpage-seo" },
    { name: "Local SEO", path: "/local-seo" },
    { name: "Enterprise SEO", path: "/enterprise-seo" },
    { name: "Ecommerce SEO", path: "/ecommerce-seo" },
    { name: "Multilingual SEO", path: "/multilingual-seo" },
    { name: "AI SEO", path: "/ai-seo" },
    { name: "Free Audit", path: "/free-audit" },
    { name: "Meet The Team", path: "/meet-the-team" },
    { name: "Awards", path: "/awards" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Content Writing Service", path: "/content-writing-service" },
    { name: "Social Media Marketing", path: "/social-media-marketing" },
    { name: "Social Media Optimisation", path: "/social-media-optimisation" },
    { name: "Online Reputation Management", path: "/online-reputation-management" },
    { name: "Quora Marketing", path: "/quora-marketing" },
    { name: "Email Marketing", path: "/email-marketing" },
    { name: "Graphic Design", path: "/graphic-design" },
    { name: "SEO Tag", path: "/seo-tag" },
    { name: "Paid Social Tag", path: "/paid-social-tag" },
    { name: "Paid Search Tag", path: "/paid-search-tag" },
    { name: "Organic Social Media", path: "/organic-social-media" },
    { name: "Paid Marketing", path: "/paid-marketing" },
    { name: "Marketing", path: "/marketing" },
    { name: "Ecommerce Website Development", path: "/e-commerce-website-development" },
    { name: "Blog News Website", path: "/blog-news-website" },
    { name: "Educational Website", path: "/education-website" },
    { name: "Buisness Website", path: "/buisness-website" },
    { name: "Vernacular SEO", path: "/vernacular-seo" },
    { name: "HyperLocal SEO", path: "/hyperlocal-seo" },
    { name: "Voice SEO", path: "/voice-seo" },
    { name: "Google Ads", path: "/google-ads" },
    { name: "Amazon Ads", path: "/amazon-ads" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const found = pages.find((page) =>
      page.name.toLowerCase().includes(query.toLowerCase())
    );
    if (found) {
      navigate(found.path);
    } else {
      alert("Oops. Not here. Never was");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#fdf1e7] to-white flex items-center justify-center px-5 md:px-10 lg:px-30 py-18 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <img src={ErrorImg} alt="404" className="w-[100%] md:h-[380px] lg:h-[480px] rounded-xl shadow-md object-cover"/>
        </div>
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-black mb-4">
            <CountUp start={250} end={404} duration={2} delay={0} /> 
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Oops! It seems like <br /> you got lost...
          </h2>
          <h6 className="text-sm md:text-lg text-gray-600 font-light mb-6">
            Sorry! We can’t find the content you’re looking for. <br />
            Try searching again or go back to the{" "}
            <span
              onClick={() => navigate("/")}
              className="text-[#f89e1b] cursor-pointer hover:underline"
            >
              Home Page
            </span>
            .
          </h6>
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full max-w-lg"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages..."
              className="flex-grow px-6 py-3 focus:outline-none text-black"
            />
            <button type="submit" className="px-6 py-3 text-white bg-[#fcc87e] hover:bg-[#f89e1b]  transition-colors duration-500 ease-in-out">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Error;
