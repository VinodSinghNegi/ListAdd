import React, { useState, useEffect, useCallback } from "react";
import { TextField } from "@material-ui/core";

const SearchBar = React.memo(props => {
  // console.log("3_Search Bar Component");
  const { items, exchangeShowValue } = props;

  const [searchKey, setSearchKey] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const saveSearchKey = useCallback(keyword => {
    setSearchKey(keyword);
  }, []);

  const searchItem = useCallback(() => {
    // console.log("3.1_Searching...");
    setSearchResult(items.filter(item => item.name.includes(searchKey)));
  }, [items, searchKey]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line
      searchItem();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchItem]);

  useEffect(() => {
    // console.log("3.2_Sending Searched Items");
    exchangeShowValue(searchResult, searchKey);
  }, [exchangeShowValue, searchKey, searchResult]);

  return (
    <div>
      <form>
        <TextField
          disabled={items.length > 0 ? false : true}
          type="search"
          placeholder="Search Items"
          onChange={event => saveSearchKey(event.target.value)}
        />
      </form>
    </div>
  );
});

export default SearchBar;
