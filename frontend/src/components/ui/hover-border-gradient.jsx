"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export function HoverBorderGradient({
  children = "Register Now", // default text
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(255, 215, 0, 0.9) 0%, rgba(255, 215, 0, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(255, 215, 0, 0.9) 0%, rgba(255, 215, 0, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, rgba(255, 215, 0, 0.9) 0%, rgba(255, 215, 0, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, rgba(255, 215, 0, 0.9) 0%, rgba(255, 215, 0, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #FFD700 0%, rgba(255, 215, 0, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        // 🚫 removed border
        "relative flex items-center justify-center rounded-full overflow-hidden px-8 py-4 text-2xl font-bold text-[#FFD700]  transition duration-500 w-[250px] h-[70px]",
        containerClassName
      )}
      {...props}
    >
      {/* Button Text */}
      <span className="z-10">{children}</span>

      {/* Animated Gradient Border */}
      <motion.div
        className="absolute inset-0 rounded-full z-0"
        style={{ filter: "blur(4px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />

      {/* Inner Black Background */}
      <div className="absolute inset-[2px] bg-black rounded-full z-0" />
    </Tag>
  );
}
