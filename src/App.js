import React, { useState } from "react";
import NameQuantForm from "./components/NameQuantForm";
import DisplayItems from "./components/DisplayItems";
import SearchBar from "./components/SearchBar";
function App() {
  const [items, setItems] = useState([]);

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

  return (
    <div>
      <NameQuantForm items={items} saveItem={saveItem} />
      <SearchBar items={items} />
      <DisplayItems items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
