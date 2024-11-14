"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Function to calculate reading time in minutes
function calculateReadingTime(text) {
  const wordsPerMinute = 200; // Average reading speed (words per minute)
  const wordCount = text.split(" ").length; // Count words in the text
  const minutes = Math.ceil(wordCount / wordsPerMinute); // Round up the result
  return minutes;
}

// Mock blog data for pagination
const allBlogPosts = [
  {
    title: "Understanding Personal Injury Law",
    description:
      "Personal injury law covers a wide range of incidents. In this article, we break down key concepts and what you need to know to protect your rights.",
    content:
      "Personal injury law covers a wide range of incidents. This is where the description text would be expanded with more content to make it more realistic and allow for a word count calculation.",
    imageUrl: "/1c.webp", // Replace with actual image path
    link: "/blog/understanding-personal-injury-law", // Link to the full article
  },
  {
    title: "What to Do After a Car Accident",
    description:
      "If you’ve been in a car accident, there are steps you must take immediately. This article guides you through the process to ensure you are fully protected.",
    content:
      "If you’ve been in a car accident, there are steps you must take immediately. We provide you with detailed steps and insights on how to handle the situation.",
    imageUrl: "/2c.png", // Replace with actual image path
    link: "/blog/what-to-do-after-a-car-accident", // Link to the full article
  },
  {
    title: "The Importance of Medical Malpractice Claims",
    description:
      "Medical malpractice can have serious consequences. Learn how to protect yourself and navigate the claims process in this in-depth article.",
    content:
      "Medical malpractice can have serious consequences. We explain the process for filing a claim and how to get the compensation you deserve.",
    imageUrl: "/3c.jpg", // Replace with actual image path
    link: "/blog/importance-of-medical-malpractice-claims", // Link to the full article
  },
  // Add more blog posts as needed
];

const blogsPerPage = 3; // Number of blog posts per page

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the starting and ending index for the blog posts
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  const currentBlogs = allBlogPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allBlogPosts.length / blogsPerPage);

  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-10">
          Informative Articles on Legal Topics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((post, index) => (
            <div
              key={index}
              className="bg-white border border-yellow-500 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.description}</p>

                {/* Display reading time */}
                <p className="text-sm text-gray-600 mb-4">
                  Estimated Reading Time: {calculateReadingTime(post.content)}{" "}
                  minute{calculateReadingTime(post.content) > 1 ? "s" : ""}
                </p>

                <Link
                  href={post.link}
                  className="text-yellow-800 font-semibold hover:text-yellow-600 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <nav className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-yellow-800 text-white rounded-lg disabled:opacity-50 hover:bg-yellow-600 transition-colors"
            >
              Previous
            </button>

            <span className="text-xl text-yellow-800">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-yellow-800 text-white rounded-lg disabled:opacity-50 hover:bg-yellow-600 transition-colors"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
