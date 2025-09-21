import React from "react";
import loaderImage from "../../assets/images/acmlogo.png";

const loadersize = window.innerWidth < 640 ? 150 : 200;
const Loader = ({ size = loadersize }) => {
  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
      {/* Container for border and logo */}
      <div
        style={{ width: `${size}px`, height: `${size}px`, position: "relative" }}
      >
        {/* Spinning Border */}
        <div
          className="border-8 border-gray-300 rounded-full animate-spin"
          style={{
            borderTopColor: "#3b82f6", // Tailwind blue-400
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>

        {/* Stable Logo */}
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={loaderImage}
            alt="Loading..."
            className="w-3/4 h-3/4 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
