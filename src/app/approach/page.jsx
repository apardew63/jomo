import React from "react";
import MainHeading from "../component/ui/MainHeading";
import Chart from "../component/Chart";
import Image from "next/image";
import line from "../../../public/images/Line.png";

const Page = () => {
  const boxes = [
    {
      title: "contrarian insight",
      desc: "we look for chances others miss — places where the story, not the facts, has pushed value out of sight.",
    },
    {
      title: "long-term focus",
      desc: "we prioritize durable value creation over short-term volatility, staying patient when others are reactive.",
    },
    {
      title: "research discipline",
      desc: "our process is rooted in rigorous, independent analysis — not market noise or consensus opinions.",
    },
    {
      title: "value conviction",
      desc: "we invest with conviction when we find mispriced value, guided by deep understanding and discipline.",
    },
  ];

  return (
    <>
      <div className="py-[150px] flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold leading-tight text-black font-ibmplex mb-6">
            Our Investment Philosophy
          </h1>
          <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed">
            At Jomo Investments, we invest with patience and conviction,
            targeting strong businesses trading below intrinsic value.
          </p>
        </div>
      </div>

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

        <section className="max-w-[1520px] mx-auto px-6 py-[60px] sm:py-[80px] text-center">
          <div className="text-center max-w-5xl mx-auto">
            <MainHeading
              line1="our approach"
              line2=""
              className="text-black text-[36px] sm:text-[48px] lg:text-[60px] font-ibmplex font-bold leading-[1.1] mb-6 sm:mb-8"
            />
            <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed max-w-[95%] mx-auto lg:mx-0">
              we believe markets are often mispriced — not due to a lack of
              information, but due to behavioral inefficiencies. our mandate is
              to identify assets that are fundamentally undervalued,
              underfollowed, or temporarily out of favor, and to capitalize on
              those mispricings through rigorous research and disciplined
              capital allocation.
            </p>
          </div>

          {/* 4 Boxes Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[20px] hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between text-left"
              >
                <h4 className="text-[24px] lg:text-[28px] font-ibmplex mb-3 text-black">
                  {box.title}
                </h4>
                <hr className="w-[150px] mb-3 border-black" />
                <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
