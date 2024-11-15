"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const PracticeAreaPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [practiceAreas, setPracticeAreas] = useState([
    {
      id: 1,
      title: "Corporate Law",
      description:
        "Corporate law encompasses the laws surrounding business and commerce.",
      image: "/api/placeholder/800/400",
    },
    {
      id: 2,
      title: "Family Law",
      description:
        "Family law deals with legal matters related to family relationships.",
      image: "/api/placeholder/800/400",
    },
    {
      id: 3,
      title: "Criminal Law",
      description:
        "Criminal law relates to crimes and punishment for those who commit them.",
      image: "/api/placeholder/800/400",
    },
    {
      id: 4,
      title: "Intellectual Property",
      description:
        "IP law protects creations of the mind, such as inventions, designs, and artistic works.",
      image: "/api/placeholder/800/400",
    },
  ]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    if (!title || !description) {
      alert("Title and description are required!");
      return;
    }

    const newArea = {
      id: practiceAreas.length + 1,
      title,
      description,
      image: image || "/api/placeholder/800/400",
    };
    setPracticeAreas([...practiceAreas, newArea]);

    alert("Practice Area submitted successfully!");
    setTitle("");
    setDescription("");
    setImage(null);
  };

  const handleEdit = (area) => {
    setSelectedArea(area);
    setTitle(area.title);
    setDescription(area.description);
    setImage(area.image);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setPracticeAreas(practiceAreas.filter((area) => area.id !== id));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedArea(null);
    setTitle("");
    setDescription("");
    setImage(null);
  };

  const handleModalSubmit = () => {
    if (!title || !description) {
      alert("Title and description are required!");
      return;
    }

    const updatedArea = {
      ...selectedArea,
      title,
      description,
      image: image || "/api/placeholder/800/400",
    };
    setPracticeAreas(
      practiceAreas.map((area) =>
        area.id === selectedArea.id ? updatedArea : area
      )
    );

    alert("Practice Area updated successfully!");
    handleModalClose();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
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
                        src={area.image}
                        alt={area.title}
                        className="w-16 h-16 object-cover"
                      />
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
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                  placeholder="Write your practice area description here..."
                  className="bg-white"
                  style={{ height: "200px", marginBottom: 50 }}
                />
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end">
                <button
                  onClick={handleModalClose}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-4"
                >
                  Cancel
                </button>
                <button
                  onClick={handleModalSubmit}
                  className="px-6 py-2 bg-yellow-500 text-white rounded-lg"
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
