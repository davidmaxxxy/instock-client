import React from "react";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import DropDown from "../../Components/DropDown/DropDown";
const listOfWarehouse = ["Warehouse 1", "Warehouse 2"];
const Homepage = () => {
  const getvalue = (value) => {
    console.log(value);
  };
  return (
    <>
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
      <PageWrapper title={"Inventory"} location={"Inventory"}>
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
    </>
  );
};

export default Homepage;
