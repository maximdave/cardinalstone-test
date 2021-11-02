import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ linkPath, linkIcon, linkText }) => (
  <NavLink
    to={linkPath}
    className="nav_item"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1em 2em",
      textDecoration: "none",
      color: "#B1B1B1",
    }}
    activeStyle={{
      fontWeight: "bold",
      color: "#DDE2FF",
      borderLeft: "5px solid #DDE2FF",
      opacity: 0.8,
      textDecoration: "none",
    }}
  >
    <div className="nav_items">
      <div className="nav_item_icon">
        <img style={{ width: "20px" }} src={linkIcon} alt="" srcSet="" />
      </div>

      <p>{linkText}</p>
    </div>
  </NavLink>
);

export default NavItem;
