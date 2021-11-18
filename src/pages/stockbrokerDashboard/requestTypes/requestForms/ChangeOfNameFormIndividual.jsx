import React from "react";
import { useHistory } from "react-router-dom";

import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const ChangeOfNameFormIndividual = (props) => {
  const history = useHistory();
  const fileRef = React.useRef(null);

  return (
    <div className="left">
      <div className="requirements">
        <hr className="horizontal-line" />
        <ul className="ulllll">
          <li>Copy of Marriage Certificate</li>
          <li>Copy of Newspaper Publication</li>
          <li>
            A Sworn Affidavit from the High Court with an affixed coloured
            passport photograph duly authenticated by the Court
          </li>
          <li>Letter of Request</li>
          <li>
            Means of Identification in the new name i.e National ID Card,
            Driver’s License, International Passport or Permanent Voter’s Card
          </li>
          <li>Banker’s Confirmation of Signature Letter</li>
          <li>Any additional supporting documents</li>
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
      <h6>Click the button below to make payment</h6>

      <div className="btn-container">
        <button
          onClick={() => history.push("/requests/request-payment")}
          className="btn-container1"
        >
          PAY NOW
        </button>
        <button className="btn-container2" onClick={props?.onClick}>
          SUBMIT REQUEST
        </button>
      </div>
    </div>
  );
};
export const ChangeOfNameTitleI = <h3>Change of Name - Individuals</h3>;

export const ChangeOfNameHeaderI = (
  <div>
    {ChangeOfNameTitleI}
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
