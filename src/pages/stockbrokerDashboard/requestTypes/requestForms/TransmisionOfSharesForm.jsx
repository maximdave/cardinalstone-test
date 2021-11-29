import { useState } from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
const TransmisionOfSharesForm = (props) => {
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
          <h3>Transmission of Shares</h3>
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
          <li>
            Letter of Introduction from the Administrators/Executors,
            introducing themselves as the legal representatives of the Estate.
            The letter should also indicate the names, addresses, signatures and
            BVNs of the individual Administrators/Executors.
          </li>
          <li>
            Original Death Certificate from the National Population Commission
            (NPC) for sighting.
          </li>
          <li>
            Original probate letter or Letter of Administration for sighting or
            the Certified True Copy (CTC) from a Notary Public.
          </li>
          <li>Copy of newspaper advert placed by the Court or Gazette.</li>
          <li>
            Any evidence of ownership of the investment i.e. CSCS statement(s)
            of the deceased, original share certificates, dividend stub or
            dividend warrants or bank statement(s) showing receipt of
            dividend(s) into the account(s) of the deceased.
          </li>
        </ul>
      </div>
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

export default TransmisionOfSharesForm;
