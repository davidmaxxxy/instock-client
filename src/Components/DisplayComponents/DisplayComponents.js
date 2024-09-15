import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import DropDown from "../DropDown/DropDown";

const listOfWarehouse = ["Warehouse 1", "Warehouse 2"];
const DisplayComponents = () => {
  const getvalue = (value) => {
    console.log(value);
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
    </div>
  );
};

export default DisplayComponents;
