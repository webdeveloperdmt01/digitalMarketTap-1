import React from "react";
import { Link } from "react-router-dom";
import CommingSoonPic from "../assets/cm-2.png";

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#fff7ee] to-[#FFFFFF] text-[#f89e1b] px-5 py-10 min-h-screen">

      <img
        src={CommingSoonPic}
        alt="Coming Soon"
        className="w-full md:w-1/2 mb-10 animate-fadeIn"
        style={{ animationDuration: "1.5s", animationFillMode: "forwards" }}
      />

      <h1
        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-wide animate-fadeIn"
        style={{ animationDelay: "0.5s" }}
      >
        Coming Soon....
      </h1>

      <p
        className="text-xl md:text-2xl mb-12 max-w-xl text-center font-light leading-relaxed animate-fadeIn"
        style={{ animationDelay: "1s" }}
      >
        We're working hard behind the scenes to launch something amazing. Stay
        tuned for updates!
      </p>

      <div className="pb-18">
        <Link
          to="/"
          className="px-10 md:px-12 py-3 md:py-4 bg-[#f89e1b] text-white font-semibold rounded-full shadow-xl hover:bg-[#e07a14] focus:outline-none focus:ring-4 focus:ring-[#f89e1b] transition transform hover:scale-105 animate-fadeIn tracking-wide uppercase"
          style={{ animationDelay: "1.5s" }}
        >
          Go to Home Page
        </Link>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        } 
        .animate-fadeIn {
          opacity: 0;
          animation-name: fadeIn;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
