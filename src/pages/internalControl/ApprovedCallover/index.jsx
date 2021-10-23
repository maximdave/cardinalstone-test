import React from "react";
import { Link } from "react-router-dom";
import CustomTable from "../../../components/CustomTable";
import SearchBar from "../../../components/stockrequest/SearchBar";
import "./Approved.css";

const ApprovedCallover = () => {
  const btn = (
    <>
      <button className="call-over-btn">VIEW</button>
      <button className="call-over-btn">DOWNLOAD</button>
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
      <h5>Approved Callovers</h5>

      <div className="search_options">
        <SearchBar />
      </div>
      <div className="approved">
        <CustomTable tableHeader={tableHeader}>
          {tableProps.map((tb, idx) => (
            <tr key={idx}>
              <td>{tb.id}</td>
              <td>{tb.date}</td>
              <td>
                <strong>{tb.type}</strong>
              </td>
              <td>{tb.stockbroker}</td>
              <td className="d-flex">
                <p className="">{tb.status}</p>
              </td>
            </tr>
          ))}
        </CustomTable>

        <div className="viewmore">
          <Link to="/viewmore">View all results</Link>
        </div>
      </div>
    </div>
  );
};

export default ApprovedCallover;
