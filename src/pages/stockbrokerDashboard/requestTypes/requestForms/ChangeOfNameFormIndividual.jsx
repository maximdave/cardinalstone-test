import { useState } from "react";
import { Link } from "react-router-dom";

import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
const ChangeOfNameFormIndividual = (props) => {
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.handleCHNSUbmit();
  };

  const handleChange = (e) => {
    const selectedFiles = e.target.files;
    console.log(selectedFiles);
    setFiles(selectedFiles);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (files.length < 1) {
      return;
    }
    await props.handleCreateRequest(files);
  };

  return (
    <div className="left" style={{ width: "80%" }}>
      <div className="d-flex justify-content-between">
        <div>
          <h3>Change of Name - Individuals</h3>
          <p>
            To complete this request, please upload the required documents below
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              // style={{ marginRight: "10px" }}
              type="text"
              placeholder="Shareholder’s CHN"
              onChange={(e) => props.setShareholderCHN(e.target.value)}
              value={props.shareholderCHN}
            />
          </form>
          <p>
            {props.shareholderFirstName || ""} {props.shareholderName || ""}
          </p>
        </div>
      </div>
      <div className="requirements">
        <hr className="horizontal-line" />
        <ul className="ulllll">
          <li>Copy of Marriage Certificate</li>
          <li>Copy of Newspaper Publication</li>
          <li>
            A Sworn Affidavit from the High Court with an affixed coloured
            passport photograph duly authenticated by the Court
          </li>
          <li>Letter of Request</li>
          <li>
            Means of Identification in the new name i.e National ID Card,
            Driver’s License, International Passport or Permanent Voter’s Card
          </li>
          <li>Banker’s Confirmation of Signature Letter</li>
          <li>Any additional supporting documents</li>
        </ul>
      </div>
      <form onSubmit={handleFileUpload}>
        <div className="file-input" style={{ maxWidth: "95%" }}>
          <input
            type="file"
            multiple
            name="requestFiles"
            onChange={handleChange}
            accept="image/*"
          />
          <span className="button">SELECT</span>
          <span className="label" data-js-label>
            png, jpeg (=300KB)
          </span>
        </div>
      </form>
      <h6>Click the button below to make payment</h6>

      <div className="d-flex flex-column" style={{ width: "40%" }}>
        <Link
          to="/request-payment"
          style={{
            marginLeft: "1.3rem",
            width: "40%",
            backgroundColor: "#000",
            color: "#fff",
            fontStyle: "bold",
          }}
          className="btn btn-black"
        >
          PAY NOW
        </Link>
        <button className="btn-container2" onClick={handleFileUpload}>
          SUBMIT REQUEST
        </button>
      </div>
    </div>
  );
};

export default ChangeOfNameFormIndividual;
