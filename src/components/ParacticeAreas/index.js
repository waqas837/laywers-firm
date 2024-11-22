"use client";
import { useEffect, useState } from "react";
import {
  Scale,
  Car,
  Briefcase,
  HardHat,
  Building2,
  HeartPulse,
  Users,
  Shield,
  Truck,
  Dog,
  Baby,
  PersonStanding,
  Bus,
  Store,
  Plane,
  Ship,
  Train,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { strapiUrl } from "@/apis/apiUrl";

// Map practice areas to specific icons based on the area of law
const iconMap = {
  // Personal Injury
  "Personal Injury": PersonStanding,
  "Car Accidents": Car,
  "Truck Accidents": Truck,
  "Medical Malpractice": HeartPulse,
  "Workers Compensation": HardHat,
  "Workplace Injury": Briefcase,
  "Construction Accidents": HardHat,
  "Premises Liability": Building2,
  "Product Liability": Shield,
  "Wrongful Death": HeartPulse,

  // Family Law
  "Family Law": Users,
  "Child Custody": Baby,

  // Other Common Areas
  "Criminal Defense": Scale,
  "Real Estate": Building2,
  "Corporate Law": Briefcase,
  "Civil Rights": Users,
  "Animal Law": Dog,
  "Transportation Law": Bus,
  "Aviation Law": Plane,
  "Maritime Law": Ship,
  "Railroad Law": Train,
  "Commercial Law": Store,

  // Default icon if no match is found
  default: Scale,
};

// Skeleton loader component matching the exact design
const SkeletonCard = () => (
  <div className="flex items-center justify-center p-4 border border-yellow-200 bg-yellow-50 rounded-lg animate-pulse w-full">
    <div className="w-5 h-5 bg-yellow-200 rounded mr-2"></div>
    <div className="h-5 bg-yellow-200 rounded w-36"></div>
  </div>
);

const PracticeAreas = () => {
  const [practiceAreas, setPracticeAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPracticeAreas = async () => {
    try {
      setIsLoading(true);
      setError(null);

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
        icon: iconMap[area.attributes.title] || iconMap.default,
      }));

      setPracticeAreas(areas);
    } catch (error) {
      console.error("Error fetching practice areas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPracticeAreas();
  }, []);

  if (error) {
    return (
      <div className="text-center p-6 text-red-600">
        <p>{error}</p>
        <button
          onClick={fetchPracticeAreas}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-4">Our Practice Areas</h2>
      <p className="text-center text-gray-600 mb-6">
        We know that each injury impacts lives differently, and your story
        deserves to be heard. Whether your injury happened at work, on the road,
        or elsewhere, our dedicated attorneys will fight relentlessly for your
        maximum compensation. Our team has built a strong record of success
        handling
      </p>

      {isLoading ? (
        <div className="w-full max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Loader2 className="animate-spin text-yellow-500" size={24} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {practiceAreas.map((area) => (
            <Link
              key={area.id}
              href={`/area/${area.title}`}
              className="flex items-center p-4 border border-yellow-500 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors"
            >
              <div className="mr-2">
                <area.icon size={20} />
              </div>
              <span className="font-semibold">{area.title}</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default PracticeAreas;
