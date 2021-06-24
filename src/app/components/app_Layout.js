import React from "react";
// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/// comps
import DashBar from "./views/dashBar";
import Routes from "./app_Routes";

const Layout = () => {
  return (
    <Container fluid="*" className="h-100 mt-0 mb-0 p-0">
      <Row className="h-100 m-0 p-0">
        <Col
          className="w-100 h-100 m-0 p-0"
          xs={12}
          sm={4}
          md={3}
          lg={2}
          xl={2}
        >
          <DashBar />
        </Col>
        <Col
          className="w-100% h-100% m-0 p-0"
          xs={12}
          sm={8}
          md={9}
          lg={10}
          xl={10}
        >
          <Routes />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
