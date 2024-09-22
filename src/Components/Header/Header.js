import React, { useEffect, useState } from "react";
import "./Header.scss";
import logoMobile from "../../assets/Logo/InStock-Logo_1x.png";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    const firstPathItem = location.pathname.split('/')[1];
    if (firstPathItem === 'warehouse') {
      setActiveButton('warehouse');
    } else if (firstPathItem === 'inventory') {
      setActiveButton('inventory');
    }
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <img className="header-logo__img" src={logoMobile} alt="logo" />
        <div className="header-side-nav">
          <button
            className={`header-side-nav__btn ${activeButton === 'warehouse' ? 'active' : ''}`}
            onClick={() => handleNavigation('/warehouse')}
          >
            Warehouses
          </button>
          <button
            className={`header-side-nav__btn ${activeButton === 'inventory' ? 'active' : ''}`}
            onClick={() => handleNavigation('/inventory')}
          >
            Inventory
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
