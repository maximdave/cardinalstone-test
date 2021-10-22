/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import Select from "react-select";
import papers from "../../../assets/paper-stack.svg";
import "./Requests.css";

const Requests = () => {
  const [approval, setShowApproval] = useState(false);

  const options = [
    {
      label: "Wade Warren",
      value: "Wade Warren",
    },
    {
      label: "Esther Howard",
      value: "Esther Howard",
    },
    {
      label: "Cameron Williamson",
      value: "Cameron Williamson",
    },
    {
      label: "Brooklyn Simmons",
      value: "Brooklyn Simmons",
    },
    {
      label: "Leslie Alexander",
      value: "Leslie Alexander",
    },
    {
      label: "Guy Hawkins",
      value: "Guy Hawkins",
    },
    {
      label: "Theresa Webb",
      value: "Theresa Webb",
    },
    {
      label: "Kathryn Murphy",
      value: "Kathryn Murphy",
    },
  ];
  return (
    <div className="dashboard_view">
      <div className="dashboard_head2">
        <div className="stock_broker_request_header">
          <div className="header_text">
            <p>Correction of Name Request</p>
          </div>
          <div className="share-holder-amount">
            <p style={{ color: "#528DC2" }}>SHAREHOLDER’S HOLDING:</p>
            <p style={{ fontSize: "24px", marginTop: "2px" }}>1,000,000</p>
          </div>
          <div className="request-status">
            <p style={{ color: "#528DC2" }}>STATUS:</p>
            <p className="request-status-show">Captured</p>
          </div>
        </div>
        <div className="shareholder-flex">
          <p>Shareholder Details: </p>
          <div>
            <table>
              <tr>
                <td>ID:</td>
                <td>SA54435</td>
              </tr>
              <tr>
                <td>NAME:</td>
                <td>Mr Taofeek Alabi</td>
              </tr>
              <tr>
                <td>DATE SUBMITTED:</td>
                <td>08 Jul 2021</td>
              </tr>
              <tr>
                <td>STOCKBROKER:</td>
                <td>Century Securities</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div className="upload-flex">
            <p>Required uploads: </p>
            <div>
              <table>
                <tr>
                  <td>Request letter</td>
                  <td>
                    <img src={papers} alt="" />
                  </td>
                  <td>
                    <button className="primary-btn">VIEW</button>
                  </td>
                  <td>
                    <button className="primary-btn">DOWNLOAD</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Sworn Affidavit from the High Court with an affixed coloured
                    passport photograph duly authenticated by the Court
                  </td>
                  <td>
                    <img src={papers} alt="" />
                  </td>
                  <td>
                    <button className="primary-btn">VIEW</button>
                  </td>
                  <td>
                    <button className="primary-btn">DOWNLOAD</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Means of Identification i.e National ID Card, Driver’s
                    License, International Passport or Permanent Voter’s Card
                  </td>
                  <td>
                    <img src={papers} alt="" />
                  </td>
                  <td>
                    <button className="primary-btn">VIEW</button>
                  </td>
                  <td>
                    <button className="primary-btn my-2">DOWNLOAD</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="d-flex cta-section">
            <button
              className="primary-btn"
              onClick={() => setShowApproval((prev) => !prev)}
            >
              APPROVE
            </button>
            <button className="danger-btn">REJECT</button>
          </div>
          <div
            style={{
              marginLeft: "23%",
              marginTop: "30px",
              display: approval ? "block" : "none",
            }}
          >
            <input className="stock-broker-request-approve-input" />
            <div className="d-flex">
              <Select
                className="react-select-request"
                classNamePrefix=""
                name="color"
                options={options}
              />
              <button className="primary-btn">Assign</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
