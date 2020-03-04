import React, { useState } from "react";
import NameQuantForm from "./components/NameAndQuantityForm/NameQuantForm";
import DisplayItems from "./components/DisplayItems/DisplayItems";
import SearchBar from "./components/SearchBar/SearchBar";
import Filter from "./components/Filter/Filter";
function App() {
  const [items, setItems] = useState([]);
  const [duplicateItem, setDuplicateItem] = useState([]);

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
  };

  const saveFilteredItems = sortedItems => {
    console.log("1.3_Saving Filtered Items");
    setItems(sortedItems);
  };

  const exchangeShowValue = searchResult => {
    setDuplicateItem(searchResult);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NameQuantForm saveItem={saveItem} />
      {/* {items.length > 1 ?  */}
      <div style={{ display: "flex" }}>
        <SearchBar items={items} exchangeShowValue={exchangeShowValue} />
        {/* : null} */}
        {/* {items.length > 1 ? ( */}
        <Filter items={items} saveFilteredItems={saveFilteredItems} />
        {/* ) : null} */}
      </div>
      {duplicateItem.length > 0 ? (
        <DisplayItems itemList={duplicateItem} deleteItem={deleteItem} />
      ) : (
        <DisplayItems itemList={items} deleteItem={deleteItem} />
      )}
    </div>
  );
}

export default App;
