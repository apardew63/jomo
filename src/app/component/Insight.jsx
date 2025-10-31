import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import insight from "../../../public/images/insight.png";
import line2 from "../../../public/images/Line3.png";

const Insight = () => {
  return (
    <div className="relative">
      <section className="max-w-[1520px] mx-auto px-6 py-[60px] sm:py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] items-center gap-12 max-sm:text-left">
          {/* Left Column (Text) */}
          <div
            className="w-full text-center lg:text-left"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-center gap-4 mb-5">
              <Image src={line2} alt="decorative line" />
              <div>
                <h1 className="text-[60px] font-bold leading-tight text-black font-ibmplex max-sm:text-left max-sm:text-[40px]">
                  insight & research
                </h1>
                <p className="text-black text-[20px] max-sm:text-[15px] lg:text-[20px] font-cutive leading-relaxed max-sm:text-left mx-auto lg:mx-0">
                  provide investors with a view into our thinking, process, and
                  case studies —reinforcing our research-driven and long-term
                  orientation.
                </p>
              </div>
            </div>

            {/* <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed max-w-[100%] mx-auto lg:mx-0">
              to provide investors with a view into our thinking, process, and
              case studies — reinforcing our research-driven and long-term
              orientation.
            </p> */}

            <div>
              <h4 className="text-black font-ibmplex text-[25px] mb-4 max-sm:text-left">
                our latest blogs
              </h4>

              <ul className="space-y-3 max-sm:text-left">
                <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
                  <ArrowRight size={22} className="text-black" />
                  “on being early: patience as alpha”
                </li>

                <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
                  <ArrowRight size={22} className="text-black" />
                  “under the radar: when valuation and obscurity intersect”
                </li>

                <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
                  <ArrowRight size={22} className="text-black" />
                  “the false safety of consensus”
                </li>
                <li className="flex items-center gap-3 text-[18px] text-black font-cutive">
                  <ArrowRight size={22} className="text-black" />
                  “why size inefficiency is our edge”
                </li>
              </ul>
            </div>

            {/* <div className="mt-6 sm:mt-8">
              <p className="text-black max-sm:text-left text-[20px] max-sm:text-[15px] lg:text-[20px] font-cutive leading-relaxed max-w-[95%] mx-auto lg:mx-0">
                each article should be written in a memo-like tone: serious,
                data-informed, and focused on decision-making rationale — not
                market commentary.
              </p>
            </div> */}
          </div>

          {/* Right Column (Chart) */}
          <div
            className="w-full flex justify-center mt-10 lg:mt-0"
            data-aos="fade-left"
          >
            <Image src={insight} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insight;
