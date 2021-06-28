import React from "react";
// ui
import Button from "react-bootstrap/Button";
// ico
import { SkipBackward } from "react-bootstrap-icons";

const GoBackButton = ({ setCurrentOperation }) => {
  return (
    <div className="text-center">
      <Button
        variant="outline-info"
        style={{ width: "80px", height: "60px", border: "none" }}
        onClick={() => setCurrentOperation("list")}
      >
        <SkipBackward size="lg" />
      </Button>
    </div>
  );
};
export default GoBackButton;
