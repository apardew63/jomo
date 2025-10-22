import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Portfolio from "./component/Portfolio";
import Insight from "./component/Insight";
import FirmOverview from "./component/FirmOverview";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <Insight />
      <FirmOverview />
      <Footer />
    </div>
  );
}
