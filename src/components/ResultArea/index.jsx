import React from "react";
import "./ResultArea.css";

const ResultArea = ({ result }) => {
  return <div className="search-result">{result.name}</div>;
};

export default ResultArea;
