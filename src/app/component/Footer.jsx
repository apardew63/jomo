"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
    const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/journal", label: "journal" },
    { href: "/approach", label: "approach" },
    { href: "/affiliation", label: "affiliation" },
    { href: "/privacypolicy", label: "privacy policy" },
    { href: "/regulatorydisclosures", label: "regulatory disclosures" },
  ];

  return (
    <div className="relative bg-black text-white">
      <section className="max-w-[1520px] mx-auto px-6 py-[60px] sm:py-[80px]">
        {/* Heading */}
        <h1 className="text-[60px] sm:text-[70px] lg:text-[80px] font-bold font-ibmplex mb-10">
          jomo investment
        </h1>

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-[50px]">
          {/* Footer Navigation */}
          <div className="flex flex-wrap gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white font-medium font-ibmplex group text-[18px]"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="max-w-[600px]">
            <p className="text-[16px] sm:text-[18px] font-ibmplex text-right leading-relaxed text-gray-300">
              Content on the website represents research-based analysis and
              should not be construed as investment advice. Past performance
              does not guarantee future results.
            </p>
          </div>
        </div>
        <hr />
        <footer className="mt-[50px] text-center">
            <p className="text-[20px] font-ibmplex">
                All copyrights are reserved
            </p>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
