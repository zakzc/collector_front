import React from "react";
import { useDispatch } from "react-redux";
// store
import { setCurrentMediaCRUD } from "../../../../store/appContext";
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
        style={{ width: "80px", border: "none" }}
        onClick={() => dispatch(setCurrentMediaCRUD("create"))}
      >
        <PlusCircle size="50px" />
      </Button>
    </div>
  );
};
export default AddButton;
