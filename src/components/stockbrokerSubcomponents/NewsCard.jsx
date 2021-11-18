import React from "react";
import { Avatar } from "@mui/material";
import "./NewsCard.css";

const NewsCard = ({
  content = "November 14, (THEWILL) – The Emirates Group has announced half-year results for its 2021-22 financial year.  In the report, Group revenue was AED 24.7 billion (US$ 6.7 billion) for the first six mont… [+4802 chars]",
  urlToImage = "https://thewillnigeria.com/news/wp-content/uploads/2020/12/cropped-NEW-LOGO-FAV-SMALL.png",
  title = "Emirates Group Rakes In $6.7bn In 2021-22 Half Year - thewillnigeria",
}) => (
  <div className="newscard">
    <div className="newscard_avatar">
      <Avatar
        variant="rounded"
        sx={{ width: 100, height: 100 }}
        src={`${urlToImage}`}
      />
    </div>
    <div className="newscard_text">
      <h4 className="newscard_text_headline">{title}</h4>
      <p>{content}</p>
    </div>
  </div>
);

export default NewsCard;
