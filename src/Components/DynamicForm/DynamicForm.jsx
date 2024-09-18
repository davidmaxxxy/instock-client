import React from "react";
import "./DynamicForm.scss";
import DynamicFormInput from "./DynamicFormInput";
import DynamicButton from "../DynamicButton/DynamicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DynamicForm = ({ handleButtonClick, Icon, headerTitle, children }) => {
  return (
    <div className="dynamic-form">
      <div className="dynamic-form__header-container">
        <FontAwesomeIcon icon={Icon} className="dynamic-form__back-icon" />
        <h1 className="dynamic-form__header-title">{headerTitle}</h1>
      </div>

      <div className="dynamic-form__content">{children}</div>
    </div>
  );
};

export default DynamicForm;
