import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchText);
    // You can add more logic here
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchText} //binding the input value to state
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
