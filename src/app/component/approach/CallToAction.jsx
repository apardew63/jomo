import React from "react";
import MainHeading from "../ui/MainHeading";

const CallToAction = () => {
  return (
    <div className="bg-white max-sm:hidden max-w-[calc(100vw-2rem)] md:max-w-[1260px] rounded-[20px] p-4 absolute top-[2970px] left-4 md:left-[400px] z-10">
      <div className="flex flex-row justify-between gap-30">
        <div>
          <MainHeading
            line1="Investing with patience,"
            line2="discipline, and conviction."
            className="text-black text-[36px] sm:text-[48px] lg:text-[50px] font-ibmplex font-bold leading-[1.1]"
          />
        </div>
        <div className="mt-[60px]">
          <button className="bg-black text-white px-6 py-2.5 font-ibmplex text-[16px] sm:text-[18px] rounded-[10px] border border-transparent hover:bg-white hover:text-black hover:border-black transition-all duration-300">
            explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;