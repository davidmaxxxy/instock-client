import React from "react";
import "./InventoryElementMobile.scss";
import { Link } from "react-router-dom";
import btnDelete from '../../assets/Icons/delete_outline-24px.svg';
import btnEdit from '../../assets/Icons/edit-24px.svg';
import chevron from '../../assets/Icons/chevron_right-24px.svg'

const InventoryElementMobile = ({ inventory }) => {
    const getStatusClass = (status) => {
        return status === "In Stock"
          ? "inventory-mobile-element__text__green"
          : "inventory-mobile-element__text__red";
      };
    return (
        <div className="inventory-mobile-element">
            <span className="inventory-mobile-element__container">
            <div className="inventory-contact-name-wrapper">
                <span className="inventory-contact-name-wrapper__inventory-container">
                    <h4 className="inventory-mobile-element__heading">INVENTORY ITEM</h4>
                    <Link className="table-element-container__row-link" to={`/inventory/detail/${inventory.item_name}/${inventory.id}`}>
                    <p className="inventory-contact-name-wrapper__inventory-name inventory-mobile-element__text">
                        {inventory.item_name}
                        <img className="inventory-contact-name-wrapper__inventory-name-link"  src={chevron} alt='&gt;' />
                    </p>
                    </Link>
                </span>
                <span className="inventory-contact-name-wrapper__contact-name-container">
                <h4 className="inventory-mobile-element__heading">CATEGORY</h4>
                <p className="inventory-mobile-element__text">{inventory.category}</p>
                </span>
            </div>
            <div className="inventory-address-contact-info-wrapper">
                <span className="address-contact-info-wrapper__address-container">
                    <h4 className="inventory-mobile-element__heading inventory-mobile-element__heading__status">STATUS</h4>
                    <p className={`inventory-mobile-element__text ${getStatusClass(
          inventory.status
        )}`}>{inventory.status}</p>
                </span>
                <span className="inventory-address-contact-info-wrapper__contact-info-container">
                <h4 className="inventory-mobile-element__heading">QTY</h4>
                <p className="inventory-mobile-element__text">{inventory.quantity}</p>
                </span>
                <span className="address-contact-info-wrapper__contact-info-container">
                <h4 className="inventory-mobile-element__heading">WAREHOUSE</h4>
                <p className="inventory-mobile-element__text">{inventory.warehouse_name}</p>
                </span>
            </div>
            </span>
            <nav className="inventory-mobile-element__buttons-container">
                <img className="inventory-mobile-element__btn" src={btnDelete} alt="Delete"/>
                <Link to={`/edit/inventory/${inventory.warehouse_id}`}>
                <img className="inventory-mobile-element__btn" src={btnEdit} alt="Edit"/>
                </Link>
            </nav>
        </div>
    );
  };

  export default InventoryElementMobile;