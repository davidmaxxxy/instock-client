import React from "react";
import "./DynamicFormInput.scss";

const DynamicFormInput = ({ title, type, placeholder, onChange, value }) => {
  return (
    <div className="dynamic-form__group">
      <label className="dynamic-form__label">
        <h3 className="dynamic-form__label-title"></h3>
        {title}
      </label>
      <input
        className="dynamic-form__input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default DynamicFormInput;
