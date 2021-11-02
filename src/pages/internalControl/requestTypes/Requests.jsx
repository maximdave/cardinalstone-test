/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import papers from "../../../assets/paper-stack.svg";
import "./Requests.css";

const Requests = () => {
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
            <button className="primary-btn">APPROVE</button>
            <button className="danger-btn">REJECT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
