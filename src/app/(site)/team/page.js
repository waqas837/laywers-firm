"use client";
import { Briefcase, Mail, Phone, X } from "lucide-react"; // Added X icon
import { useState, useEffect } from "react"; // For managing filter state and fetching data
import axios from "axios"; // Make sure you import axios
import { strapiUrl, strapiUrlMedia } from "@/apis/apiUrl";
const STRAPI_URL = `${strapiUrl}/teams`; // Replace with your actual Strapi URL

function TeamDetails() {
  const [teamMembers, setTeamMembers] = useState([]); // State to store team data
  const [searchTerm, setSearchTerm] = useState(""); // For search term
  const [selectedSpecialization, setSelectedSpecialization] = useState(""); // For selected specialization

  // Fetch all team members from Strapi
  const fetchTeams = async () => {
    try {
      const { data } = await axios.get(`${STRAPI_URL}?populate=profileimg`);
      setTeamMembers(data.data); // Set team members into state
    } catch (error) {
      console.error("Error fetching teams:", error);
      setTeamMembers([]); // In case of error, set an empty array
    }
  };

  // Run the fetchTeams function when the component mounts
  useEffect(() => {
    fetchTeams();
  }, []);

  // Filter team based on the search term and specialization
  const filteredTeam = teamMembers.filter((member) => {
    const matchesName = member.attributes.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization
      ? member.attributes.specialization === selectedSpecialization
      : true;
    return matchesName && matchesSpecialization;
  });

  // Specialization options
  const specializations = [
    "Personal Injury",
    "Medical Malpractice",
    "Car Accidents",
    "Construction Accidents",
    "Workplace Injuries",
    "Nursing Home Abuse",
  ];

  // Handle clear filters
  const handleClearFilters = () => {
    setSearchTerm(""); // Clear search term
    setSelectedSpecialization(""); // Clear specialization filter
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-yellow-800 mb-10">
        Meet Our Team
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Our team of dedicated attorneys is here to guide you through the legal
        process with expertise and compassion. Meet the people who will fight
        for your rights.
      </p>

      {/* Filters Section */}
      <div className="mb-10 flex flex-col lg:flex-row gap-8 justify-center items-center">
        {/* Search Bar */}
        <div className="flex items-center border border-yellow-500 rounded-lg p-3 w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Search Attorneys by Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border-none rounded-lg focus:ring-2 focus:ring-yellow-500 text-gray-800"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="text-gray-600 hover:text-yellow-800 ml-2"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Specialization Filter */}
        <div className="flex items-center border border-yellow-500 rounded-lg p-3 w-full lg:w-1/3">
          <select
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
            className="w-full px-4 py-2 border-none rounded-lg focus:ring-2 focus:ring-yellow-500 text-gray-800"
          >
            <option value="">Select Area of Practice</option>
            {specializations.map((specialization, index) => (
              <option key={index} value={specialization}>
                {specialization}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={handleClearFilters}
          className="text-yellow-800 hover:text-yellow-600 font-medium"
        >
          Clear Filters
        </button>
      </div>

      {/* Team Member Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeam.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-yellow-500 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow"
          >
            <img
              src={
                `${strapiUrlMedia}${member.attributes.profileimg?.data?.attributes?.url}` ||
                "/default.jpg"
              }
              alt={member.attributes.name}
              className="w-40 h-40 rounded-full object-cover mb-6"
            />
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-yellow-800 mb-2">
                {member.attributes.name}
              </h3>
              <p className="text-xl text-yellow-600 mb-3">
                {member.attributes.position}
              </p>
              <p className="text-gray-600 mb-4">
                Specializes in:{" "}
                <span className="text-yellow-800 font-medium">
                  {member.attributes.expertise}
                </span>
              </p>
              <div className="flex items-center justify-center text-gray-700 mb-3">
                <Briefcase size={20} className="mr-2" />
                <span>{member.attributes.case_handle} Cases Handled</span>
              </div>
              <div className="flex items-center justify-center text-gray-700 mb-3">
                <Mail size={20} className="mr-2" />
                <span>{member.attributes.email}</span>
              </div>
              <div className="flex items-center justify-center text-gray-700 mb-3">
                <Phone size={20} className="mr-2" />
                <span>{member.attributes.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <section className="mt-20 bg-yellow-800 text-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Need Legal Help?</h3>
        <p className="mb-8">
          If you need assistance or want to discuss your case with one of our
          experienced attorneys, don't hesitate to reach out. We're here to
          help!
        </p>
        <div className="flex justify-center gap-8">
          <button className="bg-white text-yellow-800 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-100">
            Schedule a Consultation
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-yellow-800">
            Contact Us
          </button>
        </div>
      </section>
    </section>
  );
}

export default TeamDetails;
