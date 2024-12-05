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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Partners
        </h2>
        <p className="text-lg text-gray-600">
          Many leading companies have partnered with us, as we consistently
          provide excellent services and solutions.
        </p>
      </div>

      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white/90 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white/90 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>

        <div className="relative h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0"
                  : index < currentIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={image.src}
                  alt={`Company ${index + 1}`}
                  className="h-40 object-contain"
                />
              </div>
              <div className="absolute bottom-0 w-full px-6 py-4 text-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
