import React from "react";
// ui
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// ui icons
import Error from "../../assets/error";

const ErrorReport = ({ errorMessage }) => {
  return (
    <>
      <Container fluid className="m-5 p-2">
        <Row>
          <Col></Col>
          <Col>
            <h2 className="text-info">An error occurred</h2>
            <br />
            <Error />
            <br />
            {errorMessage ? (
              <p className="text-info">Error message: {errorMessage}</p>
            ) : null}
            <br />
            <p>Reload page. For most cases, this should fix it.</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
export default ErrorReport;
