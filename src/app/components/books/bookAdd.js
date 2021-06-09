import React from "react";
// ui
import Button from "react-bootstrap/Button";

const BookAdd = ({ setCurrentView }) => {
  return (
    <>
      <p>Book Add</p>
      <Button
        variant="info"
        size="lg"
        className="mb-3"
        block
        onClick={() => setCurrentView("list")}
      >
        <h1 className="p-1">Back to overview</h1>
      </Button>
    </>
  );
};
export default BookAdd;
