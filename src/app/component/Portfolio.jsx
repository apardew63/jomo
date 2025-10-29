import React from "react";
import MainHeading from "./ui/MainHeading";
import Chart from "./Chart";
import Image from "next/image";
import line from "../../../public/images/Line.png";

const Portfolio = () => {
  return (
    <div className="bg-[#F5F5F5] relative">
      {/* Centered line image */}
      <div className="flex justify-center">
        <Image
          src={line}
          alt="decorative line"
          width={10}
          height={100}
          className="mx-auto"
        />
      </div>

      <section className="max-w-[1520px] mx-auto px-6 py-[60px] sm:py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-12">
          {/* Left Column (Text) */}
          <div className="w-full text-center lg:text-left" data-aos="fade-right">
            <MainHeading
              line1="our portfolio"
              line2="performance"
              className="text-black text-[50px] max-sm:text-[40px] lg:text-[60px] font-ibmplex font-bold leading-[1.1] mb-6 sm:mb-8 max-sm:text-left"
            />

            <p className="text-black text-[16px] max-sm:text-[15px] max-sm:text-left lg:text-[20px] font-cutive leading-relaxed max-w-[95%] mx-auto lg:mx-0">
              jomo investments is a contrarian investment firm focused on
              identifying fundamentally strong yet overlooked opportunities.
              with a long-term, high-conviction approach.
            </p>

            <div className="mt-6 sm:mt-8 max-sm:text-left">
              <button className="bg-black text-white px-6 py-2.5 font-ibmplex text-[16px] sm:text-[18px] rounded-[10px] border border-transparent hover:bg-white hover:text-black hover:border-black transition-all duration-300">
                explore more
              </button>
            </div>
          </div>

          {/* Right Column (Chart) */}
          <div className="w-full flex justify-center mt-10 lg:mt-0" data-aos="fade-left">
            <Chart />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
