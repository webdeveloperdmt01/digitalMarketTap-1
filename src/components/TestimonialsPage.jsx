import { useState, useEffect } from "react";
import CountUp from "react-countup";
import avatar from "../assets/avatar.png";
import lineArrow from "../assets/Line-arrow-2.png";
import { FaArrowRight, FaArrowLeft ,FaArrowUp } from "react-icons/fa";

const testimonials = [
  {
    text: "Our website was slow and had SEO issues. Their quick fixes improved load speed and dropped our bounce rate by 30%. Highly effective work.",
    name: "Kareena Tanwar",
    role: "Ecommerce Business Owner",
  },
  {
    text: "Partnering with Digital Market Tap boosted our organic traffic by 60% in 3 months. Their SEO strategies and communication are simply excellent.",
    name: "Reshmi Sharma",
    role: "Founder, Weaves by Weavers",
  },
  {
    text: "Digital Market Tap’s SEO, Google Ads, and social media strategies grew my brand’s visibility and delivered high-quality leads within weeks.",
    name: "Muskan Sangwan",
    role: "Lifestyle Influencer",
  },
  {
    text: "Their tailored social media strategy helped us 4x our followers and significantly increase leads. The team truly understands platform-specific marketing.",
    name: "Manish Yadav",
    role: "Sales Director, FinEdge Solutions",
  },
];


const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setIndex((index + 1) % total);
  const prev = () => setIndex((index - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { text, name, role } = testimonials[index];

  return (
    <>
      <div className="px-0 md:px-10 lg:px-15 xl:px-30">
        <div className="rounded-t-[30px] md:rounded-t-[60px] pt-4 bg-[#FFF5EB]">
        <section className="pt-6 md:pt-16 rounded-t-[60px]">
          <h2 className="text-center md:text-left text-2xl md:text-4xl font-semibold mb-4  px-5 md:px-10 lg:px-15">
            The proof is in the numbers
          </h2>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pb-12 md:pb-20 px-5 md:px-10 lg:px-15">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full lg:w-2/3 text-center">
              {[
                {
                  value: 20,
                  suffix: "%",
                  label: "Average increase in sales for our clients",
                },
                {
                  value: 100,
                  suffix: "%",
                  label: "Google and Facebook-certified team",
                },
                {
                  value: 91,
                  suffix: "%",
                  label: "Results improved compared to previous agencies",
                },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative w-42 h-42 rounded-full border border-[#D7DEE6] flex items-center justify-center">
                    <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-2 border-[#f89e1b]">
                      <div className="text-3xl font-bold font-syne">
                        <CountUp end={stat.value} duration={2.5} />
                        {stat.suffix}
                      </div>
                      <FaArrowUp className="absolute bottom-3 text-[#f89e1b] text-xl" />

                    </div>
                  </div>
                  <p className="mt-2 md:mt-4 text-sm]] md:text-md font-medium text-black">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-orange-200 text-center px-4 py-10 md:px-6 md:py-12 rounded-[30px] md:rounded-[40px] lg:w-1/3 w-full">
              <h3 className="text-5xl font-bold mb-2 font-syne">
                <CountUp end={92000} duration={3} separator="," />+
              </h3>
              <p className="text-black font-semibold mb-6"> 
                Leads generated so far...
              </p>
              <a
                href="/contact-us"
                className="font-syne text-sm group relative inline-flex items-center gap-2 rounded-full bg-black px-6 py-2 text-white transition duration-300 hover:bg-[#f89e1b]"
              >
                CONTACT US <FaArrowRight />
                <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
              </a>
            </div>
          </div>
        {/* </section> */}
        {/* </div> */}

        <div className="bg-white rounded-t-[20px] md:rounded-t-[50px] overflow-hidden flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto  pt-5 md:pt-20 px-5 md:px-10 lg:px-10 pb-18 md:pb-24 relative gap-12">
          <div className="lg:w-1/2 w-full relative pt-5">
            <p className="text-xl md:text-2xl italic text-black leading-relaxed mb-6 text-left ">
              <span className="text-[#f89e1b] text-[60px] leading-none font-bold mr-2 font-mono">“</span>
              “{text}”
            </p>
            <div className="mb-6">
              <p className="text-left text-lg font-bold text-black">{name}</p>
              <p className="text-left font-semibold text-sm text-gray-500">{role}</p>
            </div>
            <div className="flex gap-4 text-[#f89e1b] text-xl">
              <button onClick={prev} className="hover:scale-110 transition-transform">
                <FaArrowLeft />
              </button>
              <button onClick={next} className="hover:scale-110 transition-transform">
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative flex flex-col items-start md:items-end">
            <img
              src={lineArrow}
              alt="Curved arrow"
              className="hidden lg:block absolute -top-12 right-16 lg:w-[280px] w-40 h-auto pointer-events-none"
            />
            <div className="block md:flex items-center gap-6 mt-0 md:mt-4 lg:mt-52 ml-5 lg:ml-20 mb-2">
              <div className="flex flex-col items-start md:items-center mb-6 md:mb-0">
                <div className="flex text-[#f89e1b] text-xl">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <p className="text-md font-semibold text-black mt-2">90+ Client reviews</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt={`Client ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <a
                  href="https://g.co/kgs/VtCEEcM"
                  className="inline-flex items-center text-sm font-medium text-black hover:text-[#f89e1b] group transition-all duration-300"
                >
                  <span className="font-syne font-semibold relative">
                    View all reviews
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#f89e1b] group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <FaArrowRight className="ml-1 text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
         </section>
         </div>
      </div>
    </>
  );
};

export default Testimonials;
