import React, { useState } from "react";
// ui
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const OrderButtons = ({ setOrderCriteria }) => {
  const listOfOptions = ["author", "date", "quantity", "price", "title"];
  const handleListOrder = (option) => {
    setOrderCriteria(option);
  };

  return (
    <>
      <span>Order this list: </span>
      <br />
      <ButtonGroup aria-label="Basic example">
        <br />
        {listOfOptions.map((option) => (
          <Button
            key={option}
            variant="outline-info"
            className="m-2"
            onClick={() => handleListOrder({ option })}
          >
            by {option}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};
export default OrderButtons;
