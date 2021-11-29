/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import NumberCard2 from "./NumberCard2";
import unlikeIcon from "../../assets/like.svg";
import likeIcon from "../../assets/unlike.svg";
import total from "../../assets/total.svg";
import CustomTable from "../CustomTable/index";

const Overview = () => {
  const [isFetchingNews, setIsFetchingNews] = useState(false);
  const [report, setReport] = useState(null);
  const [error, setNewsErr] = useState(null);
  //
  const getReport = async () => {
    try {
      setIsFetchingNews(true);
      const { data } = await axios.get(
        `http://localhost:5000/sbp/getrequestinit`
      );
      setReport(data.data);
      setIsFetchingNews(false);
    } catch (e) {
      setIsFetchingNews(false);
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
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [requetsData, setRequestsData] = useState(null);
  const [err, setErr] = useState(null);
  const fetchRequestStats = async () => {
    try {
      setIsFetchingData(true);
      const { data } = await axios.get(
        `http://localhost:5000/sbp/getrequeststatsinit`
      );
      setRequestsData(data.data);
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetchRequestStats();
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="dashboard_requests_header22">
        <h3>Overview</h3>
      </div>
      <div className="dashboard_header22">
        <NumberCard2
          text="Stockbrokers’ requests"
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={total}
          num={requetsData ? requetsData.totalRequests : 0}
        />
        <NumberCard2
          text="Approved requests"
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={likeIcon}
          num={requetsData ? requetsData.totalApprovedRequests : 0}
        />
        <NumberCard2
          text="Rejected requests"
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={unlikeIcon}
          num={requetsData ? requetsData.totalRejectedRequests : 0}
        />
      </div>

      <div className="dashboard_requests_header ">
        <h3 style={{ fontSize: "2rem" }}>Recent Requests</h3>
      </div>
      <div className="search_options">
        <SearchBar />
      </div>

      <div className="view_more_payments">
        {/* <NavLink to="viewmore">View All Requests</NavLink> */}
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
          {/* <Link to="view-more">View all requests</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
