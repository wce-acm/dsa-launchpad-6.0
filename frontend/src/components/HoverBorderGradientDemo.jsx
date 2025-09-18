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
  const buttonWidth = windowWidth < 768 ? 220 : 250;
  const buttonHeight = windowWidth < 768 ? 40 : 70;
  const fontSize = windowWidth < 768 ? "text-xl" : "text-2xl";

  // Extra margin for mobile
  const mobileMarginTop = windowWidth < 768 ? "10px" : "10px";

  return (
    <div
      className="flex justify-center text-center"
      style={{ marginTop: mobileMarginTop }} // 👈 margin only on mobile
    >
      <HoverBorderGradient
        as="button"
        onClick={onClick}
        containerClassName="rounded-full"
        style={{ width: `${buttonWidth}px`, height: `${buttonHeight}px` }}
        className={`bg-black text-[#FFD700] flex items-center justify-center ${fontSize} font-bold space-x-3`}
      >
        <span>Register Now</span>
      </HoverBorderGradient>
    </div>
  );
}
