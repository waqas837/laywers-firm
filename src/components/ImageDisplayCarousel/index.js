"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const images = [
    {
      src: "1.webp",
      title: "Law.com Pro",
    },
    {
      src: "2.webp",
      title: "Companies With Heart",
    },
    {
      src: "3.webp",
      title: "Florida Legal Awards",
    },
    {
      src: "4.webp",
      title: "SSDL",
    },
    {
      src: "5.webp",
      title: "BBB",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle keyboard navigation (Left and Right Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 my-10">
      {/* Heading and description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Partners
        </h2>
        <p className="text-lg text-gray-600">
          Many leading companies have partnered with us, as we consistently
          provide excellent services and solutions.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-64 flex justify-center items-center overflow-hidden rounded-lg">
        {/* Left Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-opacity-60 hover:bg-opacity-80 focus:outline-none z-10"
          tabIndex={0}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        {/* Right Arrow Navigation */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-opacity-60 hover:bg-opacity-80 focus:outline-none z-10"
          tabIndex={0}
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-64 flex justify-center items-center"
            >
              <img
                src={image.src}
                alt={`Company ${index + 1}`}
                className="h-40 object-contain rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Carousel Caption */}
        <div className="absolute bottom-0 w-full px-6 py-4">
          <h3 className="text-2xl font-bold">{images[currentIndex].title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
