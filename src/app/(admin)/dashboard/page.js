"use client";
import { strapiUrl } from "@/apis/apiUrl";
import React, { useEffect, useState } from "react";

const AdminPanelHome = () => {
  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null); // Track selected request for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  useEffect(() => {
    fetchRequestData();
  }, []);
  // Fetch data from your API
  const fetchRequestData = async () => {
    try {
      const adminToken = localStorage.getItem("adminToken");

      // Check if the token exists in localStorage
      if (!adminToken) {
        throw new Error("No admin token found in localStorage");
      }

      const response = await fetch(`${strapiUrl}/review-cases`, {
        method: "GET", // Assuming it's a GET request
        headers: {
          Authorization: `Bearer ${adminToken}`, // Passing token in Authorization header
          "Content-Type": "application/json", // Optional, depending on your API
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      // console.log(">>>", data.data);
      setRequestData(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleReviewClick = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedRequest(null); // Reset the selected request
  };

  const handleMarkUnderConsideration = async () => {
    try {
      const adminToken = localStorage.getItem("adminToken");

      // Check if the token exists in localStorage
      if (!adminToken) {
        throw new Error("No admin token found in localStorage");
      }

      // Assuming your API expects a PATCH request to update the case status
      const response = await fetch(
        `${strapiUrl}/review-cases/${selectedRequest.id}`,
        {
          method: "PUT", // Use PATCH or PUT based on your API setup
          headers: {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              status: "under consideration", // Update the case status
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update the case status");
      }

      // If the request is successful, you can update the state or refresh the data
      const updatedRequest = await response.json();
      console.log("Case updated:", updatedRequest);

      // Close the modal after updating the case
      handleCloseModal();
      fetchRequestData()
      // Optionally, refresh the data or update the UI with the new status
      // Example: setRequestData((prevData) => prevData.map(request => request.id === updatedRequest.id ? updatedRequest : request));
    } catch (err) {
      console.error("Error marking case as under consideration:", err);
      setError(err.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-grow p-6 space-y-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Pending Case Requests</h1>
        <div className="space-y-4">
          {requestData.map((request, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-medium">
                  {request.attributes.fullname}
                </h2>
                <p className="text-gray-500">
                  {request.attributes.email} | {request.attributes.phone}
                </p>
                <p className="text-gray-700">{request.attributes.issue}</p>
              </div>
              {/* Conditionally render button text based on status */}
              <button
                onClick={() => handleReviewClick(request)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
              >
                {request.attributes.status === "under consideration"
                  ? "Under Consideration"
                  : "Review"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Case Details</h2>
            {selectedRequest && (
              <div>
                <p>
                  <strong>Full Name:</strong>{" "}
                  {selectedRequest.attributes.fullname}
                </p>
                <p>
                  <strong>Email:</strong> {selectedRequest.attributes.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedRequest.attributes.phone}
                </p>
                <p>
                  <strong>Issue:</strong> {selectedRequest.attributes.issue}
                </p>
              </div>
            )}
            <div className="mt-4 space-x-4">
              <button
                onClick={handleMarkUnderConsideration}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
              >
                Mark as Under Consideration
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
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

export default AdminPanelHome;
