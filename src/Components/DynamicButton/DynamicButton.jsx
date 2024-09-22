import React from "react";
import "./DynamicButton.scss";

const DynamicButton = ({ title, colorClass, size, onClick, Icon }) => {
  return (
    <button
      className={`button ${size} ${colorClass} ${Icon ? "with-icon" : ""} `}
      onClick={onClick}
    >
      {Icon && Icon}
      <p className="button-title">{title && title}</p>
    </button>
  );
};

export default DynamicButton;
