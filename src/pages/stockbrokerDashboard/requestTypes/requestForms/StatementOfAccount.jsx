import { useState } from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line import/prefer-default-export
const StatementOfAccount = (props) => {
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.handleCHNSUbmit();
  };

  const handleChange = (e) => {
    const selectedFiles = e.target.files;
    // console.log(selectedFiles);
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
          <h3>Statement of Account</h3>
          <p>
            To complete this request, please upload the required documents below
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
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
      <div>
        <label>Letter of request duly signed by the shareholder</label>
        <form onSubmit={handleFileUpload}>
          <div className="file-input" style={{ maxWidth: "95%" }}>
            <input
              type="file"
              multiple
              name="requestFiles"
              onChange={handleChange}
              accept="application/pdf"
            />
            <span className="button">SELECT</span>
            <span className="label" data-js-label>
              pdf (=300KB)
            </span>
          </div>
        </form>
      </div>

      <button onClick={handleFileUpload}>SUBMIT REQUEST</button>
    </div>
  );
};
export default StatementOfAccount;
