/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { GreenArrow, RedArrow, Dash } from "./GreenArrow";
import "./PriceUpdate.css";

const PriceUpdate = ({ data }) => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [priceUpdate, setPriceUpdate] = useState(null);
  const [err, setErr] = useState(null);

  const fetchPriceUpdate = async () => {
    try {
      setIsFetchingData(true);
      const res = await axios.get(
        `https://restserver3.cardinalstone.com/api/marketTickerData`
      );
      setPriceUpdate(res.data);
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
    <div className="priceupdate">
      <div className="marquee">
        <div className="marqueeDiv">
          {priceUpdate &&
            priceUpdate.map((item, index) => (
              <div key={index} className="pricecard">
                <span style={{ marginRight: "10px" }}>{item.name}</span>
                <span style={{ marginRight: "10px" }}>{item.currentPrice}</span>
                <span style={{ marginRight: "10px", color: "blue" }}>
                  {item.priceChangePercent}
                </span>
                <span>
                  {item.priceChangePercent.startsWith("-") ? (
                    <RedArrow />
                  ) : item.priceChangePercent === "0.00" ? (
                    <Dash />
                  ) : (
                    <GreenArrow />
                  )}
                </span>
                {/* 
            {item.companyGain ? <GreenArrow /> : <RedArrow />}
              
             */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PriceUpdate;
