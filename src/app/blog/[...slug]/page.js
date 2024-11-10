import React from "react";

const BlogDetail = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Main Content Section */}
        <div className="lg:flex">
          {/* Left Column for Blog Content */}
          <div className="lg:w-3/4 bg-white shadow-lg rounded-lg p-8">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-yellow-600 mb-6">
              Understanding Personal Injury Law
            </h1>

            {/* Blog Image */}
            <div className="mb-8">
              <img
                src="https://via.placeholder.com/1200x600" // Replace with your image URL
                alt="Personal Injury Law"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Video Section */}
            <div className="mb-8">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/VIDEO_ID" // Replace VIDEO_ID with actual video id
                  title="Personal Injury Law Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Table of Contents (Bullet List) */}
            <div className="top-10">
              <h2 className="text-xl font-semibold text-yellow-600 mb-4">
                Table of Contents
              </h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>
                  <a
                    href="#what-is-personal-injury"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    What is Personal Injury Law?
                  </a>
                </li>
                <li>
                  <a
                    href="#key-concepts"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    Key Concepts in Personal Injury Law
                  </a>
                </li>
                <li>
                  <a
                    href="#common-claims"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    Common Types of Personal Injury Claims
                  </a>
                </li>
                <li>
                  <a
                    href="#choosing-a-lawyer"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    How to Choose a Personal Injury Lawyer
                  </a>
                </li>
                <li>
                  <a
                    href="#protect-rights"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    Steps to Protect Your Rights
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    Frequently Asked Questions (FAQ)
                  </a>
                </li>
              </ul>
            </div>

            {/* Article Content */}
            <div className="space-y-6 mt-10">
              <h2
                id="what-is-personal-injury"
                className="text-2xl font-semibold text-gray-800"
              >
                What is Personal Injury Law?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Personal injury law provides legal protection to people harmed
                by another person’s negligence or intentional acts. These laws
                help victims seek compensation for damages such as medical
                expenses, lost wages, and emotional suffering.
              </p>

              <h2
                id="key-concepts"
                className="text-2xl font-semibold text-gray-800"
              >
                Key Concepts in Personal Injury Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Key areas include negligence, liability, and damages.
                Understanding these concepts helps individuals determine if they
                have a case and what they might recover through a lawsuit.
              </p>

              <h2
                id="common-claims"
                className="text-2xl font-semibold text-gray-800"
              >
                Common Types of Personal Injury Claims
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Personal injury claims can arise from a wide range of accidents,
                including:
              </p>
              <ul className="list-disc pl-5 mt-3">
                <li>Car accidents</li>
                <li>Slip and fall accidents</li>
                <li>Medical malpractice</li>
                <li>Product liability</li>
                <li>Workplace injuries</li>
                <li>Wrongful death</li>
              </ul>

              <h2
                id="choosing-a-lawyer"
                className="text-2xl font-semibold text-gray-800"
              >
                How to Choose a Personal Injury Lawyer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Choosing the right personal injury lawyer is crucial for the
                success of your case. Here are some tips for selecting a good
                attorney:
              </p>
              <ul className="list-disc pl-5 mt-3">
                <li>
                  Look for experience in handling personal injury cases similar
                  to yours.
                </li>
                <li>Check reviews and testimonials from previous clients.</li>
                <li>Ensure they offer a free consultation.</li>
                <li>
                  Ask about their contingency fee structure (they get paid only
                  if you win).
                </li>
              </ul>

              <h2
                id="protect-rights"
                className="text-2xl font-semibold text-gray-800"
              >
                Steps to Protect Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Protecting your rights after an injury involves documenting the
                incident, seeking medical attention, and consulting with a
                qualified attorney. These actions can significantly impact the
                success of your case.
              </p>

              <h2 id="faq" className="text-2xl font-semibold text-gray-800">
                Frequently Asked Questions (FAQ)
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold text-gray-800">
                    <strong>Q:</strong> How long do I have to file a personal
                    injury lawsuit?
                  </p>
                  <p className="text-gray-700">
                    A: In most states, the statute of limitations for filing a
                    personal injury lawsuit is two to three years from the date
                    of the accident. However, it's important to consult with an
                    attorney promptly to avoid missing any deadlines.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold text-gray-800">
                    <strong>Q:</strong> How much compensation can I get for my
                    injury?
                  </p>
                  <p className="text-gray-700">
                    A: Compensation depends on the severity of the injury,
                    medical expenses, lost wages, pain and suffering, and other
                    factors. An attorney will help you assess the potential
                    value of your case.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Personal injury law can be complex, but understanding your
                rights is essential. Consult a professional if you believe you
                have a case to ensure your interests are protected.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/4 bg-yellow-50 p-6 ml-8 mt-8 lg:mt-0 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">
              Related Articles
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-yellow-600 hover:text-yellow-500">
                  How to File a Personal Injury Claim
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-600 hover:text-yellow-500">
                  What to Do After a Car Accident
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-600 hover:text-yellow-500">
                  Top 5 Things to Know About Workers' Compensation
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-600 hover:text-yellow-500">
                  How to Find the Right Personal Injury Lawyer
                </a>
              </li>
            </ul>

            {/* Side Video Section */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Side Video: Personal Injury Laws
              </h4>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/VIDEO_ID_2" // Replace VIDEO_ID_2 with another video ID
                  title="Side Video on Personal Injury Laws"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
