"use client";
import React, { useState, useRef, useEffect } from "react";
import { Send, UserIcon } from "lucide-react";
import { socketConn } from "@/lib/socketInstance";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [userid, setuserid] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  // Initialize socket connection
  useEffect(() => {
    setSocket(socketConn);
    // console.log("socketConn", socketConn);
    socketConn.on("message", (data) => {
      // console.log("message", data);
      setuserid(data.userid);
      setMessages((prev) => [
        ...prev,
        { userid: data.userid, sender: data.username, text: data.message },
      ]);
    });

    // return () => {
    //   socketConn.close();
    // };
  }, [socketConn]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() && socket) {
      const messageData = {
        text: newMessage,
        userid,
        timestamp: new Date().toISOString(),
      };

      // Emit the message to the server
      socket.emit("LiveUserHelp", messageData);
      // Add message to local state
      setMessages([...messages, { sender: "me", text: newMessage }]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-grow">
      <div className="flex flex-col h-screen bg-gray-50">
        <div className="flex flex-col flex-grow bg-white shadow-xl overflow-hidden border">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-100 p-4">
            <div className="max-w-7xl mx-auto w-full flex items-center">
              <div className="relative">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-lg">H</span>
                </div>
              </div>
              <div className="ml-3">
                <h2 className="font-semibold text-gray-800">Help Center</h2>
                <p className="text-xs text-green-500">Connected to chat</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto p-4">
            <div className="max-w-7xl mx-auto w-full space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xl p-3 rounded-2xl ${
                      msg.sender === "me"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    } shadow-sm`}
                  >
                    <div className="flex items-center space-x-2">
                      <UserIcon className="h-5 w-5 text-gray-600" />
                      <span className="text-xs font-medium text-gray-600">
                        {msg.sender}
                      </span>
                    </div>
                    <p className="text-sm mt-1">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-100 p-4">
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="flex-1 p-2 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 transition-colors"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyUp={handleKeyPress}
                />
                <button
                  onClick={handleSendMessage}
                  className={
                    "bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-xl"
                  }
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
