import React from "react";
import "./NumberCard2.css";

const NumberCard2 = ({ text, bgColor, onClick, icon, num }) => (
  <div
    onClick={onClick}
    style={{ background: bgColor }}
    className="numbercard2"
  >
    <div>
      <p className="numbercard_text2">{text}</p>
      <div className="number-card-label">
        <img src={icon} alt="csp" />
        <p>
          <strong>{num}</strong>
        </p>
      </div>
    </div>
  </div>
);

export default NumberCard2;
