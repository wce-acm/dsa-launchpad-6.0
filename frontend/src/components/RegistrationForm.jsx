import React, { useState } from "react";
import registrationLogo from "../assets/images/reg2.png";
import submitButton from "../assets/images/submit.png";
import qrcode from "../assets/images/qrcode.png";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    college: "",
    branch: "",
    year: "",
    transactionId: "",
    paymentScreenshot: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-[180vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-xl p-10 space-y-10"
      >
        {/* Registration Image */}
        <div className="flex justify-center mb-16">
          <img
            src={registrationLogo}
            alt="Registration"
            className="w-[400px] h-auto object-contain mx-auto floating"
          />
        </div>

        {/* Inputs Container */}
        <div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            style={{ marginBottom: "30px" }}
            onChange={handleChange}
            className="w-full  px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600
               focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter your full name"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            style={{ marginBottom: "30px" }}
            onChange={handleChange}
            className="w-full mb-[30px] px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600
               focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter your email"
            required
          />

          <input
            type="tel"
            style={{ marginBottom: "30px" }}
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full mb-[30px] px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600
               focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter your mobile number"
            required
          />

          <input
            type="text"
            style={{ marginBottom: "30px" }}
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="w-full mb-[30px] px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600
               focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter your college"
            required
          />

          <input
            type="text"
            name="branch"
            style={{ marginBottom: "30px" }}
            value={formData.branch}
            onChange={handleChange}
            className="w-full mb-[30px] px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600
               focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter your branch"
            required
          />

          {/* Dropdown */}
          <select
            name="year"
            value={formData.year}
             style={{ marginBottom: "30px" }}
            onChange={handleChange}
            className="w-full mb-[30px] px-4 py-3 rounded-lg bg-transparent text-gray-300 border border-gray-600 
             focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          >
            <option value="" className="bg-black text-gray-300">Select Year</option>
            <option value="1st Year" className="bg-black text-gray-300">1st Year</option>
            <option value="2nd Year" className="bg-black text-gray-300">2nd Year</option>
            <option value="3rd Year" className="bg-black text-gray-300">3rd Year</option>
            <option value="4th Year" className="bg-black text-gray-300">4th Year</option>
          </select>


          {/* File Upload */}
          <input
            type="file"
            name="paymentScreenshot"
            accept="image/*"
            style={{ marginBottom: "30px" }}
            onChange={handleChange}
            className="w-full mb-[30px] px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600
               focus:outline-none focus:ring-2 focus:ring-amber-400 file:mr-4 file:py-2 file:px-4 
               file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-500 file:text-black hover:file:bg-amber-600"
            required
          />
        </div>

        {/* Payment QR */}
        <div className="text-center mb-16">
          <img
            src={qrcode}
            alt="Payment QR"
            className="w-80 h-80 mx-auto float-animation"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mb-16">
          <button type="submit">
            <img
              src={submitButton}
              alt="Submit"
              className="w-45 h-45 mx-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
