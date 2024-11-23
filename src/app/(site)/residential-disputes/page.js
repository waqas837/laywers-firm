import React from 'react';

const ResidentialDisputes = () => {
  return (
    <div className="px-8 py-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Residential Disputes</h1>
      <img
        src="/path/to/your/image.jpg"
        alt="Residential Disputes"
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">
        Residential disputes can arise between tenants, landlords, neighbors, or even family members
        over issues related to property ownership, rental agreements, maintenance, or living conditions.
        Resolving these conflicts requires a deep understanding of property law, tenancy rights, and legal procedures.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Common Types of Residential Disputes:</h2>
      <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
        <li>Landlord-tenant disputes over rent payments, maintenance, or lease violations</li>
        <li>Boundary disputes with neighbors</li>
        <li>Disagreements over property damage or repair responsibilities</li>
        <li>Eviction disputes</li>
        <li>Conflicts over home ownership or inheritance claims</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Resolve Residential Disputes</h2>
      <p className="text-lg text-gray-700 mb-6">
        Many residential disputes can be resolved through open communication, negotiation, and mediation.
        However, when these methods fail, legal intervention may be necessary. Our team of experienced attorneys
        can help you navigate the complexities of residential law and fight for a fair resolution.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why You Need Legal Representation</h2>
      <p className="text-lg text-gray-700 mb-6">
        Legal representation can ensure that your rights are protected and help you avoid costly mistakes
        during negotiations or legal proceedings. Our team will provide guidance on the best course of action
        for your specific situation, whether through alternative dispute resolution or litigation.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Expertise in Residential Disputes</h2>
      <p className="text-lg text-gray-700 mb-6">
        At our law firm, we specialize in handling residential disputes, including landlord-tenant disagreements,
        property damage claims, boundary issues, and more. We are committed to helping you find a fair and
        favorable solution to your case.
      </p>

      <div className="my-6">
        <a
          href="/contact"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition duration-200"
        >
          Contact Us for Help with Residential Disputes
        </a>
      </div>
    </div>
  );
};

export default ResidentialDisputes;
