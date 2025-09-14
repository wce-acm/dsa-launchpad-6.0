"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverBorderGradientDemo({ onClick }) {
  return (
    <div className="flex justify-center text-center mt-10">
      <HoverBorderGradient
        containerClassName="rounded-full w-[250px] h-[70px]"
        as="button"
        onClick={onClick}
        className="bg-black text-[#FFD700] flex items-center justify-center text-2xl font-bold space-x-3"
      >
        <span>Register Now</span>
      </HoverBorderGradient>
    </div>
  );
}
