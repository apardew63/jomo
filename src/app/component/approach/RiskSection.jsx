import React from "react";
import MainHeading from "../ui/MainHeading";

const RiskSection = ({ upside }) => {
  return (
    <section className="bg-[#F5F5F5] mx-auto px-6 py-[60px] sm:py-[60px] text-center" data-aos="fade-up">
      <div className="flex flex-col justify-center items-center max-w-[1660px] mx-auto">
        {/* Heading */}
        <MainHeading
          line1="Protecting downside,"
          line2="unlocking upside."
          className="text-black text-[36px] sm:text-[48px] lg:text-[60px] font-ibmplex font-bold leading-[1.1] mb-6 sm:mb-8"
        />

        {/* Intro paragraph */}
        <p className="text-black text-[16px] sm:text-[18px] max-sm:text-[15px] lg:text-[20px] font-cutive leading-relaxed  mx-auto mb-[50px]">
          Risk management is at the core of every decision. We believe that
          capital preservation is the foundation of compounding. Our approach
          emphasizes:
        </p>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mb-[50px]">
          {upside.map((step, index) => (
            <div
              key={index}
              className="rounded-[16px] border border-black bg-white p-6 hover:shadow-lg transition-all duration-300 text-left"
            >
              <h4 className="text-[20px] lg:text-[22px] font-ibmplex text-black mb-3">
                {step.title}
              </h4>
              <p className="text-black text-[14px] sm:text-[16px] lg:text-[18px] font-cutive leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing paragraph */}
        <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed mx-auto">
          By focusing on resilience first, we position ourselves to capture
          long-term upside without compromising on stability.
        </p>
      </div>
    </section>
  );
};

export default RiskSection;