import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data))

      .catch((err) => console.error(err));
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;

// followed some ideas from React JS Tutorial - Build a Weather App with Cities Autocomplete - freeCodeCamp
