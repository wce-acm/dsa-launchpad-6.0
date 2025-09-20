import React, { useState } from "react";
import palace from "../assets/images/palace.jpg";

const HarryPotterCard = ({ title, subtitle, house, crestIcon, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2;
    const y = ((e.clientY - top) / height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="relative w-64 h-[350px] cursor-pointer perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setMousePosition({ x: 0, y: 0 });
        setIsFlipped(false);
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s",
          transform: isFlipped
            ? "rotateY(180deg)"
            : `rotateY(${mousePosition.x * 15}deg) rotateX(${mousePosition.y * -15}deg)`,
        }}
        className="absolute w-full h-full"
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full rounded-xl overflow-hidden shadow-xl border-3 border-amber-800"
        >
          {/* Golden background */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "#ffc4004e",
              opacity: 0.9,
            }}
          ></div>

          {/* Optional: palace background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${palace})` }}
          ></div>

          <div className="relative z-20 h-full flex flex-col items-center justify-between p-4 text-white">
            {/* Circle */}
            <div
              className="w-16 h-16 mt-4 rounded-full flex items-center justify-center shadow-lg"
              style={{
                backgroundColor: "#f5c483ff",
                border: "4px solid #ff660086",
              }}
            >
              <div className="text-3xl">{crestIcon || "⚡"}</div>
            </div>

            {/* Title & Subtitle */}
            <div className="text-center">
              <h2 className="text-lg font-cinzel font-bold mb-1 drop-shadow-md text-white">
                {title || "Harry Potter"}
              </h2>
              <p className="text-xs font-cormorant italic text-white">
                {subtitle || "The Boy Who Lived"}
              </p>
            </div>

            {/* House badge */}
            {house && (
              <div className="bg-gradient-to-r from-red-800 to-red-600 px-3 py-1 rounded-full mb-4 border border-amber-400 shadow-md">
                <span className="font-bold text-[10px] tracking-wider text-white">
                  {house}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "#D4AF37",
            color: "white", // changed text color
          }}
          className="absolute w-full h-full rounded-xl overflow-hidden border-2 border-amber-400 shadow-2xl flex items-center justify-center p-6 text-center"
        >
          <p
            className="text-2xl md:text-3xl leading-snug tracking-wide"
            style={{ fontFamily: "HarryPotter" }}
          >
            {backText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HarryPotterCard;
