import React from "react";
// ui comps
import LogOutButton from "../views/buttons/logOutButton";
// ui
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// hook
import useCheckForUser from "../../hooks/useCheckForUser";
// store
import OutWithGoogle from "../credentials/outWithGoogle";

const UserArea = () => {
  // * data
  const currentUser = localStorage.getItem("name");
  let userIsLoggedIn = useCheckForUser();

  const CurrentUserName = () => (
    <span className="mt-1">
      Hello <span className="text-info">{currentUser}</span>
    </span>
  );

  const UserAreaNavigationView = () => {
    return (
      <Container fluid className="bg-dark text-white">
        <Row>
          <Col xs={6} md={6} lg={6}>
            <CurrentUserName />
          </Col>
          <Col xs={2} md={2} lg={2}>
            <LogOutButton />
          </Col>
          <Col xs={4} md={4} lg={4}>
            <OutWithGoogle />
          </Col>
        </Row>
      </Container>
    );
  };

  // * view
  return <> {userIsLoggedIn ? <UserAreaNavigationView /> : null}</>;
};

export default UserArea;
