/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { Pagination } from "@material-ui/lab";
import { FilterListSharp, FilterAltOutlined } from "@mui/icons-material";
import Select from "react-select";
import Button from "@mui/material/Button";
// import React, { useMemo } from "react";
import { useTable } from "react-table";
import { NavLink } from "react-router-dom";
import SearchBar from "../../../components/stockrequest/SearchBar";
import NumberCard2 from "../../../components/stockrequest/NumberCard2";
import unlikeIcon from "../../../assets/like.svg";
import likeIcon from "../../../assets/unlike.svg";
import total from "../../../assets/total.svg";
import "./overview.css";
import usePagination from "../../../components/myPagination";
import CustomTable from "../../../components/CustomTable";

const Overview = () => {
  const [isFetchingNews, setIsFetchingNews] = useState(false);
  const [report, setReport] = useState([]);
  const [newsErr, setNewsErr] = useState(null);
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
        `http://localhost:5000/sbp/getpersonalrequest`,
        config
      );
      console.log("PERSONALREQUEST:::::", data.data);
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
    "DATE",
    "REQUEST TYPE",
    "STOCKBROKER",
    "ASSIGNED TO",
    "STATUS",
  ];

  const [isFetchingData, setIsFetchingData] = useState(false);
  const [requetsData, setRequestsData] = useState(null);
  const [err, setErr] = useState(null);
  const fetchRequestStats = async () => {
    try {
      const Token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      setIsFetchingData(true);
      const { data } = await axios.get(
        `http://localhost:5000/sbp/getrequeststatspersonal`,
        config
      );
      // console.log(data.data.totalRequests);
      setRequestsData(data.data);
      // console.log("requetsData:::", requetsData.totalRequests);
      console.log("VERIFYrequetsDatassss:::", data.data);
      // setPriceUpdate(ganers.slice(0, 5));
    } catch (e) {
      setErr(e);
    }
  };
  console.log("requetsDatassss:::2222", requetsData);
  useEffect(() => {
    const fetchData = async () => {
      await fetchRequestStats();
    };
    fetchData();
  }, []);
  // PAGINATION
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(report.length / PER_PAGE);
  // eslint-disable-next-line no-underscore-dangle
  const _DATA = usePagination(report, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <div>
      <div className="dashboard_requests_header22">
        <h3>Overview</h3>
      </div>
      <div className="dashboard_header22">
        <NumberCard2
          // onClick={() => history.push("/requestdashboard/requests")}
          text="Stockbrokers’ requests"
          number={2}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={total}
          num={requetsData ? requetsData.totalRequests : 0}
        />
        {/* <NumberCard2
          text="Approved callovers"
          number={2}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={likeIcon}
          num={3}
        />
        <NumberCard2
          text="Rejected callovers"
          number={2}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={unlikeIcon}
    num={3}
        /> */}
      </div>
      <h3>Task Summary</h3>
      <div className="overview-cards">
        <NumberCard2
          text="Assigned requests"
          number={3}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={likeIcon}
          num={requetsData ? requetsData.totalRequests : 0}
        />
        <NumberCard2
          text="Approved Request"
          number={4}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={likeIcon}
          num={requetsData ? requetsData.totalApprovedRequests : 0}
        />
        <NumberCard2
          text="Rejected requests"
          number={7}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={unlikeIcon}
          num={requetsData ? requetsData.totalRejectedRequests : 0}
        />
        <NumberCard2
          text="Verified Requests"
          number={14}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          icon={total}
          num={requetsData ? requetsData.totalVerifiedRequests : 0}
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
      <div style={{ marginTop: "2em" }} className="table">
        {/*  */}
        <div className="reports">
          {_DATA ? (
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
                      <td>{tb.stockbrokerName}</td>
                      <td className="d-flex">
                        <p className={tb.status.toLowerCase()}>{tb.status}</p>
                      </td>
                    </tr>
                  );
                })}
            </CustomTable>
          ) : (
            <h1>NO REQUESTS YET</h1>
          )}
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
    </div>
  );
};
export default Overview;
