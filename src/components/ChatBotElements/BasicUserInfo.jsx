"use client";
import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

function BasicUserInfo({
  setFormDatachat,
  formDatachat,
  setIsOpen,
  handleChatUserSubmit,
}) {
  const [step, setStep] = useState(0); // Step tracker
  const [error, setError] = useState(""); // Error message state

  const handleInputChange = (e) => {
    setFormDatachat({ ...formDatachat, [e.target.name]: e.target.value });
    setError(""); // Clear error when user starts typing
  };

  const handleNext = () => {
    if (!formDatachat[fields[step].name]) {
      setError(`${fields[step].label} is required.`);
      return;
    }
    setError("");
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setError("");
    setStep(step - 1);
  };

  const fields = [
    {
      name: "userName",
      placeholder: "Enter your name",
      label: "Your Name",
    },
    {
      name: "address",
      placeholder: "Enter your current address",
      label: "Current Address",
    },
    {
      name: "phone",
      placeholder: "Enter your best contact phone number",
      label: "Phone Number",
    },
    {
      name: "email",
      placeholder: "Enter your email address",
      label: "Email Address",
    },
    {
      name: "issue",
      placeholder: "Briefly explain the issue at hand",
      label: "Explanation of Issue",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl p-8 w-96 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-25"></div>
          <div className="relative p-3 bg-white rounded-full shadow-lg">
            <img
              src="/logo.webp"
              alt="Logo"
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Welcome to Chat
      </h3>

      <form onSubmit={handleChatUserSubmit} className="space-y-5">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {fields[step].label}
          </label>
          <input
            type="text"
            name={fields[step].name}
            value={formDatachat[fields[step].name] || ""}
            onChange={handleInputChange}
            placeholder={fields[step].placeholder}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 bg-white"
            required
          />
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>

        <div className="flex justify-between">
          {step > 0 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-all"
            >
              Previous
            </button>
          )}
          {step < fields.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 font-medium shadow-md hover:shadow-lg"
            >
              <span>Next</span>
              <CheckCircle className="h-5 w-5 opacity-90" />
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 font-medium shadow-md hover:shadow-lg"
            >
              <span>Submit</span>
              <CheckCircle className="h-5 w-5 opacity-90" />
            </button>
          )}
        </div>
      </form>
      <p className="text-sm text-gray-500 text-center mt-6">
        We are here to help you! Feel free to reach out with any questions.
      </p>
    </div>
  );
}

export default BasicUserInfo;
