import React from "react";
import Pagination from "@mui/material/Pagination";
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
        <CustomTable tableHeader={tableHeader}>
          {tableProps.splice(0, 1)?.map((tb, idx) => (
            <tr key={idx}>
              <td>{tb.id}</td>
              <td>{tb.date}</td>
              <td>
                <strong>{tb.type}</strong>
              </td>
              <td>{tb.stockbroker}</td>
              <td className="d-flex">
                <p className={tb.status.toLowerCase()}>{tb.status}</p>
              </td>
            </tr>
          ))}
        </CustomTable>
        <div className="view-more">
          <Pagination count={10} color="primary" />
        </div>{" "}
      </div>
    </div>
  );
};

export default Report;
