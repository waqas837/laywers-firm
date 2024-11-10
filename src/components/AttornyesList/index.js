import { Briefcase, Award } from "lucide-react"; // Example icons
import Link from "next/link"; // Import Link from Next.js

function AttorneysList() {
  const attorneys = [
    {
      name: "John Doe",
      position: "Senior Attorney",
      casesHandled: 120,
      imageUrl: "/1i.jpg", // Replace with actual image path
    },
    {
      name: "Jane Smith",
      position: "Attorney",
      casesHandled: 85,
      imageUrl: "/2i.jpg", // Replace with actual image path
    },
    {
      name: "Mike Johnson",
      position: "Junior Attorney",
      casesHandled: 45,
      imageUrl: "3i.jpg", // Replace with actual image path
    },
    {
      name: "Emily Davis",
      position: "Lead Attorney",
      casesHandled: 160,
      imageUrl: "/4i.jpg", // Replace with actual image path
    },
    {
      name: "David Brown",
      position: "Senior Attorney",
      casesHandled: 130,
      imageUrl: "5i.jpg", // Replace with actual image path
    },
    {
      name: "Sophia Martinez",
      position: "Attorney",
      casesHandled: 95,
      imageUrl: "/6i.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="flex flex-col items-center p-6 my-20">
      <h2 className="text-3xl font-bold mb-4">Meet Our Attorneys</h2>
      <p className="text-center text-gray-600 mb-6 max-w-xl">
        Our team of experienced attorneys is dedicated to fighting for your
        rights. Get to know the people who will handle your case with expertise
        and passion.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attorneys.map((attorney, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-yellow-500 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
          >
            <img
              src={attorney.imageUrl}
              alt={attorney.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-yellow-800">
                {attorney.name}
              </h3>
              <p className="text-yellow-600">{attorney.position}</p>
              <div className="mt-2 flex items-center justify-center text-yellow-800">
                <Briefcase size={18} className="mr-1" />
                <span>{attorney.casesHandled} Cases Handled</span>
              </div>
              <div className="mt-3 flex items-center justify-center text-yellow-800">
                <Award size={18} className="mr-1" />
                <span>Expert in Personal Injury</span>{" "}
                {/* Customize the expertise */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Meet the team button */}
      <div className="mt-8">
        <Link
          href="/team"
          className="inline-block px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Meet the Team
        </Link>
      </div>
    </section>
  );
}

export default AttorneysList;
