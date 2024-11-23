import React from 'react';

const TrustLitigation = () => {
  return (
    <div className="px-8 py-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Trust Litigation</h1>
      <img
        src="/path/to/your/image.jpg"
        alt="Trust Litigation"
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">
        Trust litigation involves resolving disputes over the validity and execution of trusts.
        This can include disagreements over the terms of the trust, the trustee's duties, or the
        distribution of assets. Whether you are a trustee, beneficiary, or family member, trust
        litigation can be complex and require expert legal guidance.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Aspects of Trust Litigation:</h2>
      <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
        <li>Disputes over the trust's validity</li>
        <li>Challenges regarding trustee actions or inactions</li>
        <li>Beneficiary claims and inheritance disputes</li>
        <li>Claims of undue influence or fraud in trust creation</li>
        <li>Disagreements over the interpretation of trust provisions</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">When Do You Need Legal Assistance?</h2>
      <p className="text-lg text-gray-700 mb-6">
        If you find yourself involved in any disputes related to trust administration or need to
        challenge a trust, seeking legal assistance from experienced attorneys is crucial. They
        can help navigate complex legal procedures and protect your rights.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Can Help</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our firm has extensive experience in trust litigation. Whether you're looking to challenge
        the validity of a trust or need assistance with a trustee's misconduct, our team is here to
        support you. We will guide you through each step and ensure your case is handled with the
        utmost care and attention.
      </p>

      <div className="my-6">
        <a
          href="/contact"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition duration-200"
        >
          Contact Us for Legal Assistance
        </a>
      </div>
    </div>
  );
};

export default TrustLitigation;
