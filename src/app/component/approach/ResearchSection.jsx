import React from "react";
import MainHeading from "../ui/MainHeading";

const ResearchSection = ({ researchSteps }) => {
  return (
    <section className="max-w-[1520px] mx-auto px-6 py-[60px] sm:py-[80px] text-center bg-white">
      <div className="flex flex-col justify-center items-center">
        <MainHeading
          line1="research & idea generation process"
          className="text-black text-[36px] sm:text-[48px] lg:text-[60px] font-ibmplex font-bold leading-[1.1] mb-6 sm:mb-8"
        />
        <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed max-w-[70%] mx-auto">
          Our framework transforms insight into conviction — structured,
          disciplined, and repeatable.
        </p>

        {/* Research Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-[60px]">
          {researchSteps.map((step, index) => (
            <div
              key={index}
              className="rounded-[16px] border border-dashed border-black overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-black py-4 px-1">
                <h4 className="text-[22px] lg:text-[25px] font-ibmplex text-white">
                  {step.title}
                </h4>
              </div>
              <div className="p-2">
                <p className="text-black text-[14px] sm:text-[16px] lg:text-[18px] font-cutive leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;