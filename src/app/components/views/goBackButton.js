import React from "react";
// ui
import Button from "react-bootstrap/Button";
// ico
import { SkipBackward } from "react-bootstrap-icons";

const GoBackButton = ({ setCurrentOperation }) => {
  return (
    <Button
      variant="info"
      size="lg"
      className="mb-3"
      active
      onClick={() => setCurrentOperation("list")}
    >
      <SkipBackward />
    </Button>
  );
};
export default GoBackButton;
