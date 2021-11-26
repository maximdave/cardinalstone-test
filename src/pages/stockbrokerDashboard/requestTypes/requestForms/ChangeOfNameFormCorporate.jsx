import { useState } from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
const ChangeOfNameFormCorporate = (props) => {
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
          <h3>Change of Name - Corporates</h3>
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
          <li>Certificate of Incorporation from the CAC</li>
          <li>NSE & SEC Letters approving the change</li>
          <li>Signature Mandate/Board Resolution</li>
          <li>
            Banker's Confirmation of Signature letter in the new name duly
            signed by authorized signatories
          </li>
          <li>Request letter duly signed by authorized signatories</li>
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

      <div className="btn-container">
        <button
          style={{ marginTop: "40px" }}
          className="btn-container2"
          onClick={handleFileUpload}
        >
          SUBMIT REQUEST
        </button>
      </div>
    </div>
  );
};

export default ChangeOfNameFormCorporate;
