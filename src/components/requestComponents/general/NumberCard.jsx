import React from "react";
import "./NumberCard.css";

const NumberCard = ({ text, number, bgColor }) => (
  <div style={{ background: bgColor }} className="numbercard">
    <p className="numbercard_text">{text}</p>
    <p className="numbercard_number">{number}</p>
  </div>
);

export default NumberCard;
