import React from "react";
import getBlogs from "@/apis/GetBlogs";
import { strapiUrlMedia } from "@/apis/apiUrl";

const BlogDetail = async ({ params }) => {
  let slug = params.slug;
  let blogs = await getBlogs(slug);
  
  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Main Content Section */}
        <div className="lg:flex">
          {/* Left Column for Blog Content */}
          <div className="lg:w-3/4 bg-white shadow-lg rounded-lg p-8">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-yellow-600 mb-6">
              {blogs.data[0]?.attributes?.title || "Blog Title"}{" "}
              {/* Dynamically displaying blog title */}
            </h1>
            {/* Blog Image */}
            <div className="mb-8">
              <img
                src={
                  `${strapiUrlMedia}${blogs?.data?.[0]?.attributes?.image?.data?.[0]?.attributes?.url}` ||
                  "https://via.placeholder.com/1200x600"
                } // Dynamically display the blog image
                alt="Blog Image"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Video Section */}
            <div className="mb-8">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  className="w-full h-full rounded-md"
                  controls
                  autoPlay
                  muted
                  src={`${strapiUrlMedia}${blogs.data[0]?.attributes?.video.data[0].attributes.url}`}
                  title="Blog Video"
                />
              </div>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: blogs.data[0].attributes.content,
              }}
            ></div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
