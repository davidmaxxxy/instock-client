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
    <main className="homepage__container">
      <section className="homepage__container--overlay">
        <PageWrapper title={"Warehouses"} location={"Warehouses"}>
          <DropDown
            options={listOfWarehouse}
            handleOnValueSelect={getSelectedValue}
            isError={false}
            placeholder={"Please Select"}
          />
        </PageWrapper>
      </section>
    </main>
  );
};

export default Homepage;
