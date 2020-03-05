import React, { useState, useRef, useEffect, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";
import ProgressBar from "../Loader/loader";
const NameQuantForm = React.memo(props => {
  // console.log("2_Name & Quantity Component");
  const { saveItem } = props;
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loader, setLoader] = useState(false);

  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
    // console.log("2.1_Focus Reset");
  }, [name]);

  const sendNewItem = useCallback(
    event => {
      // console.log("2.2_Sending New Item");
      event.preventDefault();
      setTimeout(() => {
        saveItem(event, name, quantity);
        setLoader(false);
      }, 500);
      setLoader(true);
      setQuantity("");
      setName("");
    },
    [name, quantity, saveItem]
  );

  return (
    <div style={{ marginTop: "20px" }}>
      <form
        onSubmit={event => {
          sendNewItem(event);
        }}
        style={{ marginTop: "20px" }}
      >
        <div>
          <TextField
            type="text"
            name="name"
            label="Item Name"
            placeholder="Enter Item Name"
            variant="outlined"
            size="small"
            value={name}
            required
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
            value={quantity}
            required
            onChange={event => {
              setQuantity(event.target.value);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "center",
            marginBottom: "20px"
          }}
        >
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </div>
      </form>
      {loader ? (
        <div>
          <ProgressBar />
        </div>
      ) : (
        <div style={{ opacity: "0" }}>
          <ProgressBar />
        </div>
      )}
    </div>
  );
});

export default NameQuantForm;
