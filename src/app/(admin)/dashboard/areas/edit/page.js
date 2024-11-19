"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { strapiUrl, strapiUrlMedia } from "@/apis/apiUrl";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const PracticeAreaPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [practiceAreas, setPracticeAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch practice areas from Strapi
  useEffect(() => {
    fetchPracticeAreas();
  }, []);

  const fetchPracticeAreas = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${strapiUrl}/paractice-areas?populate=*&pagination[limit]=3&sort[0]=createdAt:desc`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch practice areas");
      const data = await response.json();
      const areas = data.data.map((area) => ({
        id: area.id,
        title: area.attributes.title,
        description: area.attributes.description || "",
        content: area.attributes.content || "",
        image:
          area.attributes.image?.data?.attributes?.url ||
          "/api/placeholder/800/400",
        video: area.attributes.video?.data?.attributes?.url,
      }));

      setPracticeAreas(areas);
    } catch (error) {
      console.error("Error fetching practice areas:", error);
    }
  };

  const handleEdit = (area) => {
    setSelectedArea(area);
    setTitle(area.title);
    setDescription(area.description);
    setContent(area.content);
    setImage(null);
    setVideo(null);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${strapiUrl}/paractice-areas/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to delete practice area");

      setPracticeAreas(practiceAreas.filter((area) => area.id !== id));
      alert("Practice area deleted successfully!");
    } catch (error) {
      console.error("Error deleting practice area:", error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedArea(null);
    setTitle("");
    setDescription("");
    setContent("");
    setImage(null);
    setVideo(null);
  };

  const handleModalSubmit = async () => {
    if (!title || !description || !content) {
      alert("Title, description, and content are required!");
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      let imgid = null;
      let videid = null;

      // Only call upload if image or video is present
      if (image || video) {
        const formData = new FormData();
        formData.append(
          "data",
          JSON.stringify({ title, description, content })
        );
        if (image) formData.append("files", image);
        if (video) formData.append("files", video);

        const response = await fetch(`${strapiUrl}/upload`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) throw new Error("Failed to upload files");
        const fields = await response.json();

        fields.forEach((val) => {
          if (val.mime.startsWith("video")) {
            videid = val.id;
          }
          if (val.mime.startsWith("image")) {
            imgid = val.id;
          }
        });
      }

      let dataTOsend = {
        data: {
          title,
          description,
          content,
          // Only include image and video if they exist
          ...(imgid && { image: imgid }),
          ...(videid && { video: videid }),
        },
      };

      const updateResponse = await fetch(
        `${strapiUrl}/paractice-areas/${selectedArea.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataTOsend),
        }
      );

      if (!updateResponse.ok) throw new Error("Failed to update practice area");

      fetchPracticeAreas();
      alert("Practice area updated successfully!");
      handleModalClose();
    } catch (error) {
      console.error("Error updating practice area:", error);
      alert("Failed to update practice area. Please try again.");
    }
  };

  return (
    <div className="flex-grow min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Practice Areas
        </h1>

        {/* Practice Areas Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left text-gray-700">Title</th>
                <th className="px-6 py-3 text-left text-gray-700">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-gray-700">Image</th>
                <th className="px-6 py-3 text-left text-gray-700">Video</th>
                <th className="px-6 py-3 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {practiceAreas.map((area) => (
                <tr key={area.id} className="border-b">
                  <td className="px-6 py-4 text-gray-700">{area.title}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {area.description}
                  </td>
                  <td className="px-6 py-4">
                    {area.image && (
                      <img
                        src={`${strapiUrlMedia}${area.image}`}
                        alt={area.title}
                        className="w-16 h-16 object-cover"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {area.video && (
                      <video width="160" height="90" controls>
                        <source
                          src={`${strapiUrlMedia}${area.video}`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEdit(area)}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(area.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for Edit Form */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Edit Practice Area
              </h2>

              {/* Title */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter the practice area title"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter a short description"
                />
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
                  placeholder="Write your practice area content here..."
                  className="bg-white"
                  modules={{
                    clipboard: {
                      matchVisual: false,
                    },
                  }}
                  style={{ height: "200px", marginBottom: 50 }}
                />
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Video Upload */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Upload Video
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setVideo(e.target.files[0])}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleModalClose}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded-lg mr-4"
                >
                  Cancel
                </button>
                <button
                  onClick={handleModalSubmit}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeAreaPage;
