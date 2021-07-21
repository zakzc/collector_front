import React from "react";
import { useSelector } from "react-redux";
// comps
import CRUD from "./navigation_CRUD";
import MediaMenu from "./navigation_MediaMenu";
import UserArea from "./navigation_UserArea";
// ui Elements
import AppLogo from "../assets/appLogo";
// ui
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// store

const Navigation = () => {
  // * data
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
  );
  let userIsLoggedIn = useSelector((state) => state.users.userIsLoggedIn);

  const NavBarUserOffline = () => (
    <h4 className="text-light">Enter Application</h4>
  );

  const NavBarUserOnline = () => (
    <> {currentMediaCRUD === "read" ? <MediaMenu /> : <CRUD />}</>
  );

  // * view
  return (
    <Container fluid className="bg-dark text-white">
      <Row>
        <Col xs={2} md={1} lg={1}>
          <AppLogo bg="dark" variant="dark" extraStyle={{}} />
        </Col>
        <Col xs={10} md={9} lg={8} className="m-0 p-0">
          {userIsLoggedIn === false ? (
            <NavBarUserOffline />
          ) : (
            <NavBarUserOnline />
          )}
        </Col>
        <Col xs={12} md={2} lg={3}>
          <UserArea />
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
