"use client";
import { strapiUrl } from "@/apis/apiUrl";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PracticeAreasCreate = () => {
  const [practiceAreas, setPracticeAreas] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    video: null,
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleContentChange = (value) => {
    setFormData({ ...formData, content: value });
  };

  const handleSubmit = async () => {
    try {
      if (!formData.title || !formData.description || !formData.content) {
        alert("Title, description, and content are required!");
        return;
      }

      setIsSubmitting(true);
      const your_token = localStorage.getItem("adminToken");

      // Create FormData object to handle file uploads
      const submitFormData = new FormData();
      submitFormData.append(
        "data",
        JSON.stringify({
          title: formData.title,
          description: formData.description,
          content: formData.content,
        })
      );

      // Add files if they exist
      if (formData.image) {
        submitFormData.append("files.image", formData.image);
      }
      if (formData.video) {
        submitFormData.append("files.video", formData.video);
      }

      const response = await fetch(`${strapiUrl}/paractice-areas`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${your_token}`,
        },
        body: submitFormData,
      });

      if (!response.ok) {
        throw new Error("Failed to create practice area");
      }

      const result = await response.json();
      alert("Practice area submitted successfully!");

      // Update practice areas list
      setPracticeAreas([...practiceAreas, result.data]);

      // Reset form
      setFormData({
        title: "",
        description: "",
        image: null,
        video: null,
        content: "",
      });
    } catch (error) {
      console.error("Error submitting practice area:", error);
      alert("Failed to submit practice area. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-grow min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create Practice Area</h2>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter practice area title"
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter practice area description"
              className="block w-full p-2 border rounded-lg"
              rows="4"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Video
            </label>
            <input
              type="file"
              name="video"
              onChange={handleFileChange}
              accept="video/*"
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Content
            </label>
            <ReactQuill
              value={formData.content}
              onChange={handleContentChange}
              placeholder="Enter content for the practice area"
              className="block w-full p-2 rounded-lg mb-10"
              style={{ height: "300px" }}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-4 py-2 ${
              isSubmitting ? "bg-gray-400" : "bg-yellow-500 hover:bg-yellow-600"
            } text-white rounded-lg transition`}
          >
            {isSubmitting ? "Submitting..." : "Add Practice Area"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreasCreate;
