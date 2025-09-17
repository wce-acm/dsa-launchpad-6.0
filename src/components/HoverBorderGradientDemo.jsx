"use client";
import React, { useState, useEffect } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverBorderGradientDemo({ onClick }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive sizing
  const buttonWidth = windowWidth < 768 ? 180 : 250; // smaller on mobile
  const buttonHeight = windowWidth < 768 ? 50 : 70;
  const fontSize = windowWidth < 768 ? "text-lg" : "text-2xl";

  return (
    <div className="flex justify-center text-center mt-10">
      <HoverBorderGradient
        containerClassName={`rounded-full w-[${buttonWidth}px] h-[${buttonHeight}px]`}
        as="button"
        onClick={onClick}
        className={`bg-black text-[#FFD700] flex items-center justify-center ${fontSize} font-bold space-x-3`}
      >
        <span>Register Now</span>
      </HoverBorderGradient>
    </div>
  );
}
