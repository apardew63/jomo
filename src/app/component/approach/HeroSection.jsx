import React from "react";

const HeroSection = () => {
  return (
    <section
      className="py-[150px] flex items-center justify-center px-6"
      data-aos="fade-up"
    >
      <div className="max-w-5xl text-center">
        <h1 className="text-[40px] max-sm:text-[50px] lg:text-[60px] font-bold leading-tight text-black font-ibmplex mb-6">
          Our Investment Philosophy
        </h1>
        <p className="text-black text-[16px] max-sm:text-[15px] lg:text-[20px] font-cutive leading-relaxed">
          provide investors with a view into our thinking, process, and case
          studies —reinforcing our research-driven and long-term orientation.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
