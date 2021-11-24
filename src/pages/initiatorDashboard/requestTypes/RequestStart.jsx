/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import SearchBar from "../../../components/stockrequest/SearchBar";
import CustomTable from "../../../components/CustomTable";
import GlobalContext from "../../../contexts/Authentication/GlobalContext";

const RequestStart = () => {
  const history = useHistory();

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

  const { handleInRequest } = useContext(GlobalContext);
  return (
    <div>
      <div className="dashboard_requests_header ">
        <h3 style={{ fontSize: "2rem", marginTop: "0.5em" }}>
          Recent Requests
        </h3>
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
              // onClick={() => history.push("/initiatorDashboard/inrequest")}

              /* return (
                <tr key={idx} onClick={() => handleInRequest(tb)}>
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
              ); */

              return (
                <NavLink onClick={() => handleInRequest(tb)} to="inrequest">
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
                </NavLink>
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

export default RequestStart;
