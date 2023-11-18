import React from "react";

const Search = ({ handleSearch }) => {
  
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
