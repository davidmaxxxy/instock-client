import React from "react";
import { Link } from "react-router-dom";
import "./WarehouseElement.scss";
import btnDelete from '../../assets/Icons/delete_outline-24px.svg';
import btnEdit from '../../assets/Icons/edit-24px.svg';
import chevron from '../../assets/Icons/chevron_right-24px.svg'

const WarehousesElement = ({ warehouse,handleOnClick }) => {
  console.log(warehouse)
    return (
      
        <tbody className="table-element-container">
        <tr className="table-element-container__cell">       
         <td className="table-element-container__row">
          <Link className="table-element-container__row-link" to={`/warehouse/detail/${warehouse.warehouse_name}/${warehouse.id}`}>
          <h3>{warehouse.warehouse_name}</h3><img className="table-element-container__row-chevron"  src={chevron} alt='&gt;' /> 
          </Link>
          </td>
        </tr>
        <tr className="table-element-container__cell table-element-container__cell-address table-element-container__cell-text">
          <td className="table-element-container__row table-element-container__row-address">{warehouse.address}, {warehouse.city}, {warehouse.country}</td>
        </tr>
        <tr className="table-element-container__cell table-element-container__cell-text">
          <td className="table-element-container__row">{warehouse.contact_name}</td>
        </tr>
        <tr className="table-element-container__cell table-element-container__cell-contact table-element-container__cell-text">
          <td className="table-element-container__row">{warehouse.contact_phone}</td>
          <td className="table-element-container__row">{warehouse.contact_email}</td>
        </tr>
        <tr className="table-element-container__cell table-element-container__cell-btn">
          {/* Delete function link goes here */}
            <td><img className="table-element-container__btn-delete table-element-container__btn" onclick={()=>{handleOnClick(warehouse.id, warehouse.warehouse_name)}} src={btnDelete} alt="Delete"/></td>
            <td>
              <Link to={`/warehouse/${warehouse.id}/edit`}>
            <img className="table-element-container__btn" src={btnEdit} alt="Edit"/>
            </Link>
            </td>
        </tr>
      </tbody>
      
    );
  };

  export default WarehousesElement;