import React, { useState } from "react";
import "./AddNewInventory.scss";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import DynamicFormInput from "../../Components/DynamicForm/DynamicFormInput";
import DropDown from "../../Components/DropDown/DropDown";

const listOfWarehouse = ["Warehouse 1", "Warehouse 2"];

const AddNewInventory = () => {
  const [error, setError] = useState(true);
  const [status, setStatus] = useState("In stock");
  const [inventory, setInventory] = useState({
    warehouse_id: 1,
    item_name: "Paper Towels",
    description:
      "Made out of military-grade synthetic materials, these paper towels are highly flammable, yet water resistant, and easy to clean.",
    category: "Gear",
    status: "Out of Stock",
    quantity: 0,
  });

  console.log("STA", status);

  const getValueFromDynamicFormInput = (value) => {
    // function to get the vale from the input when u type in
    console.log(value);
  };
  const getSelectedValueFromDropDownSelect = (value) => {
    // function to get the vale from the  dropdown list

    console.log(value);
  };
  const handleEditInventoryNavigation = () => {};

  return (
    <PageWrapper
      title={"Add New Inventory Item"}
      //   handleButtonClick={handleEditInventoryNavigation}
      location={"New-Inventory"}
      handleBackNavigation={handleEditInventoryNavigation}
    >
      <form className="newInventory__container">
        <div className="newInventory__Item-Details__container">
          <h3 className="newInventory__container">Item Details</h3>
          <div className="newInventory__container__form-container">
            <p className="newInventory__container__form--input-title">
              Item name
            </p>
            <input
              className="newInventory__container__form--input"
              // isError={error}
              onChange={getValueFromDynamicFormInput}
              // title="Warehouse Name"
              placeholder="Warehouse Name"
            />
          </div>
          <div className="newInventory__container__form-container">
            <p className="newInventory__container__form--input-title">
              Description
            </p>
            <textarea
              className="newInventory__container__form--input"
              // isError={error}
              onChange={getValueFromDynamicFormInput}
              rows={4}
              cols={40}
              // title="Warehouse Name"
              placeholder="Please enter a brief item description..."
            />
          </div>
          <div className="newInventory__container__form-container">
            <p className="newInventory__container__form--input-title">
              Category
            </p>
            <DropDown
              options={listOfWarehouse}
              handleOnValueSelect={getSelectedValueFromDropDownSelect}
              //   isError={error}
              placeholder={"Please Select"}
              //   width={400}
            />
          </div>
        </div>
        <div className="Warehouse-details__tablet--divider" />
        <div className="Warehouse-details__mobile--divider" />

        <div className="newInventory__Item-Details__container">
          <h3 className="newInventory__title">Item Availability</h3>
          <div className="newInventory__container__form-container">
            <p className="newInventory__container__form--input-title">Status</p>
            <div className="newInventory__status--container">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="In stock"
                  defaultChecked={true}
                  onChange={() => setStatus("In stock")}
                />
                In stock
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Out of stock"
                  onChange={() => setStatus("Out of stock")}
                />
                Out of stock
              </label>
            </div>
          </div>
          {status === "In stock" && (
            <div className="newInventory__container__form-container">
              <p className="newInventory__container__form--input-title">
                Quantity
              </p>
              <input
                className="newInventory__container__form--input"
                onChange={getValueFromDynamicFormInput}
                placeholder="0"
                type="number"
              />
            </div>
          )}
          <div className="newInventory__container__form-container">
            <p className="newInventory__container__form--input-title">
              Warehouse
            </p>
            <DropDown
              options={listOfWarehouse}
              handleOnValueSelect={getSelectedValueFromDropDownSelect}
              //   isError={error}
              placeholder={"Please Select"}
              //   width={400}
            />
          </div>
        </div>
      </form>
    </PageWrapper>
  );
};

export default AddNewInventory;
