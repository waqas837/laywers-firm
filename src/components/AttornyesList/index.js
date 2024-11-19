import { strapiUrl, strapiUrlMedia } from "@/apis/apiUrl";
import axios from "axios";
import { Briefcase, Award } from "lucide-react"; // Example icons
import Link from "next/link"; // Import Link from Next.js

async function AttorneysList() {
  const STRAPI_URL = `${strapiUrl}/teams`;

  // Fetch all teams from Strapi
  const fetchTeams = async () => {
    try {
      const { data } = await axios.get(
        `${STRAPI_URL}?populate=profileimg&pagination[limit]=6&sort[0]=createdAt:desc`
      );
      return data.data; // Return the data for use in the component
    } catch (error) {
      console.error("Error fetching teams:", error);
      return []; // Return empty array in case of error
    }
  };

  const attorneys = await fetchTeams(); // Fetch attorneys from the API

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
              src={
                `${strapiUrlMedia}${attorney.attributes.profileimg?.data?.attributes?.url}` ||
                "/default.jpg"
              } // Fallback to a default image if profile image is not available
              alt={attorney.attributes.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-yellow-800">
                {attorney.attributes.name}
              </h3>
              <p className="text-yellow-600">
                {attorney.attributes.position || "Attorney"}
              </p>
              <div className="mt-2 flex items-center justify-center text-yellow-800">
                <Briefcase size={18} className="mr-1" />
                <span>{attorney.attributes.case_handle} Cases Handled</span>
              </div>
              <div className="mt-3 flex items-center justify-center text-yellow-800">
                <Award size={18} className="mr-1" />
                <span>
                  {attorney.attributes.expertise || "Expert in Personal Injury"}
                </span>{" "}
                {/* Customize expertise */}
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
