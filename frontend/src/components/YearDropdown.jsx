import { useState } from "react";

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

export default function YearDropdown({ value, onChange, className }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative w-full ${className || ""}`}>
      {/* Selected value */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 rounded-lg bg-transparent text-white border border-gray-600 cursor-pointer flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors duration-200 backdrop-blur-sm"
      >
        <span className={`${value ? "text-white" : "text-gray-400"}`}>
          {value || "Select Year"}
        </span>
        <span className="text-gray-400">{open ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute left-0 right-0 mt-1 rounded-lg border border-gray-600 shadow-lg z-50 bg-white/10 backdrop-blur-lg">
          {years.map((year, idx) => (
            <div
              key={idx}
              onClick={() => {
                onChange(year);
                setOpen(false);
              }}
              className="px-4 py-3 cursor-pointer text-white hover:bg-amber-500 hover:text-black transition-colors duration-200 rounded-md"
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
