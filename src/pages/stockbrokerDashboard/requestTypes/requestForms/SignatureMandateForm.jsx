import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const SignatureMandateForm = (
  <div className="left">
    <div className="requirements">
      <hr className="horizontal-line" />

      <ul className="ulllll">
        <li>
          Signature mandate introducing the authorized signatories of the
          company (affix company seal)
        </li>
        <li>Board Resolution (where applicable) </li>
        <li>Banker's Confirmation of current authorized signatories</li>
        <li>
          Means of Identification in the new name i.e National ID Card, Driver’s
          License, International Passport or Permanent Voter’s Card
        </li>
      </ul>
    </div>
    <div className="file-input">
      <input type="file" />
      <span className="button">SELECT</span>
      <span className="label" data-js-label>
        png, jpeg (=300KB)
      </span>
    </div>

    <div className="btn-container">
      <button style={{ marginTop: "40px" }} className="btn-container2">
        SUBMIT REQUEST
      </button>
    </div>
  </div>
);
export const SignatureMandateHeader = (
  <div>
    <h3>Signature Mandate</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
