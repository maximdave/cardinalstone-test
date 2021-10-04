import React from "react";
import NewsCard from "./NewsCard";
import "./NewsFeed.css";

const UpcomingEvents = () => (
  <div className="newsfeed">
    <div className="newsfeed_header">
      <h3>UPCOMING EVENTS</h3>
    </div>
    <div className="newscards">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  </div>
);

export default UpcomingEvents;
