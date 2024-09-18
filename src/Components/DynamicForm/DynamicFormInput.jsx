import React from "react";
import "./DynamicFormInput.scss";

const DynamicFormInput = ({
  title,
  placeholder,
  onChange,
  value,
  type,
  isError,
}) => {
  return (
    <>
      <label className="dynamic-form__label">{title}</label>
      <input
        className={`dynamic-form__input ${isError ? "isError" : ""} `}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  );
};

export default DynamicFormInput;
