import React from "react";
import "./Footer.scss";
import logo from "../../assets/Icons/copyright-logo.png";

const Footer = () => {
  return (
    <footer>
    <div className="footer">
      <img className="logo" src={logo} />
      <h4>InStock Inc. All Rights Reserved.</h4>
    </div>
    </footer>
  );
};

export default Footer;
