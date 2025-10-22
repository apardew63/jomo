import React from "react";
import Footer from "../component/Footer";
import HeroSection from "../component/approach/HeroSection";
import PhilosophySection from "../component/approach/PhilosophySection";
import ResearchSection from "../component/approach/ResearchSection";
import RiskSection from "../component/approach/RiskSection";
import CallToAction from "../component/approach/CallToAction";

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
    <div className="">
      <HeroSection />
      <PhilosophySection philosophyPoints={philosophyPoints} />
      <ResearchSection researchSteps={researchSteps} />
      <RiskSection upside={upside} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Page;
