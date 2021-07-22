import React from "react";
// ui
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LoadingSpinner = () => {
  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          <div className="lds-hourglass"></div>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};
export default LoadingSpinner;
