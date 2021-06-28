import React from "react";
// ui
import Button from "react-bootstrap/Button";
// ico
import { Trash } from "react-bootstrap-icons";

const TrashButton = ({ handleClick, media }) => {
  return (
    <Button
      variant="outline-danger"
      className="m-1"
      style={{ width: "80px", height: "60px", border: "none" }}
      onClick={() => {
        handleClick("delete", media._id);
      }}
    >
      <Trash size="lg" />
    </Button>
  );
};
export default TrashButton;
