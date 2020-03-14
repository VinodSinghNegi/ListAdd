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
<<<<<<< HEAD
  };
  // eslint-disable-next-line
=======
  }, [items, searchKey]);

>>>>>>> 0fe8c84813a85d0e2d10f44f6fdf6eb5ace2091e
  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line
      searchItem();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
<<<<<<< HEAD
    // eslint-disable-next-line
  }, [searchKey]);

  useEffect(() => {
    exchangeShowValue(searchResult);
    // eslint-disable-next-line
  }, [searchResult]);
=======
  }, [searchItem]);

  useEffect(() => {
    // console.log("3.2_Sending Searched Items");
    exchangeShowValue(searchResult, searchKey);
  }, [exchangeShowValue, searchKey, searchResult]);
>>>>>>> 0fe8c84813a85d0e2d10f44f6fdf6eb5ace2091e

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
