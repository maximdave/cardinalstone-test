import React from 'react';
import './StockbrokerLogin.css';
import { useHistory } from 'react-router-dom';
import Logo from '../../../assets/CSRL Logo 1.png';
import Button from '../../../components/Button/Button';
import TextField from '../../../components/TextField/TextField';

const StockbrokerLogin = () => {
  const history = useHistory();
  const handleChangePassword = (e) => {
    e.preventDefault();
  };
  return (
    <div className="stockbroker-login-page">
      <div className="stockbroker-login-card">
        <div className="header-logo">
          <img src={Logo} alt="CSP" />
          <h3>STOCKBROKER'S PORTAL</h3>
          <p>User Login</p>
        </div>

        <form
          className="stockbroker-login-form m-auto"
          onSubmit={handleChangePassword}
        >
          <TextField
            className="w-100"
            type="text"
            placeholder="Username"
            label="Username"
          />
          <TextField
            className="w-100"
            type="email"
            placeholder="Email"
            label="Email"
          />
          <TextField
            type="password"
            className="w-100"
            placeholder="Password"
            label="Password"
          />
          <div onClick={() => history.push('/')} className="password">
            Forgot Password?
          </div>
          <Button
            className="stockbroker-login-btn"
            text="LOGIN"
            onClick={() => history.push('/admin-page')}
          />
          <Button
            type="secondary"
            className="btn login-admin"
            text="Click to sign in as Admin"
            onClick={() => history.push('/')}
          />
        </form>
      </div>
    </div>
  );
};

export default StockbrokerLogin;
