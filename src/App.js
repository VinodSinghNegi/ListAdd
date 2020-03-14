import React, { useState, useCallback } from "react";
import { Paper } from "@material-ui/core";
import NameQuantForm from "./components/NameAndQuantityForm/NameQuantForm";
import DisplayItems from "./components/DisplayItems/DisplayItems";
import SearchBar from "./components/SearchBar/SearchBar";
import Filter from "./components/Filter/Filter";
import Loader from "./components/Loader/loader"

function App() {
  const [items, setItems] = useState([]);
  const [duplicateItem, setDuplicateItem] = useState([]);
  const [localSearchKey, setLocalSearchKey] = useState();

  // console.log("1_App Component");

  const saveItem = useCallback((event, name, quantity) => {
    // console.log("1.1_Saving Item");
    event.persist();
    if (name && quantity) {
      setItems(list => [...list, { name, quantity, createdAt: new Date() }]);
    }
  }, []);

  const deleteItem = useCallback(
    (event, timestamp) => {
      event.preventDefault();
      // console.log("1.2_Deleting Item");
      setItems(items.filter(item => item.createdAt !== timestamp));
      setDuplicateItem(
        duplicateItem.filter(item => item.createdAt !== timestamp)
      );
    },
    [duplicateItem, items]
  );

  const exchangeShowValue = useCallback((searchResult, searchKey) => {
    // console.log("1.3_ Storing Searched Result");
    if (searchKey) {
      setDuplicateItem(searchResult);
    } else {
      setDuplicateItem([]);
    }
    setLocalSearchKey(searchKey);
  }, []);

  const saveFilteredItems = useCallback(
    sortedItems => {
      // console.log("1.4_Storing Filtered Items");
      if (localSearchKey) {
        setDuplicateItem(sortedItems);
      } else {
        setItems(sortedItems);
      }
    },
    [localSearchKey]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px"
      }}
    >
      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          padding: "10px"
        }}
      >
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <NameQuantForm saveItem={saveItem} ProgressBar={Loader} />

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div
          style={{
            display: "flex",
            marginTop: "20px",
            padding: "5px",
            borderRadius: "8px"
          }}
        >
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <SearchBar items={items} exchangeShowValue={exchangeShowValue} />

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {duplicateItem.length > 0 && localSearchKey ? (
            <Filter
              items={duplicateItem}
              saveFilteredItems={saveFilteredItems}
            />
          ) : duplicateItem.length === 0 && localSearchKey ? null : (
            <Filter items={items} saveFilteredItems={saveFilteredItems} />
          )}

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {items.length > 0 ? (
          duplicateItem.length > 0 ? (
            <DisplayItems items={duplicateItem} deleteItem={deleteItem} />
          ) : duplicateItem.length === 0 && localSearchKey ? (
            <div style={{ color: "red", margin: "20px" }}>No Result Found</div>
          ) : (
            <DisplayItems items={items} deleteItem={deleteItem} />
          )
        ) : null}

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      </Paper>
    </div>
  );
}

export default App;
