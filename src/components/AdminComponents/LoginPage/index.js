"use client";

import React, { useState, useCallback } from "react";
import { strapiUrl } from "@/apis/apiUrl";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react"; // Import Lucide icons for show/hide

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "", // 'success' or 'error'
  });
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const router = useRouter();

  // Memoized form handler to prevent unnecessary re-renders
  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);

  // Memoized submit handler
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();

      setStatus({
        loading: true,
        message: "",
        type: "",
      });

      try {
        const response = await fetch(`${strapiUrl}/auth/local`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message?.[0]?.messages?.[0]?.message || "Login failed!"
          );
        }

        if (data?.jwt) {
          localStorage.setItem("adminToken", data.jwt);
          setStatus({
            loading: false,
            message: "Login successful!",
            type: "success",
          });
          router.push("/dashboard");
        }
      } catch (error) {
        setStatus({
          loading: false,
          message:
            error.message || "Login failed. Please check your credentials.",
          type: "error",
        });
      }
    },
    [formData]
  );

  // Toggle show/hide password
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-yellow-800 text-center mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="relative">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
              placeholder="Enter your password"
              required
              minLength={6}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-12 right-3 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status.loading}
          >
            {status.loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Login"
            )}
          </button>
        </form>

        {status.message && (
          <p
            className={`mt-4 text-sm text-center ${
              status.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
