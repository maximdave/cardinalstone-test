/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import Select from "react-select";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Modal from "../../../components/Modal/Modal";
// import Modal from "../Modal/Modal";
import papers from "../../../assets/paper-stack.svg";
import requestDocs from "../../../assets/request_document.png";
import "./Requests.css";

const Requests = () => {
  const [approval, setShowApproval] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [rejectOption, setRejectOption] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Transmission documents required;
  // see attached requirements
  // No specimen signature.Please engage your stockbroker and process share transfer form through CSCS
  // Medical report required
  // Name differs;
  // please engage your stockbroker
  // Name differs on Banker 's Confirmation; please engage your stockbroker
  // Name in CSCS differs from name on certificate;
  // please engage your stockbroker
  // Open a new CSCS account;
  // please engage your stockbroker
  // Signature Irregular.Please engage your stockbroker to process share transfer form through CSCS
  // Second signatory is required to sign
  // Second signatory is not on our records
  // Second / third authorized signature irregular.Please engage your stockbroker and process share transfer form through CSCS
  // Shareholderâ€™ s valid means of identification is required
  // Sworn affidavit is required
  // Specify any other reason
  const rejectOptions = [
    {
      label: "Alleged Deceased",
      value: "Alleged Deceased",
    },
    {
      label: "Shares had previously been lodged in CSCS Plc",
      value: "Shares had previously been lodged in CSCS Plc",
    },
    {
      label: "Administrator / Executor 's attention required",
      value: "Administrator / Executor 's attention required",
    },
    {
      label: "Caution due to AMCON 's behest",
      value: "Caution due to AMCON 's behest",
    },

    {
      label: "Broker's attention required",
      value: "Broker's attention required",
    },
    {
      label: "Banker's confirmation required; please engage your stockbroker",
      value: "Banker's confirmation required; please engage your stockbroker",
    },
    {
      label: "Banker's confirmation letter yet to be re-confirmed",
      value: "Banker's confirmation letter yet to be re-confirmed",
    },
    {
      label: "Broker's Indemnity required; please engage your stockbroker",
      value: "Broker's Indemnity required; please engage your stockbroker",
    },
    {
      label:
        "Banker's confirmation letter not valid; please engage your stockbroker",
      value:
        "Banker's confirmation letter not valid; please engage your stockbroker",
    },
    {
      label: "Board Resolution and Signature Mandate required",
      value: "Board Resolution and Signature Mandate required",
    },
    {
      label: "Broker's signature omitted ",
      value: "Broker's signature omitted ",
    },
    {
      label: "Broker's seal is required on Section B of the full demat form",
      value: "Broker's seal is required on Section B of the full demat form",
    },

    {
      label: "Broker's seal is required on Section B of the full demat form",
      value: "Broker's seal is required on Section B of the full demat form",
    },
    {
      label: "Copy of Childâ€™ s birth certificate required",
      value: "Copy of Childâ€™ s birth certificate required",
    },
    {
      label: "CSCS Statement required",
      value: "CSCS Statement required",
    },
    {
      label: "Company seal required on Board Resolution",
      value: "Company seal required on Board Resolution",
    },
    {
      label: "Signature differs",
      value: "Signature differs",
    },
    {
      label: "shareholderâ€™ s attention required or engage your stockbroker",
      value: "shareholderâ€™ s attention required or engage your stockbroker",
    },
  ];
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
  const onConfirm = () => {
    setRejectOption((prev) => !prev);
    setShowModal(false);
  };
  const onCancel = () => {
    setShowModal(false);
  };
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
            <p>Correction of Name Request</p>
          </div>
          <div className="share-holder-amount">
            <p style={{ color: "#528DC2" }}>SHAREHOLDERâ€™S HOLDING:</p>
            <p style={{ fontSize: "24px", marginTop: "2px" }}>1,000,000</p>
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
          {rejectOption && (
            <div className="upload-flex">
              <p className="request_topic">Required uploads: </p>
              <div>
                <table>
                  <tr>
                    <td>Request letter</td>
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
                  <tr>
                    <td>
                      Sworn Affidavit from the High Court with an affixed
                      coloured passport photograph duly authenticated by the
                      Court
                    </td>
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
                  <tr>
                    <td>
                      Means of Identification i.e National ID Card, Driverâ€™s
                      License, International Passport or Permanent Voterâ€™s Card
                    </td>
                    <td>
                      <img src={papers} alt="" />
                    </td>
                    <td>
                      <button className="primary-btn" onClick={handleOpen}>
                        VIEW
                      </button>
                    </td>
                    <td>
                      <button className="primary-btn my-2">DOWNLOAD</button>
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
                classNamePrefix=""
                name="color"
                options={options}
              />
              <button className="primary-btn">Assign</button>
            </div>
          </div>
          {!rejectOption && (
            <div>
              <p className="request_topic">Reason For Rejection</p>
              <Select
                className="react-select-request"
                classNamePrefix=""
                name="color"
                options={rejectOptions}
              />
              <button className="primary-btn mt-5">SUBMIT REASON</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Requests;
