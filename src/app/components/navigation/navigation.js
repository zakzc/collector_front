import React from "react";
import { useSelector } from "react-redux";
// comps
import CRUD from "./navigationCRUD";
import MediaMenu from "./navigationMediaMenu";
import UserArea from "./navigationUserArea";
// ui Elements
import AppLogo from "../../assets/appLogo";
// ui
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Navigation = () => {
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
  );

  // * view
  return (
    <Container fluid className="bg-dark text-white">
      <Row>
        <Col xs={2} md={1} lg={1}>
          <AppLogo bg="dark" variant="dark" extraStyle={{}} />
        </Col>
        <Col xs={10} md={9} lg={8} className="m-0 p-0">
          {currentMediaCRUD === "read" ? <MediaMenu /> : <CRUD />}
        </Col>
        <Col xs={12} md={2} lg={3}>
          <UserArea />
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
