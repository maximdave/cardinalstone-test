import React from "react";
import "./ForgotPassword.css";
import { useHistory } from "react-router-dom";
import Logo from "../../../assets/CSRL Logo 1.png";
import Button from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";
import key from "../../../assets/icons/key.svg";
import star from "../../../assets/icons/star.svg";

const ForgotPassword = () => {
  const history = useHistory();
  const handleChangePassword = (e) => {
    e.preventDefault();
  };
  return (
    <div className="change-password-page">
      <div className="change-password-card">
        <div className="header-logo">
          <img src={Logo} alt="CSP" />
        </div>
        <h3>STOCKBROKER'S PORTAL</h3>
        <div className="icons">
          <img src={star} alt="" className="star" />
          <img src={key} alt="" className="key" />
        </div>
        <p>Forgot Password</p>
        <p className="secondP">
          Please enter the email associated with your account.
        </p>

        <form
          className="change-password-form m-auto"
          onSubmit={handleChangePassword}
        >
          <TextField className="w-100" placeholder="Email" />

          <Button
            className="change-password-btn"
            text="CHANGE PASSWORD"
            onClick={() => history.push("/admin-page")}
          />
          <div onClick={() => history.push("/")} className="passwordwww">
            Mistake?
            <b>Go back to Login</b>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
