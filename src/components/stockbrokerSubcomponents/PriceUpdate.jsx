/* eslint-disable react/no-array-index-key */
import React from "react";
import { GreenArrow, RedArrow } from "./GreenArrow";
import "./PriceUpdate.css";

const PriceUpdate = ({ data }) => (
  <div className="priceupdate">
    {data.map((item, index) => (
      <div key={index} className="pricecard">
        <span>{item.companyName}</span>
        <span>{item.companyPrice}</span>
        {/* <span>{item.companyChange}</span> */}
        <span>{item.companyGain ? <GreenArrow /> : <RedArrow />}</span>
      </div>
    ))}
  </div>
);

export default PriceUpdate;
