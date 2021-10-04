import React from "react";
import { Avatar } from "@mui/material";
import "./NewsCard.css";

const NewsCard = () => (
  <div className="newscard">
    <div className="newscard_avatar">
      <Avatar
        variant="rounded"
        sx={{ width: 100, height: 100 }}
        src="https://www.telegraph.co.uk/content/dam/royal-family/2021/09/23/TELEMMGLPICT000272246794_trans_NvBQzQNjv4BqUsyQjfQmTm3Yxf2ii3_HjQNc1Pn6WByOlHVnmvkbtb4.jpeg?imwidth=960"
      />
    </div>
    <div className="newscard_text">
      <h4 className="newscard_text_headline">
        U.S. Antimissile System Goes Live in South Korea
      </h4>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat
      </p>
    </div>
  </div>
);

export default NewsCard;
