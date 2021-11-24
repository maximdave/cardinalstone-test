/* eslint-disable no-underscore-dangle */
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [newsErr, setNewsErr] = useState(null);
  //
  const getReport = async () => {
    try {
      setIsFetchingNews(true);
      const { data } = await axios.get(`http://localhost:5000/sbp/getrequest`);
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
  const tableHeader = [
    "ID NO",
    "Date",
    "Request Type",
    "Stockbroker",
    "Status",
  ];

  // PAGINATION
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(report.length / PER_PAGE);
  const _DATA = usePagination(report, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
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
