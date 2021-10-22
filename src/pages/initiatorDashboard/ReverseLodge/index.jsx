import React from "react";
import CustomTable from "../../../components/CustomTable";
import "./ReverseLodge.css";

const ReverseLodge = () => {
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
      <div>
        <h3>Reverse Lodgements</h3>
        <input
          className="reverse-lodge-input"
          type="text"
          placeholder="Input request ID"
        />
        <span>
          <button className="primary-btn">Search</button>
        </span>
      </div>

      <div>
        <CustomTable tableProps={tableProps} tableHeader={tableHeader} />
      </div>

      <div className="reverse-prompt">
        <button className="success-btn">CONFIRM</button>
        <button className="danger-btn">CANCEL</button>
      </div>
    </div>
  );
};

export default ReverseLodge;
