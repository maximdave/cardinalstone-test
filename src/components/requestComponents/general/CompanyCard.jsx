import React from "react";
import "./CompanyCard.css";

const CompanyCard = ({ logoUrl, companyName }) => (
  <div className="companycard">
    <div className="companycard_logo">
      <img src={logoUrl} alt="companycard_logo" />
    </div>
    <hr className="modal_divider" />

    <p className="companycard_name">{companyName}</p>
  </div>
);

export default CompanyCard;
