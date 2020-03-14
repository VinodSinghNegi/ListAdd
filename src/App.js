import React, { useState } from "react";
import NameQuantForm from "./components/NameQuantForm";
import DisplayItems from "./components/DisplayItems";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
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
  );
}

export default App;
