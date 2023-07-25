import React, { useState, useEffect, Component } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import carddata from "../../Alldata";


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      results: {},
      recent: [],
    };
  }
  fetchData = (value) => {
    const data = carddata.filter((user) => {
      return (
        value &&
        user &&
        user["name"] &&
        user["name"].toLowerCase().includes(value)
      );
    });
    this.props.setResults(data);
  };
  handleChange = (value) => {
    this.input = value;
    this.fetchData(value);
  };

  handleSearch = () => {
    let recent = this.state.recent;
    recent = [...recent, this.input];
    this.setState({ recent }, () => {
      window.localStorage.setItem("recent", JSON.stringify(this.state.recent));
    });
    // setRecentSearch((current) => [...current, input]);
    // window.localStorage.setItem("recent", JSON.stringify(recentSearch));
  };

  componentDidMount() {
    const data = window.localStorage.getItem("recent");
    let recent = this.state.recent;
    recent = [...recent, JSON.parse(data)];
    console.log(recent);
  }

  render() {
    return (
      <div className="w-100">
        <div className="search-form-container">
          <div>
            <h2>Search</h2>
          </div>
          <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
              type="text"
              placeholder="Type to search...."
              value={this.state.count}
              onChange={(env) => this.handleChange(env.target.value)}
              name=""
              id=""
            />
          </div>
        </div>
        <div className="Advance-Search-btn-container">
          <button
            className="Advance-Search-btn float-right m-2"
            onClick={this.handleSearch}
          >
            Advance Search
          </button>
        </div>
        <div className="download-data position-relative">
          <button className="btn btn-info"> Download</button>
        </div>
      </div>
    );
  }
}

// const SearchBar = ({ setResults }) => {
//   const [input, setInput] = useState("");
//   const [recentSearch, setRecentSearch] = useState([]);
//   const fetchData = (value) => {
//     const results = carddata.filter((user) => {
//       return (
//         value &&
//         user &&
//         user["name"] &&
//         user["name"].toLowerCase().includes(value)
//       );
//     });
//     setResults(results);
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

//   const handleSearch = () => {
//     setRecentSearch((current) => [...current, input]);
//     window.localStorage.setItem("recent", JSON.stringify(recentSearch));
//   };

//   useEffect(() => {
//     const data = window.localStorage.getItem("recent");

//     setRecentSearch(JSON.parse(data));
//   });

//   return (
//     <div className="w-100">
//       <div className="search-form-container">
//         <div>
//           <h2>Search</h2>
//         </div>
//         <div className="input-wrapper">
//           <FaSearch id="search-icon" />
//           <input
//             type="text"
//             placeholder="Type to search...."
//             value={input}
//             onChange={(env) => handleChange(env.target.value)}
//             name=""
//             id=""
//           />
//         </div>
//       </div>
//       <div className="Advance-Search-btn-container">
//         <button
//           className="Advance-Search-btn float-right m-2"
//           onClick={handleSearch}
//         >
//           Advance Search
//         </button>
//       </div>
//       <div className="download-data position-relative">
//         <button className="btn btn-info"> Download</button>
//       </div>
//     </div>
//   );
// };

export default SearchBar;
