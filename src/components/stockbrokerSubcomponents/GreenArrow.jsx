import React from "react";
import Avatar from "@mui/material/Avatar";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import { green, red, blue } from "@mui/material/colors";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import HorizontalRuleSharpIcon from "@mui/icons-material/HorizontalRuleSharp";

const size = 25;
export const GreenArrow = () => (
  <div>
    <Avatar sx={{ width: size, height: size, bgcolor: green[300] }}>
      <ArrowUpwardSharpIcon />
    </Avatar>
  </div>
);
export const RedArrow = () => (
  <div>
    <Avatar sx={{ width: size, height: size, bgcolor: red[300] }}>
      <ArrowDownwardSharpIcon />
    </Avatar>
  </div>
);

export const Dash = () => (
  <div>
    <Avatar sx={{ width: size, height: size, bgcolor: blue[100] }}>
      <HorizontalRuleSharpIcon />
    </Avatar>
  </div>
);
