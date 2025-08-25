import React, { useEffect, useRef, useState } from "react";
import BigBlueCup from "../assets/bigBlueCup.jpg";
import award1 from "../assets/winnerAward1.png";
import award2 from "../assets/winnerAward2.png";
import award3 from "../assets/winnerAward3.png";
import award4 from "../assets/winnerAward4.png";
import award5 from "../assets/winnerAward5.png";
import award6 from "../assets/winnerAward6.png";
import googlePartner from "../assets/google-partner-1.png";
import Rocket1 from "../assets/rocket.png";

function Awards() {
  const awards = [
    {
      year: "2023",
      title: "Best Digital Marketing Agency",
      subtitle: "Recognized for Outstanding Digital Media & Advertising",
      image: award1,
    },
    {
      year: "2022",
      title: "Digital BIMA Awards",
      subtitle: "Excellence in Digital Marketing & Advertising",
      image: award2,
    },
    {
      year: "2022",
      title: "RAR Digital Awards",
      subtitle: "Top Rated for Client Feedback & Performance",
      image: award3,
    },
    {
      year: "2021",
      title: "Clutch Top B2B Company",
      subtitle: "Leader in Digital Media and Advertising",
      image: award4,
    },
    {
      year: "2021",
      title: "UpCity Best of Marketing & Advertising",
      subtitle: "Trusted Agency for Growth-Focused Strategies",
      image: award5,
    },
    {
      year: "2020",
      title: "UpCity Top Ad Agency",
      subtitle: "Recognized for Client Success in Digital Marketing",
      image: award6,
    },
  ];


  const itemRefs = useRef([]);
  const [dotPosition, setDotPosition] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let animationFrameId = null;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        const viewportCenter = window.scrollY + window.innerHeight / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;
        itemRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const itemCenter = rect.top + window.scrollY + rect.height / 2;
            const distance = Math.abs(viewportCenter - itemCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          }
        });

        const ref = itemRefs.current[closestIndex];
        if (ref) {
          const parentTop =
            ref.parentElement.getBoundingClientRect().top + window.scrollY;
          const itemTop = ref.getBoundingClientRect().top + window.scrollY;
          const relativeTop = itemTop - parentTop + ref.offsetHeight / 2;
          setDotPosition(relativeTop);
        }

        animationFrameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="!bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] px-5 md:px-10 lg:px-15 xl:px-30">
      <div className="pt-4 md:pt-8 lg:pt-12 pb-4">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
          <div>
            <h5 className="text-sm md:text-base font-semibold text-black pt-4 md:pt-6">
              Awards
            </h5>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-3 md:pt-8 leading-tight">
              Award-winning <br />
              digital marketing
            </h1>
            <h6 className="text-md lg:text-lg font-light pt-4 md:pt-8 pb-6 md:pb-8 text-gray-500">
              We are delighted to announce that our dedication to providing the
              best digital marketing services has garnered us a prestigious
              award as well as a nomination. This acknowledgement of our efforts
              speaks volumes about our commitment, creativity, and continuous
              endeavor to ensure our clients achieve success and experience
              significant growth through effective marketing strategies.
            </h6>
          </div>
          <div className="flex lg:justify-end">
            <img
              src={BigBlueCup}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
        </div>
      </div>

      <div className="relative px-4 md:px-8 lg:px-24 py-16 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
            {awards.map((award, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className="bg-[#f7f7fa] px-6 py-8 rounded-[30px] flex items-center justify-center"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-[160px] md:w-[180px] lg:w-[200px] h-[160px] md:h-[180px] object-contain mx-auto"
                />
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-col items-center relative">
            <div className="w-0.5 h-full border-l-2 border-dashed border-gray-400 relative">
              <div
                className="w-5 h-5 bg-[#6C52F6] rounded-full shadow-md absolute left-1/2 transform -translate-x-1/2 transition-[top] duration-300 ease-out"
                style={{ top: `${dotPosition}px` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 justify-around">
            {awards.map((award, i) => (
              <div key={i}>
                <p className="text-sm text-gray-500">{award.year}</p>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black leading-tight">
                  {award.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 pt-1">
                  {award.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="font-syne bg-[#ebebf4] mb-20 px-2 md:px-4 lg:px-6 pt-6 md:pt-10 lg:pt-16 pb-10 md:pb-11 lg:pb-22 rounded-[35px] md:rounded-[55px] max-w-8xl mx-auto text-center">
        <div className="mb-6 relative">
          <img
            src={Rocket1}
            alt="Rocket"
            className="absolute right-2 md:right-14 -rotate-24 top-[-60px] md:top-[-80px] lg:top-[-120px] w-12 md:w-18 lg:w-28"
          />
          <img
            src={googlePartner}
            alt="Google Partner"
            className="mx-auto mb-4 w-40"
          />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 pb-5 md:pb-18 lg:pb-28">
            Start driving SEO results with <br />
            <span className="text-black">Digital Market Tap</span>
          </h1>
        </div>

        <h2 className="text-xl md:text-4xl font-semibold text-gray-800 mb-2">
          Pricing Plans
        </h2>
        <p className="text-md text-gray-500 mb-8">
          Choose the perfect plan for your needs
        </p>
        <div className="bg-[#ededf0] rounded-lg px-6 py-4 shadow-md mb-6">
          <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
            <span>Basic</span>
            <span>Premium</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full h-2 rounded-lg cursor-pointer appearance-none bg-[#e0e0e0]"
            style={{
              background: `linear-gradient(to right, #f89e1b 0%, #facc15 ${price}%, #e0e0e0 ${price}%, #e0e0e0 100%)`,
              accentColor: "black",
            }}
          />
          <div className="text-right text-xs text-gray-500 mt-1">{price}</div>
        </div>
        <div className="text-5xl font-bold text-[#f89e1b] mb-6">
          ₹{Number(price).toFixed(2)}{" "}
          <span className="text-gray-500 text-2xl font-medium">/month</span>
        </div>
        <ul className="text-left mb-6 space-y-2 px-2 md:px-0">
          {[
            { label: "Basic Feature", included: price >= 1 },
            { label: "Advanced Feature", included: price >= 35 },
            { label: "Premium Feature", included: price >= 75 },
          ].map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              {feature.included ? (
                <p className="!text-[#f89e1b] font-bold">✔</p>
              ) : (
                <p className="text-gray-500 font-bold">✖</p>
              )}
              <span
                className={feature.included ? "text-black" : "text-gray-500"}
              >
                {feature.label}
              </span>
            </li>
          ))}
        </ul>

        <button className="bg-black text-white px-6 py-2 md:px-8 md::py-3 rounded-[5px] font-semibold hover:bg-[#f89e1b] transition">
          Choose Plan
        </button>
      </div>
    </main>
  );
}

export default Awards;
