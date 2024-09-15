import React, { useState } from "react";
import "./PageWrapper.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import DynamicFormInput from "../DynamicForm/DynamicFormInput";
import DynamicButton from "../DynamicButton/DynamicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

const PageWrapper = ({
  title,
  children,
  location,
  handleButtonClick,
  handleInputValue,
}) => {
  const navigate = useNavigate();
  const [error] = useState(true);

  //   USE HISTORY FOR THE BACK BTN
  //
  return (
    <section className="wrapper__container">
      <section className="wrapper__container__section--container">
        <div
          className="wrapper__container__header__container"
          style={{
            flexDirection:
              location === "Warehouse-details" ? "column" : undefined,
          }}
        >
          <div className="wrapper__container__header--title-container">
            {(location === "Warehouse-details" ||
              location === "Warehouse-edit" ||
              location === "New-Warehouse" ||
              location === "Inventory-details" ||
              location === "Inventory-edit-form" ||
              location === "New-Inventory") && (
              <img
                src={backIcon}
                alt="back arrow"
                onClick={() => {
                  navigate("/");
                }}
              />
            )}
            <h1 className="wrapper__container__header__title">{title}</h1>
          </div>
          {(location === "Warehouses" || location === "Inventory") && (
            <div className="wrapper__container__header__button--container">
              <DynamicFormInput
                isError={error}
                onChange={handleInputValue}
                placeholder="Search..."
              />

              <DynamicButton
                title="Add New Warehouse"
                colorClass="primary-color-indigo"
                size="medium"
                onClick={handleButtonClick}
                Icon={() => <FontAwesomeIcon icon={faPlus} />}
              />
            </div>
          )}
          {(location === "Warehouse-details" ||
            location === "Inventory-details") && (
            <div className="wrapper__container__header__button--container">
              <DynamicButton
                title="Edit"
                colorClass="primary-color-indigo"
                size="medium"
                onClick={handleButtonClick}
                Icon={() => <FontAwesomeIcon icon={faPencilAlt} />}
              />
            </div>
          )}
        </div>
        <section className="wrapper__container__children--container">
          {children}
        </section>
      </section>
    </section>
  );
};

export default PageWrapper;
