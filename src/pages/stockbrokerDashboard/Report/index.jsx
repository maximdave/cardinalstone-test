/* eslint-disable no-underscore-dangle */
import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { Pagination } from "@material-ui/lab";
import { FilterListSharp, FilterAltOutlined } from "@mui/icons-material";
import Select from "react-select";
import Button from "@mui/material/Button";
import CustomTable from "../../../components/CustomTable";
import usePagination from "../../../components/myPagination";
import "./Report.css";

const Report = () => {
  const [isFetchingNews, setIsFetchingNews] = useState(false);
  const [report, setReport] = useState([]);
  const [displayedReports, setDisplayedReports] = useState([]);
  const [newsErr, setNewsErr] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [requestTypeFilter, setRequestTypeFilter] = useState("");
  const [startDate, onDateOneChange] = useState(new Date());
  const [endDate, onDateTwoChange] = useState(new Date());
  //
  const getReport = async () => {
    try {
      const Token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      setIsFetchingNews(true);
      const { data } = await axios.get(
        `http://localhost:5000/sbp/getrequest`,
        config
      );
      console.log("REPORTdata:::::", data.data);
      setReport(data.data);
      setIsFetchingNews(false);
    } catch (e) {
      setIsFetchingNews(false);
      console.log(e);
      setNewsErr(e);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getReport();
    };
    fetchData();
  }, []);
  useEffect(() => {
    setDisplayedReports([...report]);
  }, [report]);
  const tableHeader = [
    "Request ID",
    "Date",
    "Request Type",
    "Stockbroker",
    "Status",
  ];
  // PAGINATION
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(displayedReports.length / PER_PAGE);
  const _DATA = usePagination(displayedReports, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  const statusOptions = [
    { value: "Submitted", label: "Submitted" },
    { value: "Processing", label: "Processing" },
    { value: "Approved", label: "Approved" },
    { value: "Rejected", label: "Rejected" },
  ];
  const handleStatusChange = (selected) => {
    setStatusFilter(selected);
    const filtered = report.filter(
      (item) => item.status.toLowerCase() === selected.value.toLowerCase()
    );
    setDisplayedReports(filtered);
    console.log("selected::::::", selected);
  };
  const requestTypeOptions = [
    { value: "Demat Request", label: "Demat Request" },
    {
      value: "Transfer of Shares Request",
      label: "Transfer of Shares Request",
    },
    {
      value: "Correction of Name Request",
      label: "Correction of Name Request",
    },
    {
      value: "Request For Change Of Name Individual",
      label: "Request For Change Of Name Individual",
    },
    {
      value: "Request For Change Of Name Coporates",
      label: "Request For Change Of Name Coporates",
    },
    {
      value: "Request For Signature Mandate",
      label: "Request For Signature Mandate",
    },
    {
      value: "Submission of Banker's Confirmation Letters",
      label: "Submission of Banker's Confirmation Letters",
    },
    {
      value: "Request for Change of Address",
      label: "Request for Change of Address",
    },
    {
      value: "Request for Statement Of Account",
      label: "Request for Statement Of Account",
    },
    {
      value: "Request for Consolidating Accounts",
      label: "Request for Consolidating Accounts",
    },
    {
      value: "Request for Transmision Of Shares",
      label: "Request for Transmision Of Shares",
    },
    {
      value: "Request for Outstanding Dividends",
      label: "Request for Outstanding Dividends",
    },
    {
      value: "Other Relevant Requests",
      label: "Other Relevant Requests",
    },
  ];
  const handleRequestTypeChange = (selected) => {
    setRequestTypeFilter(selected);
    const filtered = report.filter(
      (item) => item.requestType.toLowerCase() === selected.value.toLowerCase()
    );
    setDisplayedReports(filtered);
  };
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filtered = report.filter(
      (item) =>
        new Date(item.updatedAt) >= startDate &&
        new Date(item.updatedAt) <= endDate
    );
    setDisplayedReports(filtered);
  };
  return (
    <div>
      <div className="search_options">
        <form onSubmit={handleSearchSubmit}>
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
        </form>
      </div>
      <div className="filter-labels">
        <div className="d-flex">
          <FilterAltOutlined />
          <p>Filter by:</p>
        </div>
        <div>
          <Button
            onClick={() => setDisplayedReports(report)}
            className="reset-all"
            variant="text"
          >
            Reset All
          </Button>
        </div>
      </div>
      <form className="d-flex" onSubmit={handleFilterSubmit}>
        <div className="d-flex">
          <div className="verification_filters">
            <DatePicker
              onChange={onDateOneChange}
              value={startDate}
              className="verification_filter_select"
            />
            <DatePicker
              onChange={onDateTwoChange}
              value={endDate}
              className="verification_filter_select"
            />
            <Select
              placeholder="Request Type"
              className="verification_filter_select"
              options={requestTypeOptions}
              value={requestTypeFilter}
              onChange={handleRequestTypeChange}
            />
            <Select
              placeholder="Status"
              className="verification_filter_select"
              options={statusOptions}
              value={statusFilter}
              onChange={handleStatusChange}
            />
          </div>
          <Button
            style={{ height: "100%", marginTop: "20px" }}
            variant="contained"
            type="submit"
            startIcon={<FilterListSharp />}
          >
            Filter
          </Button>
        </div>
      </form>
      <div className="reports">
        <CustomTable tableHeader={tableHeader}>
          {_DATA &&
            _DATA.currentData().map((tb, idx) => {
              const a = new Date(tb.updatedAt).toString().substr(4, 11);
              let date = a.substr(3, 4);
              date += a.replace(date, " ");
              const b = tb.requestID.substr(0, 8);
              return (
                <tr key={idx}>
                  <td>{b}</td>
                  <td>{date}</td>
                  <td>
                    <strong>{tb.requestType}</strong>
                  </td>
                  <td>{tb.stockbrokerName}</td>
                  <td className="d-flex">
                    <p className={tb.status.toLowerCase()}>{tb.status}</p>
                  </td>
                </tr>
              );
            })}
        </CustomTable>
        <div className="view-more">
          <p>Previous</p>
          <Pagination
            count={count}
            page={page}
            color="primary"
            onChange={handleChange}
          />
          <p>Next</p>
        </div>{" "}
      </div>
    </div>
  );
};
export default Report;
