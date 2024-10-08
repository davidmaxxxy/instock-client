import React from "react";
import "./Homepage.scss";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import DropDown from "../../Components/DropDown/DropDown";

const listOfWarehouse = ["Warehouse 1", "Warehouse 2"];

const Homepage = () => {
  const getSelectedValue = (value) => {
    console.log(value);
  };
  return (
    <section className="homepage__container">
      <section className="homepage__container--overlay">
        <PageWrapper title={"Warehouses"} location={"Warehouse-edit"}>
          <DropDown
            options={listOfWarehouse}
            handleOnValueSelect={getSelectedValue}
            isError={false}
            placeholder={"Please Select"}
          />
            <DropDown
            options={listOfWarehouse}
            handleOnValueSelect={getSelectedValue}
            isError={false}
            placeholder={"Please Select"}
          />
          <p>ddd</p>
        </PageWrapper>
      </section>
    </section>
  );
};

export default Homepage;
