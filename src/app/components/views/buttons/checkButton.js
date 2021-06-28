import React from "react";
// ui
import Button from "react-bootstrap/Button";
// ico
import { CheckCircle } from "react-bootstrap-icons";

const CheckButton = () => {
  return (
    <div className="text-center">
      <Button
        variant="outline-success"
        className="mb-3"
        style={{ width: "80px", height: "60px", border: "none" }}
        type="submit"
      >
        <CheckCircle size="lg" />
      </Button>
    </div>
  );
};
export default CheckButton;
