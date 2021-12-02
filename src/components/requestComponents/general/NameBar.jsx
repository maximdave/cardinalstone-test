import React from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profilePic from "../../../assets/icons/profile-picture.svg";

import "./NameBar.css";

const iconColor = "#9FA2B4";
const iconSize = "2em";

const NameBar = ({ name, title }) => {
  const currentFirstName = localStorage.getItem("currentFirstName");
  const currentUserName = localStorage.getItem("currentUserName");
  const currentLastName = localStorage.getItem("currentLastName");
  const currentUser = localStorage.getItem("currenUser");
  console.log("*****curreentUser:::::", currentUser);
  return (
    <div className="namebar">
      <p className="helloo">
        <span>Welcome </span>
        {currentUserName}
      </p>
      <SearchIcon style={{ color: iconColor, fontSize: iconSize }} />
      <NotificationsIcon
        style={{ marginLeft: ".6em", color: iconColor, fontSize: iconSize }}
      />
      <div className="profile">
        <p className="namebar_name">
          {currentFirstName} {currentLastName}
        </p>
        <Avatar
          sx={{ width: 50, height: 50 }}
          style={{ border: "1px solid red", marginLeft: "20px" }}
          src={profilePic}
        />
      </div>
    </div>
  );
};

export default NameBar;
