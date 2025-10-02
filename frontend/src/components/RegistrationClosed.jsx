import React from "react";
import closed from "../assets/images/closed.png"; // <-- replace with your actual image

export default function RegistrationClosed() {
  return (
    <div className="flex flex-col items-center justify-center text-center jakarta my-[100px]">
      {/* Floating Image */}
      <img
        src={closed}
        alt="Harry Potter Element"
        className="w-70 h-70 mb-6 animate-float"
      />

      {/* Message */}
      <h2 className="text-4xl font-bold text-white">
        Registrations Closed!
      </h2>
      <p className="mt-3 text-2xl text-white">
        Thank you for your participation!
      </p>
    </div>
  );
}
