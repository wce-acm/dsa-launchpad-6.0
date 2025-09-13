import React, { useState } from "react";
import registrationLogo from "../assets/images/registration-logo.png";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    college: "",
    branch: "",
    year: "",
    transactionId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-[150vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-xl p-10 space-y-16"
      >
        {/* Registration Image */}
        <div className="flex justify-center">
          <img
            src={registrationLogo}
            alt="Registration"
            className="w-[400px] h-auto object-contain mx-auto"
          />
        </div>

        {/* Inputs Container */}
      <div className="space-y-8" style={{ marginTop: "30px" }}> 
  <input
    type="text"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray
               focus:outline-none focus:ring-2 focus:ring-amber-400"
    placeholder="Enter your full name"
    required
    style={{ marginTop: "30px" }}
  />

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 
               focus:outline-none focus:ring-2 focus:ring-amber-400"
    placeholder="Enter your email"
    required
    style={{ marginTop: "30px" }}
  />

  <input
    type="tel"
    name="mobile"
    value={formData.mobile}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 
               focus:outline-none focus:ring-2 focus:ring-amber-400"
    placeholder="Enter your mobile number"
    required
    style={{ marginTop: "30px" }}
  />

  <input
    type="text"
    name="college"
    value={formData.college}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 
               focus:outline-none focus:ring-2 focus:ring-amber-400"
    placeholder="Enter your college"
    required
    style={{ marginTop: "30px" }}
  />

  <input
    type="text"
    name="branch"
    value={formData.branch}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 
               focus:outline-none focus:ring-2 focus:ring-amber-400"
    placeholder="Enter your branch"
    required
    style={{ marginTop: "30px" }}
  />

  <select
    name="year"
    value={formData.year}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 
               focus:outline-none focus:ring-2 focus:ring-amber-400"
    required
    style={{ marginTop: "30px" }}
  >
    <option value="">Select Year</option>
    <option value="1st Year">1st Year</option>
    <option value="2nd Year">2nd Year</option>
    <option value="3rd Year">3rd Year</option>
    <option value="4th Year">4th Year</option>
  </select>
</div>

        {/* Payment QR */}
        <div className="text-center">
          <img
            src="./src/assets/images/qrcode.png"
            alt="Payment QR"
            className="w-80 h-80 mx-auto float-animation"
          />
          <p className="text-gray-300 mt-3">₹150/- per team</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold 
                     hover:bg-blue-700 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
