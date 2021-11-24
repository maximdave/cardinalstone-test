/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import React, { useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import { NavLink, useHistory, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NumberCard2 from "./NumberCard2";
import unlikeIcon from "../../assets/like.svg";
import likeIcon from "../../assets/unlike.svg";
import total from "../../assets/total.svg";
import CustomTable from "../CustomTable/index";

const Overview = () => {
  const [isFetchingNews, setIsFetchingNews] = useState(false);
  const [report, setReport] = useState(null);
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
  return (
    <div>
      <div className="dashboard_requests_header22">
        <h3>Overview</h3>
      </div>
      <div className="dashboard_header22">
        <NumberCard2
          text="Stockbrokers’ requests"
          number={2}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={total}
          num={7}
        />
        <NumberCard2
          text="Approved requests"
          number={2}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={likeIcon}
          num={3}
        />
        <NumberCard2
          text="Rejected requests"
          number={2}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={unlikeIcon}
          num={4}
        />
      </div>

      <div className="dashboard_requests_header ">
        <h3 style={{ fontSize: "2rem" }}>Recent Requests</h3>
      </div>
      <div className="search_options">
        <SearchBar />
      </div>

      <div className="view_more_payments">
        <NavLink to="viewmore">View All Requests</NavLink>
      </div>

      <div className="reports">
        <CustomTable tableHeader={tableHeader}>
          {report &&
            report.map((tb, idx) => {
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
          <Link to="view-more">View all requests</Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
