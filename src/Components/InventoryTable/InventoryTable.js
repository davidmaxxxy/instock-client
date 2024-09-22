import React from "react";
import "./InventoryTable.scss";
import btnSort from '../../assets/Icons/sort-24px.svg';

const InventoryTable = ({ inventory, loading }) => { // Destructure props

  return (
    <div className="table-wrapper">
      {!loading ? (
        <section className="table-wrapper__mobile">
          {/* {inventory.map((item) => (
            <InventoryElementMobile key={item.id} item={item} /> // Render each inventory item
          ))} */}
        </section>
      ) : (
        <div className="spinner">
          <p>Loading...</p>
        </div>
      )}
      <table className="table-wrapper__main">
        <thead className="table-header">
          <tr className="table-header__cell">
            <th className="table-header__element"><h4>INVENTORY ITEM</h4> <img className="table-header__btn-sort" src={btnSort} alt="Sort"/> </th> 
          </tr>
          <tr className="table-header__cell table-header__cell-address">
            <th className="table-header__element"><h4>CATEGORY</h4> <img className="table-header__btn-sort" src={btnSort} alt="Sort"/></th>
          </tr>
          <tr className="table-header__cell">
            <th className="table-header__element"><h4>STATUS</h4> <img className="table-header__btn-sort" src={btnSort} alt="Sort"/></th>
          </tr>
          <tr className="table-header__cell">
            <th className="table-header__element"><h4>QUANTITY</h4> <img className="table-header__btn-sort" src={btnSort} alt="Sort"/></th>
          </tr>
          <tr className="table-header__cell table-header__cell-actions">
            <th className="table-header__element"><h4>ACTIONS</h4></th>
          </tr>
        </thead>

        {/* {inventory.map((item) => (
          <InventoryElement key={item.id} item={item} /> // Render each inventory item
        ))} */}
      </table>
    </div>
  );
};

export default InventoryTable;