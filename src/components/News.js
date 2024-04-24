import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const API_KEY = 'pub_4262911444562f05d4a51d8e1de4aa325867a';
const API_ENDPOINT = `https://newsdata.io/api/1/news?country=np&apikey=${API_KEY}`;

export default function News({ mode }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      console.log(data); // Log the data to see its structure
      setArticles(data.results);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div className="container my-3">
      <div className={`text ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>
        <h2>SahajKhabar-Headlines</h2>
      </div>
      <div className="row">
        {articles && articles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <NewsItem
              mode={mode}
              title={article.title ? article.title.slice(0, 30) : ''}
              description={article.description ? article.description.slice(0, 200) : ''}
              imgurl={article.image_url ? article.image_url : ''}
              newsurl={article.link ? article.link : ''}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
