import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Logo from "../../../assets/CSRL Logo 1.png";
import IndemnityLogo from "../../../assets/indemnity.svg";
import "./IndemnityAgreement.css";

const IndemnityAgreement = () => {
  const history = useHistory();

  return (
    <div className="indemnity-agreement-page">
      <div className="indemnity-agreement-card">
        <div className="indemnity-agreement-success">
          <img src={Logo} alt="CSP" />
          <h5>STOCKBROKERS' PORTAL</h5>
          <div onClick={() => history.push("/")}>
            <img
              src={IndemnityLogo}
              alt="CSP"
              className="indemnity-agreement"
            />
          </div>
          <p>
            <span>
              <input type="radio" />
            </span>
            I have read, and accepted the indemnity clause agreement terms
          </p>
          <Button
            text="CONTINUE"
            className="btn13"
            onClick={() => history.push("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default IndemnityAgreement;
