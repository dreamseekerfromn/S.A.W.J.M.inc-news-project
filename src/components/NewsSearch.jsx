import React, { useState } from 'react';

const NewsSearch = ({ onSearch }) => {
  const [searchedNews, setSearchedNews] = useState('');
  const [emptySearch, setEmptySearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchedNews === '') {
      setEmptySearch(true);
      return;
    }
    onSearch(searchedNews);
  };

  return (
    <div className="mt-4">
      <form className="d-flex" style={{ paddingTop: "30px" }} onSubmit={handleSearch}>
        <input
          type="text"
          value={searchedNews}
          onChange={(e) => setSearchedNews(e.target.value)}
          placeholder="Search"
          id="searchInput"
          className="form-control"
        />
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>

      {emptySearch && (
        <div className="alert alert-danger mt-3">
          Please enter something in the search area.
        </div>
      )}
    </div>
  );
};

export default NewsSearch;
