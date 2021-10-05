import React from "react";
import NumberCard from "../general/NumberCard";
import PriceUpdate from "../../stockbrokerSubcomponents/PriceUpdate";
import GainersCard from "../../stockbrokerSubcomponents/GainersCard";
import NewsFeed from "../../stockbrokerSubcomponents/NewsFeed";
import chartdash from "../../../assets/chartdash.svg";
import UpcomingEvents from "../../stockbrokerSubcomponents/UpcomingEvents";

const companyDatas = [
  {
    companyName: "ACCESS",
    companyPrice: 61.55,
    comapanyChange: 9.89,
    companyGain: true,
  },
  {
    companyName: "ACADEMY",
    companyPrice: 17.21,
    comapanyChange: 7.32,
    companyGain: true,
  },
  {
    companyName: "NASCON",
    companyPrice: 10.23,
    comapanyChange: 4.89,
    companyGain: false,
  },
  {
    companyName: "NESTLE",
    companyPrice: 145.23,
    comapanyChange: 4.89,
    companyGain: false,
  },
  {
    companyName: "ACADEMY",
    companyPrice: 23.44,
    comapanyChange: 8.92,
    companyGain: true,
  },
];
const Overview = () => (
  <div className="dashboard_view">
    <div className="dashboard_head">
      <div className="dashboard_requests_header">
        <h3>Dashboard</h3>
      </div>
      <div className="dashboard_header">
        <NumberCard
          text="Submitted "
          number={10}
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
        <PriceUpdate data={companyDatas} />
      </div>

      <div className="dash_items">
        <div className="top_gainers_losers">
          <GainersCard cardTitle="TOP GAINERS" companyData={companyDatas} />
          <GainersCard
            cardTitle="TOP LOSERS"
            companyData={companyDatas}
            gain={false}
          />
        </div>

        <div className="dashboard_news_feedback">
          <NewsFeed />
        </div>
      </div>

      <div className="dash_items">
        <div className="chart_dash">
          <img src={chartdash} alt="carth" />
        </div>

        <div
          style={{ marginTop: "2px" }}
          // className="dashboard_news_feedback"
        >
          <UpcomingEvents />
        </div>
      </div>
    </div>
  </div>
);

export default Overview;
