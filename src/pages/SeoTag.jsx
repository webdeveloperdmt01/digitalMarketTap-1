import React from 'react';
import { useNavigate } from 'react-router-dom';
import ZaraImg from "../assets/ZaraImg.jpg";
import IkeaImg from "../assets/IkeaImg.jpg";
import LaprimaImg from "../assets/LaprimaImg.jpg";
import JolieImg from "../assets/JolieImg.jpg";
import NikoImg from "../assets/NikoImg.jpg";
import MarcPolImg from "../assets/MarcpolImg.jpg";
import KinImg from "../assets/KinImg.jpg";
import CosImg from "../assets/cosImg.jpg";

const blogsList = [
  { id: 1, brandName: "Zara", date: "May 15, 2025", image: ZaraImg },
  { id: 2, brandName: "IKEA", date: "May 15, 2025", image: IkeaImg },
  { id: 3, brandName: "LAPRIMA", date: "May 10, 2025", image: LaprimaImg },
  { id: 4, brandName: "Jolie", date: "May 10, 2025", image: JolieImg },
  { id: 5, brandName: "NIKO", date: "May 10, 2025", image: NikoImg },
  { id: 6, brandName: "MarcPol", date: "May 10, 2025", image: MarcPolImg },
  { id: 7, brandName: "KIN", date: "May 9, 2025", image: KinImg },
  { id: 8, brandName: "Cos", date: "May 9, 2025", image: CosImg },
];

const SeoTag = () => {
  const navigate = useNavigate();

  const openProjectDetail = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section className="bg-gradient-to-b from-[#fdf1e7] to-white py-8 lg:py-20 px-5 md:px-10 lg:px-30">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-6 md:mb-12 lg:mb-16">
        Tag: <span className="text-black">Paid Social</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {blogsList.map((blog) => (
          <div
            key={blog.id}
            className="bg-white dark:bg-[#2a2a2a] rounded-[50px] overflow-hidden border border-[#ededed] dark:border-[#333] text-left cursor-pointer"
            onClick={() => openProjectDetail(blog.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') openProjectDetail(blog.id);
            }}
          >
            <img src={blog.image} alt={blog.brandName} className="w-full h-60 object-cover" />
            <div className="p-8 hover:bg-[#F1F3F6] dark:hover:bg-[#333] transition-colors">
              <p className="text-sm font-semibold text-[#666666] dark:text-[#cccccc] mb-4 md:mb-6">{blog.date}</p>
              <h3 className="text-xl font-semibold leading-snug hover:text-[#8E81FA] text-black dark:text-white mb-2 md:mb-4">
                {blog.brandName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeoTag;
