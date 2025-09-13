import React from "react";
import HarryPotterCard from "./Card";
import Particles from "./ui/Particles";

const SessionCard = () => {
  const cards = [1, 2, 3, 4]; // you can extend this array

  return (

    <div className="relative flex flex-col items-center">
         <div className="absolute inset-0 z-10">
        <Particles
          particleColors={["#ffffff", "#f6f4f1", "#f3f1ea"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={160}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Snake line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-amber-800 -translate-x-1/2 z-0" />

      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative flex w-full max-w-5xl my-8 z-10 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          {/* Connector circle */}
          <div
            className="absolute top-1/2 left-1/2 w-6 h-6 bg-amber-600 border-4 border-amber-900 rounded-full -translate-x-1/2 -translate-y-1/2 z-20"
          />

          {/* Card itself */}
          <HarryPotterCard />
        </div>
      ))}
    </div>
  );
};

export default SessionCard;
