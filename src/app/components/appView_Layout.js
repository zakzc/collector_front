import React from "react";
// import { useSelector } from "react-redux";
// ui
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
/// comps
import Navigation from "./views/navigation";
import Routes from "./appView_Layout_Routes";

const Layout = () => {
  return (
    <Container fluid="*" className="w-100 mt-0 mb-0 p-0">
      <Col className="h-100 w-100 m-0 p-0">
        <Navigation />
      </Col>
      <Col className="h-100 w-100 m-0 p-0">
        <Routes />
      </Col>
    </Container>
  );
};

export default Layout;
