"use client";
import { createChatBotMessage } from "react-chatbot-kit";
import { XIcon, MessageCircle } from "lucide-react";

const botName = "Chat With Representative";

const CustomChatHeader = ({ setShowChat }) => (
  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-t-xl shadow-lg w-full">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="bg-white/20 p-2 rounded-full">
          <MessageCircle className="h-5 w-5 text-white" />
        </div>
        <div>
          <span className="text-white font-semibold">{botName}</span>
          <p className="text-yellow-100 text-sm">Online</p>
        </div>
      </div>
      <button
        onClick={() => setShowChat(false)}
        className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
        aria-label="Close chat"
      >
        <XIcon className="h-5 w-5 text-white" />
      </button>
    </div>
  </div>
);

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm Your Live Assistance.`, {
      className: "font-medium",
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
      borderRadius: "12px",
      padding: "12px 16px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      maxWidth: "80%", // Limit message width
      marginLeft: "12px", // Add some spacing from the left
    },
    userMessageBox: {
      maxWidth: "80%", // Limit user message width
      marginRight: "12px", // Add some spacing from the right
    },
    chatButton: {
      backgroundColor: "#EAB308",
      borderRadius: "8px",
      padding: "10px 16px",
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: "#CA8A04",
      },
    },
    messageContainer: {
      padding: "12px", // Add padding to message container
      overflowY: "hidden", // Enable scrolling for messages
      maxHeight: "500px", // Set maximum height
    },
  },
  customComponents: {
    header: (props) => <CustomChatHeader setShowChat={props.setShowChat} />,
  },
};

export default config;
