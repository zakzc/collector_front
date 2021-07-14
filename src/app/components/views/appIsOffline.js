import React from "react";
// ui
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

const AppIsOffline = () => {
  return (
    <>
      <Container fluid className="m-5 p-2">
        <h2 className="text-info">Your application is offline</h2>
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
          example) and if you are, contact the site administrator.
        </p>
      </Container>
    </>
  );
};
export default AppIsOffline;
