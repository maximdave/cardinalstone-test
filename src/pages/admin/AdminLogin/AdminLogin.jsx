import React from 'react';
import './AdminLogin.css';
import { useHistory } from 'react-router-dom';
import Logo from '../../../assets/CSRL Logo 1.png';
import Button from '../../../components/Button/Button';
import TextField from '../../../components/TextField/TextField';

const AdminLogin = () => {
  const history = useHistory();
  const adminLogin = (e) => {
    e.preventDefault();
    alert('hi');
  };
  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="header-logo">
          <img src={Logo} alt="CSP" />
          <h3>STOCKBROKER'S PORTAL</h3>
          <p>Admin Login</p>
        </div>

        <form className="admin-login-form m-auto" onSubmit={adminLogin}>
          <TextField className="w-100" label="Admin Username" />
          <TextField className="w-100" label="Admin Password" />

          <Button
            className="admin-login-btn"
            text="LOGIN"
            onClick={() => history.push('/admin-page')}
          />
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
