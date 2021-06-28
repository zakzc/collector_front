import React from "react";
// ui
import Button from "react-bootstrap/Button";
// ico
import { PlusCircle } from "react-bootstrap-icons";

const AddButton = ({ setCurrentOperation }) => {
  return (
    <div className="text-center">
      <Button
        variant="outline-info"
        className="mb-3"
        style={{ width: "80px", height: "60px", border: "none" }}
        onClick={() => setCurrentOperation("add")}
      >
        <PlusCircle size="lg" />
      </Button>
    </div>
  );
};
export default AddButton;
