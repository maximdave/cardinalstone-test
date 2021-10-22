import React from "react";
import { Link } from "react-router-dom";
import CustomTable from "../../../components/CustomTable";
import SearchBar from "../../../components/stockrequest/SearchBar";
import "./rejected-callover.css";

const RejectedCallover = () => {
  const btn = (
    <>
      <button className="rejected-btn">VIEW</button>
      <button className="rejected-btn">DOWNLOAD</button>
    </>
  );
  const tableHeader = ["ID NO", "Date", "Request Type", "Stockbroker", ""];
  const tableProps = [
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: btn,
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: btn,
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: btn,
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: btn,
    },
  ];
  return (
    <div>
      <h5>Rejected Callovers</h5>

      <div className="search_options">
        <SearchBar />
      </div>
      <div className="rejected">
        <CustomTable tableHeader={tableHeader} tableProps={tableProps} />

        <div className="viewmore">
          <Link to="/viewmore">View all results</Link>
        </div>
      </div>
    </div>
  );
};

export default RejectedCallover;
