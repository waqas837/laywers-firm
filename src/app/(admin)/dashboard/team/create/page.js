"use client";
import React, { useState } from "react";
import axios from "axios";
import { strapiUrl } from "@/apis/apiUrl";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formData, setFormData] = useState({
    profileimg: null,
    name: "",
    case_handle: "",
    expertise: "",
  });
  const [uploadStatus, setUploadStatus] = useState(null); // Track success/failure messages

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileimg") {
      setFormData({ ...formData, profileimg: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddMember = async () => {
    if (!formData.name || !formData.case_handle || !formData.expertise) {
      alert("Please fill out all fields!");
      return;
    }

    try {
      const adminToken = localStorage.getItem("adminToken");
      if (!adminToken) {
        alert("Unauthorized! Please log in.");
        return;
      }

      const formDataToSubmit = new FormData();
      formDataToSubmit.append("files.profileimg", formData.profileimg);
      formDataToSubmit.append(
        "data",
        JSON.stringify({
          name: formData.name,
          case_handle: formData.case_handle,
          expertise: formData.expertise,
        })
      );

      const response = await axios.post(
        `${strapiUrl}/teams`,
        formDataToSubmit,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Update state
      setTeamMembers([...teamMembers, response.data]);
      setUploadStatus("Team member added successfully!");
      setFormData({
        profileimg: null,
        name: "",
        case_handle: "",
        expertise: "",
      });
    } catch (error) {
      console.error("Error adding team member:", error);
      setUploadStatus("Failed to add team member. Please try again.");
    }

    // Clear the message after 5 seconds
    setTimeout(() => setUploadStatus(null), 5000);
  };

  return (
    <div className="flex-grow min-h-screen p-6  ">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Team Member</h2>

        {/* Success/Error Message */}
        {uploadStatus && (
          <div
            className={`p-4 mb-4 rounded-lg text-white ${
              uploadStatus.includes("successfully")
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {uploadStatus}
          </div>
        )}

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Profile Image
            </label>
            <input
              type="file"
              name="profileimg"
              accept="image/*"
              onChange={handleInputChange}
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter name"
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Cases Handled
            </label>
            <input
              type="number"
              name="case_handle"
              value={formData.case_handle}
              onChange={handleInputChange}
              placeholder="Enter number of cases"
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Expertise
            </label>
            <input
              type="text"
              name="expertise"
              value={formData.expertise}
              onChange={handleInputChange}
              placeholder="Enter area of expertise"
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          <button
            onClick={handleAddMember}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Add Member
          </button>
        </div>
      </div>

      {/* Team Display */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              {member.profileimg && (
                <img
                  src={URL.createObjectURL(member.profileimg)}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {member.name}
              </h3>
              <p className="text-center text-gray-600">
                Cases Handled: {member.case_handle}
              </p>
              <p className="text-center text-gray-600">
                Expertise: {member.expertise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
