import React, { useState } from "react";
import axios from "axios";
import { strapiUrl } from "@/apis/apiUrl";
import { socketConn } from "@/lib/socketInstance";
let transcript = [];

const MessageParser = ({ children, actions }) => {
  let userid = localStorage.getItem("userid");
  const [questionQueue, setQuestionQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const parse = async (message) => {
    let UserWantsHelp = localStorage.getItem("UserWantsHelp");
    let username = localStorage.getItem("username");
    let userid = localStorage.getItem("userid");
    let socketid = localStorage.getItem("socketid");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let address = localStorage.getItem("address");
    if (!UserWantsHelp) {
      if (questionQueue.length > 0) {
        // Handle user response to the current question
        let QuestionsAnswers = {
          botQuestion: questionQueue[currentIndex - 1], // previous question to only match
          userAnswer: message,
          userid,
          username,
          socketid,
          phone,
          email,
          address,
        };
        transcript.push(QuestionsAnswers);

        let { data } = await axios.post(
          `${strapiUrl}/save-bot-user-messages`,
          {
            data: { QuestionsAnswers },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        actions.handleHello(
          `Got it! Next question: ${questionQueue[currentIndex]}`
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
        // If there are no more questions, end the flow
        if (currentIndex + 1 >= questionQueue.length) {
          setQuestionQueue([]);
          setCurrentIndex(0);
          actions.handleHello(
            "Thank you! That's all the information we needed."
          );
          // send email this chat as a transcript.
          await axios.post(`${strapiUrl}/send-email`, {
            data: transcript,
          });
        }
      } else {
        let { data } = await axios.get(
          `${strapiUrl}/chatbot-msgs?query=${message}&&userId=${userid}&&username=${username}&&email=${email}&&phone=${phone}&&address=${address}`
        );
        if (data.exact) {
          // Start a conversational flow
          setQuestionQueue(data.questions);
          setCurrentIndex(0);
          actions.handleHello(
            `Great! Let's start. First question: ${data.questions[0]}`
          );
        } else if (data.contactToLiveSession) {
          actions.handleHello(data.answer);
        } else if (data.contactToLiveSession) {
          actions.handleHello(
            "Sorry! I can't understand the query. Do you want to talk with a live agent?"
          );
        } else if (data.exact === false) {
          actions.handleHello(data.answer);
        }
      }
    } else {
      socketConn.emit("UserWantsHelp", { msg: message, userid });
    }
  };

  return React.cloneElement(children, { parse });
};

export default MessageParser;
