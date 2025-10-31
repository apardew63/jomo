import React from "react";
import MainHeading from "../ui/MainHeading";
import Image from "next/image";
import line from "../../../../public/images/Line.png";
import { ArrowRight } from "lucide-react";

const PhilosophySection = ({ philosophyPoints }) => {
  return (
    <div className="bg-[#F5F5F5] relative" data-aos="fade-up">
      <div className="flex justify-center">
        <Image
          src={line}
          alt="decorative line"
          width={10}
          height={100}
          className="mx-auto"
        />
      </div>

      <section className="max-w-[1520px] mx-auto px-6 py-[60px] sm:py-[80px] text-center">
        <div className="text-center max-w-5xl mx-auto">
          <MainHeading
            line1="our approach"
            className="text-black text-[36px] max-sm:text-[40px] lg:text-[60px] font-ibmplex font-bold leading-[1.1] mb-6 sm:mb-8"
          />
          <p className="text-black text-[16px] sm:text-[18px] max-sm:text-[15px] lg:text-[20px] font-cutive leading-relaxed max-w-[95%] mx-auto">
            we investwith patience and conviction, targeting strong businesses
            trading below intrinsic value
          </p>
        </div>

        <div className="text-center flex justify-center mt-5">
          <ul className="space-y-5 max-sm:text-left mt-5">
            <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
              <ArrowRight size={22} className="text-black" />
              identified SMR in 2023 at $___, trading at ____as of September
              2025
            </li>

            <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
              <ArrowRight size={22} className="text-black" />
              identified SMR in 2023 at $___, trading at ____as of September
              2025
            </li>

            <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
              <ArrowRight size={22} className="text-black" />
              identified SMR in 2023 at $___, trading at ____as of September
              2025
            </li>
            <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
              <ArrowRight size={22} className="text-black" />
              identified SMR in 2023 at $___, trading at ____as of September
              2025
            </li>
          </ul>
        </div>

        {/* Philosophy Boxes */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {philosophyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[20px] border border-gray-200 hover:shadow-2xl transition-all duration-300 text-left"
            >
              <h4 className="text-[24px] lg:text-[28px] font-ibmplex mb-3 text-black capitalize">
                {point.title}
              </h4>
              <div className="w-[120px] h-[2px] bg-black mb-4" />
              <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default PhilosophySection;
