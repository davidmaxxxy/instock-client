import React from "react";
import "./DynamicFormInput.scss";

const DynamicFormInput = ({ title, placeholder, onChange, value }) => {
  return (
    <div className="dynamic-form__group">
      <label className="dynamic-form__label">{title}</label>
      <input
        className="dynamic-form__input"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default DynamicFormInput;
