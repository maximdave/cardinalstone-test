import React from 'react';
import Button from '../../../components/Button/Button';
import Logo from '../../../assets/CSRL Logo 1.png';
import './CreateUserSuccess.css';

const CreateUserSuccess = () => (
  <div className="create-user-success-page">
    <div className="create-user-success-card">
      <div className="create-user-success">
        <img src={Logo} alt="CSP" />
        <h5>STOCKBROKERS' PORTAL</h5>
        <p>Congratulations!</p>
        <p>A new user has been created.</p>

        <Button text="CREATE ANOTHER" className="btn" />
        <Button text="GO TO DASHBOARD" type="secondary" className="btn" />
      </div>
    </div>
  </div>
);

export default CreateUserSuccess;
