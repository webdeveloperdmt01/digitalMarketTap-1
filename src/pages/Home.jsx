import React from 'react';
import avatar from '../assets/avatar.png';
import teamImage from '../assets/many-guys-discuss-on-laptop.jpg';
import { FaSearch, FaRocket, FaEnvelope, FaBullseye, FaBullhorn, FaChartLine, FaRupeeSign } from "react-icons/fa";
import { FaCheckCircle, FaArrowRight , FaArrowLeft } from "react-icons/fa";
import SuccessStories from '../components/SuccessStories';
import BrandSlider from '../components/BrandSlider';
import blueBrain from '../assets/blueBrain.jpg';
import manWithModernSpecs from '../assets/manWithModernSpecs.jpg';
import yellowTopGirl from '../assets/yellow-top-girl.jpg';
// import HomeBanner from '../assets/static-banner.png';
import HomeBanner from '../assets/erasebg-transformed.png';
import InfoTabs from '../components/InfoTabs';
import TestimonialsPage from '../components/TestimonialsPage';
import MarketingTabs from '../components/MarketingTabs';


const Home = () => {

  const blogs = [
  {
    title: "The evolution of live-stream content and short-form video...",
    date: "May 2023",
    image: blueBrain,
  },
  {
    title: "The Metaverse boom: brands unite and Apple takes a rain check",
    date: "May 2023",
    image: manWithModernSpecs,
  },
  {
    title: "Verify your site is protecting your business",
    date: "May 2023",
    image: yellowTopGirl,
  },
];

  const services = [
    {
      icon: <FaBullseye className="text-orange-500 text-2xl hover:text-black" />,
      title: (
      <>Paid search <br /> marketing</>
      ),description:
    "Craft campaigns — built just for your business — to ensure real and quantifiable ROI.",
  },
    {
      icon: <FaSearch className="text-orange-500 text-2xl hover:text-black" />,
      title: (
      <>Search engine<br />optimization</>
      ),
      description:
        "Maintain your best spot on the search results page, so you can find new customers and re–engage loyal ones.",
    },
    {
      icon: <FaEnvelope className="text-orange-500 text-2xl hover:text-black" />,
      title: (
      <>Email marketing</>
      ),
      description:
        "When it comes to reaching your target audience, you can’t get much closer than direct to their inboxes.",
    },
    {
      icon: <FaRocket className="text-orange-500 text-2xl hover:text-black" />,
       title: (
      <>Conversion rate<br /> optimization</>
      ),
      description:
        "Craft campaigns — built just for your business — to ensure real and quantifiable ROI.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fdf1e7] to-white pt-10 md:pt-20 text-center">
      <h1 className="px-2 text-4xl md:text-4xl lg:text-6xl font-semibold text-black">
        India's Leading Agency
      </h1>
      <p className="px-7 mt-3 md:mt-6 text-sm md:text-lg lg:text-xl text-gray-700 font-medium">
        Searching for the <span className="font-bold">Best Digital Marketing Agency</span> to boost your online presence?
      </p>
      <p className="text-lg sm:text-xl mt-0 md:mt-2 text-[#f89e1b] font-semibold">
        Digital Market Tap <span className="text-gray-700 font-medium text-sm md:text-lg lg:text-xl">is here.</span>
      </p>
       <img src={HomeBanner} alt="homeBanner" className="w-full"/>
      <div className="flex flex-col lg:flex-row items-center justify-between px-5 md:px-15 lg:px-30 py-5 md:py-10 gap-8 md:gap-0 text-center">
        <div className="flex items-center gap-4 pb-0 md:pb-4 lg:pb-0">
          <div className="flex -space-x-3">
            {[...Array(3)].map((_, i) => (
              <img
                key={i}
                src={avatar}
                alt={`Expert ${i + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="relative group">
            <a
              href="./meet-the-team"
              className="inline-block text-black group-hover:text-black transition-colors duration-300"
            >
              Connect our experts <span className="text-xl">&#8594;</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
            </a>
          </span>
        </div>
        <div className='flex'> 
          <p className="text-3xl md:text-4xl font-bold text-black">2,120,240,368</p>
          <p className="text-xs md:text-sm ml-1 md:ml-4 font-semibold">
            Revenue driven<br/>for our clients
          </p>
        </div>

        <div>
          <div className="flex justify-center mb-1">
            {Array(5).fill().map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.954L10 0l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-sm md:text-base font-semibold text-black pt-0 md:pt-4 lg:pt-0">5000+ Client reviews</p>
        </div>
      </div>


      <section className="w-full px-5 md:px-10 py-10 lg:px-30 lg:py-14">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-3 md:gap-6 lg:gap-12 items-start">
          <div>
            <h5 className="text-left text-sm font-semibold tracking-widest text-gray-800 mb-3"> WHAT WE DO</h5>
            <h2 className="text-left text-2xl md:text-4xl font-bold leading-tight"> We solve digital <br /> challenges</h2>
          </div>
        <div className="text-gray-700 text-md space-y-4 text-justify md:px-6 lg:px-12 pt-2 md:pt-12">
            <p>
              Digital Market Tap, we work with businesses to grow by fixing the actual problems keeping them stuck online. 
              From establishing your presence in search engines to creating scroll–stopping social media campaigns, 
              we concentrate on what actually moves the needle.
            </p>
            <a href="/about-us" className="inline-block text-sm font-bold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200">MORE ABOUT US</a>
          </div>
        </div>
      </section>


      <section className="w-full px-5 md:px-6 py-10 md;15 lg:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6">
          <div className="text-left px-8 py-10 border border-[#f1f1f1] rounded-[40px] bg-white">
            <div className="flex items-center gap-4 mb-6 justify-between">
              <h3 className="text-3xl font-bold text-black leading-tight">Better <br/> audiences</h3>
              <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                <FaBullhorn className="text-orange-500 text-2xl" />
              </div>
            </div>
            <p className="text-[#5c5f61]">Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models to drive business growth — from only the best customers.</p>
          </div>

          <div className="text-left px-8 py-10 border border-[#f1f1f1] rounded-[40px] bg-white">
            <div className="flex items-center gap-4 mb-6 justify-between">
              <h3 className="text-3xl font-bold text-black leading-tight">Better <br/> analytics</h3>
              <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                <FaChartLine className="text-orange-500 text-2xl" />
              </div>
            </div>
            <p className="text-[#5c5f61]">Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models to drive business growth — from only the best customers.</p>
          </div>

          <div className="text-left px-8 py-10 border border-[#f1f1f1] rounded-[40px] bg-white">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h3 className="text-3xl font-bold text-black leading-tight">Better <br/> outcomes</h3>
              <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                <FaRupeeSign className="text-orange-500 text-2xl" />
              </div>
            </div>
            <p className="text-[#5c5f61]">Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models to drive business growth — from only the best customers.</p>
          </div>
        </div>
      </section>


      <section className="px-5 md:px-10 lg:px-30 pt-5">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
          <img src={teamImage} alt="Team Collaboration" className="w-full object-cover" />
        </div>

        <div className="max-w-2xl text-left px-0 md:px-5 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3">
            Our Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-black mb-6 leading-tight">
            Data-driven, customer-centric digital services
          </h2>
          <button className="group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden">
            <span className="relative z-10">View All Solutions →
              <span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
          </button>
        </div>
      </section>


  <section className="py-8 md:py-12 px-5 md:px-10 lg:px-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
          <div
              key={index}
              className="bg-white rounded-3xl p-8 text-black flex flex-col justify-between h-full">
        <div>
             <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-6 text-left">{service.title}</h3>
            <p className="text-sm text-[#57595b] mb-12 text-left">{service.description}</p>
        </div>

    <div className="text-left mt-auto">
       <a href="#" className="group inline-block text-xs font-semibold relative border-b-2 border-[#fbc371]">LEARN MORE →<span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
    </div>
       </div>
))}
    </div>
  </section>

<MarketingTabs/>
   <SuccessStories />
      <BrandSlider />

  <section className="py-8 lg:py-20 px-5 md:px-10 lg:px-30 text-center">
      <p className="text-sm font-bold tracking-widest mb-2">BLOG</p>
      <h2 className="text-2xl lg:text-4xl font-bold mb-4 md:mb-8 max-w-3xl mx-auto">
        Think further with our <br/> expert insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-[30px] overflow-hidden border-1 border-[#ededed] text-left">
            <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
            <div className="p-8 hover:bg-[#F1F3F6]">
              <p className="text-sm text-[#666666] mb-2">{blog.date}</p>
              <h3 className="text-lg font-semibold leading-snug hover:text-[#8E81FA] ">{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
  </section>

<InfoTabs/>
<TestimonialsPage/>
    {/* main div tag */}
    </div>
  );
};

export default Home;
