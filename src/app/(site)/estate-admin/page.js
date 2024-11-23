import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProbateLaw = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
        {/* Header Image */}
        <div className="relative h-64">
          <Image
            src="/images/probate-law.jpg" // Replace with your image URL
            alt="Probate Law - Estate Administration"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Blog Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            Probate Law: Navigating Estate Administration with Confidence
          </h1>
          <p className="text-gray-600 mt-4">
            Estate administration is a crucial part of probate law, involving
            the management and distribution of a deceased person's assets. Our
            legal experts guide clients through the complexities of this process
            with care and efficiency.
          </p>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            What is Estate Administration?
          </h2>
          <p className="text-gray-600 mt-2">
            Estate administration refers to the legal process of settling an
            estate, which includes:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Identifying and gathering the deceased's assets.</li>
            <li>Paying outstanding debts, taxes, and obligations.</li>
            <li>Distributing remaining assets to rightful heirs or beneficiaries.</li>
            <li>Ensuring the estate is settled in accordance with the will or state laws.</li>
          </ul>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            Challenges in Estate Administration
          </h2>
          <p className="text-gray-600 mt-2">
            Estate administration can be overwhelming, especially during an
            emotional time. Common challenges include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Disputes among heirs or beneficiaries.</li>
            <li>Complex legal requirements and paperwork.</li>
            <li>Handling debts or liabilities that exceed estate assets.</li>
            <li>Dealing with contested wills or legal claims against the estate.</li>
          </ul>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            How We Can Help
          </h2>
          <p className="text-gray-600 mt-2">
            At our firm, we provide comprehensive legal support for estate
            administration, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Guidance through the probate process.</li>
            <li>Managing court filings and legal documents.</li>
            <li>Resolving disputes among beneficiaries.</li>
            <li>Ensuring proper asset distribution.</li>
          </ul>

          {/* Call to Action */}
          <div className="mt-8 bg-blue-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Need Help with Estate Administration?
            </h3>
            <p className="text-gray-700 mt-2">
              Navigating probate law requires experience and precision. Let us
              handle the complexities so you can focus on what matters most.
              Contact us today for a consultation.
            </p>
            <Link legacyBehavior href="/contact">
              <a className="block mt-4 bg-blue-500 text-white px-6 py-2 rounded-md text-center shadow hover:bg-blue-600 transition">
                Schedule Your Consultation
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Navigation */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800">
          Explore Related Topics
        </h3>
        <ul className="list-disc list-inside mt-4 text-blue-600 space-y-2">
          <li>
            <Link legacyBehavior href="/blogs/asset-protection">
              <a className="hover:underline">Asset Protection: Shield Your Wealth</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blogs/family-trusts">
              <a className="hover:underline">Family Trusts: Securing Your Legacy</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blogs/estate-planning">
              <a className="hover:underline">Estate Planning: Preparing for the Future</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProbateLaw;
