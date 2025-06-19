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
import BorderBottom from '../assets/border.png';
import InfoTabs from '../components/InfoTabs';
import TestimonialsPage from '../components/TestimonialsPage';
// import MarketingTabs from '../components/MarketingTabs';


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
      <>Social media <br/> marketing</>
      ),
      description:
        "We create and manage engaging social media content that builds brand awareness, drives engagement, and grows your audience.",
    },
    {
      icon: <FaRocket className="text-orange-500 text-2xl hover:text-black" />,
       title: (
      <>Website Design & <br/> Development</>
      ),
      description:
        "We design and build responsive, user-friendly websites that reflect your brand, drive engagement, and support business growth.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fdf1e7] to-white pt-10 md:pt-16 lg:pt-24 text-center">
      <h1 className="px-8 text-3xl md:text-4xl lg:text-6xl font-bold text-black">
       India’s #1 Growth Partner
      </h1>
      <p className="px-7 mt-4 md:mt-6 text-lg md:text-lg lg:text-xl text-gray-700 font-normal">
        Searching for the <span className="font-extrabold text-lg font-sans text-[#4c4a47]">Best Digital Marketing Agency</span> to boost your online presence?
      </p>
      <p className="text-lg sm:text-xl mt-1 md:mt-2 text-[#f89e1b] font-bold">
        Digital Market Tap <span className="text-gray-700 font-normal text-lg md:text-lg lg:text-xl">is here.</span>
      </p>
       <img src={HomeBanner} alt="homeBanner" className="w-full"/>
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-5 md:px-15 lg:px-30 pt-10 pb-10 md:pb-20 lg:pb-30 gap-8 md:gap-0 text-center">
        <div className="block md:block lg:flex items-center gap-4 pb-0 md:pb-4 lg:pb-0">
          <div className="flex -space-x-6 justify-center">
            {[...Array(3)].map((_, i) => (
              <img
                key={i}
                src={avatar}
                alt={`Expert ${i + 1}`}
                className="w-13 h-13 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="relative group">
            <a href="./meet-the-team" className="inline-block text-black group-hover:text-black transition-colors duration-300 font-medium mt-2 md:mt-0 lg:mt-0">Let Our Experts Guide You<span className="text-xl">&#8594;</span><span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span> </a>
          </span>
        </div>
        <div className='block lg:flex'> 
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">12,0240</p>
          <p className="text-sm md:text-sm ml-1 md:ml-4 font-medium">
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
          <p className="text-md md:text-base font-medium text-black pt-0 md:pt-4 lg:pt-0">500+ Client reviews</p>
        </div>
          <img src={BorderBottom} alt="border-bottom-line" className="w-full absolute bottom-0 right-0 object-contain pb-6 px-5 md:px-10 lg:px-30"/>
      </div>


      <section className="w-full px-5 md:px-10 py-10 lg:px-30 lg:py-14">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-3 md:gap-6 items-start">
          <div>
            <h5 className="text-left text-sm font-bold tracking-widest text-gray-800 mb-4"> WHAT WE DO</h5>
            <h2 className="font-syne text-left text-2xl md:text-4xl lg:text-5xl font-bold">Turning Digital <br />Roadblocks Into Results</h2>
          </div>
        <div className="font-Kanit font-light text-gray-700 text-md space-y-4 text-justify md:px-6 lg:px-14 pt-2 md:pt-12">
            <h6> At Digital Market Tap, we work with businesses to grow by fixing the actual problems rather than keeping them stuck online. From establishing your presence in search engines to creating scroll-stopping social media campaigns, we concentrate on where actually moves the needle </h6>
            <a href="/about-us" className="inline-block text-sm font-semibold text-black border-b-2 border-indigo-600 hover:border-[#F89E1B] transition duration-200">MORE ABOUT US</a>
          </div>
        </div>
      </section>


      <section className="w-full px-5 md:px-6 py-10 md:py-15 lg:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2  lg:grid-cols-3 gap-6">
          <div className="text-left px-4 md:px-6 lg:px-8 py-10 border border-[#f1f1f1] rounded-[40px] bg-white">
            <div className="flex items-center gap-4 mb-6 justify-between">
              <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">Better <br/> audiences</h3>
              <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                <FaBullhorn className="text-orange-500 text-2xl" />
              </div>
            </div>
            <h6 className="text-[#5c5f61] font-light">We identify and target the right audience through data-driven strategies, ensuring your brand reaches people who matter most boosting engagement, relevance, and customer loyalty.</h6>
          </div>

          <div className="text-left px-4 md:px-6 lg:px-8 py-10 border border-[#f1f1f1] rounded-[40px] bg-white">
            <div className="flex items-center gap-4 mb-6 justify-between">
              <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">Better <br/> analytics</h3>
              <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                <FaChartLine className="text-orange-500 text-2xl" />
              </div>
            </div>
            <h6 className="text-[#5c5f61] font-light">We track, measure, and analyse key performance metrics, giving you clear insights into campaign performance and empowering smarter, faster marketing decisions.</h6>
          </div>

          <div className="text-left px-4 md:px-6 lg:px-8 py-10 border border-[#f1f1f1] rounded-[40px] bg-white">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">Better <br/> outcomes</h3>
              <div className="bg-[#f6f5f9] rounded-full w-16 h-16 flex items-center justify-center">
                <FaRupeeSign className="text-orange-500 text-2xl" />
              </div>
            </div>
            <h6 className="text-[#5c5f61] font-light">We combine strategy, creativity, and technology to drive real business results that give more leads, higher conversions, and measurable growth across all your digital marketing efforts</h6>
          </div>
        </div>
      </section>


      <section className="px-5 md:px-10 lg:px-30 pt-5">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden mb-8 md:mb-12">
          <img src={teamImage} alt="Team Collaboration" className="w-full h-[155px] md:h-[285px] lg:h-[520px] object-cover" />
        </div>

        <div className="max-w-2xl text-left px-0 md:px-5 lg:px-2">
          <p className="text-sm font-bold uppercase tracking-widest mb-5">
            Our Best Services
          </p>
          <h2 className="text-2xl md:text-5xl font-bold text-black mb-6 leading-tight"> Smart digital marketing Solutions centred on data and your audience</h2>
          <button className="group bg-black text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-[#f89e1b] transition duration-300 relative overflow-hidden"><span className="relative z-10"> View All Solutions<FaArrowRight className="inline ml-2 items-center"/><span className="block absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span></span></button>
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
            <h6 className="text-md font-light text-[#57595b] mb-12 text-left">{service.description}</h6>
        </div>

    <div className="text-left mt-auto">
       <a href="#" className="group inline-block text-xs font-semibold relative border-b-2 border-[#fbc371]">GET STARTED<span className="block absolute left-0 -bottom-.5 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span></a>
    </div>
       </div>
))}
    </div>
  </section>

{/* <MarketingTabs/> */}
   <SuccessStories />
      <BrandSlider />

  <section className="py-8 lg:py-20 px-5 md:px-10 lg:px-30 text-center">
      <p className="text-sm font-bold tracking-widest mb-2">BLOG</p>
    <div className="w-2 h-2 bg-black rounded-full my-6 mx-auto"></div>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 max-w-3xl mx-auto">
        Expand your knowledge with our expert advice.
      </h2>
      <div className="w-2 h-2 bg-black rounded-full my-6 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-[30px] overflow-hidden border-1 border-[#ededed] text-left">
            <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
            <div className="p-8 hover:bg-[#F1F3F6]">
              <p className="text-md text-[#666666] mb-2">{blog.date}</p>
              <h3 className="text-xl font-bold hover:text-[#8E81FA] ">{blog.title}</h3>
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
