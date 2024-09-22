import React from "react";
import "./WarehouseElementMobile.scss";
import { Link } from "react-router-dom";
import btnDelete from '../../assets/Icons/delete_outline-24px.svg';
import btnEdit from '../../assets/Icons/edit-24px.svg';
import chevron from '../../assets/Icons/chevron_right-24px.svg'

const WarehousesElementMobile = ({ warehouse }) => {
    return (
        <div className="mobile-element">
            <span className="mobile-element__container">
            <div className="warehouse-contact-name-wrapper">
                <span className="warehouse-contact-name-wrapper__warehouse-container">
                    <h4 className="mobile-element__heading">WAREHOUSE</h4>
                    <Link className="table-element-container__row-link" to={`/warehouse/detail/${warehouse.warehouse_name}/${warehouse.id}`}>
                    <p className="warehouse-contact-name-wrapper__warehouse-name mobile-element__text">
                        {warehouse.warehouse_name}
                        <img className="warehouse-contact-name-wrapper__warehouse-name-link"  src={chevron} alt='&gt;' />
                    </p>
                    </Link>
                </span>
                <span className="warehouse-contact-name-wrapper__contact-name-container">
                <h4 className="mobile-element__heading">ADDRESS</h4>
                <p className="mobile-element__text">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                </span>
            </div>
            <div className="address-contact-info-wrapper">
                <span className="address-contact-info-wrapper__address-container">
                    <h4 className="mobile-element__heading">CONTACT NAME </h4>
                    <p className="mobile-element__text">{warehouse.contact_name}</p>
                </span>
                <span className="address-contact-info-wrapper__contact-info-container">
                <h4 className="mobile-element__heading">CONTACT INFORMATION</h4>
                <p className="mobile-element__text">{warehouse.contact_phone}</p>
                <p className="mobile-element__text address-contact-info-wrapper__email">{warehouse.contact_email}</p>
                </span>
            </div>
            </span>
            <nav className="mobile-element__buttons-container">
                <img className="mobile-element__btn" src={btnDelete} alt="Delete"/>
                <img className="mobile-element__btn" src={btnEdit} alt="Edit"/>
            </nav>
        </div>
    );
  };

  export default WarehousesElementMobile;