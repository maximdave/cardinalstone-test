/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useHistory } from "react-router-dom";
import "./Requests.css";
// import NumberCard from "../../../components/requestComponents/general/NumberCard";
import NumberCard2 from "../../../components/stockrequest/NumberCard2";
import Button from "../../../components/Button/Button";

const Requests = () => {
  const history = useHistory();

  return (
    <div className="dashboard_view">
      <div className="dashboard_head2">
        <div className="dashboard_requests_header2">
          <h3>Recents Requests</h3>
        </div>

        <div className="dashboard_header2">
          <NumberCard2
            onClick={() => history.push("/requestdashboard/requests")}
            text="Demat Request  "
            number={2}
            bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          />
          <NumberCard2
            text="Request for outstanding dividend "
            number={2}
            bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          />
          <NumberCard2
            text="Request for statement of account "
            number={2}
            bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          />
          <NumberCard2
            text="Request for outstanding shares "
            number={2}
            bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
          />
        </div>

        <div className="dashboard_requests_header3">
          <h3>Make a new request</h3>
        </div>

        <div className="make-payment">
          <select id="method">
            <option>Select request...</option>
            <option>Demat request</option>
            <option>Correction of Name</option>
            <option>Change of Name for Individuals</option>
            <option>Change of Name for Corporates</option>
            <option>Consolidation of Accounts</option>
            <option>Signature Mandate</option>
            <option>Submission of Bankers’ Confirmation Letters</option>
            <option>Change of Address</option>
            <option>Statement of Account</option>
            <option>Other relevant requests</option>
          </select>

          <Button
            className="payment-method-btn"
            text="PROCEED"
            // onClick={() => history.push("/admin-page")}
          />
        </div>
      </div>
    </div>
  );
};

export default Requests;
