import React from 'react';
import './ChoosePayment.css';
import { useHistory } from 'react-router-dom';
import Logo from '../../../assets/CSRL Logo 1.png';
import Button from '../../../components/Button/Button';
import TextField from '../../../components/TextField/TextField';

const ChoosePayment = () => {
  const history = useHistory();
  const handleChangePassword = (e) => {
    e.preventDefault();
  };
  return (
    <div className="choose-payment-page">
      <div className="choose-payment-card">
        <div className="header-logo header">
          <img src={Logo} alt="CSP" />
          <h3>STOCKBROKER'S PORTAL</h3>
          <p>Pay Annual Subscription</p>
        </div>

        <form
          className="choose-payment-form m-auto"
          onSubmit={handleChangePassword}
        >
          <TextField
            className="w-100"
            type="text"
            placeholder="N10,000"
            label="Subscription"
          />
          <TextField
            className="w-100"
            type="email"
            placeholder="N100"
            label="Transaction Fee"
          />

          <label htmlFor="method">Choose Payment Method</label>
          <select id="method">
            <option>Payment Method</option>
            <option>Pay with Transfer</option>
            <option>Pay with Caed</option>
            <option>Pay Online</option>
          </select>

          <Button
            className="choose-payment-btn"
            text="PAY NOW"
            onClick={() => history.push('/admin-page')}
          />
        </form>
      </div>
    </div>
  );
};

export default ChoosePayment;
