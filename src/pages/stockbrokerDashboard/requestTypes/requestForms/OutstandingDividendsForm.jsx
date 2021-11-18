import React from "react";
import { useHistory } from "react-router-dom";

import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const OutstandingDividendsForm = (props) => {
  const fileRef = React.useRef(null);

  const history = useHistory();

  return (
    <div className="left">
      <div className="requirements">
        <hr className="horizontal-line" />

        <ul className="ulllll">
          <li>Executed e-mandate form</li>
          <li>
            Affix passport photograph on the letter duly authenticated by your
            bank
          </li>
        </ul>
      </div>
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

      <div className="btn-container">
        <button
          style={{ marginTop: "40px" }}
          className="btn-container2"
          onClick={props?.onClick}
        >
          SUBMIT REQUEST
        </button>
      </div>

      <div
        style={{ marginTop: "40px", marginLeft: "20px" }}
        onClick={() => history.push("/")}
        className="accountzz"
      >
        Or <b>Click Here</b> To Complete The Online Form
      </div>
    </div>
  );
};
export const OutstandingDividendsTitle = <h3>Outstanding Dividends</h3>;

export const OutstandingDividendsHeader = (
  <div>
    {OutstandingDividendsTitle}
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
