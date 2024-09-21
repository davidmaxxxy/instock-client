import React from "react";
import "./WarehouseElement.scss";
import btnDelete from '../../assets/Icons/delete_outline-24px.svg';
import btnEdit from '../../assets/Icons/edit-24px.svg';

const WarehousesElement = () => {
    return (
        <tbody className="table-element-container">
        <tr className="table-element-container__cell">
          <td className="table-element-container__row">Manhattan &gt;</td>
        </tr>
        <tr className="table-element-container__cell">
          <td className="table-element-container__row">503 Broadway New York, USA</td>
        </tr>
        <tr className="table-element-container__cell">
          <td className="table-element-container__row">Parmin Aujla</td>
        </tr>
        <tr className="table-element-container__cell table-element-container__cell-contact">
          <td className="table-element-container__row">+1 (629) 555-0129</td>
          <td className="table-element-container__row">paujla@instock.com</td>
        </tr>
        <tr className="table-element-container__cell">
            <img className="table-element-container__btn-delete" src={btnDelete} alt="Delete"/>
            <img className="table-element-container__btn" src={btnEdit} alt="Edit"/>
        </tr>
      </tbody>
    );
  };

  export default WarehousesElement;