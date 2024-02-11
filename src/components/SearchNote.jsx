import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchNote = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Find your notes..."
        onChange={(e) => handleSearch(e.target.value.toLowerCase())}
      />
      <span className="search-icon">
        {" "}
        <FaMagnifyingGlass />
      </span>
    </div>
  );
};

export default SearchNote;
