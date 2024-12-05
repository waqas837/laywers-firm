"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import ContactInfo from "../NavbarElements/ContactInfo";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdowns = Object.keys(dropdownRefs.current);
      const clickedOutsideAll = dropdowns.every(
        (key) =>
          dropdownRefs.current[key].current &&
          !dropdownRefs.current[key].current.contains(event.target)
      );

      // Check if the clicked element is a link
      const clickedOnLink = event.target.tagName === "A";

      if (clickedOutsideAll && !clickedOnLink) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    {
      label: "Home",
      href: "/",
      dropdown: null,
    },
    {
      label: "Our Firm",
      href: "/team",
    },
    {
      label: "Estate Planning",
      href: "#",
      dropdown: [
        { label: "Individual Planning", href: "/Individual-planning" },
        { label: "Family Trusts", href: "/family-trust" },
        { label: "Asset Protection", href: "/asset-protection" },
      ],
    },
    {
      label: "Probate Law",
      href: "#",
      dropdown: [
        { label: "Estate Administration", href: "/estate-admin" },
        { label: "Will Contests", href: "/will-contest" },
        { label: "Trust Litigation", href: "/trust-litigation" },
      ],
    },
    {
      label: "Real Estate Law",
      href: "#",
      dropdown: [
        { label: "Property Transactions", href: "/property-transactions" },
        { label: "Commercial Real Estate", href: "/commercial-real-estate" },
        { label: "Residential Disputes", href: "/residential-disputes" },
      ],
    },
    {
      label: "Our Areas",
      href: "areas",
    },
    {
      label: "Articles",
      href: "blogs",
    },
  ];

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Initialize dropdown refs
  navLinks.forEach((link) => {
    if (link.dropdown) {
      dropdownRefs.current[link.label] = React.createRef();
    }
  });

  const renderNavLinks = (isMobile = false) => {
    return navLinks.map((link) => (
      <li
        key={link.label}
        className={`${isMobile ? "w-48" : ""} ${
          link.dropdown ? "relative" : ""
        }`}
      >
        {link.dropdown ? (
          <div>
            <button
              ref={link.dropdown ? dropdownRefs.current[link.label] : null}
              className={`
                ${isMobile ? "w-full text-lg font-semibold" : ""} 
                hover:bg-yellow-600 px-4 py-2 rounded-md 
                flex items-center justify-between transition duration-200
              `}
              onClick={() => toggleDropdown(link.label)}
            >
              {link.label}
              <ChevronDown
                className={`w-4 h-4 transform 
                ${openDropdown === link.label ? "rotate-180" : ""}`}
              />
            </button>

            {openDropdown === link.label && (
              <ul
                className={`
                  ${
                    isMobile ? "static w-full" : "absolute left-0 top-full w-56"
                  }
                  bg-white rounded-md shadow-lg mt-2 
                  overflow-hidden z-[999] 
                  transition-all duration-300 ease-in-out
                  opacity-100 max-h-96
                `}
              >
                {link.dropdown.map((subLink) => (
                  <li key={subLink.label}>
                    <Link
                      href={subLink.href}
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-white transition-all duration-200"
                    >
                      {subLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <Link
            href={link.href}
            className={`
              ${isMobile ? "block text-lg font-semibold" : ""} 
              hover:bg-yellow-600 px-4 py-2 rounded-md transition duration-200
            `}
          >
            {link.label}
          </Link>
        )}
      </li>
    ));
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Section with Logo and Contact (unchanged) */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-8 lg:px-16">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.webp"
            alt="Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <div className="text-center lg:text-left">
            <Link href={"/"} className="text-3xl font-semibold text-gray-700 tracking-wide">
              ¿Hablamos Español?
            </Link>
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
            {renderNavLinks(true)}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-between items-center space-x-6 py-3 px-16 w-full max-w-screen-xl mx-auto">
          {renderNavLinks()}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
