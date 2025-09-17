import React, { useState, useEffect } from "react";
import HarryPotterCard from "./Card";
import Particles from "./ui/Particles";

import one1 from "../assets/images/one1.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three1.png";
import four from "../assets/images/four1.png";

const SessionCard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate scale factor based on window width
  const getScaleFactor = () => {
    if (windowWidth >= 1200) return 1.0;    // Default size
    if (windowWidth >= 992) return 0.9;     // Large tablets
    if (windowWidth >= 768) return 0.8;     // Small tablets
    if (windowWidth >= 576) return 0.7;     // Large phones
    return 0.6;                             // Small phones
  };

  const scaleFactor = getScaleFactor();

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
    <div className="relative flex flex-col items-center py-8 md:py-16">
      {/* Background Particles - Adjusted for mobile */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#f6f4f1", "#f3f1ea"]}
          particleCount={Math.floor(300 * scaleFactor)}
          particleSpread={10 * scaleFactor}
          speed={0.1}
          particleBaseSize={160 * scaleFactor}
          moveParticlesOnHover={windowWidth > 768}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Snake line - scaled appropriately */}
      <div 
        className="absolute left-1/2 top-0 bottom-0 bg-amber-800 -translate-x-1/2 z-0"
        style={{ width: `${2 * scaleFactor}px` }}
      />

      {cards.map((card, index) => {
        const isLeft = index % 2 === 0; // even index = left card
        
        // Calculate scaled dimensions
        const cardWidth = 256 * scaleFactor;
        const logoSize = 180 * scaleFactor;
        const connectorSize = 24 * scaleFactor;
        const logoOffset = 560 * scaleFactor;
        
        return (
          <div
            key={index}
            className="relative flex w-full max-w-5xl my-16 z-10"
            style={{ 
              marginTop: `${64 * scaleFactor}px`, 
              marginBottom: `${64 * scaleFactor}px`,
              justifyContent: isLeft ? "flex-start" : "flex-end"
            }}
          >
            {/* Connector circle - scaled */}
            <div 
              className="absolute top-1/2 left-1/2 bg-amber-600 border-amber-900 rounded-full -translate-x-1/2 -translate-y-1/2 z-20"
              style={{ 
                width: `${connectorSize}px`, 
                height: `${connectorSize}px`,
                borderWidth: `${4 * scaleFactor}px`
              }}
            />

            {/* The card itself with props - scaled via wrapper */}
            <div style={{ transform: `scale(${scaleFactor})`, transformOrigin: isLeft ? 'left center' : 'right center' }}>
              <HarryPotterCard
                title={card.title}
                subtitle={card.subtitle}
                house={card.house}
                crestIcon={card.crestIcon}
                backText={card.backText}
              />
            </div>

            {/* The logo (opposite to card) - scaled and positioned */}
          {/* The logo (opposite to card) - scaled and positioned */}
<img
  src={logos[index]}
  alt={`Logo ${index + 1}`}
  className="object-contain absolute top-1/2 -translate-y-1/2 float-animation z-10"
  style={{
    width: `${logoSize}px`,
    height: `${logoSize}px`,
    // Different offset for desktop vs mobile
    ...(windowWidth < 768
      ? isLeft
        ? { left: `${400 * scaleFactor}px` }   // reduced offset for mobile
        : { right: `${400 * scaleFactor}px` }  // reduced offset for mobile
      : isLeft
      ? { right: `${560 * scaleFactor}px` }    // original desktop offset
      : { left: `${560 * scaleFactor}px` }),
  }}
/>


          </div>
        );
      })}
    </div>
  );
};

export default SessionCard;