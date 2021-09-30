import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const CorrectionOfNameForm = (
  <div className="left">
    <div className="requirements">
      <hr className="horizontal-line" />
      <ul className="ulllll">
        <li>Request Letter</li>
        <li>
          A Sworn Affidavit from the High Court with an affixed coloured
          passport photograph duly authenticated by the Court
        </li>
        <li>
          Means of Identification i.e National ID Card, Driver’s License,
          International Passport or Permanent Voter’s Card
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
export const CorrectionOfNameHeader = (
  <div>
    <h3>Correction of Name</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
