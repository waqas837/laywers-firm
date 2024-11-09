// in config.js
import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./components/GetImage";
import React from "react";

const botName = "Chat With Representative";

const CustomChatHeader = ({ setShowChat }) => (
  <div
    style={{
      backgroundColor: "#e0bc2d", // Change header color here
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
    }}
  >
    <span>{botName}</span>
    <button
      onClick={() => setShowChat(false)}
      style={{
        backgroundColor: "transparent",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      ✕
    </button>
  </div>
);

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm Your Live Assistance.`)],
  botName: botName,
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#e0bc2d",
    },
  },
  customComponents: {
    header: (props) => <CustomChatHeader setShowChat={props.setShowChat} />,
  },
};

export default config;
