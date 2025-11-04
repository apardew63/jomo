"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/approach", label: "approach" },
    { href: "/team", label: "team" },
    { href: "/journal", label: "journal" },
    { href: "/affiliation", label: "affiliation" },
  ];

  const journalDropdown = [
    { href: "#", label: "psx" },
    { href: "/journal/usa", label: "usa" },
    { href: "/journal/global", label: "global" },
    { href: "/journal/commodities", label: "commodities" },
  ];

  return (
    <nav className="w-full  bg-black backdrop-blur-md border-b border-black-200 sticky top-0 z-50">
      <div className="max-w-[1660px] mx-auto px-4 md:px-6 py-[30px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-semibold text-xl md:text-[30px] text-white type">
            jomo investments
          </span>
        </Link>

        {/* Desktop Links + Button */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-8">
          {navLinks.map((link) =>
            link.label === "journal" ? (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => setIsJournalOpen(true)}
                onMouseLeave={() => setIsJournalOpen(false)}
              >
                <button
                  className="relative text-white font-medium font-ibmplex group flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isJournalOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Dropdown Menu */}
                {isJournalOpen && (
                  <div className="absolute top-[140%] left-0 bg-black border border-gray-700 rounded-md shadow-lg py-2 w-48">
                    {journalDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-white font-ibmplex hover:bg-white hover:text-black transition-all duration-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white font-medium font-ibmplex group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="ml-2 md:ml-4 flex items-center gap-2 border bg-white border-white text-black px-3 md:px-4 py-2 rounded-[10px] hover:bg-black hover:text-white transition-all duration-300 font-ibmplex text-sm md:text-base"
          >
            contact us
            <Phone size={18} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) =>
              link.label === "journal" ? (
                <div key={link.href} className="flex flex-col space-y-2">
                  <button
                    onClick={() => setIsJournalOpen(!isJournalOpen)}
                    className="text-white font-medium font-ibmplex flex justify-between items-center"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isJournalOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isJournalOpen && (
                    <div className="pl-4 flex flex-col space-y-2">
                      {journalDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-white text-[15px] font-ibmplex hover:text-gray-300 transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white font-medium font-ibmplex hover:border-b hover:border-white transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Contact Us Button (mobile) */}
            <Link
              href="/contact"
              className="mt-2 border border-white text-white text-center px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-ibmplex"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
