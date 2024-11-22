import Link from "next/link";
import Image from "next/image";
import { strapiUrl, strapiUrlMedia } from "@/apis/apiUrl";

const fetchPracticeAreas = async () => {
  try {
    const response = await fetch(
      `${strapiUrl}/paractice-areas?populate=*&pagination[limit]=3&sort[0]=createdAt:desc`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch practice areas");
    const data = await response.json();
    const areas = data.data.map((area) => ({
      id: area.id,
      title: area.attributes.title,
      description: area.attributes.description,
      image:
        area.attributes.image?.data?.attributes?.url ||
        "/api/placeholder/800/400",
      video: area.attributes.video?.data?.attributes?.url,
    }));

    return areas;
  } catch (error) {
    console.error("Error fetching practice areas:", error);
    return [];
  }
};

const PracticeAreas = async () => {
  const practiceAreas = await fetchPracticeAreas();

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Practice Areas
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We understand that each injury impacts lives differently. Our
          dedicated attorneys are committed to fighting relentlessly for your
          maximum compensation, no matter where or how your injury occurred.
        </p>
      </div>

      {practiceAreas.length === 0 ? (
        <div className="text-center text-gray-500">
          No practice areas available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 w-full">
                <img
                  src={`${strapiUrlMedia}${area.image}`}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {area.description}
                </p>
                <Link
                  href={`/area/${area.title}`}
                  className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PracticeAreas;
