import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Particles from "./ui/Particles";
import Bird3D from "./Bird3D";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import heading from "../assets/images/logo2.png";
import CoinDemo from "./CoinDemo";
import birdPreview from "../assets/images/ball.png"; // <-- add your PNG preview here
import { Suspense } from "react";

const Landing = ({ onRegisterClick }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modelLoaded, setModelLoaded] = useState(false); // track if 3D model is ready

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particleCount = windowWidth < 768 ? 50 : 200;

  // Responsive scaling for heading/logo
  const headingSize = (() => {
    if (windowWidth < 640) return { width: 420, height: 210 }; // mobile
    if (windowWidth < 768) return { width: 400, height: 160 }; // small tablets
    if (windowWidth < 1024) return { width: 350, height: 200 }; // large tablets
    return { width: 450, height: 250 }; // desktop
  })();

  // Responsive scaling for 3D canvas
  const canvasSize = (() => {
    if (windowWidth < 640) return { width: 300, height: 270 };
    if (windowWidth < 768) return { width: 350, height: 320 };
    if (windowWidth < 1024) return { width: 400, height: 350 };
    return { width: 400, height: 360 };
  })();

  return (
    <div
      className="relative w-full flex flex-col items-center"
      style={{
        minHeight: windowWidth < 768 ? "auto" : "10vh",
        paddingTop: windowWidth < 768 ? "40px" : "0px",
        paddingBottom: windowWidth < 768 ? "40px" : "0px",
      }}
    >
      {/* Coin Layer */}
      <CoinDemo />

      {/* Particles */}
      <div className="absolute inset-0 z-10">
        <Particles
          particleColors={["#ffffff", "#f6f4f1", "#f3f1ea"]}
          particleCount={particleCount}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 space-y-6">
        {/* DSA Launchpad Logo */}
        <img
          src={heading}
          alt="DSA Launchpad"
          className="harry-potter taiwan-bounce relative z-10 object-contain"
          style={{
            marginTop: "40px",
            width: `${headingSize.width}px`,
            maxHeight: `${headingSize.height}px`,
          }}
        />

        {/* 3D Canvas with PNG fallback */}
        <div
          className="relative z-20"
          style={{
            width: `${canvasSize.width}px`,
            height: `${canvasSize.height}px`,
          }}
        >
          {!modelLoaded && (
            <img
              src={birdPreview}
              alt="Bird Preview"
              className="absolute inset-0 w-full h-full object-contain"
            />
          )}

          <Canvas
            camera={{ position: [0, 0, 6], fov: 50 }}
            dpr={windowWidth < 1024 ? 1 : window.devicePixelRatio}
            onCreated={() => setModelLoaded(true)} // when canvas initializes
          >
            <Bird3D />
          </Canvas>
        </div>

        {/* Register Button */}
        <HoverBorderGradientDemo onClick={onRegisterClick} />
      </div>
    </div>
  );
};

export default Landing;
