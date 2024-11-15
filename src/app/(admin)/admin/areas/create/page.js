"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS

const PracticeAreasCreate = () => {
  const [practiceAreas, setPracticeAreas] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    video: "",
    content: "", // Quill content
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContentChange = (value) => {
    setFormData({ ...formData, content: value });
  };

  const handleAddPracticeArea = () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.image ||
      !formData.video ||
      !formData.content
    ) {
      alert("Please fill out all fields!");
      return;
    }

    setPracticeAreas([...practiceAreas, formData]);
    setFormData({
      title: "",
      description: "",
      image: "",
      video: "",
      content: "",
    });
  };

  return (
    <div className="flex-grow min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create Practice Area</h2>

        {/* Form */}
        <div className="space-y-4">
          {/* Title */}
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

          {/* Description */}
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

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          {/* Video URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Video URL
            </label>
            <input
              type="text"
              name="video"
              value={formData.video}
              onChange={handleInputChange}
              placeholder="Enter video URL"
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          {/* Quill Content */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Content
            </label>
            <ReactQuill
              value={formData.content}
              onChange={handleContentChange}
              placeholder="Enter content for the practice area"
              className="block w-full p-2 rounded-lg mb-10"
              style={{ height: "300px" }} // Set the height of the Quill editor
            />
          </div>

          <button
            onClick={handleAddPracticeArea}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Add Practice Area
          </button>
        </div>
      </div>

      {/* Practice Areas Display */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Practice Areas
        </h2>
        {practiceAreas.length === 0 ? (
          <p className="text-gray-600">No practice areas added yet.</p>
        ) : (
          <div className="space-y-4">
            {practiceAreas.map((practiceArea, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  {practiceArea.title}
                </h3>
                <p className="text-gray-600">{practiceArea.description}</p>
                <img
                  src={practiceArea.image}
                  alt="Practice Area"
                  className="w-full h-auto mt-4"
                />
                <div className="mt-4">
                  <strong>Video:</strong>
                  <iframe
                    src={practiceArea.video}
                    width="560"
                    height="315"
                    className="mt-2"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4">
                  <strong>Content:</strong>
                  <div
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: practiceArea.content }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeAreasCreate;
