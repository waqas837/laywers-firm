"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Our law firm specializes in injury, estate, and probate law. With a
            team of dedicated attorneys, we are committed to providing
            exceptional legal services and achieving the best outcomes for our
            clients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#our-firm" className="hover:text-gray-400">
                Our Firm
              </a>
            </li>
            <li>
              <a href="#estate-planning" className="hover:text-gray-400">
                Estate Planning
              </a>
            </li>
            <li>
              <a href="#probate-law" className="hover:text-gray-400">
                Probate Law
              </a>
            </li>
            <li>
              <a href="#real-estate-law" className="hover:text-gray-400">
                Real Estate Law
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-gray-400">
              +1 (123) 123-123
            </a>
          </p>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:info@lawfirm.com" className="hover:text-gray-400">
              info@lawfirm.com
            </a>
          </p>
          <p className="text-sm">
            Address: 123 Law Street, Suite 456, City, State, Zip
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="...Facebook Icon Path..." />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="...Twitter Icon Path..." />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="...LinkedIn Icon Path..." />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Law Firm. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
