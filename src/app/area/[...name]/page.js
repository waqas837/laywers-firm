import React from "react";

const AreaPage = ({ params }) => {
  let { name } = params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full text-center">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-4">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-500">
          This area for <span className="font-bold text-yellow-500">{name}</span>{" "}
          is under construction.
        </p>
      </div>
    </div>
  );
};

export default AreaPage;
