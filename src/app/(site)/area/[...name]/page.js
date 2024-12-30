// app/area/[name]/page.js
import Link from "next/link";
import Image from "next/image";
import { strapiUrl, strapiUrlMedia } from "@/apis/apiUrl";

// Metadata for the page
// export async function generateMetadata({ params }) {
//   console.log("arams.name")
//   const titleQuery = params.name.split("-").join(" ");
//   const data = await fetchAreaDetail(titleQuery);

//   return {
//     title: `${data?.attributes?.title || "Practice Area"} | Your Law Firm Name`,
//     description:
//       data?.attributes?.description || "Learn more about our legal services",
//   };
// }

// Server-side data fetching
async function fetchAreaDetail(titleQuery) {
  try {
    const response = await fetch(
      `${strapiUrl}/paractice-areas?filters[title][$containsi]=${titleQuery}&populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // Add cache options
        next: {
          revalidate: 3600, // Revalidate every hour
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch area details");
    }

    const data = await response.json();
    // console.log("data", data);
    if (!data.data || data.data.length === 0) {
      throw new Error("Practice area not found");
    }

    return data.data[0];
  } catch (error) {
    console.error("Error fetching area details:", error);
    throw error;
  }
}

export default async function DetailArea({ params }) {
  const data = await fetchAreaDetail(params.name[0]);
  const areaData = data.attributes;
  return (
    <section className="max-w-screen-lg mx-auto p-6 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-4">
        {areaData.title}
      </h1>
      {/* Description */}
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-4">{areaData.description}</p>
      </div>
      {/* Image & Video Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex justify-center relative aspect-video">
          <img
            src={
              `${strapiUrlMedia}${areaData.image?.data?.attributes?.url}` ||
              "/api/placeholder/800/400"
            }
            alt={areaData.title}
            fill
            className="object-cover rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        {/* Video */}
        <div className="flex justify-center items-center aspect-video">
          {areaData.video?.data?.attributes?.url ? (
            <video
              src={`${strapiUrlMedia}${areaData.video.data.attributes.url}`}
              className="w-full h-full rounded-lg shadow-lg"
              title={`${areaData.title} Video`}
              controls
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
              Video coming soon
            </div>
          )}
        </div>
      </div>
      {/* content section */}
      <div dangerouslySetInnerHTML={{ __html: areaData?.content || "" }} />
      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-700 mb-4">
          If you need assistance with a {areaData.title.toLowerCase()} case,
          contact us today for a free consultation. Our experienced lawyers are
          ready to help you.
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
}

// Error component
// app/area/[name]/error.js
export function ErrorBoundary({ error }) {
  return (
    <div className="max-w-screen-lg mx-auto p-6 text-center">
      <p className="text-red-600 mb-4">
        {error.message || "Something went wrong"}
      </p>
      <Link
        href="/practice-areas"
        className="inline-block px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
      >
        Back to Practice Areas
      </Link>
    </div>
  );
}
