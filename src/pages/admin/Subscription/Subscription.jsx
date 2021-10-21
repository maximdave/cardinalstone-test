import React from "react";
import Button from "../../../components/Button/Button";
import Logo from "../../../assets/CSRL Logo 1.png";
import SubscriptionLogo from "../../../assets/subscription.svg";
import "./Subscription.css";

const Subscription = () => (
  <div className="subscription-page">
    <div className="subscription-card">
      <div className="subscription-success">
        <img src={Logo} alt="CSP" />
        <h5>STOCKBROKERS' PORTAL</h5>
        <p>Welcome, please pay your annual</p>
        <p>subscription to continue</p>
        <img src={SubscriptionLogo} alt="CSP" className="subscription" />

        <Button text="PAY NOW" className="btn1" />
        <Button text="LOG OUT" type="secondary" className="btn22" />
      </div>
    </div>
  </div>
);

export default Subscription;
