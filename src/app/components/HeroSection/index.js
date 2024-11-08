"use client";
import { CheckCircle, Paperclip } from "lucide-react";
import React from "react";
import LawFirmLogos from "../CompanyNames";

const WebsiteHeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-20 px-8 bg-gray-50">
      {/* Left Section: Text */}
      <div className="flex flex-col justify-between mb-8 md:mb-0 md:pr-8">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-700 leading-tight tracking-wide">
            Resolving Injury, Estate, and Probe Law Cases
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mt-4">
            We are a leading law firm specializing in injury, estate, and probe
            law. Our team of experienced attorneys is dedicated to providing
            exceptional legal services and achieving the best possible outcomes
            for our clients.
          </p>
          <p className="text-sm text-gray-500 italic mt-4 mb-10">
            Trusted by thousands for expert legal services.
          </p>

          <LawFirmLogos />
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="bg-white text-gray-800 rounded-md shadow-lg p-8 flex items-center justify-center">
        <form className="w-full max-w-lg flex flex-col">
          <h2 className="text-3xl font-semibold text-center mb-4 text-gray-900">
            Request a Case Review
          </h2>
          {/* Bigger vertical line */}
          <div className="border-t-4 border-yellow-600 w-1/2 mx-auto mb-5"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label
                htmlFor="name"
                className="block font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none ring-1 ring-yellow-500 focus:border-yellow-500 transition duration-300"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none ring-1 ring-yellow-500 focus:border-yellow-500 transition duration-300"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none ring-1 ring-yellow-500 focus:border-yellow-500 transition duration-300"
              placeholder="Enter your phone number"
            />
          </div>
          {/* Describe Legal Issue Section */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block font-medium text-gray-700 mb-2"
            >
              Describe Your Legal Issue
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none ring-1 ring-yellow-500 focus:border-yellow-500 transition duration-300"
              placeholder="Please describe your legal issue in detail"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-2 px-6 hover:bg-yellow-700 transition-colors duration-300 flex flex-col items-center justify-center space-y-1"
          >
            <CheckCircle className="h-6 w-6" /> {/* Icon */}
            <span className="text-xl font-semibold">
              Submit for Review
            </span>{" "}
            {/* Main Text */}
            <span className="text-sm font-medium opacity-70">
              Your submission will be reviewed soon
            </span>{" "}
            {/* Caption Text */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WebsiteHeroSection;
