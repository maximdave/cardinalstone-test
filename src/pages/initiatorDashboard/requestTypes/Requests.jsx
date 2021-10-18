/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import papers from "../../../assets/paper-stack.svg";
import "./Requests.css";

const Requests = () => {
  return (
    <div className="dashboard_view">
      <div className="dashboard_head2">
        <nav>
          <h1>Correction of Name Request</h1>
          <div className="header-div">
            <p>SHAREHOLDER’S HOLDING:</p>
            <h3>1,000,000</h3>
          </div>
          <div className="header-div">
            <p>STATUS:</p>
            <button>Captured</button>
          </div>
        </nav>
        <div>
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
                  <td>SA54435</td>
                </tr>
                <tr>
                  <td>
                    Sworn Affidavit from the High Court with an affixed coloured
                    passport photograph duly authenticated by the Court
                  </td>
                  <td>
                    <img src={papers} alt="" />
                  </td>
                  <td>Mr Taofeek Alabi</td>
                </tr>
                <tr>
                  <td>
                    Means of Identification i.e National ID Card, Driver’s
                    License, International Passport or Permanent Voter’s Card
                  </td>
                  <td>
                    <img src={papers} alt="" />
                  </td>
                  <td>08 Jul 2021</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
