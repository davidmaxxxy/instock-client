import React from "react";
import "./Footer.scss";
import logo from "../../asset/copyright-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="logo" src={logo} />
      <h4>InStock Inc. All Rights Reserved.</h4>
    </div>
  );
};

export default Footer;
