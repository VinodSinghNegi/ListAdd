import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import DisplayItems from "../DisplayItems/DisplayItems";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      searchItem();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchKey]);

  useEffect(() => {
    exchangeShowValue(searchResult);
  }, [searchResult]);

  return (
    <div style={{ marginTop: "20px" }}>
      <form>
        <TextField
          type="search"
          placeholder="Search Items"
          onEmptied={event => setSearchKey()}
          onChange={event => saveSearchKey(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
