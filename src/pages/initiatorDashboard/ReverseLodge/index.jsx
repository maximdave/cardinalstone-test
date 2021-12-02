/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { NavLink, useHistory, Link } from "react-router-dom";
import SearchBar from "../../../components/stockrequest/SearchBar";
import CustomTable from "../../../components/CustomTable";
import GlobalContext from "../../../contexts/Authentication/GlobalContext";
import Modal from "./Modal/Modal";

import "./ReverseLodge.css";

const RequestStart = () => {
  const history = useHistory();

  const [isFetchingNews, setIsFetchingNews] = useState(false);
  const [fetchReport, setFetchReport] = useState(false);
  const [report, setReport] = useState(null);
  const [newsErr, setNewsErr] = useState(null);
  //
  const getReport = async () => {
    try {
      setIsFetchingNews(true);
      const { data } = await axios.get(
        `http://localhost:5000/sbp/getrequestinit`
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
    if (fetchReport) {
      const fetchData = async () => {
        await getReport();
      };
      fetchData();
      setFetchReport(false);
    }
  }, [fetchReport]);
  const tableHeader = [
    "ID NO",
    "Date",
    "Request Type",
    "Stockbroker",
    "Status",
    "",
  ];

  const { handleInRequest } = useContext(GlobalContext);
  const { inRequest } = useContext(GlobalContext);

  const [showReverseOption, setShowReverseOption] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [revId, setRevId] = useState("");
  const onConfirm = async () => {
    // setRejectOption((prev) => !prev);
    await handleReverseLodge();
    setShowModal(false);
  };
  const onCancel = () => {
    setShowModal(false);
  };

  const handleReverseLodge = async () => {
    // e.preventDefault();
    console.log("INREQUEST-LOGDE-REPORT", report.id);
    try {
      // const Token = localStorage.getItem("authToken");
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${Token}`,
      //   },
      // };
      const { data } = await axios.put(
        "http://localhost:5000/sbp/reverselodge",
        {
          id: revId,
        }
        // config
      );
      toast.error("Request Rejected Successful");
      setFetchReport(true);
      console.log("data:::::", data);
    } catch (err) {
      toast.error("An errror occured");
      // setError(err.response.data.error);
      // setTimeout(() => {
      //   setError("");
      // }, 5000);
    }
  };

  return (
    <div>
      <Modal show={showModal} onConfirm={onConfirm} onCancel={onCancel} />

      <div className="dashboard_requests_header ">
        <h3 style={{ fontSize: "2rem", marginTop: "0.5em" }}>
          Recent Requests
        </h3>
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
                  <td>
                    <button
                      className="primary-btn"
                      onClick={() => {
                        setShowModal(true);
                        setRevId(tb.id);
                      }}
                    >
                      REVERSE
                    </button>
                  </td>
                </tr>
              );
            })}
        </CustomTable>

        {/* {showReverseOption && (
          <div className="reverse-prompt">
            <button className="success-btn">CONFIRM</button>
            <button className="danger-btn">CANCEL</button>
          </div>
        )} */}
        <div className="view-more">
          {/* <Link to="view-more">View all requests</Link> */}
        </div>
      </div>
    </div>
  );
};

export default RequestStart;

// import React, { useState } from "react";
// import CustomTable from "../../../components/CustomTable";
// import "./ReverseLodge.css";

// const ReverseLodge = () => {
//   const [showReverseOption, setShowReverseOption] = useState(false);
//   const tableHeader = [
//     "ID NO",
//     "Date",
//     "Request Type",
//     "Stockbroker",
//     "Status",
//     "",
//   ];
//   const tableProps = [
//     {
//       id: "DR23554",
//       date: "24 Aug 2021",
//       type: "Demat Request",
//       stockbroker: "Afri Invest",
//       status: "Approved",
//     },
//     {
//       id: "DR23554",
//       date: "24 Aug 2021",
//       type: "Demat Request",
//       stockbroker: "Afri Invest",
//       status: "Submitted",
//     },
//     {
//       id: "DR23554",
//       date: "24 Aug 2021",
//       type: "Demat Request",
//       stockbroker: "Afri Invest",
//       status: "Submitted",
//     },
//     {
//       id: "DR23554",
//       date: "24 Aug 2021",
//       type: "Demat Request",
//       stockbroker: "Afri Invest",
//       status: "Submitted",
//     },
//   ];
//   return (
//     <div>
//       <div>
//         <h3>Reverse Lodgements</h3>
//         <input
//           className="reverse-lodge-input"
//           type="text"
//           placeholder="Input request ID"
//         />
//         <span>
//           <button className="primary-btn">Search</button>
//         </span>
//       </div>

//       <div>
//         <CustomTable tableHeader={tableHeader}>
//           {tableProps.splice(0, 1)?.map((tb, idx) => (
//             <tr key={idx}>
//               <td>{tb.id}</td>
//               <td>{tb.date}</td>
//               <td>
//                 <strong>{tb.type}</strong>
//               </td>
//               <td>{tb.stockbroker}</td>
//               <td className="d-flex">
//                 <p className="reverse-lodge-status">{tb.status}</p>
//               </td>
//               <td>
//                 <button
//                   className="primary-btn"
//                   onClick={() => setShowReverseOption((prev) => !prev)}
//                 >
//                   REVERSE
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </CustomTable>
//       </div>

//       {showReverseOption && (
//         <div className="reverse-prompt">
//           <button className="success-btn">CONFIRM</button>
//           <button className="danger-btn">CANCEL</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReverseLodge;
