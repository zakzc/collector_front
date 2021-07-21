import React from "react";
// ui
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
// ui icons
import BrokenLink from "../../assets/brokenLink";

const AppIsOffline = () => {
  return (
    <>
      <Container fluid className="m-5 p-2">
        <Row>
          <Col></Col>
          <Col>
            <h2 className="text-info">Your application is offline</h2>
            <br />
            <BrokenLink />
            <br />
            <br />
            <p>This might happen because:</p>
            <ListGroup as="ul" variant="flush" style={{ maxWidth: "30%" }}>
              <ListGroup.Item as="li" className="text-info">
                You are offline
              </ListGroup.Item>
              <ListGroup.Item as="li" className="text-info">
                The backend for this application is offline
              </ListGroup.Item>
            </ListGroup>
            <br />
            <p>
              Check if you are connected to the internet (reload the page, for
              example).
            </p>
            <p>
              If everything is alright and the problem persists, contact the
              site administrator.
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
export default AppIsOffline;
