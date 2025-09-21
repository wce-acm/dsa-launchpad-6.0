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
      className="relative w-64 h-[350px] cursor-pointer perspective-1000 jakarta" // <-- Apply font here
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
            : `rotateY(${mousePosition.x * 15}deg) rotateX(${
                mousePosition.y * -15
              }deg)`,
        }}
        className="absolute w-full h-full"
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full rounded-xl overflow-hidden border-2 border-amber-400 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-600 opacity-70 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${palace})` }}
          ></div>

          <div className="relative z-20 h-full flex flex-col items-center justify-between p-4 text-amber-100">
            <div className="w-16 h-16 mt-4 bg-amber-400 rounded-full flex items-center justify-center border-4 border-amber-600 shadow-lg">
              <div className="text-3xl">{crestIcon || "⚡"}</div>
            </div>

            <div className="text-center">
              <h2 className="text-[10px] font-bold mb-1 text-amber-300 drop-shadow-md">
                {title || "Harry Potter"}
              </h2>
              <p className="text-sm text-amber-200 italic">
                {subtitle || "The Boy Who Lived"}
              </p>
            </div>

            {house && (
              <div className="bg-gradient-to-r from-red-800 to-red-600 px-3 py-1 rounded-full mb-4 border border-amber-400 shadow-md">
                <span className="font-bold text-[10px] text-amber-100 tracking-wider">
                  {house}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Back */}
       <div
  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
  className="absolute w-full h-full rounded-xl overflow-hidden border-2 border-amber-400 shadow-xl bg-gradient-to-b from-amber-900 via-amber-800 to-amber-700 flex items-center justify-center p-3 text-amber-100 text-center"
>
  <p className="px-4 py-2 text-lg md:text-xl leading-relaxed font-cormorant">
    {backText}
  </p>
</div>

      </div>
    </div>
  );
};

export default HarryPotterCard;
