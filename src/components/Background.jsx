import React from "react";

const Background = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full gradient-container bg-black -z-10">
      {children}
    </div>
  );
};

export default Background;
