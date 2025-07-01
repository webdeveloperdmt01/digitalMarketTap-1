import React, { useState } from "react";
import Snipet1 from "../assets/educationalwbsitePreviewSnipet.png";
import Snipet2 from "../assets/educationalwbsitePreviewSnipet2.png";

const EducationalWebsite = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = (image) => {
    setActiveImage(image);
    setIsPaused(false);
  };

  const handlePopupLeave = () => {
    setActiveImage(null);
    setIsPaused(false);
  };

  const handleImageEnter = () => {
    setIsPaused(true);
  };

  const handleImageLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="py-28 flex flex-col justify-center items-center gap-10">
      <div className="block md:flex justify-center items-center gap-10">
        {[Snipet1, Snipet2].map((img, index) => (
          <div
            key={index}
            className="w-70 md:w-85 lg:w-110 xl:w-154 h-124 overflow-hidden border-2 border-[#F89E1B] cursor-pointer rounded-xl mb-2"
            onMouseEnter={() => handleMouseEnter(img)}
          >
            <img
              src={img}
              alt={`Snippet ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center"
          onMouseLeave={handlePopupLeave}
        >
          <div className="relative w-[800px] h-[650px] bg-white rounded-xl overflow-hidden border-2 border-[#8e81fa]">
            <div className="w-[800px] h-[650px] overflow-hidden relative">
              <img
                src={activeImage}
                alt="Popup"
                onMouseEnter={handleImageEnter}
                onMouseLeave={handleImageLeave}
                className={`w-full absolute ${
                  isPaused ? "" : "animate-scroll-y"
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationalWebsite;
