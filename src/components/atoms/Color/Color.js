import React from "react";
import "./Color.css";

export default function Color({ color, ...props }) {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="color-container"
      {...props}
    ></div>
  );
}
