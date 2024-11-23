import React from "react";
import Image from "next/image";
import Link from "next/link";

const AssetProtection = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
        {/* Header Image */}
        <div className="relative h-64">
          <Image
            src="/images/asset-protection.jpg" // Replace with your image URL
            alt="Asset Protection"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Blog Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            Asset Protection: Shield Your Wealth from Unexpected Risks
          </h1>
          <p className="text-gray-600 mt-4">
            Asset protection is a proactive strategy to safeguard your financial
            resources from lawsuits, creditors, or unforeseen life events. Our
            legal team specializes in creating tailored solutions to ensure your
            assets remain secure for you and your family.
          </p>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            Why Asset Protection Matters
          </h2>
          <p className="text-gray-600 mt-2">
            Whether you’re a business owner, professional, or individual with
            significant assets, protecting your wealth is critical to:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Guard against frivolous lawsuits and legal claims.</li>
            <li>Minimize exposure to creditors and financial risks.</li>
            <li>Ensure your family’s financial future is secure.</li>
            <li>Preserve assets for retirement or generational transfer.</li>
          </ul>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            Strategies for Effective Asset Protection
          </h2>
          <p className="text-gray-600 mt-2">
            Implementing the right asset protection strategies depends on your
            unique situation. Common approaches include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Establishing family trusts and irrevocable trusts.</li>
            <li>Using limited liability entities (e.g., LLCs) to manage assets.</li>
            <li>Transferring at-risk assets to safer entities or accounts.</li>
            <li>Securing appropriate insurance coverage.</li>
          </ul>

          {/* Call to Action */}
          <div className="mt-8 bg-yellow-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Let Us Help You Secure Your Assets
            </h3>
            <p className="text-gray-700 mt-2">
              Protecting your wealth requires strategic planning and legal
              expertise. Our team is ready to provide customized solutions to
              fit your needs. Contact us today to start your asset protection
              journey.
            </p>
            <Link legacyBehavior href="/contact">
              <a className="block mt-4 bg-yellow-500 text-white px-6 py-2 rounded-md text-center shadow hover:bg-yellow-600 transition">
                Schedule a Free Consultation
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
            <Link legacyBehavior href="/blogs/family-trusts">
              <a className="hover:underline">Family Trusts: Secure Your Legacy</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blogs/estate-planning">
              <a className="hover:underline">Estate Planning: Preparing for the Future</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blogs/individual-planning">
              <a className="hover:underline">Individual Planning: Achieve Your Goals</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AssetProtection;
