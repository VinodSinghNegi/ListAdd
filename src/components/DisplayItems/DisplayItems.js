import React from "react";

function DisplayItems(props) {
  console.log("5_Display List Component");

  return (
    <div>
      <br />
      <table>
        <tbody>
          <tr>
            <th>Name </th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
          {props.items.map((item, i) => (
            <tr key={i}>
              <td>{item.name} </td>
              <td>{item.quantity}</td>
              <td
                onClick={event => {
                  props.deleteItem(event, item.createdAt);
                }}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DisplayItems;
