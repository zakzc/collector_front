import React from "react";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// ico
import { SkipBackward } from "react-bootstrap-icons";

const GoBackButton = ({ setCurrentOperation }) => {
  return (
    <Row>
      <Col></Col>
      <Col>
        <Button
          variant="info"
          size="lg"
          className="mb-3"
          block
          onClick={() => setCurrentOperation("list")}
        >
          <SkipBackward />
        </Button>
      </Col>
      <Col></Col>
    </Row>
  );
};
export default GoBackButton;
