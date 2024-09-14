import React from "react";
import "../DynamicButton/DynamicButton.scss";

const DynamicButton = ({ title, colorClass, size, onClick, icon: Icon }) => {
  return (
    <button
      className={`button ${size} ${colorClass} ${Icon ? "with-icon" : ""} `}
      onClick={onClick}
    >
      {Icon && <Icon className="button-icon" />}
      {title}
    </button>
  );
};

export default DynamicButton;
