import React from "react";
import Image from "./Image";
import "./Header.css";

const Header = ({ participants }) => {
  return (
    <header>
      {participants.map((participant) => (
        <div className="avatar-wrapper">
          <Image
            avatar={participant.avatar}
            name={participant.name}
            size={60}
          />
          <p className="name">{participant.username}</p>
        </div>
      ))}
    </header>
  );
};

export default Header;
