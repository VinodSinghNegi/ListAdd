import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import NameQuantForm from "./components/NameAndQuantityForm/NameQuantForm";
import DisplayItems from "./components/DisplayItems/DisplayItems";
import SearchBar from "./components/SearchBar/SearchBar";
import Filter from "./components/Filter/Filter";
function App() {
  const [items, setItems] = useState([]);
  const [duplicateItem, setDuplicateItem] = useState([]);
  const [searchKey, setSearchKey] = useState();

  console.log("1_App Component");

  const saveItem = (event, name, quantity) => {
    event.preventDefault();
    if (name && quantity) {
      setItems([...items, { name, quantity, createdAt: new Date() }]);
      console.log("1.1_Item Saved");
    }
  };

  const deleteItem = (event, timestamp) => {
    event.preventDefault();
    console.log("1.2_Deleting Item");
    var tempArray = items;
    setItems(tempArray.filter(item => item.createdAt !== timestamp));
    setDuplicateItem(
      duplicateItem.filter(item => item.createdAt !== timestamp)
    );
  };

  const saveFilteredItems = sortedItems => {
    console.log("1.3_Saving Filtered Items");
    if (searchKey) {
      setDuplicateItem(sortedItems);
    } else {
      setItems(sortedItems);
    }
  };

  const exchangeShowValue = (searchResult, searchKey) => {
    console.log("1.4_ Saving Searched Result");
    if (searchKey) {
      setDuplicateItem(searchResult);
    } else {
      setDuplicateItem([]);
    }
    setSearchKey(searchKey);
  };

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

        <NameQuantForm saveItem={saveItem} />

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
          {items.length > 1 ? (
            <SearchBar items={items} exchangeShowValue={exchangeShowValue} />
          ) : null}

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {items.length > 1 ? (
            duplicateItem.length > 0 && searchKey ? (
              <Filter
                items={duplicateItem}
                saveFilteredItems={saveFilteredItems}
              />
            ) : duplicateItem.length === 0 && searchKey ? null : (
              <Filter items={items} saveFilteredItems={saveFilteredItems} />
            )
          ) : null}

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {items.length > 0 ? (
          duplicateItem.length > 0 ? (
            <DisplayItems items={duplicateItem} deleteItem={deleteItem} />
          ) : duplicateItem.length === 0 && searchKey ? (
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
