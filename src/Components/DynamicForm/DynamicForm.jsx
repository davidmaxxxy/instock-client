import React from "react";
import "./DynamicForm.scss";
import DynamicFormInput from "./DynamicFormInput";
import DynamicButton from "../DynamicButton/DynamicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DynamicForm = ({ handleButtonClick, Icon, headerTitle }) => {
  return (
    <div className="dynamic-form">
      <div className="dynamic-form__header-container">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="dynamic-form__back-icon"
        />
        <h1 className="dynamic-form__header-title">Edit Warehouse Details</h1>
      </div>
      <div className="dynamic-form__container">
        <div className="dynamic-form__section">
          <h2 className="dynamic-form__section-title">Warehouse Details</h2>
          <DynamicFormInput
            title="Warehouse Name"
            placeholder="Warehouse Name"
          />
          <DynamicFormInput
            title="Street Address"
            placeholder="Street Address"
          />
          <DynamicFormInput title="City" placeholder="City" />
          <DynamicFormInput title="Country" placeholder="Country" />
        </div>

        <div className="dynamic-form__section">
          <h2 className="dynamic-form__section-title">Contact Details</h2>
          <DynamicFormInput title="Contact Name" placeholder="Contact Name" />
          <DynamicFormInput title="Position" placeholder="Position" />
          <DynamicFormInput title="Email" placeholder="Email" />
          <DynamicFormInput title="Phone" placeholder="Phone" />
        </div>
      </div>

      <div className="dynamic-form__button-container">
        <DynamicButton
          title="Save"
          colorClass="primary-color-indigo"
          size="medium"
          onClick={handleButtonClick}
        />
        <DynamicButton
          title="Cancel"
          colorClass="supporting-color-red"
          size="medium"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default DynamicForm;
