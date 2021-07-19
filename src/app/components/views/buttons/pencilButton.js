import React from "react";
import { useDispatch } from "react-redux";
// store
import { setCurrentMediaCRUD } from "../../../../store/appContext";
import { setCurrentSelectedItem } from "../../../../store/appContext";
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
      style={{ width: "50px", height: "30px", border: "none" }}
      onClick={() => handleUpdateClick()}
    >
      <Pencil size="30px" />
    </Button>
  );
};

export default PencilButton;
