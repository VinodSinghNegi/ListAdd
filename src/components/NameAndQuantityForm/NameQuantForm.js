import React, { useState, useRef, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";

function NameQuantForm(props) {
  console.log("2_Name & Quantity Component");
  const { saveItem } = props;
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();

  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
    console.log("2.1_Focus Reset");
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <form onSubmit={event => saveItem(event, name, quantity)}>
        <div>
          <TextField
            type="text"
            name="name"
            label="Item Name"
            placeholder="Enter Item Name"
            variant="outlined"
            size="small"
            autoComplete="true"
            inputRef={nameRef}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            type="number"
            name="quantity"
            label="Quantity"
            placeholder="Enter Quantity"
            variant="outlined"
            size="small"
            onChange={event => {
              setQuantity(event.target.value);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "center"
          }}
        >
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NameQuantForm;
