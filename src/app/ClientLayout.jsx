"use client";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./component/Navbar";

export default function ClientLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // once=true triggers only once
  }, []);

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}