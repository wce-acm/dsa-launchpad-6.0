import React from "react";
import HarryPotterCard from "./Card";
import Particles from "./ui/Particles";

import one1 from "../assets/images/one1.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import four from "../assets/images/four.png";

const SessionCard = () => {
  const cards = [
    {
      title: "Welcome to Hogwarts",
      subtitle: "Session 1",
      house: "Day 1",
      crestIcon: "⚡",
      backText:
        "Begin your DSA adventure by learning problem-solving, logic, and simple data-handling spells to tackle coding challenges.",
    },
    {
      title: "The Chamber of Algorithms",
      subtitle: "Session 2",
      house: "Day 1",
      crestIcon: "🦡",
      backText:
        "Unlock the secrets of searching, sorting, and stack magic to organize data and conquer problems efficiently.",
    },
    {
      title: "The Order of Structures",
      subtitle: "Session 3",
      house: "Day 2",
      crestIcon: "🦁",
      backText:
        "Master linked sequences and structured data flows to control information with wizard-like precision.",
    },
    {
      title: "Defence Against the Dark Arts",
      subtitle: "Session 4",
      house: "Day 2",
      crestIcon: "🦅",
      backText:
        "Explore trees, graphs, and hidden paths to navigate complex hierarchies and unlock advanced DSA powers.",
    },
  ];

  const logos = [one1, two, three, four];

  return (
    <div className="relative flex flex-col items-center">
      {/* Background Particles */}
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

      {cards.map((card, index) => {
        const isLeft = index % 2 === 0; // even index = left card
        return (
          <div
            key={index}
            className={`relative flex w-full max-w-5xl my-16 z-10 ${
              isLeft ? "justify-start" : "justify-end"
            }`}
          >
            {/* Connector circle */}
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-amber-600 border-4 border-amber-900 rounded-full -translate-x-1/2 -translate-y-1/2 z-20" />

            {/* The card itself with props */}
            <HarryPotterCard
              title={card.title}
              subtitle={card.subtitle}
              house={card.house}
              crestIcon={card.crestIcon}
              backText={card.backText}
            />

            {/* The logo (opposite to card) */}
            <img
              src={logos[index]}
              alt={`Logo ${index + 1}`}
              className={`w-45 h-45 object-contain absolute top-1/2 -translate-y-1/2 float-animation ${
                isLeft ? "right-[560px]" : "left-[560px]"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SessionCard;
