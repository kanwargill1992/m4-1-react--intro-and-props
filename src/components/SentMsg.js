import React from "react";

import "./SentMsg.css";

const SentMessage = ({ message }) => {
  return (
    <div className="message-sent">
      <div className="message-sent">
        <p className="body">{message.body}</p>
      </div>
    </div>
  );
};

export default SentMessage;
