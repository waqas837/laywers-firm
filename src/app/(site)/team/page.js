"use client";
import { Briefcase, Award, Mail, Phone, X } from "lucide-react"; // Added X icon
import { useState } from "react"; // For managing filter state

function TeamDetails() {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Senior Attorney",
      casesHandled: 120,
      email: "johndoe@email.com",
      phone: "+1 (555) 123-4567",
      imageUrl: "/1i.jpg", // Replace with actual image path
      specialization: "Personal Injury",
    },
    {
      name: "Jane Smith",
      position: "Attorney",
      casesHandled: 85,
      email: "janesmith@email.com",
      phone: "+1 (555) 234-5678",
      imageUrl: "/2i.jpg", // Replace with actual image path
      specialization: "Medical Malpractice",
    },
    {
      name: "Mike Johnson",
      position: "Junior Attorney",
      casesHandled: 45,
      email: "mikejohnson@email.com",
      phone: "+1 (555) 345-6789",
      imageUrl: "/3i.jpg", // Replace with actual image path
      specialization: "Car Accidents",
    },
    {
      name: "Emily Davis",
      position: "Lead Attorney",
      casesHandled: 160,
      email: "emilydavis@email.com",
      phone: "+1 (555) 456-7890",
      imageUrl: "/4i.jpg", // Replace with actual image path
      specialization: "Construction Accidents",
    },
    {
      name: "David Brown",
      position: "Senior Attorney",
      casesHandled: 130,
      email: "davidbrown@email.com",
      phone: "+1 (555) 567-8901",
      imageUrl: "/5i.jpg", // Replace with actual image path
      specialization: "Workplace Injuries",
    },
    {
      name: "Sophia Martinez",
      position: "Attorney",
      casesHandled: 95,
      email: "sophiamartinez@email.com",
      phone: "+1 (555) 678-9012",
      imageUrl: "/6i.jpg", // Replace with actual image path
      specialization: "Nursing Home Abuse",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  const filteredTeam = teamMembers.filter((member) => {
    const matchesName = member.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization
      ? member.specialization === selectedSpecialization
      : true;
    return matchesName && matchesSpecialization;
  });

  const specializations = [
    "Personal Injury",
    "Medical Malpractice",
    "Car Accidents",
    "Construction Accidents",
    "Workplace Injuries",
    "Nursing Home Abuse",
  ];

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
              src={member.imageUrl}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover mb-6"
            />
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-yellow-800 mb-2">
                {member.name}
              </h3>
              <p className="text-xl text-yellow-600 mb-3">{member.position}</p>
              <p className="text-gray-600 mb-4">
                Specializes in:{" "}
                <span className="text-yellow-800 font-medium">
                  {member.specialization}
                </span>
              </p>
              <div className="flex items-center justify-center text-gray-700 mb-3">
                <Briefcase size={20} className="mr-2" />
                <span>{member.casesHandled} Cases Handled</span>
              </div>
              <div className="flex items-center justify-center text-gray-700 mb-3">
                <Mail size={20} className="mr-2" />
                <span>{member.email}</span>
              </div>
              <div className="flex items-center justify-center text-gray-700 mb-3">
                <Phone size={20} className="mr-2" />
                <span>{member.phone}</span>
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
