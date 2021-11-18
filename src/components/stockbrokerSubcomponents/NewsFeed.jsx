import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "./NewsFeed.css";

const NewsFeed = () => {
  const [isFetchingNews, setIsFetchingNews] = useState(false);
  const [news, setNews] = useState(null);
  const [newsErr, setNewsErr] = useState(null);
  //
  const getNews = async () => {
    try {
      setIsFetchingNews(true);
      const { data } = await axios.get(
        `https://restserverstaging.cardinalstone.com/api/news`
      );
      setNews(data);
      setIsFetchingNews(false);
    } catch (e) {
      setIsFetchingNews(false);
      console.log(e);
      setNewsErr(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getNews();
    };
    fetchData();
  }, []);

  return (
    <div className="newsfeed">
      <div className="newsfeed_header">
        <h3>NEWS FEED</h3>
      </div>
      <div className="newscards">
        {isFetchingNews ? (
          <p> loading </p>
        ) : (
          <>
            {news &&
              news.map((el, idx) => (
                <NewsCard
                  key={idx}
                  content={el.description}
                  urlToImage={el.urlToImage}
                  title={el.title}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
