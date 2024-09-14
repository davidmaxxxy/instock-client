import React from "react";
import  "./PageWrapper.scss"
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";

const PageWrapper = ({ title, children, location }) => {
  const navigate = useNavigate();
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
              location === "Inventory-edit" || location === "Inventory-edit-form" || location === "New-Inventory") && (
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
            <div>
              <button
                type="button"
                className="wrapper__container__header__button"
              >
                arrow
              </button>
              <button
                type="button"
                className="wrapper__container__header__button"
              >
                arrow
              </button>
            </div>
          )}
          {(location === "Warehouse-details" ||
            location === "Inventory-edit") && (
            <div>
              <button
                type="button"
                className="wrapper__container__header__button"
              >
                edit
              </button>
            </div>
          )}
        </div>
        <section>{children}</section>
      </section>
    </section>
  );
};

export default PageWrapper;



