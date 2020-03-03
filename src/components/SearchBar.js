import React from "react";

function SearchBar() {
  console.log("3_Search Bar Component");

  const searchItem = event => {
    console.log("Searching...");
  };
  return (
    <div>
      <br />
      <input
        type="search"
        placeholder="Search Items"
        onChange={event => searchItem(event)}
      />
    </div>
  );
}

export default SearchBar;
