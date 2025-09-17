import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background layer */}
      <div className="fixed top-0 left-0 w-full h-full min-h-screen bg-black gradient-container -z-10" />

      {/* Foreground content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
