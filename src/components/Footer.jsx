import React from "react";
import ReactDOM from "react-dom";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div className="footer">
      <p className="footer p">Copyright {year}</p>
    </div>
  );
}
export default Footer;
