import React from "react";
import "./NumberCard2.css";

const NumberCard2 = ({ text, bgColor, onClick }) => (
  <div
    onClick={onClick}
    style={{ background: bgColor }}
    className="numbercard2"
  >
    <p className="numbercard_text2">{text}</p>
  </div>
);

export default NumberCard2;