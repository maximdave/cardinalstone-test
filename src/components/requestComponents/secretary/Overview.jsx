import axios from "axios";
import React, { useState, useEffect } from "react";
import NumberCard from "../general/NumberCard";
import PriceUpdate from "../../stockbrokerSubcomponents/PriceUpdate";
import GainersCard from "../../stockbrokerSubcomponents/GainersCard";
import NewsFeed from "../../stockbrokerSubcomponents/NewsFeed";
import chartdash from "../../../assets/chartdash.svg";
import UpcomingEvents from "../../stockbrokerSubcomponents/UpcomingEvents";

const Overview = () => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [requetsData, setRequestsData] = useState(null);
  const [err, setErr] = useState(null);

  const fetchRequestStats = async () => {
    try {
      setIsFetchingData(true);
      const { data } = await axios.get(
        `http://localhost:5000/sbp/getrequeststats`
      );
      console.log(data.data.totalRequests);
      setRequestsData(data.data);

      console.log("requetsData:::", requetsData.totalRequests);

      // setPriceUpdate(ganers.slice(0, 5));
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchRequestStats();
    };

    fetchData();
  }, []);
  // console.log("requetsData.totalRequests", requetsData.totalRequests);
  return (
    <div className="dashboard_view">
      <div className="dashboard_head">
        <div className="dashboard_requests_header">
          <h3>Dashboard</h3>
        </div>
        <div className="dashboard_header">
          <NumberCard
            text="Submitted "
            number={35}
            bgColor="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #002564"
          />
          <NumberCard
            text="Verified, awaiting approval"
            number={6}
            bgColor="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #185399"
          />
          <NumberCard text="Approved" number={6} bgColor="#296DB6" />
        </div>
        <div className="dashboard_header">
          <NumberCard text="Captured " number={2} bgColor="#19559B" />
          <NumberCard text="Rejected" number={2} bgColor="#296DB6" />
          <NumberCard text="Completed " number={2} bgColor="#002564" />
        </div>

        <div className="price_update">
          <PriceUpdate />
        </div>

        <div className="dash_items">
          <div className="top_gainers_losers">
            <div className="top_gainers_box">
              <GainersCard cardTitle="TOP GAINERS" />
              <GainersCard cardTitle="TOP LOSERS" gain={false} />
            </div>
            <div className="chart_dash">
              <img src={chartdash} alt="carth" />
            </div>
          </div>
          <div className="dashboard_news_feedback">
            <NewsFeed />
            {/* <UpcomingEvents /> */}
          </div>
        </div>

        {/* <div className="dash_items">
        <div
          style={{ marginTop: "2px" }}
          // className="dashboard_news_feedback"
        >
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Overview;
