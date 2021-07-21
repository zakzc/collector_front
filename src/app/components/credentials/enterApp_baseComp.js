import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// comps
import EnterForm from "./components/enterApp_EnterForm";
// ui
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// hooks
import useCheckForUser from "../../hooks/useCheckForUser";

const EnterApp = ({ setUserIsLoggedIn }) => {
  // * true = log in, false = register
  const [mode, setMode] = useState(false);
  let history = useHistory();
  const userIsConnected = useCheckForUser();

  const enteringOptions = [
    { name: "Enter", value: true },
    { name: "Register", value: false },
  ];

  const RedirectToMainPage = () => {
    if (userIsConnected === true) {
      history.push("/");
    }
  };

  const LogInForm = () => (
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

  // * view
  return <>{userIsConnected ? <RedirectToMainPage /> : <LogInForm />}</>;
};
export default EnterApp;
