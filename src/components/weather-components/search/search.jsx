import { useState, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState(null);
  
  useEffect(()=>{
    loadOptions();
  },[])

  const loadOptions = async (inputValue = "New_York") => {
    try {
      const response = await fetch(
        `${GEO_API_URL}?q=${inputValue}`,
        geoApiOptions
      );
      console.log(response.json())
      onSearch({...response});
    } catch (err) {
      return console.error(err);
    }
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="New_York"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;

// followed some ideas from React JS Tutorial - Build a Weather App with Cities Autocomplete - freeCodeCamp