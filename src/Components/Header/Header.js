import React from "react";
import "./Header.scss";
import logoMobile from "../../assets/Logo/InStock-Logo_1x.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <img className="header-logo__img" src={logoMobile} alt="logo" />
        <div className="header-side-nav">
          <h3 className="header-side-nav__warehouses-btn">Warehouses</h3>
          <h3 className="header-side-nav__inventory-btn">Inventory</h3>
        </div>
      </nav>
    </header>
  );
};

export default Header;
