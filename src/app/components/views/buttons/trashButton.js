import React from "react";
import { useDispatch } from "react-redux";
// store
import { setCurrentMediaCRUD } from "../../../../store/mediaContext";
import { setCurrentSelectedItem } from "../../../../store/mediaContext";
// ui
import Button from "react-bootstrap/Button";
// ico
import { Trash } from "react-bootstrap-icons";

const TrashButton = ({ id }) => {
  console.log("trash got:", id);
  // * data
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    console.log("Delete handler", id);
    dispatch(setCurrentSelectedItem(id));
    dispatch(setCurrentMediaCRUD("delete"));
  };

  // * view
  return (
    <Button
      variant="outline-danger"
      className="m-1"
      style={{ width: "80px", height: "60px", border: "none" }}
      onClick={() => handleDeleteClick()}
    >
      <Trash size="lg" />
    </Button>
  );
};
export default TrashButton;
