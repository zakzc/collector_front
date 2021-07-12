import React from "react";
import { useDispatch } from "react-redux";
// store
import { setCurrentMediaCRUD } from "../../../../store/mediaContext";
import { setCurrentSelectedItem } from "../../../../store/mediaContext";
// ui
import Button from "react-bootstrap/Button";
// ico
import { Pencil } from "react-bootstrap-icons";

const PencilButton = ({ id }) => {
  // * data
  const dispatch = useDispatch();
  const handleUpdateClick = () => {
    dispatch(setCurrentSelectedItem(id));
    dispatch(setCurrentMediaCRUD("update"));
  };

  /// * view
  return (
    <Button
      variant="outline-secondary"
      className="m-1"
      style={{ width: "80px", height: "60px", border: "none" }}
      onClick={() => handleUpdateClick()}
    >
      <Pencil size="lg" />
    </Button>
  );
};

export default PencilButton;
