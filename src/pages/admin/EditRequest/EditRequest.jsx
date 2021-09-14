import React from 'react';
import Logo from '../../../assets/CSRL Logo 1.png';
import { editRequirements } from '../../../constants/editRequirements';
import './EditRequest.css';

const EditRequest = () => (
  <div className="user-page" style={{ paddingBottom: '30px' }}>
    <div className="user-card">
      <div className="edit-request-header">
        <img src={Logo} alt="CSP" />
        <p style={{ color: '#002564' }}>
          <strong>STOCKBROKERS' PORTAL</strong>
        </p>
        <h5 style={{ color: '#002564', fontSize: '24', fontWeight: '400' }}>
          Edit Request Requirements
        </h5>
      </div>

      <div className="d-flex justify-content-around">
        <hr className="line w-50" />
        <p style={{ color: '#528DC2', marginRight: '30px', cursor: 'pointer' }}>
          Edit Selected
        </p>
      </div>
      <div>
        {editRequirements.map((req) => (
          <div key={req} className="requirements">
            <input type="radio" className="mr-2" />
            <label>{req}</label>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default EditRequest;
