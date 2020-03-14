import React, { useState, useEffect, useCallback } from "react";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import "../icon.css";
const FilterComponent = React.memo(props => {
  // console.log("4_Filter Component");
  const { items, saveFilteredItems } = props;

  const [selectedFilter, setSelectedFilter] = useState("date");
  const [revFilter, setRevFilter] = useState(false);

  const compareByName = useCallback(
    (first, second) => {
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
    },
    [revFilter]
  );
  const compareByQuantity = useCallback(
    (first, second) => {
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
    },
    [revFilter]
  );

<<<<<<< HEAD
  const reverseFilter = event => {
    event.preventDefault();
    setRevFilter(!revFilter);
  };
  useEffect(() => {
    // eslint-disable-next-linefilterItems(selectedFilter);
  }, [revFilter]);
=======
  const compareByTimestamp = useCallback(
    (first, second) => {
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
    },
    [revFilter]
  );
>>>>>>> 0fe8c84813a85d0e2d10f44f6fdf6eb5ace2091e

  const filterItems = useCallback(
    filterBy => {
      // console.log("4.3_Filtering Items");

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
    },
    [
      compareByName,
      compareByQuantity,
      compareByTimestamp,
      items,
      saveFilteredItems
    ]
  );

  const reverseFilter = useCallback(
    event => {
      // console.log("4.4_Reverse Filter");
      event.preventDefault();
      setRevFilter(!revFilter);
    },
    [revFilter]
  );

  useEffect(() => {
    // console.log("4.5_Sending Selected Filter Type");
    filterItems(selectedFilter);
    // eslint-disable-next-line
  }, [selectedFilter, revFilter]);

  return (
    <form style={{ display: "flex" }}>
      <InputLabel style={{ marginTop: "8px" }}>Filter &nbsp;</InputLabel>
      <Select
        disabled={items.length > 0 ? false : true}
        autoWidth={true}
        value={selectedFilter}
        style={{ height: "30px", width: "150px" }}
        onChange={event => {
          // filterItems(event.target.value);
          setSelectedFilter(event.target.value);
        }}
      >
        <MenuItem value="date">By Date</MenuItem>
        <MenuItem value="name">By Name</MenuItem>
        <MenuItem value="quantity">By Quantity</MenuItem>
      </Select>
      <ImportExportIcon
        id="icon"
        style={{ marginTop: "4" }}
        onClick={event => {
          reverseFilter(event);
        }}
      />
    </form>
  );
});
export default FilterComponent;
