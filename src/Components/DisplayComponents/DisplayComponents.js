import React, { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import DropDown from "../DropDown/DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import DynamicButton from "../DynamicButton/DynamicButton";
import DynamicFormInput from "../DynamicForm/DynamicFormInput";
import EditWarehouse from "../EditWarehouse/EditWarehouse";

const listOfWarehouse = ["Warehouse 1", "Warehouse 2"];

const DisplayComponents = () => {
  // Change to true when user tries to submit without fill all form inputs
  const [error, setError] = useState(true);

  const getSelectedValueFromDropDownSelect = (value) => {
    // function to get the vale from the  dropdown list

    console.log(value);
  };
  const getValueFromDynamicFormInput = (value) => {
    // function to get the vale from the input when u type in
    console.log(value);
  };
  const handleButtonClick = () => {
    // function to handle the button click event
    console.log("Button clicked");
  };

  //Strings to pass in to PageWrapper location prop  based Page
  // Warehouses == ALL Warehouses
  // Warehouse-details ==  Warehouse details page
  // Warehouse-edit === Warehouse edit form page
  // New-Warehouse === add New Warehouse  form page
  // Inventory === All Inventory page
  // Inventory-details === Inventory details page
  // Inventory-edit-form ===  edit single Inventory form page
  // New-Inventory === Add New Inventory form page

  return (
    <div>
      {/* Import this component and write your code in between them  check HomePage for more example  */}

      <PageWrapper title={"Warehouse"} location={"Warehouses"}>
        {/* <DynamicForm handleButtonClick={handleButtonClick} /> */}
        <DynamicFormInput
          isError={error}
          onChange={getValueFromDynamicFormInput}
          title="Warehouse Name"
          placeholder="Warehouse Name"
        />

        <DropDown
          options={listOfWarehouse}
          handleOnValueSelect={getSelectedValueFromDropDownSelect}
          isError={error}
          placeholder={"warehouse"}
          width={500}
        />

        <h2>Test Dynamic Buttons</h2>

        <DynamicButton
          title="Add New Warehouse"
          colorClass="primary-color-indigo"
          size="large"
          onClick={handleButtonClick}
          Icon={() => <FontAwesomeIcon icon={faPlus} />}
        />

        <DynamicButton
          title="Edit"
          colorClass="primary-color-indigo"
          size="medium"
          onClick={handleButtonClick}
          Icon={() => <FontAwesomeIcon icon={faPencilAlt} />}
        />

        <DynamicButton
          title="Cancel"
          colorClass="primary-color-white"
          size="small"
          onClick={handleButtonClick}
        />
        <DynamicButton
          title="Save"
          colorClass="primary-color-indigo"
          size="small"
          onClick={handleButtonClick}
        />

        <DynamicButton
          title="Delete"
          colorClass="supporting-color-red"
          size="small"
          onClick={handleButtonClick}
        />

        <EditWarehouse />
      </PageWrapper>
    </div>
  );
};

export default DisplayComponents;
