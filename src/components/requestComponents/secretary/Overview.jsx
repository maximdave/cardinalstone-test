import axios from "axios";
import React, { useState, useEffect } from "react";
import NumberCard from "../general/NumberCard";
import PriceUpdate from "../../stockbrokerSubcomponents/PriceUpdate";
import GainersCard from "../../stockbrokerSubcomponents/GainersCard";
import NewsFeed from "../../stockbrokerSubcomponents/NewsFeed";
import chartdash from "../../../assets/chartdash.svg";
import AllIndexChart from "../../charts/AllIndexChart";

const Overview = () => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [requetsData, setRequestsData] = useState(null);
  const [err, setErr] = useState(null);

  const fetchRequestStats = async () => {
    try {
      const Token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      setIsFetchingData(true);
      const { data } = await axios.get(
        `http://localhost:5000/sbp/getrequeststats`,
        config
      );
      // console.log(data.data.totalRequests);
      setRequestsData(data.data);

      // console.log("requetsData:::", requetsData.totalRequests);
      console.log("requetsDatassss:::", data.data);

      // setPriceUpdate(ganers.slice(0, 5));
    } catch (e) {
      setErr(e);
    }
  };
  console.log("requetsDatassss:::2222", requetsData);

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
            number={requetsData ? requetsData.totalRequests : 0}
            bgColor="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #002564"
          />
          <NumberCard
            text="Captured"
            number={requetsData ? requetsData.totalCapturedRequests : 0}
            bgColor="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #185399"
          />
          <NumberCard
            text="Rejected"
            number={requetsData ? requetsData.totalRejectedRequests : 0}
            bgColor="#296DB6"
          />
        </div>
        {/* <div className="dashboard_header">
          <NumberCard
            text="Captured "
            number={requetsData ? requetsData.totalCapturedRequests : 0}
            bgColor="#19559B"
          />
          <NumberCard
            text="Rejected"
            number={requetsData ? requetsData.totalRejectedRequests : 0}
            bgColor="#296DB6"
          />
          <NumberCard
            text="Completed "
            number={requetsData ? requetsData.totalCompletedRequests : 0}
            bgColor="#002564"
          />
        </div> */}

        <p style={{ marginTop: "3rem" }}>
          <b>Price Update</b>
        </p>
        <div className="price_update" style={{ marginBottom: "3rem" }}>
          <PriceUpdate />
        </div>

        <div className="dash_items">
          <div className="top_gainers_losers">
            <div className="top_gainers_box">
              <GainersCard cardTitle="TOP GAINERS" />
              <GainersCard cardTitle="TOP LOSERS" gain={false} />
            </div>
            <div className="chart_dash">
              <AllIndexChart />
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
