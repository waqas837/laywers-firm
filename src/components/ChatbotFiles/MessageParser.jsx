// in MessageParser.js
import React from "react";
import { strapiUrl } from "@/apis/apiUrl";
import { socketConn } from "@/lib/socketInstance";
import axios from "axios";

const MessageParser = ({ children, actions }) => {
  let userid = localStorage.getItem("userid");
  const parse = async (message) => {
    let UserWantsHelp = localStorage.getItem("UserWantsHelp");
    if (!UserWantsHelp) {
      let { data } = await axios.get(
        `${strapiUrl}/chatbot-msgs?query=${message}`
      );
      if (data.answer) {
        actions.handleHello(data.answer);
      } else if (!data.answer) {
        actions.handleHello(
          "Sorry! I can't understand the query. Do you want to talk with live agent?"
        );
      }
    } else {
      socketConn.emit("UserWantsHelp", { msg: message, userid });
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
