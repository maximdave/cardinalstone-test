import React from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const TransmisionOfSharesForm = (props) => {
  const fileRef = React.useRef(null);
  return (
    <div className="left">
      <div className="requirements">
        <hr className="horizontal-line" />

        <ul className="ulllll">
          <li>
            Letter of Introduction from the Administrators/Executors,
            introducing themselves as the legal representatives of the Estate.
            The letter should also indicate the names, addresses, signatures and
            BVNs of the individual Administrators/Executors.
          </li>
          <li>
            Original Death Certificate from the National Population Commission
            (NPC) for sighting.
          </li>
          <li>
            Original probate letter or Letter of Administration for sighting or
            the Certified True Copy (CTC) from a Notary Public.
          </li>
          <li>Copy of newspaper advert placed by the Court or Gazette.</li>
          <li>
            Any evidence of ownership of the investment i.e. CSCS statement(s)
            of the deceased, original share certificates, dividend stub or
            dividend warrants or bank statement(s) showing receipt of
            dividend(s) into the account(s) of the deceased.
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
export const TransmisionTitle = <h3>Transmission of Shares</h3>;

export const TransmisionHeader = (
  <div>
    {TransmisionTitle}
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
