import React from "react";
import Image from "next/image";
import Link from "next/link";

const FamilyTrusts = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
        {/* Header Image */}
        <div className="relative h-64">
          <Image
            src="/images/family-trusts.jpg" // Replace with your image URL
            alt="Family Trusts"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Blog Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            Family Trusts: Secure Your Legacy for Generations
          </h1>
          <p className="text-gray-600 mt-4">
            A family trust is a powerful legal tool that allows you to manage
            and protect your family’s assets. Our law firm specializes in
            creating tailored trusts to ensure your hard-earned wealth is
            preserved and passed on according to your wishes.
          </p>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            What Is a Family Trust?
          </h2>
          <p className="text-gray-600 mt-2">
            A family trust is a legal arrangement where assets are held and
            managed by a trustee for the benefit of your family. It offers
            numerous benefits, including:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Protection of assets from legal claims and creditors.</li>
            <li>Efficient wealth transfer to future generations.</li>
            <li>Minimization of estate taxes and probate costs.</li>
            <li>Flexibility in managing your assets while you're alive.</li>
          </ul>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            Why Choose a Family Trust?
          </h2>
          <p className="text-gray-600 mt-2">
            Family trusts are particularly beneficial for individuals looking to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Secure financial stability for their children and heirs.</li>
            <li>Plan for unforeseen events, such as disability or lawsuits.</li>
            <li>Ensure proper management of business or real estate assets.</li>
          </ul>

          {/* Call to Action */}
          <div className="mt-8 bg-yellow-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Take the First Step Toward Peace of Mind
            </h3>
            <p className="text-gray-700 mt-2">
              Whether you're considering a family trust or need to review your
              existing one, our legal experts are here to help. Let us guide you
              in securing your family's legacy today.
            </p>
            <Link legacyBehavior href="/contact">
              <a className="block mt-4 bg-yellow-500 text-white px-6 py-2 rounded-md text-center shadow hover:bg-yellow-600 transition">
                Schedule a Consultation
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
            <Link legacyBehavior href="/blogs/individual-planning">
              <a className="hover:underline">Individual Planning: A Roadmap to Financial Security</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blogs/asset-protection">
              <a className="hover:underline">Protecting Your Assets: What You Need to Know</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blogs/estate-administration">
              <a className="hover:underline">Estate Administration: Simplifying Complex Processes</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FamilyTrusts;
