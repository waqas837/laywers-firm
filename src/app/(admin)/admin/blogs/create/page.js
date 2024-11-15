"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // Dynamically import Quill

const BlogCreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = () => {
    if (!title || !content) {
      alert("Title and content are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);
    if (video) formData.append("video", video);

    // Make API call to save blog data
    console.log("Form submitted:", { title, content, image, video });

    alert("Blog submitted successfully!");
    setTitle("");
    setContent("");
    setImage(null);
    setVideo(null);
  };

  return (
    <div className="flex-grow min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Create a Blog</h1>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the blog title"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Upload Image
          </label>
          <div className="border p-4 rounded-lg">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="block w-full text-center bg-gray-100 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
            >
              {image ? image.name : "Choose an image"}
            </label>
          </div>
        </div>

        {/* Video Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Upload Video
          </label>
          <div className="border p-4 rounded-lg">
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files?.[0] || null)}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="block w-full text-center bg-gray-100 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
            >
              {video ? video.name : "Choose a video"}
            </label>
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Content
          </label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your blog content here..."
            className="bg-white"
            style={{ height: "200px", marginBottom: 50 }}
          />
        </div>
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          Submit Blog
        </button>
      </div>
    </div>
  );
};

export default BlogCreatePage;
