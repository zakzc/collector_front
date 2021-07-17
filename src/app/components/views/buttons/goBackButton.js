import React from "react";
import { useDispatch } from "react-redux";
// store
import { setCurrentMediaCRUD } from "../../../../store/mediaContext";
// ui
import Button from "react-bootstrap/Button";
// ico
import { SkipBackward } from "react-bootstrap-icons";

const GoBackButton = ({ setCurrentOperation }) => {
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <Button
        variant="outline-info"
        style={{ width: "80px", height: "60px", border: "none" }}
        onClick={() => dispatch(setCurrentMediaCRUD("read"))}
      >
        <SkipBackward size="50px" />
      </Button>
    </div>
  );
};
export default GoBackButton;
