"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { strapiUrl } from "@/apis/apiUrl";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const BlogCreatePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    content: "",
  });
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  // Handle title change and automatically generate slug
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setFormData({
      ...formData,
      title: newTitle,
      slug: generateSlug(newTitle),
    });
  };

  // Handle title change and automatically generate slug
  const handledescriptionChange = (e) => {
    const description = e.target.value;
    setFormData({
      ...formData,
      description,
    });
  };

  // Handle manual slug change
  const handleSlugChange = (e) => {
    setFormData({
      ...formData,
      slug: generateSlug(e.target.value),
    });
  };

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle video upload and preview
  const handleVideoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      if (
        !formData.title ||
        !formData.description ||
        !formData.slug ||
        !formData.content
      ) {
        alert("Title, slug, and content are required!");
        return;
      }

      setIsSubmitting(true);
      const your_token = localStorage.getItem("adminToken");

      // Create FormData object to handle file uploads
      const submitFormData = new FormData();

      // Add blog data
      submitFormData.append(
        "data",
        JSON.stringify({
          title: formData.title,
          description: formData.description,
          slug: formData.slug,
          content: formData.content,
        })
      );

      // Add files if they exist
      if (image) {
        submitFormData.append("files.image", image);
      }
      if (video) {
        submitFormData.append("files.video", video);
      }

      const response = await fetch(`${strapiUrl}/blogs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${your_token}`,
        },
        body: submitFormData,
      });

      if (!response.ok) {
        throw new Error("Failed to create blog post");
      }

      alert("Blog submitted successfully!");

      // Reset form
      setFormData({ title: "", slug: "", content: "", description: "" });
      setImage(null);
      setVideo(null);
      setImagePreview(null);
      setVideoPreview(null);
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Failed to submit blog. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            value={formData.title}
            onChange={handleTitleChange}
            placeholder="Enter the blog title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={formData.description}
            onChange={handledescriptionChange}
            placeholder="Enter the blog meta description"
          />
        </div>

        {/* Slug */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Slug</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={formData.slug}
            onChange={handleSlugChange}
            placeholder="blog-post-url-slug"
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
              onChange={handleImageChange}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="block w-full text-center bg-gray-100 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
            >
              {image ? image.name : "Choose an image"}
            </label>
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
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
              onChange={handleVideoChange}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="block w-full text-center bg-gray-100 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
            >
              {video ? video.name : "Choose a video"}
            </label>
            {videoPreview && (
              <div className="mt-4">
                <video
                  src={videoPreview}
                  controls
                  className="max-w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Content
          </label>
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={(content) => setFormData({ ...formData, content })}
            placeholder="Write your blog content here..."
            className="bg-white"
            style={{ height: "200px", marginBottom: 50 }}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg transition
            ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-yellow-600"
            }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Blog"}
        </button>
      </div>
    </div>
  );
};

export default BlogCreatePage;
