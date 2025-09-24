import React, { useState } from "react";
import registrationLogo from "../assets/images/reg2.png";
import submitButton from "../assets/images/submit.png";
import qrcode from "../assets/images/qrcode.png";
import YearDropdown from "./YearDropdown";

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

  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: "", message: "" }), 3000); // hide after 5s
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert({ type: "", message: "" });

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const res = await fetch(
        "https://dsa-launchpad-6-0-av2t.onrender.com/api/launchpad",
        { method: "POST", body: data }
      );

      const result = await res.json();

      showAlert("success", result.message || "Form submitted successfully!");

      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        college: "",
        branch: "",
        year: "",
        transactionId: "",
        paymentScreenshot: null,
      });
      document.getElementById("fileLabel").textContent = "Upload Payment Screenshot";
    } catch (err) {
      console.error(err);
      showAlert("error", "Error submitting form!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[180vh] flex flex-col items-center justify-center px-4 jakarta relative">

      {/* Loading spinner at the center */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-amber-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Alert box at top */}
     {alert.message && (
  <div
    className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg bg-white text-gray-800 font-semibold flex items-center space-x-3 shadow-lg p-4`}
  >
    {/* Icon */}
    {alert.type === "success" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-0 w-0 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    )}
    <span>{alert.message}</span>
  </div>
)}


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
            className="w-[400px] h-auto object-contain mx-auto mb-4"
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
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
        />

        {/* Dropdown */}
        <YearDropdown
          value={formData.year}
          onChange={(val) => setFormData((prev) => ({ ...prev, year: val }))}
          style={{ marginBottom: "30px" }}
          className="mb-[30px]"
          disabled={isLoading}
        />

        {/* Payment Screenshot */}
        <div className="w-full mt-5">
          <label
            htmlFor="paymentScreenshot"
            className={`block w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 cursor-pointer focus-within:ring-2 focus-within:ring-amber-400 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span
              id="fileLabel"
              className="block text-left text-gray-400 text-sm mb-3 truncate"
            >
              Upload Payment Screenshot
            </span>
            <span className="bg-amber-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-600">
              Choose File
            </span>
          </label>
          <input
            id="paymentScreenshot"
            type="file"
            name="paymentScreenshot"
            accept="image/*"
            onChange={(e) => {
              handleChange(e);
              const fileName =
                e.target.files?.[0]?.name || "Upload Payment Screenshot";
              document.getElementById("fileLabel").textContent = fileName;
            }}
            className="hidden"
            required
            disabled={isLoading}
          />
        </div>

        {/* QR */}
        <div className="text-center mb-16">
          <img src={qrcode} alt="Payment QR" className="w-90 h-90 mx-auto" />
        </div>

        {/* Submit */}
        <div className="text-center mb-16">
          <button
            type="submit"
            disabled={isLoading}
            className={`${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <img
              src={submitButton}
              alt="Submit"
              className={`w-45 h-45 mx-auto cursor-pointer transition-transform duration-300 ease-in-out ${
                !isLoading ? "hover:scale-110 active:scale-95" : ""
              }`}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
