import React from "react";

function Filter(props) {
  console.log("4_Filter Component");

  return (
    <div>
      <br />
      <form>
        <label htmlFor="items">Filter By: </label>
        <select onChange={event => props.filterItems(event)}>
          <option value="name">Name</option>
          <option value="quantity">Quantity</option>
          <option value="date">Date</option>
        </select>
      </form>
    </div>
  );
}
export default Filter;
