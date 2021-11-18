import React from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const OtherRelevantRequestForm = (props) => {
  // const fileRef = React.useRef(null);

  return (
    <div className="left">
      <hr className="horizontal-line" />

      <div className="text-area">
        <textarea
          placeholder="Type the request here..."
          rows="400"
          cols="500"
        />
      </div>

      <button onClick={props?.onClick}>SUBMIT REQUEST</button>
    </div>
  );
};

export const OtherRelevantRequestTitle = <h3>Other Relevant Request</h3>;
export const OtherRelevantRequestHeader = (
  <div>
    {OtherRelevantRequestTitle}
    <p>Kindly specify the request</p>
  </div>
);
