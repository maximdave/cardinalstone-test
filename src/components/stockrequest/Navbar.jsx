/* eslint-disable react/no-array-index-key */
import React from "react";
import NavItem from "../requestComponents/general/NavItem";
import overviewIcon from "../../assets/dashboard.png";
import logoutIcon from "../../assets/logout.png";
import reportsIcon from "../../assets/reports.png";
import requestsIcon from "../../assets/requests.png";
import cardinalwhiteblack from "../../assets/cardinalwhiteblack.svg";

const navItems = [
  {
    linkPath: "/stockbroker/overview",
    linkIcon: overviewIcon,
    linkText: "Overview",
  },
  {
    linkPath: "/stockbroker/requests",
    linkIcon: requestsIcon,
    linkText: "Requests",
  },
  {
    linkPath: "/stockbroker/reports",
    linkIcon: reportsIcon,
    linkText: "Reports",
  },
];

const Navbar = () => (
  <div className="nav_bar">
    <div className="cardinal_logo">
      <img src={cardinalwhiteblack} alt="cardinalLogo" />
    </div>
    <div className="nav_bar_section_one">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          linkPath={item.linkPath}
          linkIcon={item.linkIcon}
          linkText={item.linkText}
        />
      ))}
    </div>
    <div className="nav_bar_section_two">
      <NavItem linkPath="/logout" linkIcon={logoutIcon} linkText="Logout" />
    </div>
  </div>
);

export default Navbar;
