import Image from "next/image";
import React from "react";
import user1 from "../../../public/images/user1.png";
import user2 from "../../../public/images/user2.png";
import user3 from "../../../public/images/user3.png";
import user4 from "../../../public/images/user4.png";
import user5 from "../../../public/images/user5.png";
import user6 from "../../../public/images/user6.png";
import Footer from "../component/Footer";

const Page = () => {
  const teamMembers = [
    {
      name: "adil anwar",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: user1,
    },
    {
      name: "abeer muhammad",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      image: user2,
    },
    {
      name: "ashir",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      image: user3,
    },
    {
      name: "fizza nadeem siddiqui",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      image: user4,
    },
    {
      name: "murtaza nazir tunio",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
      image: user2,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-[90px] max-w-[1660px] flex items-center justify-center px-6 mx-auto"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-5xl text-center">
            <h1 className="text-[40px] sm:text-[50px] max-sm:text-[40px] lg:text-[60px] font-bold leading-tight text-black font-ibmplex mb-6">
              firm overview
            </h1>
            <p className="text-black text-[16px] sm:text-[18px] max-sm:text-[15px] lg:text-[20px] font-cutive leading-relaxed max-w-[100%] max-sm:max-w-[100%] mx-auto">
              founded by professionals with backgrounds in asset management and
              fundamental research, jomo investments operatewith the singular
              goal of compounding capital through uncommon insight and
              behavioral discipline. we maintain an independent research process
              and a deep appreciation for risk asymmetry.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 max-sm:text-left text-center">
            <button className="bg-black text-white px-6 py-2.5 font-ibmplex text-[16px] sm:text-[18px] rounded-[10px] border border-transparent hover:bg-white hover:text-black hover:border-black transition-all duration-300">
              info@jomoinvestments.com
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#F5F5F5] py-[60px]" data-aos="fade-up">
        <div className="max-w-[1660px] mx-auto px-6 flex flex-col items-center justify-center">
          {/* First row: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full mb-[80px]">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-4 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    width={350}
                    height={350}
                    alt={member.name}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="bg-white max-w-[280px] mx-auto p-4 -mt-10 relative z-10 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-[22px] lg:text-[24px] font-ibmplex text-black">
                    {member.name}
                  </h4>
                  <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed mt-2">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row: 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full justify-center items-center">
            {teamMembers.slice(4).map((member, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-4 transition-all duration-300 justify-center"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    width={350}
                    height={350}
                    alt={member.name}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="bg-white max-w-[280px] mx-auto p-4 -mt-10 relative z-10 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-[22px] lg:text-[24px] font-ibmplex text-black">
                    {member.name}
                  </h4>
                  <p className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-cutive leading-relaxed mt-2">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
