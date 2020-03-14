<<<<<<< HEAD
import React, { useState } from "react";
import NameQuantForm from "./components/NameQuantForm";
import DisplayItems from "./components/DisplayItems";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
function App() {
  const [items, setItems] = useState([]);
=======
import React, { useState, useCallback } from "react";
import { Paper } from "@material-ui/core";
import NameQuantForm from "./components/NameAndQuantityForm/NameQuantForm";
import DisplayItems from "./components/DisplayItems/DisplayItems";
import SearchBar from "./components/SearchBar/SearchBar";
import Filter from "./components/Filter/Filter";

function App() {
  const [items, setItems] = useState([]);
  const [duplicateItem, setDuplicateItem] = useState([]);
  const [localSearchKey, setLocalSearchKey] = useState();
>>>>>>> 0fe8c84813a85d0e2d10f44f6fdf6eb5ace2091e

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

<<<<<<< HEAD
  const filterItems = event => {
    console.log("1.3_Filtering Items");
    if (event.target.value === "name") {
      let sortedItems = items.sort(compareByName);
      setItems(sortedItems);
    } else if (event.target.value === "quantity") {
      let sortedItems = items.sort(compareByQuantity);
      console.log(sortedItems);
    } else if (event.target.value === "date") {
      let sortedItems = items.sort(compareByDate);
      console.log(sortedItems);
    }
  };

  const compareByName = (first, second) => {
    const nameFirst = first.name.toUpperCase();
    const nameSecond = second.name.toUpperCase();

    let comparison = 0;

    if (nameFirst > nameSecond) {
      comparison = 1;
    } else if (nameFirst < nameSecond) {
      comparison = -1;
    }
    return comparison;
  };

  const compareByQuantity = (first, second) => {
    const quantityFirst = parseInt(first.quantity);
    const quantitySecond = parseInt(second.quantity);

    let comparison = 0;

    if (quantityFirst < quantitySecond) {
      comparison = 1;
    } else if (quantityFirst < quantitySecond) {
      comparison = -1;
    }
    return comparison;
  };

  const compareByDate = (first, second) => {
    const dateFirst = first.createdAt;
    const dateSecond = second.createdAt;

    let comparison = 0;

    if (dateFirst < dateSecond) {
      comparison = 1;
    } else if (dateFirst < dateSecond) {
      comparison = -1;
    }
    return comparison;
  };

  return (
    <div>
      <NameQuantForm items={items} saveItem={saveItem} />
      <SearchBar items={items} />
      <Filter filterItems={filterItems} />
      <DisplayItems items={items} deleteItem={deleteItem} />
zz    </div>
=======
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
>>>>>>> 0fe8c84813a85d0e2d10f44f6fdf6eb5ace2091e
  );
}

export default App;
