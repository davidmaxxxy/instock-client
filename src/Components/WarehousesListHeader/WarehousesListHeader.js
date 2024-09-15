import React from "react";
import "./WarehousesListHeader.scss";

const WarehousesListHeader = () => {
    return (
      <div className="main-heading">
        <div className="main-heading-container">
        <h1>Warehouses</h1>
        <nav className="main-heading-nav">
          <input className="main-heading-nav__search"/>
          <button>Placeholder</button>
        </nav>
        </div>
      </div>
    );
  };

  export default WarehousesListHeader;