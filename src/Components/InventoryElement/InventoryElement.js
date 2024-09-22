import React from "react";
import { Link } from "react-router-dom";
import "./InventoryElement.scss";
import btnDelete from "../../assets/Icons/delete_outline-24px.svg";
import btnEdit from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";

const InventoryElement = ({ inventory }) => {
  const getStatusClass = (status) => {
    return status === "In Stock"
      ? "inventory-table-element-container__row__green"
      : "inventory-table-element-container__row__red";
  };

  return (
    <tbody className="inventory-table-element-container">
      <tr className="inventory-table-element-container__cell">
        <td className="inventory-table-element-container__row">
          <Link
            className="inventory-table-element-container__row-link"
            to={`/inventory/detail/${inventory.item_name}/${inventory.id}`}
          >
            <h3>{inventory.item_name}</h3>
            <img
              className="inventory-table-element-container__row-chevron"
              src={chevron}
              alt="&gt;"
            />
          </Link>
        </td>
      </tr>
      <tr className="inventory-table-element-container__cell inventory-table-element-container__cell-text">
        <td className="inventory-table-element-container__row inventory-table-element-container__row-address">
          {inventory.category}
        </td>
      </tr>
      <tr
        className="inventory-table-element-container__cell inventory-table-element-container__cell-text"
      >
        <td className={`inventory-table-element-container__row ${getStatusClass(
          inventory.status
        )}`}>
          {inventory.status}
        </td>
      </tr>
      <tr className="inventory-table-element-container__cell inventory-table-element-container__cell-qty inventory-table-element-container__cell-text">
        <td className="inventory-table-element-container__row">
          {inventory.quantity}
        </td>
      </tr>
      <tr className="inventory-table-element-container__cell inventory-table-element-container__cell-contact inventory-table-element-container__cell-text">
        <td className="inventory-table-element-container__row">
          {inventory.warehouse_name}
        </td>
      </tr>
      <tr className="inventory-table-element-container__cell inventory-table-element-container__cell-btn">
        <td>
          <img
            className="inventory-table-element-container__btn-delete inventory-table-element-container__btn"
            src={btnDelete}
            alt="Delete"
          />
        </td>
        <td>
          <Link to={`/edit/inventory/${inventory.warehouse_id}`}>
            <img
              className="inventory-table-element-container__btn"
              src={btnEdit}
              alt="Edit"
            />
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default InventoryElement;

