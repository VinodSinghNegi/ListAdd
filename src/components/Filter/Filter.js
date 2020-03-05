import React, { useState, useEffect } from "react";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import ImportExportIcon from "@material-ui/icons/ImportExport";

function FilterComponent(props) {
  console.log("4_Filter Component");
  const { items, saveFilteredItems } = props;

  const [selectedFilter, setSelectedFilter] = useState("date");
  const [revFilter, setRevFilter] = useState(false);

  const filterItems = filterBy => {
    console.log("4.3_Filtering Items");

    let sortedItems = [...items];

    if (filterBy === "name") {
      sortedItems.sort(compareByName);
      saveFilteredItems(sortedItems);
    } else if (filterBy === "quantity") {
      sortedItems.sort(compareByQuantity);
      saveFilteredItems(sortedItems);
    } else if (filterBy === "date") {
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
    // eslint-disable-next-line
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
    <form style={{ display: "flex" }}>
      <InputLabel style={{ marginTop: "8px" }}>Filter &nbsp;</InputLabel>
      <Select
        autoWidth={true}
        value={selectedFilter}
        style={{ height: "30px", width: "150px" }}
        onChange={event => {
          filterItems(event.target.value);
          setSelectedFilter(event.target.value);
        }}
      >
        <MenuItem value="date">By Date</MenuItem>
        <MenuItem value="name">By Name</MenuItem>
        <MenuItem value="quantity">By Quantity</MenuItem>
      </Select>
      <ImportExportIcon
        style={{ marginTop: "4" }}
        onClick={event => {
          reverseFilter(event);
        }}
        variant="contained"
        size="small"
      >
        ^
      </ImportExportIcon>
    </form>
  );
}
export default FilterComponent;
