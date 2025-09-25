import React from "react";

export default function RegistrationSection({ formLink, message }) {
  return (
    <div className="text-center p-6 font-['Plus_Jakarta_Sans']">
      {/* Message */}
      <h2 className="text-sm font-medium  text-white" style={{fontSize:"25px",marginBottom:"40px"}}>
        {message}
      </h2>

      {/* Registration Button */}
      <a
  href={formLink}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    padding: "10px 20px",
    border: "1px solid orange",
    borderRadius: "8px",
    fontWeight: "500",
    color: "#ffffffff",
    textDecoration: "none", // removes underline
    transition: "all 0.3s ease",
    marginBottom:"40px"
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = "orange";
    e.target.style.color = "white";
    e.target.style.borderColor = "orange";
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#ffffffff";
    e.target.style.borderColor = "orange";
  }}
>
  Register Here
</a>

    </div>
  );
}
