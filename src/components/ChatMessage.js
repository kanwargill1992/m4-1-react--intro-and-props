import React from "react";
import "./ChatMessage.css";

import ReceivedMessage from "./ReceivedMsg";
import SentMessage from "./SentMsg";

const ChatMessage = ({ message, messageType }) => {
  if (messageType === "sent") {
    return <SentMessage message={message} />;
  } else {
    return <ReceivedMessage message={message} />;
  }
};

export default ChatMessage;
