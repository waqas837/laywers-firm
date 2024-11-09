"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import ContactInfo from "../NavbarElements/ContactInfo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const clickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Section with Logo and Contact */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-8 lg:px-16">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-semibold text-gray-700 tracking-wide">
              Justice Advocates
            </h1>
            <p className="text-md text-gray-500 italic">
              Turning today's goals into a lasting impact.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <ContactInfo />
      </div>
      {/* Navigation Links */}
      <nav className="bg-yellow-500 p-2 text-blue-800">
        {/* Hamburger Menu for Mobile */}
        <button className="lg:hidden text-white p-2" onClick={clickHandler}>
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full bg-yellow-500 text-blue-800 lg:hidden transition-all duration-300 ease-in-out z-50`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li className="group">
              <a
                href="#"
                className="text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Home
              </a>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200 flex items-center"
              >
                Our Firm
                <ChevronDown className="ml-1 w-4 h-4" />
              </a>
              {/* Dropdown */}
              <ul className="absolute left-0 hidden group-hover:block bg-white text-gray-800 mt-2 rounded-md shadow-lg py-2 w-48 space-y-2 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                  >
                    Values
                  </a>
                </li>
              </ul>
            </li>

            <li className="group">
              <a
                href="#"
                className="text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Estate Planning
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Probate Law
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Real Estate Law
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Our Areas
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Articles + Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="lg:flex hidden flex-wrap justify-center lg:justify-start space-x-6 py-3 lg:px-16 relative">
          {/* Main Menu Links */}
          <li className="relative group">
            <a
              href="#"
              className="hover:bg-yellow-600 text-blue-800 transition duration-200 ease-in-out flex items-center px-3 py-2 rounded-md"
            >
              Home
            </a>
          </li>

          <li className="relative group">
            <a
              href="#"
              className="hover:bg-yellow-600 text-blue-800 transition duration-200 ease-in-out flex items-center px-3 py-2 rounded-md"
            >
              Our Firm
              <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            {/* Dropdown */}
            <ul className="absolute left-0 hidden group-hover:block bg-white text-gray-800 mt-2 rounded-md shadow-lg py-2 w-48 space-y-2 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 transition duration-200"
                >
                  Values
                </a>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <a
              href="#"
              className="hover:bg-yellow-600 text-blue-800 transition duration-200 ease-in-out flex items-center px-3 py-2 rounded-md"
            >
              Estate Planning
            </a>
          </li>

          <li className="relative group">
            <a
              href="#"
              className="hover:bg-yellow-600 text-blue-800 transition duration-200 ease-in-out flex items-center px-3 py-2 rounded-md"
            >
              Probate Law
            </a>
          </li>

          <li className="relative group">
            <a
              href="#"
              className="hover:bg-yellow-600 text-blue-800 transition duration-200 ease-in-out flex items-center px-3 py-2 rounded-md"
            >
              Real Estate Law
            </a>
          </li>

          <li className="relative group">
            <a
              href="#"
              className="hover:bg-yellow-600 text-blue-800 transition duration-200 ease-in-out flex items-center px-3 py-2 rounded-md"
            >
              Our Areas
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:bg-yellow-600 text-blue-800 transition duration-200 ease-in-out flex items-center px-3 py-2 rounded-md"
            >
              Articles
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
