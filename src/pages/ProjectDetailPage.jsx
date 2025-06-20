import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../data/ProjectData";
import BorderBottomCenter from "../assets/border-center.png";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = ProjectData.find((item) => item.id === Number(id));
      setProject(result);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <div className="text-center text-xl py-10">Loading...</div>;
  if (!project) return <div className="text-center text-red-500 text-xl py-10">Project not found</div>;

  return (
    <main className="bg-gradient-to-b from-[#fdf1e7] to-white px-5 md:px-10 lg:px-30 relative">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center pt-16 pb-10">
        <div>
          <h3 className="uppercase text-sm font-bold tracking-widest text-black mb-4 md:mb-6 lg:mb-8">
            {project.brandName}
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mt-2 leading-tight">
            {project.growthRate}
          </h2>
          <h6 className="text-lg text-black mt-5 mb-10 font-light">
            {project.description}
          </h6>
        </div>
        <div className="flex lg:justify-end">
          <img
            src={project.brandImage}
            alt={`${project.brandName} Visual`}
            className="w-full md:w-full lg:w-[85%] h-[250px] md:h-[470px] object-cover rounded-[30px] md:rounded-[60px]"
          />
        </div>
      </div>

      <img
        src={BorderBottomCenter}
        alt="border-bottom-line"
        className="w-full object-contain pb-3 pt-2 md:pt-10 md:pb-24"
      />
      <div className="py-5">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <h3 className="text-2xl font-bold mb-4 text-left ">{project.aboutBrand}</h3>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-24">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
            <div className="flex lg:justify-end">
            <img
              src={project.challengePhoto}
              alt="Marketing Visual"
              className="w-full h-[250px] md:h-[440px] object-cover rounded-[30px] md:rounded-[60px]"
            />
          </div>
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-2 md:mb-6 lg:mb-8">
             {project.challengeHeading}
            </h3>
            <h6 className="text-sm lg:text-[16px] font-light text-[#545e5b] mt-2">
               {project.challengeDescription}
            </h6>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="bg-[#f7f7fa] rounded-[60px] p-6 text-black flex flex-col justify-between h-full">
  <h4 className="text-lg font-bold mb-2 text-center uppercase">Services Used:-</h4>
  <h6 className="text-center font-light">{project.servicesUsed}
  </h6>
</div>

      </div>  

     

    </main>
  );
};

export default ProjectDetailPage;
