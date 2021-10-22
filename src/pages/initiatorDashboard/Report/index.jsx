import React from "react";
import { Link } from "react-router-dom";
import CustomTable from "../../../components/CustomTable";
import SearchBar from "../../../components/stockrequest/SearchBar";
import "./Report.css";

const Report = () => {
  const tableHeader = [
    "ID NO",
    "Date",
    "Request Type",
    "Stockbroker",
    "Status",
  ];
  const tableProps = [
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: "Submitted",
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: "Submitted",
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: "Submitted",
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: "Submitted",
    },
  ];
  return (
    <div>
      <div className="search_options">
        <SearchBar />
      </div>

      <div className="reports">
        <CustomTable tableProps={tableProps} tableHeader={tableHeader} />
        <div className="view-more">
          <Link to="view-more">View all requests</Link>
        </div>
      </div>

      <button className="primary-btn" style={{ marginTop: "40px" }}>
        REVERSE
      </button>
    </div>
  );
};

export default Report;
