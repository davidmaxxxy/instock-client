import React from "react";
import "./DropDown.scss";


const DropDown = ({
  options,
  handleOnValueSelect,
  isError,
  placeholder,
  width,
}) => {
  return (
    <div
      style={{
        width: width,
      }}
      className="select__container"
    >
      <select
        className={`${
          isError ? "isError" : ""
        }`} 
        onChange={(e) => handleOnValueSelect(e.target.value)}
        defaultValue={placeholder}
      >
        <option disabled>{placeholder}</option>
        {options.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
