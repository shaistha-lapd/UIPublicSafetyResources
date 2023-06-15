import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    const api = "https://jsonplaceholder.typicode.com/users";
    // const api = `${hostName}/${databaseName}/${tableName}/${routeName}`
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user["name"] &&
            user["name"].toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <form className="input-wrapper" action="">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type to search...."
        value={input}
        onChange={(env) => handleChange(env.target.value)}
        name=""
        id=""
      />
    </form>
  );
};

export default SearchBar;
