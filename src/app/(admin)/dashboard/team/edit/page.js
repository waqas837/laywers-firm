"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { strapiUrl, strapiUrlMedia } from "@/apis/apiUrl";

const TeamPage = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [teamProfileImage, setTeamProfileImage] = useState(null); // Changed to File object
  const [teamCasesHandled, setTeamCasesHandled] = useState("");
  const [teamExpertise, setTeamExpertise] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const STRAPI_URL = `${strapiUrl}/teams`;

  // Fetch all teams from Strapi
  const fetchTeams = async () => {
    const adminToken = localStorage.getItem("adminToken");
    try {
      const { data } = await axios.get(
        `${STRAPI_URL}?populate=*&pagination[limit]=3&sort[0]=createdAt:desc`,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );
      // console.log(data.data); // Debug: Check the API response
      setTeams(data.data); // Adjustif the response structure differs
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  // Handle opening the edit modal with selected team's data
  const handleEditTeam = (team) => {
    setSelectedTeam(team);
    setTeamName(team.attributes.name);
    setTeamProfileImage(null); // Reset image in case user chooses to upload a new one
    setTeamCasesHandled(team.attributes.case_handle);
    setTeamExpertise(team.attributes.expertise);
    setIsModalOpen(true);
  };

  // Handle submitting the edit
  const handleSubmitEdit = async () => {
    if (!selectedTeam) return;

    try {
      const token = localStorage.getItem("adminToken");

      // First, handle the image upload if a new image is selected
      let imageId = null;
      if (teamProfileImage && teamProfileImage instanceof File) {
        const imageFormData = new FormData();
        imageFormData.append("files", teamProfileImage);

        const uploadResponse = await fetch(
          `${STRAPI_URL.replace("/teams", "")}/upload`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: imageFormData,
          }
        );

        if (!uploadResponse.ok) {
          throw new Error("Failed to upload image");
        }

        const uploadedImage = await uploadResponse.json();
        imageId = uploadedImage[0].id; // Get the ID of the uploaded image
      }

      // Prepare the update data
      const updateData = {
        data: {
          name: teamName,
          case_handle: teamCasesHandled,
          expertise: teamExpertise,
        },
      };

      // Only include profileimg in the update if we have a new image
      if (imageId) {
        updateData.data.profileimg = imageId;
      }
    //  console.log("updateData", updateData)
      // Update the team data
      const response = await fetch(`${STRAPI_URL}/${selectedTeam.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error("Failed to update team");
      }

      const updatedTeam = await response.json();

      // Update local state with the new data
      setTeams(
        teams.map((team) =>
          team.id === selectedTeam.id
            ? {
                ...team,
                attributes: {
                  ...team.attributes,
                  name: teamName,
                  case_handle: teamCasesHandled,
                  expertise: teamExpertise,
                  profileimg: imageId
                    ? {
                        data: {
                          id: imageId,
                          // You might want to add other image attributes here
                        },
                      }
                    : team.attributes.profileimg,
                },
              }
            : team
        )
      );

      setIsModalOpen(false);
      setSelectedTeam(null);
      fetchTeams();
    } catch (error) {
      console.error("Error updating team:", error);
      // You might want to show an error message to the user here
    }
  };

  // Handle deleting a team
  const handleDeleteTeam = async (id) => {
    const adminToken = localStorage.getItem("adminToken");

    try {
      await axios.delete(`${STRAPI_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
      setTeams(teams.filter((team) => team.id !== id)); // Remove deleted team from local state
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-yellow-600 mb-6">
        Team Management
      </h1>

      {/* Display Team Members in Table */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-yellow-100">
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Profile Image</th>
            <th className="border px-4 py-2 text-left">Cases Handled</th>
            <th className="border px-4 py-2 text-left">Expertise</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id} className="hover:bg-yellow-50">
              <td className="border px-4 py-2">{team.attributes.name}</td>
              <td className="border px-4 py-2">
                <img
                  src={`${strapiUrlMedia}${team.attributes.profileimg?.data?.attributes?.url}`}
                  alt={team.attributes.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="border px-4 py-2">
                {team.attributes.case_handle}
              </td>
              <td className="border px-4 py-2">{team.attributes.expertise}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEditTeam(team)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTeam(team.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for editing team member */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">
              Edit Team Member
            </h3>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Profile Image</label>
              <input
                type="file"
                onChange={(e) => setTeamProfileImage(e.target.files[0])}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Cases Handled</label>
              <input
                type="number"
                value={teamCasesHandled}
                onChange={(e) => setTeamCasesHandled(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Expertise</label>
              <input
                type="text"
                value={teamExpertise}
                onChange={(e) => setTeamExpertise(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSubmitEdit}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
