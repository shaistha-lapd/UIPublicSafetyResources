import { useState } from "react";
import "./SearchData.css";
import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults";
import logo from "../../images/logo.png";

const SearchData = () => {
  const [results, setResults] = useState([]);
  return (
    <div>
      <div className="App">
        <div className="search-bar-container">

          <SearchBar setResults={setResults} />
          <SearchResults results={results} />
        </div>
      </div>
    </div>
  );
};

export default SearchData;
