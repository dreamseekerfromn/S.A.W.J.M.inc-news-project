import React, { useEffect, useState } from "react";
import NewsSearch from "./NewsSearch";

const News = ({ NEWS }) => {
  const [newsData, setNewsData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");

  useEffect(() => {
    // const URL = `https://newsapi.org/v2/top-headlines/sources?&apiKey=${NEWS}`;

    fetch(URL, {
      method: "GET",
      headers: {
        "x-api-key": NEWS,
      },
    })
      .then((response) => {
        if (!response.ok) {
          alert("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setNewsData(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [NEWS]);

  const uniqueCategories = newsData?.sources
    ? [...new Set(newsData.sources.map((source) => source.category))]
    : [];

  const filteredSources = newsData?.sources
    ? newsData.sources.filter((source) =>
        selectedCategory ? source.category === selectedCategory : true
      )
    : [];

  const filteredByNation = filteredSources.filter((source) =>
    selectedCountry === "all"
      ? true
      : source.country.toLowerCase() === "us"
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Top Headlines to keep you informed!</h1>
      <div className="mb-4">
      <NewsSearch NEWS={NEWS} />
        <label>Select a category:</label>
        <select
          className="form-select"
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
      <div className="mb-4">
        <label>Select News Variety:</label>
        <select
          className="form-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="all">All</option>
          <option value="us">United States</option>
        </select>
      </div>
      <div className="row">
        {filteredByNation.map((source) => (
          <div key={source.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{source.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {source.category}
                </h6>
                <p className="card-text">{source.description}</p>
                <a
                  href={source.url}
                  className="card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;