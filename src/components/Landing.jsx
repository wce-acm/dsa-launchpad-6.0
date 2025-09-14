import React from "react";
import { Canvas } from "@react-three/fiber";
import Particles from "./ui/Particles";
import Bird3D from "./Bird3D";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import heading from "../assets/images/logo2.png";
import CoinDemo from "./CoinDemo";

const Landing = ({ onRegisterClick }) => {
  return (
    <div className="relative w-full h-screen">
      <CoinDemo />

      {/* Particles Layer */}
      <div className="absolute inset-0 z-10">
        <Particles
          particleColors={["#ffffff", "#f6f4f1", "#f3f1ea"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={160}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main content */}
    {/* Main content */}
<div className="relative z-30 flex flex-col items-center justify-center text-center px-4 space-y-6">
  <img
  style={{ marginTop: "60px" }}
  src={heading}
  alt="DSA Launchpad"
  className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[350px] max-h-[80px] sm:max-h-[100px] md:max-h-[200px] lg:max-h-[200px] object-contain harry-potter taiwan-bounce relative z-10"
/>


  {/* 3D Scene */}
  <div className="w-[220px] h-[180px] sm:w-[300px] sm:h-[2500px] md:w-[350px] md:h-[350px] relative z-20">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <Bird3D />
    </Canvas>
  </div>

  {/* Button */}
  <HoverBorderGradientDemo onClick={onRegisterClick} />
</div>

    </div>
  );
};

export default Landing;
