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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const res = await fetch("http://localhost:5000/api/launchpad", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      alert(result.message || "Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting form!");
    }
  };

  return (
    <div className="min-h-[180vh] flex items-center justify-center px-4">
     <form
  onSubmit={handleSubmit}
  className="w-full max-w-lg rounded-xl p-10 space-y-10"
  encType="multipart/form-data"
>
  {/* Registration Image */}
  <div className="flex justify-center mb-16">
    <img
      src={registrationLogo}
      alt="Registration"
      className="w-[400px] h-auto object-contain mx-auto floating"
    />
  </div>

  {/* Inputs */}
  <input
    type="text"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    style={{ marginBottom: "30px" }}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
    placeholder="Enter your full name"
    required
  />

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    style={{ marginBottom: "30px" }}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
    placeholder="Enter your email"
    required
  />

  <input
    type="tel"
    name="mobile"
    value={formData.mobile}
    onChange={handleChange}
    style={{ marginBottom: "30px" }}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
    placeholder="Enter your mobile number"
    required
  />

  <input
    type="text"
    name="college"
    value={formData.college}
    onChange={handleChange}
    style={{ marginBottom: "30px" }}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
    placeholder="Enter your college"
    required
  />

  <input
    type="text"
    name="branch"
    value={formData.branch}
    onChange={handleChange}
    style={{ marginBottom: "30px" }}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
    placeholder="Enter your branch"
    required
  />

  {/* Dropdown */}
  <select
    name="year"
    value={formData.year}
    onChange={handleChange}
    style={{ marginBottom: "30px" }}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
    required
  >
    <option value="">Select Year</option>
    <option value="1st Year">1st Year</option>
    <option value="2nd Year">2nd Year</option>
    <option value="3rd Year">3rd Year</option>
    <option value="4th Year">4th Year</option>
  </select>

  {/* Payment Screenshot Upload */}
  <input
    type="file"
    name="paymentScreenshot"
    accept="image/*"
    onChange={handleChange}
    style={{ marginBottom: "30px" }}
    className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-500 file:text-black hover:file:bg-amber-600"
    required
  />

  {/* QR */}
  <div className="text-center mb-16">
    <img src={qrcode} alt="Payment QR" className="w-80 h-80 mx-auto" />
  </div>

  {/* Submit */}
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
