import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return <div className="footer">&copy; {year} SeyiDev</div>;
};

export default Footer;
