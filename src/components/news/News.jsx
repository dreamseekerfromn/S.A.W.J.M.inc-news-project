import { useEffect, useState } from "react";
import NewsSearch from "./news/NewsSearch";

const News = ({ NEWS }) => {
  const [newsData, setNewsData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    const URL = `https://newsapi.org/v2/top-headlines/sources?country=${selectedCountry === "us" ? "us" : ""}&apiKey=${NEWS}`;
    
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
      .then((responseData) => setNewsData(responseData))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [NEWS, selectedCountry]);

  const handleSearch = (searchedText) => {
    const filteredArticles = newsData?.sources
      ? newsData.sources.filter((source) =>
          source.name.toLowerCase().includes(searchedText.toLowerCase()) ||
          source.description.toLowerCase().includes(searchedText.toLowerCase())
        )
      : [];
    setSearchResults(filteredArticles);
  };

  const uniqueCategories = newsData?.sources
    ? [...new Set(newsData.sources.map((source) => source.category))]
    : [];

  const filteredSources = newsData?.sources
    ? newsData.sources.filter((source) =>
        selectedCategory ? source.category === selectedCategory : true
      )
    : [];
  const renderArticles = () => {
    const articlesToRender = searchResults.length > 0 ? searchResults : filteredSources;
    return articlesToRender.map((source) => (
      <div key={source.id} className="col-md-4 mb-4" style={{ width: "60 rem" }}>
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
    ));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Top Headlines from Sources</h1>
      <NewsSearch onSearch={handleSearch} />
      <div className="mb-4">
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
        <label>Select a country:</label>
        <select
          className="form-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="all">All Countries</option>
          <option value="us">United States</option>
        </select>
      </div>
      <div className="mb-4">
      </div>
      <div className="row">
        {renderArticles()}
      </div>
    </div>
  );
};

export default News;