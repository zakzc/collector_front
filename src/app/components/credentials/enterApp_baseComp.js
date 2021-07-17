import React, { useState } from "react";
// comps
import EnterForm from "./enterApp_EnterForm";
// ui
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const EnterApp = () => {
  // ? true = log in, false = register
  const [mode, setMode] = useState(false);

  const enteringOptions = [
    { name: "Enter", value: true },
    { name: "Register", value: false },
  ];

  const handleEnterOptions = (e) => {
    console.log("but: ", mode);
    setMode(!mode);
  };

  // * view
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <br />
          <ButtonGroup>
            {enteringOptions.map((option, idx) => (
              <Button
                key={idx}
                id={option}
                variant={mode === option.value ? "outline-info" : "info"}
                name="select way in"
                // value={radio.value}
                checked={mode === option.value}
                onClick={(e) => setMode(!mode)}
              >
                {option.name}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <EnterForm mode={mode} />
        <Col></Col>
      </Row>
    </Container>
  );
};
export default EnterApp;
