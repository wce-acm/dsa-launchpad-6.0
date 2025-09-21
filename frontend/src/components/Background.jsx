import React from "react";
import bgImage from "../assets/images/background-image.jpg"; // ✅ import image

const Background = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background image */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Black overlay with transparency */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 -z-10" />

      {/* Foreground content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
