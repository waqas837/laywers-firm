import React from "react";

const LawFirmLogos = () => {
  const firms = [
    { name: "Skadden, Arps, Slate, Meagher & Flom LLP" },
    { name: "Kirkland & Ellis LLP" },
    { name: "Latham & Watkins LLP" },
    { name: "Jones Day" },
    { name: "Gibson, Dunn & Crutcher LLP" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {firms.map((firm, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center ${
            index === firms.length - 1 ? "col-span-2" : ""
          }`}
        >
          <span className="text-lg font-italic text-gray-600">
            {firm.name.split(",")[0]},
          </span>
          <span className="text-lg font-medium text-gray-800">
            {firm.name.split(",")[1]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LawFirmLogos;
