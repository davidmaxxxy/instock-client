import React from "react";
import "./DynamicForm.scss";
import DynamicButton from "../DynamicButton/DynamicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DynamicForm = ({
  handleButtonClick,
  headerTitle,
  headerButton,
  children,
  footerButtonOne,
  footerButtonTwo,
}) => {
  return (
    <div className="dynamic-form">
      <div className="dynamic-form__header-container">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="dynamic-form__back-icon"
        />
        <h1 className="dynamic-form__header-title">{headerTitle}</h1>
        {headerButton && (
          <div className="dynamic-form__header-button">{headerButton}</div>
        )}
      </div>

      {children}
    </div>
  );
};

export default DynamicForm;
