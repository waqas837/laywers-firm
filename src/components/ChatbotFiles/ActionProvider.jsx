import React, { useEffect } from "react";
import LiveAgentOption from "./components/LiveAgentOption";
import { socketConn } from "@/lib/socketInstance";

const ActionProvider = ({
  createChatBotMessage,
  state,
  setState,
  children,
}) => {
  useEffect(() => {
    socketConn.on("userHelpReply", ({ message }) => {
      // console.log("triggerd", message);
      const botMessage = createChatBotMessage(message);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    });
  }, [socketConn]);

  const handleLiveAgentYes = () => {
    const botMessage = createChatBotMessage(
      "Connecting you to a live agent..."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    // Add your logic here to connect to live agent
    if (socketConn) {
      let userid = localStorage.getItem("userid");
      socketConn.emit("UserWantsHelp", { msg: "Help User", userid });
      localStorage.setItem("UserWantsHelp", true);
    }
  };

  const handleLiveAgentNo = () => {
    const botMessage = createChatBotMessage(
      "Is there anything else I can help you with?"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHello = (botAnswer) => {
    if (
      botAnswer ===
        "Sorry! I can't understand the query. Do you want to talk with live agent?" ||
      botAnswer ===
        "Your query doesn't fit into a specific category we handle. Please provide more information or contact us directly for assistance."
    ) {
      const botMessage = createChatBotMessage(
        <LiveAgentOption
          onYesClick={handleLiveAgentYes}
          onNoClick={handleLiveAgentNo}
        />
      );
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage(botAnswer);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
