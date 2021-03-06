import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const TransferOfSharesForm = (
  <div className="left">
    <div className="requirements">
      <hr className="horizontal-line" />
      <ul className="ulllll">
        <li>Letter of Request from the Transferor</li>
        <li>A Sworn Affidavit issued by the High Court from the Transferor</li>
        <li>
          Banker’s Confirmation of Signature letter of the Child(ren)/Ward
        </li>
        <li>
          Birth Certificate of the child(ren)/Ward
          <li>
            Means of Identification in the new name i.e National ID Card,
            Driver’s License, International Passport or Permanent Voter’s Card
          </li>
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

export const TransferHeader = (
  <div>
    <h3>Transfer of Shares</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
