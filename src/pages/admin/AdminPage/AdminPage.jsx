import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../../assets/CSRL white logo 1.png';
import Create from '../../../assets/icons/icons8-create-80.png';
import Edit from '../../../assets/icons/icons8-edit-property-100.png';
import Users from '../../../assets/icons/icons8-users-64.png';
import './AdminPage.css';

const AdminPage = () => {
  const history = useHistory();
  return (
    <div className="admin-page">
      <img src={Logo} alt="CSP Registrars" />
      <h6 className="page-title">STOCKBROKERS' PORTAL ADMIN</h6>

      <div className="admin-options  row mt-5">
        <div
          className="col-md-3 col-sm-6 mb-4 border-right"
          onClick={() => history.push('/create-user')}
        >
          <div className="options">
            <img src={Create} alt="CSP ADMIN PAGE ICONS" />
            <p>Create User</p>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 mb-4 border-right"
          onClick={() => history.push('/create-stockbroker')}
        >
          <div className="options">
            <img src={Create} alt="CSP ADMIN PAGE ICONS" />
            <p>Create Stockbroker</p>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 mb-4 border-right"
          onClick={() => history.push('/manage-users')}
        >
          <div className="options">
            <img src={Users} alt="CSP ADMIN PAGE ICONS" />
            <p>Manage Users</p>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-6 mb-4"
          onClick={() => history.push('/edit-request')}
        >
          <div className="options">
            <img src={Edit} alt="CSP ADMIN PAGE ICONS" />
            <p>Edit Request Requirements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
