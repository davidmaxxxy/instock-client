import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import DropDown from "../DropDown/DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import DynamicButton from "../DynamicButton/DynamicButton";
import DynamicForm from "../DynamicForm/DynamicForm"; // Import DynamicForm

const listOfWarehouse = ["Warehouse 1", "Warehouse 2"];
const DisplayComponents = () => {
  const getvalue = (value) => {
    console.log(value);
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <PageWrapper title={"Warehouse"} location={"Warehouses"}>
        <DropDown
          options={listOfWarehouse}
          handleOnValueSelect={getvalue}
          isError={false}
          placeholder={"warehouse"}
          width={500}
        />
      </PageWrapper>
      <PageWrapper title={"Warehouse name"} location={"Warehouse-details"}>
        <DropDown
          options={listOfWarehouse}
          handleOnValueSelect={getvalue}
          isError={false}
          placeholder={"warehouse"}
          width={500}
        />
      </PageWrapper>
      <PageWrapper title={"Edit Warehouse"} location={"Warehouse-edit"}>
        <DropDown
          options={listOfWarehouse}
          handleOnValueSelect={getvalue}
          isError={false}
          placeholder={"warehouse"}
          width={500}
        />
      </PageWrapper>
      <PageWrapper title={"Add New Warehouse"} location={"New-Warehouse"}>
        <DropDown
          options={listOfWarehouse}
          handleOnValueSelect={getvalue}
          isError={false}
          placeholder={"warehouse"}
          width={500}
        />
      </PageWrapper>
      <PageWrapper title={"Inventory"} location={"Inventory"}>
        <DropDown
          options={listOfWarehouse}
          handleOnValueSelect={getvalue}
          isError={false}
          placeholder={"warehouse"}
          width={500}
        />
      </PageWrapper>
      <PageWrapper title={"Inventory name "} location={"Inventory-details"}>
        <DropDown
          options={listOfWarehouse}
          handleOnValueSelect={getvalue}
          isError={false}
          placeholder={"warehouse"}
          width={500}
        />
      </PageWrapper>
      <PageWrapper
        title={"Edit Inventory Item"}
        location={"Inventory-edit-form"}
      >
        <DropDown
          options={listOfWarehouse}
          handleOnValueSelect={getvalue}
          isError={false}
          placeholder={"warehouse"}
          width={500}
        />
      </PageWrapper>
      <PageWrapper title={"Add New Inventory Item"} location={"New-Inventory"}>
        <DropDown
          options={listOfWarehouse}
          handleOnValueSelect={getvalue}
          isError={false}
          placeholder={"warehouse"}
          width={500}
        />
      </PageWrapper>

      {/* Embed the DynamicForm component */}
      <DynamicForm handleButtonClick={handleClick} />

      <section className="button-container">
        <h2>Test Dynamic Buttons</h2>

        <DynamicButton
          title="Add New Warehouse"
          colorClass="primary-color-indigo"
          size="large"
          onClick={handleClick}
          icon={() => <FontAwesomeIcon icon={faPlus} />}
        />

        <DynamicButton
          title="Edit"
          colorClass="primary-color-indigo"
          size="medium"
          onClick={handleClick}
          icon={() => <FontAwesomeIcon icon={faPencilAlt} />}
        />

        <DynamicButton
          title="Cancel"
          colorClass="primary-color-white"
          size="small"
          onClick={handleClick}
        />
        <DynamicButton
          title="Save"
          colorClass="primary-color-indigo"
          size="small"
          onClick={handleClick}
        />

        <DynamicButton
          title="Delete"
          colorClass="supporting-color-red"
          size="small"
          onClick={handleClick}
        />
      </section>
    </div>
  );
};

export default DisplayComponents;
