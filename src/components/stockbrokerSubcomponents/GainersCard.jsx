/* eslint-disable react/no-array-index-key */
import React from "react";
import { GreenArrow, RedArrow } from "./GreenArrow";
import "./GainersCard.css";

const GainersCard = ({ cardTitle, companyData, gain = true }) => {
  const renderArrow = gain ? <GreenArrow /> : <RedArrow />;
  return (
    <div className="gainerscard">
      <div className="gainerscard_header">
        <h4>{cardTitle}</h4>
      </div>

      <div className="gainerscard_data">
        <div className="gainerscard_data_headers">
          <div className="gainerscard_data_header">
            <h4>Symbol</h4>
          </div>
          <div className="gainerscard_data_header">
            <h4>Price (₦)</h4>
          </div>
          <div className="gainerscard_data_header">
            <h4>Change (%)</h4>
          </div>
        </div>
      </div>

      {companyData.map((data, index) => (
        <div key={index} className="gainerscard_data">
          <div className="gainerscard_data_headers">
            <div className="gainerscard_data_header">
              <p>{data.companyName}</p>
            </div>
            <div className="gainerscard_data_header">
              <p>{data.companyPrice}</p>
            </div>
            <div className="gainerscard_data_header">
              <p>{data.comapanyChange}</p>
              {renderArrow}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GainersCard;
