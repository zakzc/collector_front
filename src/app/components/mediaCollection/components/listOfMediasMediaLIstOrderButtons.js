import React from "react";
// ui
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const OrderButtons = ({ setOrderCriteria }) => {
  const listOfOptions = ["author", "date", "quantity", "price", "title"];
  const handleListOrder = (option) => {
    setOrderCriteria(option);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} md={1} lg={1}></Col>
        <Col xs={8} md={10} lg={10}>
          <span className="text-info">Order this list: </span>
          <br />
          <ButtonGroup aria-label="Basic example">
            <br />
            <Container fluid>
              {listOfOptions.map((option) => (
                <Button
                  key={option}
                  variant="info"
                  className="m-2"
                  onClick={() => handleListOrder({ option })}
                >
                  by {option}
                </Button>
              ))}
            </Container>
          </ButtonGroup>
        </Col>
        <Col xs={2} md={1} lg={1}></Col>
      </Row>
    </Container>
  );
};
export default OrderButtons;
