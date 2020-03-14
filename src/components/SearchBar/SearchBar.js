import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";

function SearchBar(props) {
  console.log("3_Search Bar Component");
  const { items, exchangeShowValue } = props;

  const [searchKey, setSearchKey] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const saveSearchKey = keyword => {
    setSearchKey(keyword);
  };

  const searchItem = () => {
    console.log("Searching...");

    setSearchResult(items.filter(item => item.name.includes(searchKey)));
  };
  // eslint-disable-next-line
  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line
      searchItem();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchKey]);

  useEffect(() => {
    exchangeShowValue(searchResult);
    // eslint-disable-next-line
  }, [searchResult]);

  return (
    <div style={{ marginTop: "20px" }}>
      <form>
        <TextField
          type="search"
          placeholder="Search Items"
          onChange={event => saveSearchKey(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
