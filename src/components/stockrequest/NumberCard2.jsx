import React from "react";
import "./NumberCard2.css";

const NumberCard2 = ({ text, bgColor, onClick, icon }) => (
  <div
    onClick={onClick}
    style={{ background: bgColor }}
    className="numbercard2"
  >
    <div className="d-flex">
      <img src={icon} alt="csp" />
      <p className="numbercard_text2">{text}</p>
    </div>
  </div>
);

export default NumberCard2;
