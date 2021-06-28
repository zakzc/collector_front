import React from "react";
// ui
import Button from "react-bootstrap/Button";
// ico
import { Pencil } from "react-bootstrap-icons";

const PencilButton = ({ handleClick, media }) => {
  return (
    <Button
      variant="outline-primary"
      className="m-1"
      style={{ width: "80px", height: "60px", border: "none" }}
      onClick={() => {
        handleClick("update", media._id);
      }}
    >
      <Pencil size="lg" />
    </Button>
  );
};
export default PencilButton;
