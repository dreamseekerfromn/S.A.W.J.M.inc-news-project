import { useState, useEffect } from "react";

const News = ({ NEWS }) => {
  const [newsData, setNewsData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    // const BUS = import.meta.env.VITE_API_KEY;
    const pageSize = 5;

    // const URL = `https://newsapi.org/v2/top-headlines/sources?pageSize=${pageSize}&apiKey=${NEWS}`;

    fetch(URL, {
      method: "GET",
      headers: {
        "x-api-key": NEWS,
      },
    })
      .then((response) => {
        if (!response.ok) {
          alert('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setNewsData(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const uniqueCategories = newsData?.sources
    ? [...new Set(newsData.sources.map((source) => source.category))]
    : [];


  const filteredArticles = newsData?.sources
    ? newsData.sources.filter((source) => source.category === selectedCategory)
    : [];

  return (
    <div className="App">
      <h1>Top Headlines from Sources</h1>
      <div>
        <label>Select a category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filteredArticles.map((article) => (
          <li key={article.id}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
