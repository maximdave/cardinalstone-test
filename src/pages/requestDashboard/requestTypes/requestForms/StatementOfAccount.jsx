import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const StatementOfAccount = (
  <div className="left">
    <div>
      <label>Letter of request duly signed by the shareholder</label>
      <div className="file-input">
        <input type="file" />
        <span className="button">SELECT</span>
        <span className="label" data-js-label>
          png, jpeg (=300KB)
        </span>
      </div>
    </div>

    <button>SUBMIT REQUEST</button>
  </div>
);

export const StatementOfAccountHeader = (
  <div>
    <h3>Statement of Account</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
