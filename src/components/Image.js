import React from "react";
import "./Image.css";

const Image = ({ avatar, name, size }) => {
  return (
    <img
      className="image1"
      src={avatar}
      alt={name}
      style={{ height: `${size}px`, width: `${size}px` }}
    />
  );
};

export default Image;
