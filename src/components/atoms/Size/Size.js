import React from "react";
import "./Size.css";

export default function Size({ children }) {
  return (
    <div className="size-container">
      <h6 className="size">{children}</h6>
    </div>
  );
}
