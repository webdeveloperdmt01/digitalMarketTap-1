import { useState, useEffect } from "react";
import CountUp from "react-countup";
import avatar from "../assets/avatar.png";
import lineArrow from "../assets/Line-arrow-2.png";
import { FaArrowRight, FaArrowLeft ,FaArrowUp } from "react-icons/fa";

const testimonials = [
  {
    text: "The entire staff at DMT has been phenomenal. They are quick with their replies and incredibly helpful.",
    name: "Edward Kennedy",
    role: "Director, Client Experience",
  },
  {
    text: "DMT exceeded our expectations in every way. Outstanding service and attention to detail.",
    name: "Sarah Lopez",
    role: "Marketing Lead, BrightCorp",
  },
  {
    text: "They turned our vision into reality with speed and professionalism. Highly recommended.",
    name: "James Carter",
    role: "CEO, InnovateX",
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
      <div className="bg-orange-50">
        <section className="py-6 md:py-16 rounded-t-[60px] px-5 md:px-10 lg:px-20 mb-2 md:mb-16">
          <h2 className="text-left text-xl md:text-3xl font-semibold mb-4">
            The proof is in the numbers
          </h2>
          <div className="max-w-7xl mx-auto px-0 md:px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full lg:w-2/3 text-center">
              {[
                {
                  value: 37,
                  suffix: "%",
                  label: "Average increase in sales for our clients",
                },
                {
                  value: 100,
                  suffix: "%",
                  label: "Google and Facebook-certified team",
                },
                {
                  value: 81,
                  suffix: "%",
                  label: "Results improved compared to previous agencies",
                },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative w-42 h-42 rounded-full border border-[#D7DEE6] flex items-center justify-center">
                    <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-2 border-orange-300">
                      <div className="text-3xl font-bold">
                        <CountUp end={stat.value} duration={2.5} />
                        {stat.suffix}
                      </div>
                      <FaArrowUp className="absolute bottom-3 text-orange-500 text-xl" />

                    </div>
                  </div>
                  <p className="mt-2 md:mt-4 text-md md:text-lg font-medium text-black">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-orange-200 text-center px-10 py-10 md:px-20 md:py-15 rounded-[40px] lg:w-1/3 w-full">
              <h3 className="text-4xl font-bold mb-2">
                <CountUp end={282000} duration={3} separator="," />+
              </h3>
              <p className="text-black font-semibold mb-6">
                Leads generated so far...
              </p>
              <a
                href="/contact"
                className="text-sm group relative inline-flex items-center gap-2 rounded-full bg-black px-6 py-2 text-white transition duration-300 hover:bg-orange-400"
              >
                CONTACT US <FaArrowRight />
                <span className="absolute bottom-1.5 left-6 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]"></span>
              </a>
            </div>
          </div>
        </section>

        <div className="bg-white rounded-t-[40px] overflow-hidden flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto mt-10 pt-5 md:pt-20 px-5 md:px-10 lg:px-10 pb-5 md:pb-15 relative gap-12">
          <div className="lg:w-1/2 w-full relative pt-5">
            <div className="flex items-center mb-4">
              <span className="text-orange-500 text-[60px] leading-none font-bold mr-2 font-sans">“</span>
            </div>
            <p className="text-xl md:text-2xl italic text-black leading-relaxed mb-6">
              “{text}”
            </p>
            <div className="mb-6">
              <p className="text-left text-lg font-bold text-black">{name}</p>
              <p className="text-left font-semibold text-sm text-gray-500">{role}</p>
            </div>
            <div className="flex gap-4 text-orange-500 text-xl">
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
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="flex text-yellow-500 text-xl">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-black mt-2">5000+ Client reviews</p>
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
                  href="/testimonials"
                  className="inline-flex items-center text-sm font-medium text-black hover:text-orange-500 group transition-all duration-300"
                >
                  <span className="relative">
                    View all reviews
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <FaArrowRight className="ml-1 text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
