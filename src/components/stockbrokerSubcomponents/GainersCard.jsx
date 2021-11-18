/* eslint-disable react/no-array-index-key */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { GreenArrow, RedArrow } from "./GreenArrow";
import "./GainersCard.css";

const GainersCard = ({ cardTitle, companyData, gain = true }) => {
  const renderArrow = gain ? <GreenArrow /> : <RedArrow />;

  const [isFetchingData, setIsFetchingData] = useState(false);
  const [priceUpdate, setPriceUpdate] = useState(null);
  const [err, setErr] = useState(null);

  const fetchPriceUpdate = async () => {
    try {
      setIsFetchingData(true);
      const res = await axios.get(
        `https://restserver3.cardinalstone.com/api/marketTickerData`
      );
      // console.log(res.data);
      const ganers = res.data.sort(
        (a, b) => +a.priceChangePercent - +b.priceChangePercent
      );
      if (cardTitle === "TOP LOSERS") {
        setPriceUpdate(ganers.slice(0, 5));
      } else {
        setPriceUpdate(ganers.slice(-5));
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchPriceUpdate();
    };

    fetchData();
  }, []);
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

      {priceUpdate &&
        priceUpdate.map((item, index) => (
          <div key={index} className="gainerscard_data">
            <div className="gainerscard_data_headers">
              <div className="gainerscard_data_header">
                <p>{item.name}</p>
              </div>
              <div className="gainerscard_data_header">
                <p>{item.currentPrice}</p>
              </div>
              <div className="gainerscard_data_header">
                <p>{item.priceChangePercent}</p>
                {renderArrow}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GainersCard;
