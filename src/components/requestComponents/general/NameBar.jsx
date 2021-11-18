import React from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profilePic from "../../../assets/icons/profile-picture.svg";

import "./NameBar.css";

const iconColor = "#9FA2B4";
const iconSize = "2em";

const NameBar = ({ name, title }) => {
  const currentUser = localStorage.getItem("currentUser");
  console.log("curreentUser:::::", currentUser);
  return (
    <div className="namebar">
      <p className="helloo">
        <span>Welcome </span>
        {currentUser}
      </p>
      <SearchIcon style={{ color: iconColor, fontSize: iconSize }} />
      <NotificationsIcon
        style={{ marginLeft: ".6em", color: iconColor, fontSize: iconSize }}
      />
      <div className="profile">
        <p className="namebar_name">{title}</p>
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
