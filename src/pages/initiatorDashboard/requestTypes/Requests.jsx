/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import Select from "react-select";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import Modal from "../../../components/Modal/Modal";
// import Modal from "../Modal/Modal";
import papers from "../../../assets/paper-stack.svg";
import requestDocs from "../../../assets/request_document.png";
import "./Requests.css";
import { getAllHolderCertTotal } from "../../../components/coreApllicationAPI";
import GlobalContext from "../../../contexts/Authentication/GlobalContext";

const Requests = () => {
  const [approval, setShowApproval] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [rejectOption, setRejectOption] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onConfirm = () => {
    setRejectOption((prev) => !prev);
    setShowModal(false);
  };
  const onCancel = () => {
    setShowModal(false);
  };

  const [id, setId] = useState("");
  const [setError] = useState("");

  const handleRejectRequest = async (e) => {
    e.preventDefault();

    try {
      const Token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      const { data } = await axios.put(
        "http://localhost:5000/sbp/rejectrequest",
        {
          id: inRequest.id,
          rejectReason: age,
          assignedTo: age1,
        },
        config
      );
      console.log("data:::::", data);
    } catch (err) {
      // setError(err.response.data.error);
      // setTimeout(() => {
      //   setError("");
      // }, 5000);
    }
  };

  const handleApproveRequest = async (e) => {
    e.preventDefault();

    try {
      const Token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      const { data } = await axios.put(
        "http://localhost:5000/sbp/apppproverequest",
        {
          id: inRequest.id,
        },
        config
      );
      console.log("data:::::", data);
    } catch (err) {
      // setError(err.response.data.error);
      // setTimeout(() => {
      //   setError("");
      // }, 5000);
    }
  };

  const [certTotal, setCertTotal] = useState(0);
  const [reason, setReason] = useState([]);
  const [verificationuser, setverificationuser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const custId = 1196;
        // setCertTotalLoading(true);
        const result = await getAllHolderCertTotal(custId);
        setCertTotal(result);
        console.log("result:::;::::", result);
        // setCertTotalLoading(false);
      } catch (error) {
        // setCertTotalError(true);
        // setCertTotalLoading(false);
      }
    })();

    (async () => {
      try {
        // setCertTotalLoading(true);
        // console.log("dataREASON:::;::::");
        const { data } = await axios.get("http://localhost:5000/sbp/getreason");
        setReason(data.data);
        console.log("dataREASON:::;::::", data);
        // setCertTotalLoading(false);
      } catch (error) {
        // setCertTotalError(true);
        // setCertTotalLoading(false);
      }
    })();

    (async () => {
      try {
        // setCertTotalLoading(true);
        // console.log("dataREASON:::;::::");
        const { data } = await axios.get(
          "http://localhost:5000/user/getverification"
        );
        setverificationuser(data);
        console.log("dataVERIFICATON:::;::::", data);
        // setCertTotalLoading(false);
      } catch (error) {
        // setCertTotalError(true);
        // setCertTotalLoading(false);
      }
    })();
  }, []);

  console.log("RealREASON>>>>>>>>>>>s", reason);

  const [age, setAge] = React.useState("");
  const [age1, setAge1] = React.useState("");

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { inRequest } = useContext(GlobalContext);

  console.log("inRequest>>>>:::::", inRequest);

  return (
    <div className="dashboard_view">
      <Modal show={showModal} onConfirm={onConfirm} onCancel={onCancel} />
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="View-document-title"
        aria-describedby="view document-description"
      >
        <Box>
          <img
            className="view_document_image"
            src={requestDocs}
            alt="View request document"
          />
          <div className="view_document_button">
            <button className="primary-btn" onClick={handleClose}>
              DOWNLOAD
            </button>
            <button className="primary-btn" onClick={handleClose}>
              CLOSE
            </button>
          </div>
        </Box>
      </MuiModal>
      <div className="dashboard_head2">
        <div className="stock_broker_request_header">
          <div className="header_text">
            <p>{inRequest.requestType}</p>
          </div>
          <div className="share-holder-amount">
            <p style={{ color: "#528DC2" }}>SHAREHOLDER’S HOLDING:</p>
            {/* <p style={{ fontSize: "24px", marginTop: "2px" }}>1,000,000</p> */}
            <p style={{ fontSize: "24px", marginTop: "2px" }}>
              {Number.isInteger(certTotal) &&
                String(certTotal).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              {!Number.isInteger(certTotal) &&
                certTotal.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </p>
          </div>
          <div className="request-status">
            <p style={{ color: "#528DC2" }}>STATUS:</p>
            <p className="request-status-show">Captured</p>
          </div>
        </div>
        <div className="shareholder-flex">
          <p className="request_topic">Shareholder Details: </p>
          <div>
            <table>
              <tr>
                <td>ID:</td>
                <td>SA54435</td>
              </tr>
              <tr>
                <td>NAME:</td>
                <td>{inRequest.shareholderName}</td>
              </tr>
              <tr>
                <td>DATE SUBMITTED:</td>
                <td>{inRequest.updatedAt}</td>
              </tr>
              <tr>
                <td>STOCKBROKER:</td>
                <td>{inRequest.stockbrokerName}</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          {rejectOption && (
            <div className="upload-flex">
              <p className="request_topic">Required uploads: </p>
              <div>
                <table>
                  <tr>
                    {/* <td>Request letter</td> */}
                    <td>
                      <img src={papers} alt="" />
                    </td>
                    <td>
                      <button className="primary-btn" onClick={handleOpen}>
                        VIEW
                      </button>
                    </td>
                    <td>
                      <button className="primary-btn">DOWNLOAD</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          )}
          {rejectOption && (
            <div className="d-flex cta-section">
              <button
                className="primary-btn"
                onClick={() => setShowApproval((prev) => !prev)}
              >
                APPROVE
              </button>
              <button className="danger-btn" onClick={() => setShowModal(true)}>
                REJECT
              </button>
            </div>
          )}
          <div
            style={{
              marginLeft: "23%",
              marginTop: "30px",
              display: approval ? "block" : "none",
            }}
          >
            <input
              className="stock-broker-request-approve-input"
              placeholder="Input shareholder's account number"
            />
            <div className="d-flex">
              <Select
                className="react-select-request"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age1}
                label="Age"
                onChange={handleChange1}
              >
                {verificationuser.map((item) => (
                  <MenuItem value={item.userName}>{item.userName}</MenuItem>
                ))}
              </Select>
              <button className="primary-btn">Assign</button>
            </div>
          </div>
          {!rejectOption && (
            <div>
              <p className="request_topic">Reason For Rejection</p>
              <Select
                className="react-select-request"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                {reason.map((item) => (
                  <MenuItem value={item.reason}>{item.reason}</MenuItem>
                ))}
              </Select>
              <button
                className="primary-btn mt-5"
                onClick={handleRejectRequest}
              >
                SUBMIT REASON
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Requests;
