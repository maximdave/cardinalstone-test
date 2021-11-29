import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/CustomTable";
import SearchBar from "../../../components/stockrequest/SearchBar";
import "./Report.css";

const Report = () => {
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

  return (
    <div>
      <div className="search_options">
        <SearchBar />
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
        {/* <div className="view-more">
          <Link to="view-more">View all requests</Link>
        </div> */}
      </div>

      {/* <button className="primary-btn" style={{ marginTop: "40px" }}>
        REVERSE
      </button> */}
    </div>
  );
};

export default Report;
