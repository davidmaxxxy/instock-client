import React from "react";
import "./InventoryTable.scss";
import btnSort from '../../assets/Icons/sort-24px.svg';
import InventoryElement from "../InventoryElement/InventoryElement";
import InventoryElementMobile from "../InventoryElementMobile/InventoryElementMobile";

const InventoryTable = ({ inventory, loading }) => {

  return (
    <div className="inventory-table-wrapper">
      {!loading ? (
        <section className="inventory-table-wrapper__mobile">
          {inventory.map((inventory) => (
            <InventoryElementMobile key={inventory.id} inventory={inventory} />
          ))}
        </section>
      ) : (
        <div className="spinner">
          <p>Loading...</p>
        </div>
      )}
      <table className="inventory-table-wrapper__main">
        <thead className="inventory-table-header">
          <tr className="inventory-table-header__cell ">
            <th className="inventory-table-header__element"><h4>INVENTORY ITEM</h4> <img className="inventory-table-header__btn-sort" src={btnSort} alt="Sort"/> </th> 
          </tr>
          <tr className="inventory-table-header__cell inventory-table-header__cell-category">
            <th className="inventory-table-header__element"><h4>CATEGORY</h4> <img className="inventory-table-header__btn-sort" src={btnSort} alt="Sort"/></th>
          </tr>
          <tr className="inventory-table-header__cell">
            <th className="inventory-table-header__element"><h4>STATUS</h4> <img className="inventory-table-header__btn-sort" src={btnSort} alt="Sort"/></th>
          </tr>
          <tr className="inventory-table-header__cell inventory-table-header__cell-qty">
            <th className="inventory-table-header__element"><h4>QTY</h4> <img className="inventory-table-header__btn-sort" src={btnSort} alt="Sort"/></th>
          </tr>
          <tr className="inventory-table-header__cell">
            <th className="inventory-table-header__element"><h4>WAREHOUSE</h4> <img className="inventory-table-header__btn-sort" src={btnSort} alt="Sort"/></th>
          </tr>
          <tr className="inventory-table-header__cell inventory-table-header__cell-actions">
            <th className="inventory-table-header__element"><h4>ACTIONS</h4></th>
          </tr>
        </thead>

        {inventory.map((inventory) => (
          <InventoryElement key={inventory.id} inventory={inventory} />
        ))}
      </table>
    </div>
  );
};

export default InventoryTable;