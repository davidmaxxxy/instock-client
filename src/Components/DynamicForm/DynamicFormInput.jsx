import React from "react";
import "./DynamicFormInput.scss";

const DynamicFormInput = ({ placeholder, onChange, value, isError }) => {
  return (
    <div className="dynamic-form__group">
      <input
        className={`dynamic-form__input ${isError ? "isError" : ""} `}
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default DynamicFormInput;
