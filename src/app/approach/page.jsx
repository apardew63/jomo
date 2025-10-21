import React from "react";
import MainHeading from "../component/ui/MainHeading";
import Image from "next/image";
import line from "../../../public/images/Line.png";
import Footer from "../component/Footer";

const Page = () => {
  const philosophyPoints = [
    {
      title: "Contrarian Insight",
      desc: "We seek opportunities others overlook — where perception, not reality, has distorted value.",
    },
    {
      title: "Long-Term Focus",
      desc: "We focus on enduring value creation over short-term noise, staying patient when others are reactive.",
    },
    {
      title: "Research Discipline",
      desc: "Our process is grounded in deep, independent analysis — not consensus or market sentiment.",
    },
    {
      title: "Value Conviction",
      desc: "We act decisively when we find genuine mispricing, backed by discipline and understanding.",
    },
  ];

  const researchSteps = [
    {
      title: "Market Screening",
      desc: "Identifying sectors and businesses that are undervalued, underfollowed, or misunderstood.",
    },
    {
      title: "Fundamental Research",
      desc: "Conducting in-depth analysis of business models, management quality, and financial sustainability.",
    },
    {
      title: "Valuation Assessment",
      desc: "Estimating intrinsic value through disciplined financial modeling and comparative analysis.",
    },
    {
      title: "Portfolio Construction",
      desc: "Allocating capital selectively based on conviction, diversification, and long-term upside.",
    },
    {
      title: "Portfolio Construction",
      desc: "Allocating capital selectively based on conviction, diversification, and long-term upside.",
    },
  ];

  const upside = [
    {
      title: "Margin of Safety",
      desc: "Investing only where intrinsic value offers a significant buffer against downside risk.",
    },
    {
      title: "Scenario Testing",
      desc: "Every investment thesis is challenged through stress tests and alternative outcomes to ensure durability.",
    },
    {
      title: "Concentrated but Resilient",
      desc: "Position sizes are carefully structured to withstand volatility while maximizing asymmetric payoffs.",
    },
    {
      title: "Long-Term Resilience",
      desc: "We accept short-term noise, but avoid permanent capital impairment.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
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

      {/* Approach Section */}
      <div className="bg-[#F5F5F5] relative">
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
              className="text-black text-[36px] sm:text-[48px] lg:text-[60px] font-ibmplex font-bold leading-[1.1] mb-6 sm:mb-8"
            />
            <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed max-w-[95%] mx-auto">
              We believe markets are often mispriced — not from lack of
              information, but from human behavior. Our goal is to uncover
              fundamentally undervalued opportunities through deep research and
              disciplined capital allocation.
            </p>
          </div>

          {/* Philosophy Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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
          </div>
        </section>
      </div>
      {/* Research Process Section */}
      <section className="max-w-[1520px] mx-auto px-6 py-[60px] sm:py-[80px] text-center bg-white">
        <div className="flex flex-col justify-center items-center">
          <MainHeading
            line1="research & idea generation process"
            className="text-black text-[36px] sm:text-[48px] lg:text-[60px] font-ibmplex font-bold leading-[1.1] mb-6 sm:mb-8"
          />
          <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed max-w-[70%] mx-auto">
            Our framework transforms insight into conviction — structured,
            disciplined, and repeatable.
          </p>

          {/* Research Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-[60px]">
            {researchSteps.map((step, index) => (
              <div
                key={index}
                className="rounded-[16px] border border-dashed border-black overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-black py-4 px-1">
                  <h4 className="text-[22px] lg:text-[25px] font-ibmplex text-white">
                    {step.title}
                  </h4>
                </div>
                <div className="p-2">
                  <p className="text-black text-[14px] sm:text-[16px] lg:text-[18px] font-cutive leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] mx-auto px-6 py-[80px] sm:py-[180px] text-center">
        <div className="flex flex-col justify-center items-center max-w-[1520px] mx-auto">
          {/* Heading */}
          <MainHeading
            line1="Protecting downside,"
            line2="unlocking upside."
            className="text-black text-[36px] sm:text-[48px] lg:text-[60px] font-ibmplex font-bold leading-[1.1] mb-6 sm:mb-8"
          />

          {/* Intro paragraph */}
          <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed  mx-auto mb-[50px]">
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
      <div className="bg-white max-w-[1260px] rounded-[20px] p-4 absolute top-[2970px] left-[400px] z-10">
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
      <Footer />
    </>
  );
};

export default Page;
