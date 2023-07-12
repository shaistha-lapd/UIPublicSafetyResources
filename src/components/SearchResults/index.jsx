import React from "react";
import "./SearchResults.css";
import ResultArea from "../ResultArea";

const SearchResults = ({ results }) => {
  return (
    <div className="results-list position-relative">
      {results.map((result, id) => {
        return <ResultArea result={result} key={id} />;
      })}
    </div>
  );
};

export default SearchResults;
