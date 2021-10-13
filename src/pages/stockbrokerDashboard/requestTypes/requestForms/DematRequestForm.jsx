import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export

export const DematRequestForm = (
  <div className="left">
    <div className="requirements">
      <hr className="horizontal-line" />
      <ul className="ulllll">
        <li>
          Duly executed dematerialization form signed by the shareholder and two
          authorized signatories
        </li>
        <li>Authenticated Coloured passport photograph</li>
        <li>
          Means of Identification i.e National ID Card, Driver’s License,
          International Passport or Permanent Voter’s Card
        </li>
        <li>CSCS Statement</li>
        <li>Other supporting documents</li>
      </ul>
    </div>
    <div className="file-input">
      <input type="file" />
      <span className="button">SELECT</span>
      <span className="label" data-js-label>
        png, jpeg (=300KB)
      </span>
    </div>
    <h6>Click the button below to make payment</h6>

    <div className="btn-container">
      <button className="btn-container1">PAY NOW</button>
      <button className="btn-container2">SUBMIT REQUEST</button>
    </div>
  </div>
);
export const DematHeader = (
  <div>
    <h3>Demat request</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
