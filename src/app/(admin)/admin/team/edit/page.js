"use client"
import { useState } from "react";

const TeamPage = () => {
  // Sample data for teams
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "John Doe",
      profileImage: "/api/placeholder/100/100",
      casesHandled: 25,
      expertise: "Corporate Law",
    },
    {
      id: 2,
      name: "Jane Smith",
      profileImage: "/api/placeholder/100/100",
      casesHandled: 40,
      expertise: "Family Law",
    },
  ]);

  // State for managing selected team for editing
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [teamProfileImage, setTeamProfileImage] = useState("");
  const [teamCasesHandled, setTeamCasesHandled] = useState("");
  const [teamExpertise, setTeamExpertise] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle editing an existing team member
  const handleEditTeam = (team) => {
    setSelectedTeam(team);
    setTeamName(team.name);
    setTeamProfileImage(team.profileImage);
    setTeamCasesHandled(team.casesHandled);
    setTeamExpertise(team.expertise);
    setIsModalOpen(true);
  };

  // Handle submitting the edit
  const handleSubmitEdit = () => {
    const updatedTeam = {
      ...selectedTeam,
      name: teamName,
      profileImage: teamProfileImage,
      casesHandled: teamCasesHandled,
      expertise: teamExpertise,
    };
    setTeams(
      teams.map((team) => (team.id === selectedTeam.id ? updatedTeam : team))
    );
    setIsModalOpen(false); // Close modal after submit
    setSelectedTeam(null);
    setTeamName("");
    setTeamProfileImage("");
    setTeamCasesHandled("");
    setTeamExpertise("");
  };

  // Handle deleting a team member
  const handleDeleteTeam = (id) => {
    setTeams(teams.filter((team) => team.id !== id));
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
              <td className="border px-4 py-2">{team.name}</td>
              <td className="border px-4 py-2">
                <img
                  src={team.profileImage}
                  alt={team.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="border px-4 py-2">{team.casesHandled}</td>
              <td className="border px-4 py-2">{team.expertise}</td>
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
              <label className="block mb-2 text-gray-700">
                Profile Image URL
              </label>
              <input
                type="text"
                value={teamProfileImage}
                onChange={(e) => setTeamProfileImage(e.target.value)}
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
