import React, { useState } from "react";
import DynamicButton from "../DynamicButton/DynamicButton";

const listOfWarehouse = ["Warehouse 1", "Warehouse 2"];

const DeleteComponents = ({id, warehouseName}) => {
  const handleButtonClick = () => {
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

  const deleteWarehouseItem = async (id) => {
    try {
        const response = await fetch (`/${id}`, {
            method: 'delete',
        });
        if (response.status === 204) {
            console.log("Warehouse item deleted succesfully");
        } else if (response.status ===404) {
            console.log("Warehouse item not found");
        } else {
            console.log("Failed to delete Warehouse item");
        }
    } catch (error) {
        console.log("Error");
    }
  };


  return (
    <div className="delete">
      <section className="delete__container">
        <div>
          <h1>Delete 
        {warehouseName}
            warehouse?</h1>

          <p>
            Please confirm that you'd like to delete the {warehouseName} from the list of
            warehouses. You won't be able to undo this action.
          </p>

          <DynamicButton
            title="Cancel"
            colorClass="primary-color-white"
            size="small"
            onClick={handleButtonClick}
          />

          <DynamicButton
            title="Delete"
            colorClass="supporting-color-red"
            size="small"
            onClick={deleteWarehouseItem(id)}
          />
        </div>
      </section>
    </div>
  );
};

export default DeleteComponents;
