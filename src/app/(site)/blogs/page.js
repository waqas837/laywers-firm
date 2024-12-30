"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { strapiUrl, strapiUrlMedia } from "@/apis/apiUrl";

function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text?.split(" ").length || 0;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
}

function AllBlogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${strapiUrl}/blogs?populate=*&pagination&sort[0]=createdAt:desc`
        );
        const data = await response.json();
        // console.log("Fetched data:", data);
        setBlogPosts(data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-800"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-10">
          Informative Articles on Legal Topics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-yellow-500 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              {post.attributes.image?.data?.[0] && (
                <div className="relative w-full h-48">
                  <img
                    src={`${strapiUrlMedia}${post.attributes.image.data[0].attributes.formats.medium.url}`}
                    alt={post.attributes.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                  {post.attributes.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {post.attributes.description || "No description available"}
                </p>

                {/* Date */}
                <p className="text-sm text-gray-600 mb-2">
                  Published:{" "}
                  {new Date(post.attributes.publishedAt).toLocaleDateString()}
                </p>

                {/* Reading time */}
                <p className="text-sm text-gray-600 mb-4">
                  Estimated Reading Time:{" "}
                  {calculateReadingTime(post.attributes.description)} minute
                  {calculateReadingTime(post.attributes.description) > 1
                    ? "s"
                    : ""}
                </p>

                <Link
                  href={`/blog/${post.attributes.slug}`}
                  className="text-yellow-800 font-semibold hover:text-yellow-600 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllBlogs;
