import React from "react";
import "./WarehouseElementMobile.scss";

const WarehousesElementMobile = () => {
    return (
        <div className="mobile-element">
            <span className="mobile-element__container">
            <div className="warehouse-contact-name-wrapper">
                <span className="warehouse-contact-name-wrapper__warehouse-container">
                    <h4 className="mobile-element__heading">WAREHOUSE</h4>
                    <p className="warehouse-contact-name-wrapper__warehouse-name mobile-element__text">Manhatan &gt;</p>
                </span>
                <span className="warehouse-contact-name-wrapper__contact-name-container">
                <h4 className="mobile-element__heading">CONTACT NAME ADDRESS</h4>
                <p className="mobile-element__text">503 Brodway</p>
                </span>
            </div>
            <div className="address-contact-info-wrapper">
                <span className="address-contact-info-wrapper__address-container">
                    <h4 className="mobile-element__heading">CONTACT NAME </h4>
                    <p className="mobile-element__text">Parmin Auijla</p>
                </span>
                <span className="address-contact-info-wrapper__contact-info-container">
                <h4 className="mobile-element__heading">CONTACT INFORMATION</h4>
                <p className="mobile-element__text">+1 (629) 555-0129</p>
                <p className="mobile-element__text address-contact-info-wrapper__email">paujla@instock.com</p>
                </span>
            </div>
            </span>
            <nav className="mobile-element__buttons-container">
                <button className="btn"></button>
                <button className="btn"></button>
            </nav>
        </div>
    );
  };

  export default WarehousesElementMobile;