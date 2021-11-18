import React from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const SubmitBankerConfirm = (props) => {
  const fileRef = React.useRef(null);
  return (
    <div className="left">
      <div className="requirements">
        <hr className="horizontal-line" />

        <ul className="ulllll">
          <li>Executed Banker's Confirmation</li>
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
    </div>
  );
};
export const SubmitBankerConfirmTitle = (
  <h3>Submission of Bankers’ Confirmation Letters</h3>
);

export const SubmitBankerConfirmHeader = (
  <div>
    {SubmitBankerConfirmTitle}
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
