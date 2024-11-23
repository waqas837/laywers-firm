import React from "react";
import Image from "next/image";
import Link from "next/link";

const WillContests = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
        {/* Header Image */}
        <div className="relative h-64">
          <Image
            src="/images/will-contests.jpg" // Replace with your image URL
            alt="Will Contests - Legal Disputes"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Blog Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            Will Contests: Protecting Your Rights in Probate Disputes
          </h1>
          <p className="text-gray-600 mt-4">
            A will contest arises when there are disputes about the validity of a deceased individual’s will. These cases can be complex and emotionally charged. Our experienced attorneys can guide you through the process of challenging or defending a will.
          </p>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            Common Reasons for Will Contests
          </h2>
          <p className="text-gray-600 mt-2">
            Will contests often involve allegations of improper conduct or errors during the will’s creation. The most common reasons include:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Lack of mental capacity at the time of the will’s creation.</li>
            <li>Undue influence by someone close to the deceased.</li>
            <li>Fraud or forgery of the will.</li>
            <li>Improper execution, such as missing signatures or witnesses.</li>
            <li>Ambiguities or inconsistencies in the will’s language.</li>
          </ul>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            Steps Involved in Contesting a Will
          </h2>
          <p className="text-gray-600 mt-2">
            If you believe a will is invalid, the following steps are typically involved:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Filing a legal claim in probate court.</li>
            <li>Gathering evidence, such as medical records or witness testimony.</li>
            <li>Presenting your case before a probate judge.</li>
            <li>Resolving disputes through negotiation or litigation.</li>
          </ul>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            Defending Against Will Contests
          </h2>
          <p className="text-gray-600 mt-2">
            If you are an executor or beneficiary facing a will contest, we can help you:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Prove the will’s validity with proper documentation.</li>
            <li>Demonstrate the deceased’s intent and mental capacity.</li>
            <li>Defend against claims of undue influence or fraud.</li>
            <li>Navigate the probate process efficiently and effectively.</li>
          </ul>

          {/* Call to Action */}
          <div className="mt-8 bg-blue-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Need Help with a Will Contest?
            </h3>
            <p className="text-gray-700 mt-2">
              Whether you’re challenging or defending a will, our skilled legal
              team is here to protect your rights. Contact us today for
              personalized legal advice.
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
            <Link legacyBehavior href="/blogs/probate-law">
              <a className="hover:underline">Probate Law: Estate Administration</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blogs/family-trusts">
              <a className="hover:underline">Family Trusts: Securing Your Legacy</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blogs/asset-protection">
              <a className="hover:underline">Asset Protection: Shield Your Wealth</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WillContests;
