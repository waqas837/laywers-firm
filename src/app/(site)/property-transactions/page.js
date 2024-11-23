import React from 'react';

const PropertyTransactions = () => {
  return (
    <div className="px-8 py-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Property Transactions</h1>
      <img
        src="/path/to/your/image.jpg"
        alt="Property Transactions"
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">
        Property transactions involve the legal process of buying, selling, or transferring
        real estate. This can include residential, commercial, or industrial properties.
        Successful property transactions require understanding of both the legal requirements
        and the intricacies of the market.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Steps in Property Transactions:</h2>
      <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
        <li>Conducting property inspections and assessments</li>
        <li>Negotiating purchase or sale terms</li>
        <li>Reviewing and drafting legal contracts</li>
        <li>Conducting title searches to confirm ownership</li>
        <li>Securing financing and understanding mortgage terms</li>
        <li>Closing the deal and transferring ownership</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Legal Help is Essential</h2>
      <p className="text-lg text-gray-700 mb-6">
        Property transactions involve a variety of legal documents, financial agreements, and
        compliance issues that can be overwhelming without professional legal support. A lawyer
        specializing in real estate law ensures that all aspects of the transaction are handled
        correctly and that your interests are protected.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Expertise in Property Transactions</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our firm offers comprehensive legal services for property transactions. Whether you’re
        buying, selling, or leasing property, our experienced team will guide you through each
        step of the process to ensure a smooth and successful transaction.
      </p>

      <div className="my-6">
        <a
          href="/contact"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition duration-200"
        >
          Contact Us for Assistance with Property Transactions
        </a>
      </div>
    </div>
  );
};

export default PropertyTransactions;
