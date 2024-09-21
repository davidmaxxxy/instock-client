import React from "react";
import "./WarehousesTable.scss";
import WarehousesElementMobile from "../WarehouseElementMobile/WarehouseElementMobile";
import WarehousesListHeader from "../WarehousesListHeader/WarehousesListHeader";
import WarehousesElement from "../WarehouseElement/WarehouseElement";
import btnSort from '../../assets/Icons/sort-24px.svg';
const WarehousesTable = () => {
    return (
        <div className="table-wrapper">
            <WarehousesListHeader />
            <section className="table-wrapper__mobile">
            <WarehousesElementMobile/>
            <WarehousesElementMobile/>
            </section>
      <table className="table-wrapper__main">
      <thead className="table-header">
          <tr className="table-header__cell">
            <th className="table-header__element">WAREHOUSE</th>
            <img className="table-header__btn-sort" src={btnSort} alt="Logo"/>
          </tr>
          <tr className="table-header__cell">
            <th className="table-header__element">address</th>
            <img className="table-header__btn-sort" src={btnSort} alt="Logo"/>
          </tr>
          <tr className="table-header__cell">
            <th className="table-header__element">contact name</th>
            <img className="table-header__btn-sort" src={btnSort} alt="Logo"/>
          </tr>
          <tr className="table-header__cell">
            <th className="table-header__element">contact information</th>
            <img className="table-header__btn-sort" src={btnSort} alt="Logo"/>
          </tr>
          <tr className="table-header__cell">
            <th className="table-header__element">actions</th>
          </tr>
        </thead>
        <WarehousesElement/>
        <WarehousesElement/>
      
      </table>
        </div>
    );
  };

  export default WarehousesTable;