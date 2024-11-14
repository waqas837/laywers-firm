import Link from "next/link";

const DetailArea = () => {
  return (
    <section className="max-w-screen-lg mx-auto p-6 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-4">
        Personal Injury Law
      </h1>

      {/* Description */}
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-4">
          Personal injury law covers a wide range of incidents where individuals
          suffer harm due to the negligence of others. In this section, we
          explore how personal injury cases work and what you need to know to
          protect your rights and seek compensation.
        </p>
      </div>

      {/* Image & Video Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/personal-injury.jpg"
            alt="Personal Injury Law"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Video */}
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.youtube.com/embed/1J3KzX04yXQ" // Example video link
            width="560"
            height="315"
            className="rounded-lg shadow-lg"
            title="Personal Injury Law Video"
          ></iframe>
        </div>
      </div>

      {/* Section Title */}
      <div>
        <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
          Why You Need a Personal Injury Lawyer
        </h3>
        <p className="text-lg text-gray-700">
          When you are injured in an accident, it can be difficult to navigate
          the complexities of the legal system. A personal injury lawyer can
          help you understand your rights, determine the amount of compensation
          you deserve, and guide you through the entire legal process. Whether
          your injury occurred on the road, at work, or in a public place, our
          team of expert lawyers is here to help you get the compensation you
          deserve.
        </p>
      </div>

      {/* Section Title */}
      <div>
        <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
          Common Types of Personal Injury Cases
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Car Accidents</li>
          <li>Slip and Fall Accidents</li>
          <li>Workplace Injuries</li>
          <li>Medical Malpractice</li>
          <li>Dog Bites</li>
          <li>Product Liability</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-700 mb-4">
          If you or a loved one has suffered a personal injury, contact us today
          for a free consultation. Our experienced lawyers are ready to help you
          fight for the justice and compensation you deserve.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  );
};

export default DetailArea;
