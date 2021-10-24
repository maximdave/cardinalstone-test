import React from "react";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { FilterListSharp, FilterAltOutlined } from "@mui/icons-material";
import Select from "react-select";
import Button from "@mui/material/Button";
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
      status: "Captured",
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: "Awaiting",
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
      status: "Awaiting",
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: "Captured",
    },
  ];
  return (
    <div>
      <div className="search_options">
        <input
          type="text"
          placeholder="Enter Stockbroker name"
          style={{ width: "80%", padding: "5px", marginRight: "20px" }}
        />
        <Button
          color="primary"
          style={{ marginBottom: "6px" }}
          variant="contained"
        >
          Search
        </Button>
      </div>
      <div className="filter-labels">
        <div className="d-flex">
          <FilterAltOutlined />
          <p>Filter by:</p>
        </div>
        <div>
          <Button className="reset-all" variant="text">
            Reset All
          </Button>
        </div>
      </div>
      <div className="d-flex">
        <div className="verification_filters">
          <Select
            placeholder="Start Date"
            className="verification_filter_select"
          />
          <Select
            placeholder="End Date"
            className="verification_filter_select"
          />
          <Select
            placeholder="Request Type"
            className="verification_filter_select"
          />
          <Select placeholder="Status" className="verification_filter_select" />
        </div>
        <Button
          style={{ height: "100%", marginTop: "20px" }}
          variant="contained"
          startIcon={<FilterListSharp />}
        >
          Filter
        </Button>
      </div>
      <div className="reports">
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
