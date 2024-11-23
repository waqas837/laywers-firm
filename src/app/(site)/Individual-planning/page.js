import React from "react";
import Image from "next/image";
import Link from "next/link";

const IndividualPlanning = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
        {/* Header Image */}
        <div className="relative h-64">
          <Image
            src="/images/individual-planning.jpg" // Replace with your image URL
            alt="Individual Planning"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Blog Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            Individual Planning for Injury Cases: Secure Your Future Today
          </h1>
          <p className="text-gray-600 mt-4">
            Injury cases can be overwhelming, but planning for the future
            ensures peace of mind and financial stability. Our law firm
            specializes in guiding individuals through the complexities of legal
            and financial planning after an injury. Whether you're securing
            compensation or safeguarding your assets, we’re here to help.
          </p>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            Why Is Individual Planning Important in Injury Cases?
          </h2>
          <p className="text-gray-600 mt-2">
            Planning is crucial to manage your recovery, protect your rights,
            and ensure a stable future for you and your family. Our tailored
            services focus on:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Evaluating your injury's impact on your financial health.</li>
            <li>Ensuring proper asset allocation to support your recovery.</li>
            <li>
              Protecting your family through personalized legal strategies.
            </li>
            <li>
              Providing professional guidance on trust or estate creation.
            </li>
          </ul>

          {/* Call to Action */}
          <div className="mt-8 bg-yellow-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Let Us Help You Build Your Future
            </h3>
            <p className="text-gray-700 mt-2">
              Contact us today to schedule a consultation with our legal
              experts. We’ll discuss your options and help you make informed
              decisions about your financial and legal future.
            </p>
            <Link href="/contact" legacyBehavior>
              <a className="block mt-4 bg-yellow-500 text-white px-6 py-2 rounded-md text-center shadow hover:bg-yellow-600 transition">
                Get in Touch
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Navigation */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800">
          Explore More Articles
        </h3>
        <ul className="list-disc list-inside mt-4 text-blue-600 space-y-2">
          <li>
            <Link href="/blogs/family-trusts" legacyBehavior>
              <a className="hover:underline">
                Family Trusts: Building Generational Wealth
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blogs/asset-protection" legacyBehavior>
              <a className="hover:underline">
                Protecting Your Assets from Legal Risks
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blogs/estate-administration" legacyBehavior>
              <a className="hover:underline">
                Understanding Estate Administration
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IndividualPlanning;
