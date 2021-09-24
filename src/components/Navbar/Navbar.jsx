import React from 'react';
import searchIcon from '../../assets/icons/search-icon.svg';
import notifications from '../../assets/icons/notification-icon.svg';
import profilePic from '../../assets/icons/profile-picture.svg';

const Navbar = () => (
  <div className="navbar">
    <div className="greeting">
      <h3>Welcome Jones</h3>
    </div>
    <div className="navbar-items">
      <img src={searchIcon} alt="" />
      <img src={notifications} alt="" />
      <hr />
      <p className="name">Jones Ferdinand</p>
      <img src={profilePic} alt="" />
    </div>
  </div>
);

export default Navbar;
