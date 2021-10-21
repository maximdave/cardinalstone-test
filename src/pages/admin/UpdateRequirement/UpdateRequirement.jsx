import React from "react";
import Logo from "../../../assets/CSRL Logo 1.png";
import plusIcon from "../../../assets/icons/plus.svg";
import minusIcon from "../../../assets/icons/minus.svg";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import arrowUp from "../../../assets/icons/arrow-up.svg";
import "./UpdateRequirement.css";

const UpdateRequirement = () => (
  <div className="requirement-div">
    <div className="requirement-card">
      <img src={Logo} alt="" />
      <p className="portal-head">STOCKBROKERS' PORTAL</p>
      <h3 className="card-title">Correction of name request</h3>
      <div className="request-div">
        <p>Request Letter</p>
        <div className="icon-div">
          <img src={plusIcon} alt="" />
          <img src={minusIcon} alt="" />
          <img src={arrowDown} alt="" />
          <img src={arrowUp} alt="" />
        </div>
      </div>
      <hr />
      <div className="request-div">
        <p>
          Sworn Affidavit from the High Court with an affixed coloured passport
          photograph duly authenticated by the Court
        </p>
        <div className="icon-div">
          <img src={plusIcon} alt="" />
          <img src={minusIcon} alt="" />
          <img src={arrowDown} alt="" />
          <img src={arrowUp} alt="" />
        </div>
      </div>
      <hr />
      <div className="request-div">
        <p>
          Means of Identification i.e National ID Card, Driver’s License,
          International Passport or Permanent Voter’s Card
        </p>
        <div className="icon-div">
          <img src={plusIcon} alt="" />
          <img src={minusIcon} alt="" />
          <img src={arrowDown} alt="" />
          <img src={arrowUp} alt="" />
        </div>
      </div>
      <hr />
      <div className="requirement-btn-flex">
        <button className="update">UPDATE REQUIREMENT</button>
        <button className="back">BACK TO LIST</button>
      </div>
    </div>
  </div>
);

export default UpdateRequirement;
