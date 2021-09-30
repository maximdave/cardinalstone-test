import React from "react";
import { NavLink } from "react-router-dom";

const RequestCard = ({
  linkPath,
  linkText,
  linkIcon,
  bgColor,
  subText,
  fontColor = "#ffffff",
}) => (
  <NavLink
    to={linkPath}
    className="nav_item"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "2em",
      textDecoration: "none",
      color: fontColor,
      background: bgColor,
      borderRadius: ".5em",
      width: "300px",
    }}
  >
    <div className="nav_items">
      <div className="nav_item_icon">
        <img src={linkIcon} alt="" srcSet="" />
      </div>

      <div className="requestcard_texts">
        <p
          style={{
            fontSize: "1.5rem",
            width: "100%",
            margin: "0em",
          }}
        >
          {linkText}
        </p>
        <p
          style={{
            fontSize: ".8rem",

            width: "100%",
            margin: "0em",
            color: "#000",
          }}
        >
          {subText}
        </p>
      </div>
    </div>
  </NavLink>
);

export default RequestCard;
