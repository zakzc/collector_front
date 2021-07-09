import React from "react";
import { useDispatch } from "react-redux";
// store
import { setCurrentMediaCRUD } from "../../../../store/mediaContext";
// ui
import Button from "react-bootstrap/Button";
// ico
import { PlusCircle } from "react-bootstrap-icons";

const AddButton = ({ setCurrentOperation }) => {
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <Button
        variant="outline-info"
        className="mb-3"
        style={{ width: "80px", height: "60px", border: "none" }}
        onClick={() => dispatch(setCurrentMediaCRUD("create"))}
      >
        <PlusCircle size="lg" />
      </Button>
    </div>
  );
};
export default AddButton;
