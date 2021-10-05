import React from "react";
// assets
import { Facebook } from "react-bootstrap-icons";
import { Google } from "react-bootstrap-icons";
// ui
//import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const EnterExternal = () => {
  const FaceLog = () => (
    <Button
      variant="light"
      style={{
        backgroundColor: "CadetBlue",
        border: "none",
      }}
    >
      <Facebook />
    </Button>
  );
  const GooLog = () => (
    <Button
      variant="light"
      style={{
        backgroundColor: "CadetBlue",
        border: "none",
      }}
    >
      <Google />
    </Button>
  );
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Col
            style={{
              backgroundColor: "CadetBlue",
            }}
            className="text-white rounded"
          >
            <h3>Log in with:</h3>
            <Row>
              <Col></Col>
              <Col>
                <FaceLog />
              </Col>
              <Col>
                <GooLog />
              </Col>
            </Row>
          </Col>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default EnterExternal;
