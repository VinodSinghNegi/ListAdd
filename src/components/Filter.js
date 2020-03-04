import React, { useState, useEffect } from "react";

function FilterComponent(props) {
  console.log("4_Filter Component");
  const { items, saveFilteredItems } = props;

  const [selectedFilter, setSelectedFilter] = useState("date");
  const [revFilter, setRevFilter] = useState(false);

  const filterItems = filterBy => {
    console.log("1.3_Filtering Items");

    setSelectedFilter(filterBy);

    if (filterBy === "name") {
      let sortedItems = [...items];
      sortedItems.sort(compareByName);
      saveFilteredItems(sortedItems);
    } else if (filterBy === "quantity") {
      let sortedItems = [...items];
      sortedItems.sort(compareByQuantity);
      saveFilteredItems(sortedItems);
    } else if (filterBy === "date") {
      let sortedItems = [...items];
      sortedItems.sort(compareByTimestamp);
      saveFilteredItems(sortedItems);
    }
  };

  const reverseFilter = event => {
    event.preventDefault();
    setRevFilter(!revFilter);
  };

  useEffect(() => {
    filterItems(selectedFilter);
  }, [revFilter]);

  const compareByName = (first, second) => {
    const nameFirst = first.name.toUpperCase();
    const nameSecond = second.name.toUpperCase();

    let comparison = 0;
    if (revFilter) {
      if (nameFirst > nameSecond) {
        comparison = -1;
      } else if (nameFirst < nameSecond) {
        comparison = 1;
      }
    } else {
      if (nameFirst > nameSecond) {
        comparison = 1;
      } else if (nameFirst < nameSecond) {
        comparison = -1;
      }
    }
    return comparison;
  };
  const compareByQuantity = (first, second) => {
    const quantityFirst = parseInt(first.quantity);
    const quantitySecond = parseInt(second.quantity);

    let comparison = 0;
    if (revFilter) {
      if (quantityFirst > quantitySecond) {
        comparison = 1;
      } else if (quantityFirst < quantitySecond) {
        comparison = -1;
      }
    } else {
      if (quantityFirst > quantitySecond) {
        comparison = -1;
      } else if (quantityFirst < quantitySecond) {
        comparison = 1;
      }
    }
    return comparison;
  };

  const compareByTimestamp = (first, second) => {
    const timeFirst = first.createdAt;
    const timeSecond = second.createdAt;

    let comparison = 0;
    if (revFilter) {
      if (timeFirst > timeSecond) {
        comparison = -1;
      } else if (timeFirst < timeSecond) {
        comparison = 1;
      }
    } else {
      if (timeFirst > timeSecond) {
        comparison = 1;
      } else if (timeFirst < timeSecond) {
        comparison = -1;
      }
    }
    return comparison;
  };
  return (
    <div>
      <br />
      <form>
        <label htmlFor="items">Filter By: </label>
        <select onChange={event => filterItems(event.target.value)}>
          <option value="date">Date</option>
          <option value="name">Name</option>
          <option value="quantity">Quantity</option>
        </select>
        <button
          disabled={selectedFilter ? false : true}
          onClick={event => {
            reverseFilter(event);
          }}
        >
          ^
        </button>
      </form>
    </div>
  );
}
export default FilterComponent;
