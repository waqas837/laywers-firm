"use client";
import { CheckCircle, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import LawFirmLogos from "../CompanyNames";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatbotFiles/config";
import MessageParser from "../ChatbotFiles/MessageParser";
import ActionProvider from "../ChatbotFiles/ActionProvider";
import { MessageCircle } from "lucide-react";
import { strapiUrl } from "@/apis/apiUrl";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { socketConn } from "@/lib/socketInstance";
import BasicUserInfo from "@/components/ChatBotElements/BasicUserInfo";

const WebsiteHeroSection = () => {
  const [showChat, setShowChat] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);
  const [showChatInput, setShowChatInput] = useState(false);
  const [isChatUserSubmitted, setIsChatUserSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    issue: "",
  });
  const [formDatachat, setFormDatachat] = useState({
    userName: "",
    address: "",
    phone: "",
    email: "",
    issue: "",
  });
  // Initialize socket connection
  useEffect(() => {
    let userid = localStorage.getItem("userid");
    if (userid) {
      setShowChatInput(false);
      setIsOpen(false);
      socketConn.emit("updateSocketId", { userid });
    }
  }, [socketConn]);

  useEffect(() => {
    let userid = localStorage.getItem("userid");
    if (userid) {
      setShowChatInput(false);
      setIsOpen(false);
      setIsChatUserSubmitted(true);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requestData = {
      data: formData,
    };

    try {
      const response = await fetch(`${strapiUrl}/review-cases`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      if (data?.data?.id) {
        toast.success(
          "Your case review request has been submitted successfully!"
        );
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          issue: "",
        }); // Reset form fields after successful submission
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  // Generate the user id with socket id with api.
  // And save to localstorage.
  // /api/user-socket-connect
  const handleChatUserSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsChatUserSubmitted(true);
      let { data } = await axios.post(`${strapiUrl}/user-socket-connect`, {
        formDatachat,
      });
      localStorage.setItem("username", data.data.userName);
      localStorage.setItem("userid", data.data.userid);
      localStorage.setItem("socketid", data.data.socketId);
      localStorage.setItem("phone", data.data.phone);
      localStorage.setItem("email", data.data.email);
      localStorage.setItem("address", data.data.address);
      if (data.success) {
        setShowChatInput(false);
        setShowChat(true);
      }
    } catch (error) {
      console.log("error in handleChatUserSubmit", error);
    }
  };

  const showUser = () => {
    if (!isChatUserSubmitted) {
      setShowChatInput(true);
      setShowChat(false);
      setIsOpen(true);
    } else {
      setShowChat((prev) => !prev);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-20 px-8 relative">
      {/* Fixed Chatbot at Bottom Right */}
      <Toaster />
      <div className="fixed bottom-3 right-3 z-50">
        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              position: "fixed",
              bottom: "20px",
              right: "20px",
            }}
          >
            <Loader className="animate-spin text-yellow-600" size={32} />
          </div>
        ) : (
          <>
            {showChatInput && IsOpen && (
              <BasicUserInfo
                setIsOpen={setIsOpen}
                handleChatUserSubmit={handleChatUserSubmit}
                setFormDatachat={setFormDatachat}
                formDatachat={formDatachat}
              />
            )}
            {showChat && isChatUserSubmitted && (
              <Chatbot
                config={{
                  ...config,
                  customComponents: {
                    header: () => (
                      <config.customComponents.header
                        setShowChat={setShowChat}
                      />
                    ),
                  },
                }}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
              />
            )}
            {!showChat && (
              <button
                onClick={() => showUser()}
                style={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  backgroundColor: "#e0bc2d",
                  color: "white",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                  zIndex: 1001,
                }}
              >
                <MessageCircle size={28} />
              </button>
            )}
          </>
        )}
      </div>

      {/* Left Section: Text */}
      <div className="flex flex-col justify-between mb-8 md:mb-0 md:pr-8">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-700 leading-tight tracking-wide">
            Resolving Injury, Estate, and Probe Law Cases
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mt-4">
            We are a leading law firm specializing in injury, estate, and probe
            law. Our team of experienced attorneys is dedicated to providing
            exceptional legal services and achieving the best possible outcomes
            for our clients.
          </p>
          <p className="text-sm text-gray-500 italic mt-4 mb-10">
            Trusted by thousands for expert legal services.
          </p>

          <LawFirmLogos />
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="bg-white text-gray-800 rounded-md shadow-lg p-8 flex items-center justify-center">
        <form className="w-full max-w-lg flex flex-col" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-semibold text-center mb-4 text-gray-900">
            Request a Case Review
          </h2>
          <div className="border-t-4 border-yellow-600 w-1/2 mx-auto mb-5"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label
                htmlFor="fullname"
                className="block font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none ring-1 ring-yellow-500 focus:border-yellow-500 transition duration-300"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none ring-1 ring-yellow-500 focus:border-yellow-500 transition duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none ring-1 ring-yellow-500 focus:border-yellow-500 transition duration-300"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="issue"
              className="block font-medium text-gray-700 mb-2"
            >
              Describe Your Legal Issue
            </label>
            <textarea
              id="issue"
              value={formData.issue}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none ring-1 ring-yellow-500 focus:border-yellow-500 transition duration-300"
              placeholder="Please describe your legal issue in detail"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-2 px-6 hover:bg-yellow-700 transition-colors duration-300 flex flex-col items-center justify-center space-y-1"
          >
            {loading ? (
              <Loader className="animate-spin text-white" size={24} />
            ) : (
              <CheckCircle className="h-6 w-6" />
            )}
            <span className="text-xl font-semibold">Submit for Review</span>
            <span className="text-sm font-medium opacity-70">
              Your submission will be reviewed soon
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default WebsiteHeroSection;
