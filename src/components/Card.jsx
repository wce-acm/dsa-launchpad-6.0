import React, { useState } from "react";
import palace from "../assets/images/palace.jpg";

const HarryPotterCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2;
    const y = ((e.clientY - top) / height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="relative w-64 h-[350px] cursor-pointer" 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setMousePosition({ x: 0, y: 0 });
        setIsFlipped(false);
      }}
      onMouseEnter={() => setIsFlipped(true)}
    >
      {/* 3D Card Container */}
      <div
        className={`absolute w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transform: `rotateY(${isFlipped ? 180 : mousePosition.x * 15}deg) rotateX(${
            mousePosition.y * -15
          }deg)`,
        }}
      >
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border-2 border-amber-400 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-600 opacity-70 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${palace})` }}
          ></div>

          <div className="relative z-20 h-full flex flex-col items-center justify-between p-4 text-amber-100">
            {/* Crest */}
            <div className="w-20 h-20 mt-4 bg-amber-400 rounded-full flex items-center justify-center border-4 border-amber-600 shadow-lg">
              <div className="text-4xl">⚡</div>
            </div>

            {/* Title */}
            <div className="text-center">
              <h2 className="text-xl font-cinzel font-bold mb-1 text-amber-300 drop-shadow-md">
                Harry Potter
              </h2>
              <p className="text-sm text-amber-200 font-cormorant italic">
                The Boy Who Lived
              </p>
            </div>

            {/* House Badge */}
            <div className="bg-gradient-to-r from-red-800 to-red-600 px-4 py-1 rounded-full mb-4 border border-amber-400 shadow-md">
              <span className="font-bold text-xs text-amber-100 tracking-wider">
                GRYFFINDOR
              </span>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-amber-400"></div>
            <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-amber-400"></div>
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-amber-400"></div>
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-amber-400"></div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border-2 border-amber-400 shadow-xl rotate-y-180 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-700">
          <div className="h-full flex flex-col items-center justify-center p-4 text-amber-100 relative">
            {/* Hogwarts Crest */}
            <div className="w-20 h-20 mb-4 bg-amber-500 rounded-full flex items-center justify-center border-4 border-amber-600 shadow-lg">
              <div className="text-3xl">🦁</div>
            </div>

            {/* Details */}
            <div className="text-center font-cormorant">
              <h3 className="text-lg font-bold mb-2 text-amber-300">
                Wizard Profile
              </h3>
              <div className="space-y-1 text-left text-sm">
                <p>
                  <span className="font-semibold">Wand:</span> Holly, Phoenix Feather, 11"
                </p>
                <p>
                  <span className="font-semibold">Patronus:</span> Stag
                </p>
                <p>
                  <span className="font-semibold">Skills:</span> Parseltongue, DADA
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-4 p-2 border border-amber-400/50 rounded bg-amber-900/30 text-xs">
              <p className="text-amber-200 italic text-center">
                "It takes a great deal of bravery to stand up to our enemies, 
                but just as much to stand up to our friends."
              </p>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-amber-400"></div>
            <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-amber-400"></div>
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-amber-400"></div>
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-amber-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarryPotterCard;
