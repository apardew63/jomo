import React from "react";
import MainHeading from "./ui/MainHeading";
import Image from "next/image";
import heroBg from "../../../public/images/herobg.png";

const Hero = () => {
  return (
    <section className="max-w-[1520px] mx-auto px-6 py-[220px] items-center justify-between">
      {/* Heading */}
      <MainHeading
        line1="our portfolio"
        line2="performance"
        className="text-black text-[60px] font-ibmplex text-left font-bold leading-[1.1]"
      />

      <div className="flex flex-col lg:flex-row">
        {/* Left column – text */}
        <div className="w-full lg:w-[60%] flex items-center">
          <p className="text-black text-[20px] font-cutive leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>

        {/* Right column – image */}
        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <Image
            src={heroBg}
            alt="hero bg"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
