import '../Requests.css';
// eslint-disable-next-line import/prefer-default-export
export const SignatureMandateForm = (
  <div className="left">
    <div>
      <label>
        Signature mandate introducing the authorized signatories of the company
        (affix company seal)
      </label>
      <div className="file-input">
        <input type="file" />
        <span className="button">SELECT</span>
        <span className="label" data-js-label>
          png, jpeg (=300KB)
        </span>
      </div>
    </div>
    <div>
      <label>Board Resolution (where applicable)</label>
      <div className="file-input">
        <input type="file" />
        <span className="button">SELECT</span>
        <span className="label" data-js-label>
          png, jpeg (=300KB)
        </span>
      </div>
    </div>
    <div>
      <label>Banker's Confirmation of current authorized signatories </label>
      <div className="file-input">
        <input type="file" />
        <span className="button">SELECT</span>
        <span className="label" data-js-label>
          png, jpeg (=300KB)
        </span>
      </div>
    </div>
    <div>
      <label>
        Means of Identification i.e National ID Card, Driver’s License,
        International Passport or Permanent Voter’s Card
      </label>
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
export const SignatureMandateHeader = (
  <div>
    <h3>Signature Mandate</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
