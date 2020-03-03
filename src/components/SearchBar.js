import React from "react";

function SearchBar() {
  console.log("3_Search Bar Component");

  const searchItem = event => {
    console.log("Searching...");
  };
  return (
    <div>
      <br />
      <form>
        <input
          type="search"
          placeholder="Search Items"
          onChange={event => searchItem(event)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
