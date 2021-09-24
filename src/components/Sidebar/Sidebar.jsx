import React from 'react';
import logo from '../../assets/CSRL white logo 1.png';
import overview from '../../assets/icons/overview-icon.svg';
import bulb from '../../assets/icons/bulb.svg';
import report from '../../assets/icons/report-icon.svg';
import logout from '../../assets/icons/logout.svg';
import './Sidebar.css';

const Sidebar = () => (
  <div className="side-bar">
    <div className="top">
      <img src={logo} alt="" />
      <div className="list-div">
        <img src={overview} alt="" />
        <span>Overview</span>
      </div>
      <div className="list-div">
        <img src={bulb} alt="" />
        <span>Requests</span>
      </div>
      <div className="list-div">
        <img src={report} alt="" />
        <span>Reports</span>
      </div>
    </div>
    <div className="bottom">
      <div className="list-div">
        <img src={logout} alt="" />
        <span>LOG OUT</span>
      </div>
    </div>
  </div>
);

export default Sidebar;
