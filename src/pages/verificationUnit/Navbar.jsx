/* eslint-disable react/no-array-index-key */
import React from "react";
import NavItem from "../../components/requestComponents/general/NavItem";
import overviewIcon from "../../assets/dashboard.png";
import logoutIcon from "../../assets/logout.png";
import reportsIcon from "../../assets/reports.png";
import cardinalwhiteblack from "../../assets/cardinalwhiteblack.svg";

import StockrequestIconIcon from "../../assets/svg/stockrequest.svg";
// import ApprovecallIcon from "../../assets/svg/approvecall.svg";
// import RejectcallIcon from "../../assets/svg/rejectcall.svg";
import ReverseLogIcon from "../../assets/svg/reverselode.svg";

const navItems = [
  {
    linkPath: "/verification/overview",
    linkIcon: overviewIcon,
    linkText: "Overview",
  },
  {
    linkPath: "/verification/requests",
    linkIcon: StockrequestIconIcon,
    linkText: "Stockbroker's Request",
  },
  // {
  //   linkPath: "/verification/approvedcallover",
  //   linkIcon: ApprovecallIcon,
  //   linkText: "Approved Callover",
  // },
  // {
  //   linkPath: "/verification/rejectedcallover",
  //   linkIcon: RejectcallIcon,
  //   linkText: "Rejected Callover",
  // },
  {
    linkPath: "/verification/reverselodg",
    linkIcon: ReverseLogIcon,
    linkText: "Reverse Lodgement",
  },

  {
    linkPath: "/verification/reports",
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
