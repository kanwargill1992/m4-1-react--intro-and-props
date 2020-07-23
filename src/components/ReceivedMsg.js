import React from "react";
import Image from "./Image";
import "./ReceivedMsg.css";

const ReceivedMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <Image avatar={message.user.avatar} name={message.user.name} size={40} />
      <div>
        <p className="name">{message.user.username}</p>
        <p className="body">{message.body}</p>
      </div>
    </div>
  );
};

export default ReceivedMessage;
