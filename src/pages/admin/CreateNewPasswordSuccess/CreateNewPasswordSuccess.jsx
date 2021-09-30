import React from "react";
import "./CreateNewPasswordSuccess.css";
import { useHistory } from "react-router-dom";
import Logo from "../../../assets/CSRL Logo 1.png";
import Button from "../../../components/Button/Button";
import key from "../../../assets/icons/key.svg";
import star from "../../../assets/icons/star.svg";

const CreateNewPasswordSuccess = () => {
  const history = useHistory();

  return (
    <div className="create-password-success-page">
      <div className="create-password-success-card">
        <div className="header-logos">
          <img src={Logo} alt="CSP" />
        </div>
        <h3>STOCKBROKER'S PORTAL</h3>
        <div className="iconss">
          <img src={star} alt="" className="stars" />
          <img src={key} alt="" className="keys" />
        </div>
        <p>Your new password has been set</p>
        <form
          className="create-password-form-success m-auto"
          // onSubmit={handleChangePassword}
        >
          <Button
            className="create-password-btn-success"
            text="LOGIN"
            onClick={() => history.push("/stockbroker-login")}
          />
        </form>
      </div>
    </div>
  );
};

export default CreateNewPasswordSuccess;
