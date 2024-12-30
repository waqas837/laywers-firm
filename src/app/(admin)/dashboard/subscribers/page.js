"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { strapiUrl } from "@/apis/apiUrl";

const Page = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const adminToken = localStorage.getItem("adminToken"); // Replace with the actual token
      try {
        const response = await axios.get(`${strapiUrl}/email-lists`, {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        });
        // console.log("response.data.data", response.data.data)
        setEmails(response.data.data);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div className="flex-grow p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Email Subscribers List</h1>
      {emails.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-6 py-4 border-b font-medium text-gray-600">
                  ID
                </th>
                <th className="px-6 py-4 border-b font-medium text-gray-600">
                  Email
                </th>
                <th className="px-6 py-4 border-b font-medium text-gray-600">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody>
              {emails.map((email) => (
                <tr key={email.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b text-gray-800">
                    {email.id}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-800">
                    {email.attributes.email}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-800">
                    {new Date(email.attributes.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No emails found.</p>
      )}
    </div>
  );
};

export default Page;
