import React from "react";
// ui
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LoadingSpinner = () => {
  return (
    <>
      <Row xs={5} md={5} lg={5}></Row>
      <Row xs={2} md={2} lg={2}>
        <Col></Col>
        <Col>
          <div className="lds-hourglass"></div>
        </Col>
        <Col></Col>
      </Row>
      <Row xs={5} md={5} lg={5}></Row>
    </>
  );
};
export default LoadingSpinner;
