import React from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const StatementOfAccount = (props) => {
  const fileRef = React.useRef(null);
  return (
    <div className="left">
      <div>
        <label>Letter of request duly signed by the shareholder</label>
        <div className="file-input">
          <input
            type="file"
            ref={fileRef}
            multiple
            onChange={props?.setRequestFiles}
          />
          <span className="button">SELECT</span>
          <span className="label" data-js-label>
            png, jpeg (=300KB)
          </span>
        </div>
      </div>

      <button onClick={props?.onClick}>SUBMIT REQUEST</button>
    </div>
  );
};
export const StatementOfAccountTitle = <h3>Statement of Account</h3>;

export const StatementOfAccountHeader = (
  <div>
    {StatementOfAccountTitle}
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
