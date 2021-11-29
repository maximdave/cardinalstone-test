/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import FileViewer from "react-file-viewer";
// import Select from "react-select";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import Modal from "../../../components/Modal/Modal";
// import Modal from "../Modal/Modal";
import papers from "../../../assets/paper-stack.svg";
// import requestImage from "../../../assets/request_document.png";
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

  const [regNumber, setRegNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const onConfirm = async () => {
    // setRejectOption((prev) => !prev);
    await handleRejectRequest();
    setShowModal(false);
  };
  const onCancel = () => {
    setShowModal(false);
  };

  const [id, setId] = useState("");
  const [setError] = useState("");
  const [age, setAge] = React.useState("");
  const [age1, setAge1] = React.useState("");

  const handleRejectRequest = async (e) => {
    // e.preventDefault();

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
        },
        config
      );
      toast.error("Request Rejected Successful");
      console.log("data:::::", data);
    } catch (err) {
      toast.error("An errror occured");
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
        "http://localhost:5000/sbp/apppproverequestverify",
        {
          id: inRequest.id,
        },
        config
      );
      toast.success("Request Approved Successful");
      console.log("data:::::", data);
    } catch (err) {
      toast.error("An errror occured");
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

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { inRequest } = useContext(GlobalContext);

  console.log("NEWinRequest>>>>:::::", inRequest);
  // console.log("RequestIMAGE>>>>:::::", inRequest.requestFiles);
  const reg = /(?=\[")(?="\])/g;

  const aaa = inRequest.requestFiles.replace(`["`, "");
  const imagefile = aaa.replace(`"]`, "");
  console.log("imagefile>>>>:::::", imagefile);
  const [requestImage, setRequestImage] = useState([]);
  const [newsErr, setNewsErr] = useState(null);
  //
  const getRequestImage = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/sbp/getimage?imageName=${imagefile}`
      );
      console.log("REQUESTIMAGE:::::", data.imageUrl);
      setRequestImage(data.imageUrl);
    } catch (e) {
      console.log(e);
      setNewsErr(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getRequestImage();
    };
    fetchData();
  }, []);
  const type = "pdf";

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
          {/* <img
            className="view_document_image"
            src={requestImage}
            // src="http://localhost:5000/uploads/requestFiles/df500ceb-a5dd-43f7-9a1b-3edd9404cfffmayo2.jpeg"
            alt="View request document"
          /> */}
          {/* <div className="view_document_image"> */}
          <FileViewer
            className="view_document_image"
            fileType={type}
            filePath={requestImage}
          />
          {/* </div> */}
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
            {/* <p className="request-status-show">{inRequest.status}</p> */}
            <p className={inRequest.status.toLowerCase()}>{inRequest.status}</p>
          </div>
        </div>
        <div className="shareholder-flex-verify">
          <p className="request_topic">Shareholder Details: </p>
          <div>
            <table>
              <tr>
                <td>ID:</td>
                <td>{inRequest.shareholderCHN}</td>
              </tr>
              <tr>
                <td>NAME:</td>
                <td>{inRequest.shareholderName}</td>
              </tr>
              <tr>
                <td>REG NUMBER:</td>
                <td>{inRequest.regNumber}</td>
              </tr>
              <tr>
                <td>ACCOUNT NUMBER:</td>
                <td>{inRequest.accountNumber}</td>
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
                // onClick={() => setShowApproval((prev) => !prev)}
                onClick={handleApproveRequest}
              >
                APPROVE
              </button>
              <button className="danger-btn" onClick={() => setShowModal(true)}>
                REJECT
              </button>
            </div>
          )}
          {/* <div
            style={{
              marginLeft: "23%",
              marginTop: "30px",
              display: approval ? "block" : "none",
            }}
          >
            <input
              style={{
                marginRight: "30px",
              }}
              className="stock-broker-request-approve-input"
              placeholder="Input Register Number"
              onChange={(e) => setRegNumber(e.target.value)}
              value={regNumber}
            />
            <input
              className="stock-broker-request-approve-input"
              placeholder="Input Account Number"
              onChange={(e) => setAccountNumber(e.target.value)}
              value={accountNumber}
            />
            <div className="d-flex">
              <Select
                className="react-select-request"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age1}
                placeholder="Select a Verifier"
                label="Age"
                onChange={handleChange1}
              >
                {verificationuser.map((item) => (
                  <MenuItem value={item.userName}>{item.userName}</MenuItem>
                ))}
              </Select>
              <button className="primary-btn" onClick={handleApproveRequest}>
                ASSIGN
              </button>
            </div>
          </div> */}
          {/* {!rejectOption && (
            <div>
              <p className="request_topic">Reason For Rejection</p>
              <Select
                className="react-select-request"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                placeholder="Select Reason for Rejection"
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
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Requests;
