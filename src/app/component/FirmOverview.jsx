import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import insight from "../../../public/images/insight.png";
import line2 from "../../../public/images/Line3.png";

const FirmOverview = () => {
  return (
    <div className="relative bg-[#F5F5F5]">
      <section className="max-w-[1520px] mx-auto px-6 py-[60px] sm:py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-12">
          {/* Left Column (Text) */}
          <div className="w-full text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-[60px] max-sm:text-[50px] font-bold leading-tight text-black font-ibmplex max-sm:text-left">
              firm overview
            </h1>

            <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed mx-auto lg:mx-0 max-sm:text-left">
              Founded by professionals with backgrounds in asset management and
              fundamental research, jomo investments operate with the singular
              goal of compounding capital through uncommon insight and
              behavioral discipline. we maintain an independent research process
              and a deep appreciation for risk asymmetry.
            </p>

            <div className="mt-6 sm:mt-8 max-sm:text-left">
              <button className="bg-black text-white px-6 py-2.5 font-ibmplex text-[16px] sm:text-[18px] rounded-[10px] border border-transparent hover:bg-white hover:text-black hover:border-black transition-all duration-300">
                info@jomoinvestments.com
              </button>
            </div>
          </div>

          {/* Right Column (Chart) */}
          <div className="w-full flex justify-start items-start lg:mt-0" data-aos="fade-left">
            <div>
              <h4 className="text-black font-ibmplex text-[25px] mb-4">
                core beliefs:
              </h4>

              <ul className="space-y-6">
                <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
                  <ArrowRight size={22} className="text-black" />
                  “on being early: patience as alpha”
                </li>

                <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
                  <ArrowRight size={22} className="text-black" />
                  “Opportunity lies at the intersection of mispricing and conviction.”
                </li>

                <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
                  <ArrowRight size={22} className="text-black" />
                  “Noise is constant. judgment is rare. we invest in the latter.”
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirmOverview;
