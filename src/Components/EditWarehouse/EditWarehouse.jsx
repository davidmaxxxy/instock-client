import React from "react";
import "./EditWarehouse.scss";
import "../DynamicForm/DynamicForm.scss";
import DynamicButton from "../DynamicButton/DynamicButton";
import DynamicForm from "../DynamicForm/DynamicForm";
import DynamicFormInput from "../DynamicForm/DynamicFormInput";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "../PageWrapper/PageWrapper";

const EditWarehouse = ({ handleClick }) => {
  return (
    <PageWrapper title="Edit Warehouse" location="Warehouse-edit">
      <div className="dynamic-form__container">
        <div className="dynamic-form__section">
          <h2 className="dynamic-form__section-title">Warehouse Details</h2>
          <DynamicFormInput
            type="text"
            title="Warehouse Name"
            placeholder="Warehouse Name"
          />
          <DynamicFormInput
            type="text"
            title="Street Address"
            placeholder="Street Address"
          />
          <DynamicFormInput type="text" title="City" placeholder="City" />
          <DynamicFormInput type="text" title="Country" placeholder="Country" />
        </div>

        <div className="dynamic-form__section">
          <h2 className="dynamic-form__section-title">Contact Details</h2>
          <DynamicFormInput
            type="text"
            title="Contact Name"
            placeholder="Contact Name"
          />
          <DynamicFormInput
            type="text"
            title="Position"
            placeholder="Position"
          />
          <DynamicFormInput
            type="text"
            title="Phone Number"
            placeholder="Phone"
          />
          <DynamicFormInput type="text" title="Email" placeholder="Email" />
        </div>
      </div>

      <div className="dynamic-form__button-container">
        <DynamicButton
          title="Cancel"
          colorClass="primary-color-white"
          size="large"
          onClick={handleClick}
        />
        <DynamicButton
          title="Save"
          colorClass="primary-color-indigo"
          size="large"
          onClick={handleClick}
        />
      </div>
    </PageWrapper>
  );
};

export default EditWarehouse;
