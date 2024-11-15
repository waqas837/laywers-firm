"use client";
import React, { useState } from "react";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formData, setFormData] = useState({
    profileImage: null,
    name: "",
    casesHandled: "",
    expertise: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData({ ...formData, profileImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddMember = () => {
    if (!formData.name || !formData.casesHandled || !formData.expertise) {
      alert("Please fill out all fields!");
      return;
    }

    setTeamMembers([...teamMembers, formData]);
    setFormData({
      profileImage: null,
      name: "",
      casesHandled: "",
      expertise: "",
    });
  };

  return (
    <div className="flex-grow min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Team Member</h2>

        {/* Form */}
        <div className="space-y-4">
          {/* Profile Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Profile Image
            </label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleInputChange}
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          {/* Name */}
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

          {/* Cases Handled */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Cases Handled
            </label>
            <input
              type="number"
              name="casesHandled"
              value={formData.casesHandled}
              onChange={handleInputChange}
              placeholder="Enter number of cases"
              className="block w-full p-2 border rounded-lg"
            />
          </div>

          {/* Expertise */}
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
              {member.profileImage && (
                <img
                  src={URL.createObjectURL(member.profileImage)}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {member.name}
              </h3>
              <p className="text-center text-gray-600">
                Cases Handled: {member.casesHandled}
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
