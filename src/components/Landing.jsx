import React from "react";
import { Canvas } from "@react-three/fiber";
import Particles from "./ui/Particles";
import Bird3D from "./Bird3D";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import heading from "../assets/images/heading.png";

const Landing = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Particles Layer */}
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

      {/* Main content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-4">
        <img
          src={heading}
          alt="DSA Launchpad"
          className="w-[600px] h-auto harry-potter taiwan-bounce"
        />

        {/* 3D Scene */}
        <div className="w-[600px] h-[600px] mt-0">
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
            <Bird3D />
          </Canvas>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50">
        <HoverBorderGradientDemo />
      </div>
    </div>
  );
};

export default Landing;
