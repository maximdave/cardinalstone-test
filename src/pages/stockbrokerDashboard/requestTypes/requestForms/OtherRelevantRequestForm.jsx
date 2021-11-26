import { useState } from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
const OtherRelevantRequestForm = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.handleCHNSUbmit();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    await props.handleOtherRequestSUbmit(text);
  };

  return (
    <div className="left" style={{ width: "80%" }}>
      <div className="d-flex justify-content-between">
        <div>
          <h3>Other Relevant Request</h3>
          <p>
            To complete this request, please upload the required documents below
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              // style={{ marginRight: "10px" }}
              type="text"
              placeholder="Shareholder’s CHN"
              onChange={(e) => props.setShareholderCHN(e.target.value)}
              value={props.shareholderCHN}
            />
          </form>
          <p>
            {props.shareholderFirstName || ""} {props.shareholderName || ""}
          </p>
        </div>
      </div>
      <hr className="horizontal-line" />

      <div className="text-area" style={{ maxWidth: "95%" }}>
        <form onSubmit={handleFormSubmit}>
          <textarea
            style={{ maxWidth: "100%" }}
            placeholder="Type the request here..."
            rows="40"
            cols="500"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>

      <button onClick={handleFormSubmit}>SUBMIT REQUEST</button>
    </div>
  );
};

export default OtherRelevantRequestForm;
