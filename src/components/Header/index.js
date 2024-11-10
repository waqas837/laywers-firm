"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import ContactInfo from "../NavbarElements/ContactInfo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md">
      {/* Top Section with Logo and Contact */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-8 lg:px-16">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.webp"
            alt="Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-semibold text-gray-700 tracking-wide">
              ¿Hablamos Español?
            </h1>
            <p className="text-md text-gray-500 italic">
              Turning today's goals into a lasting impact.
            </p>
          </div>
        </div>
        <ContactInfo />
      </div>

      {/* Navigation */}
      <nav className="bg-yellow-500 p-2 text-blue-800 relative">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
          } lg:hidden absolute top-full left-0 w-full bg-yellow-500 z-50`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li className="w-48">
              <a
                href="#"
                className="block text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Home
              </a>
            </li>
            <li className="relative w-48">
              <button
                ref={buttonRef}
                className="w-full text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md flex items-center justify-between transition duration-200"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Our Firm
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <ul
                  ref={dropdownRef}
                  className="bg-white rounded-md shadow-lg mt-2 w-full overflow-hidden z-[999]"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-white transition-all duration-200"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-white transition-all duration-200"
                    >
                      History
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-white transition-all duration-200"
                    >
                      Values
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="w-48">
              <a
                href="#"
                className="block text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Estate Planning
              </a>
            </li>
            <li className="w-48">
              <a
                href="#"
                className="block text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Probate Law
              </a>
            </li>
            <li className="w-48">
              <a
                href="#"
                className="block text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Real Estate Law
              </a>
            </li>
            <li className="w-48">
              <a
                href="#"
                className="block text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Our Areas
              </a>
            </li>
            <li className="w-48">
              <a
                href="#"
                className="block text-lg font-semibold hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200"
              >
                Articles
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-start space-x-6 py-3 px-16">
          <li>
            <a
              href="#"
              className="hover:bg-yellow-600 px-3 py-2 rounded-md transition duration-200"
            >
              Home
            </a>
          </li>
          <li className="relative">
            <button
              ref={buttonRef}
              className="hover:bg-yellow-600 px-3 py-2 rounded-md flex items-center transition duration-200"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Our Firm
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <ul
                ref={dropdownRef}
                className="absolute left-0 top-full bg-white rounded-md shadow-lg mt-2 w-48 overflow-hidden"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-500 hover:text-white transition-all duration-200"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-500 hover:text-white transition-all duration-200"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-yellow-500 hover:text-white transition-all duration-200"
                  >
                    Values
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-yellow-600 px-3 py-2 rounded-md transition duration-200"
            >
              Estate Planning
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-yellow-600 px-3 py-2 rounded-md transition duration-200"
            >
              Probate Law
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-yellow-600 px-3 py-2 rounded-md transition duration-200"
            >
              Real Estate Law
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-yellow-600 px-3 py-2 rounded-md transition duration-200"
            >
              Our Areas
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-yellow-600 px-3 py-2 rounded-md transition duration-200"
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
