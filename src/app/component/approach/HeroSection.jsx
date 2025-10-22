import React from "react";

const HeroSection = () => {
  return (
    <section className="py-[150px] flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold leading-tight text-black font-ibmplex mb-6">
          Our Investment Philosophy
        </h1>
        <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed">
          At Jomo Investments, we invest with patience and conviction —
          focusing on strong businesses trading below their intrinsic value.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;