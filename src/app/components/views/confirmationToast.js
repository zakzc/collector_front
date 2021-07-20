import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
// ui
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
// ui - icon
import { CheckCircle } from "react-bootstrap-icons";
import { XCircle } from "react-bootstrap-icons";

const ConfirmationToast = ({ success, message }) => {
  // * data
  const [show, setShow] = useState(false);

  // * view
  return (
    <>
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header
              className={
                success
                  ? "bg-info shadow-1-strong"
                  : "bg-danger shadow-1-strong"
              }
            >
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto text-white">
                {success ? (
                  <CheckCircle className="mr-2" />
                ) : (
                  <XCircle className="mr-2" />
                )}
                {message}
              </strong>
            </Toast.Header>
            <Toast.Body>
              Some changes might require you to reload the page
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
      </Row>
      {/* <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header
          className={
            success ? "bg-info shadow-1-strong" : "bg-danger shadow-1-strong"
          }
        >
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto text-white">
            {success ? (
              <CheckCircle className="mr-2" />
            ) : (
              <XCircle className="mr-2" />
            )}
            {message}
          </strong>
        </Toast.Header>
      </Toast> */}
    </>
  );
};

export default ConfirmationToast;
