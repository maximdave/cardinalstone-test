import React from "react";
import NewsCard from "./NewsCard";
import "./NewsFeed.css";

const NewsFeed = () => (
  <div className="newsfeed">
    <div className="newsfeed_header">
      <h3>NEWS FEED</h3>
    </div>
    <div className="newscards">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  </div>
);

export default NewsFeed;
