import React, { useState, useRef, useEffect } from "react";

function NameQuantForm(props) {
  console.log("2_Name & Quantity Component");

  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();

  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
    console.log("2.1_Focus Reset");
  }, []);

  return (
    <form onSubmit={event => props.saveItem(event, name, quantity)}>
      <input
        ref={nameRef}
        type="text"
        placeholder="Enter Name"
        name="name"
        // value={name}
        onChange={event => {
          setName(event.target.value);
        }}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Enter Quantity"
        // value={quantity}
        onChange={event => {
          setQuantity(event.target.value);
        }}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

export default NameQuantForm;
