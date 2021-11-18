import React from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const ChangeOfNameFormCorporate = (props) => {
  const fileRef = React.useRef(null);

  return (
    <div className="left">
      <div className="requirements">
        <hr className="horizontal-line" />
        <ul className="ulllll">
          <li>Certificate of Incorporation from the CAC</li>
          <li>NSE & SEC Letters approving the change</li>
          <li>Signature Mandate/Board Resolution</li>
          <li>
            Banker's Confirmation of Signature letter in the new name duly
            signed by authorized signatories
          </li>
          <li>Request letter duly signed by authorized signatories</li>
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
export const ChangeOfNameTitle = <h3>Change of Name - Corporates</h3>;

export const ChangeOfNameHeaderC = (
  <div>
    {ChangeOfNameTitle}
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
