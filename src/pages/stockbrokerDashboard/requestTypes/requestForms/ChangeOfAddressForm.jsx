import React from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const ChangeOfAddressForm = (props) => {
  const fileRef = React.useRef(null);

  return (
    <div className="left">
      <div className="requirements">
        <hr className="horizontal-line" />

        <ul className="ulllll">
          <li>
            Letter Of Request Stating The Old And New Addresses And Duly Signed
            By The Shareholder OR Shareholder To Fill The Change Of Address Form
          </li>
          <li>
            Means Of Identification In The New Name i.e National ID Card,
            Driver’s License, International Passport or Permanent Voter’s Card
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
    </div>
  );
};

export const ChangeOfAddressTitle = <h3>Change of Address</h3>;
export const ChangeOfAddressHeader = (
  <div>
    {ChangeOfAddressTitle}
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
