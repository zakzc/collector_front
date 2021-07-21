import React from "react";
// ui comps
import LogOutButton from "../views/buttons/logOutButton";
// ui
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// hook
import useCheckForUser from "../../hooks/useCheckForUser";

const UserArea = () => {
  // * data
  const currentUser = localStorage.getItem("name");
  let userIsLoggedIn = useCheckForUser();

  const CurrentUserName = () => (
    <span className="mt-1">
      Hello <span className="text-info">{currentUser}</span>
    </span>
  );

  // * view
  return (
    <Container fluid className="bg-dark text-white">
      <Row>
        <Col xs={8} md={8} lg={8}>
          {userIsLoggedIn ? <CurrentUserName /> : null}
        </Col>
        <Col xs={4} md={4} lg={4}>
          {userIsLoggedIn ? <LogOutButton /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default UserArea;
