import React from "react";
// credentials google
import { GoogleLogin } from "react-google-login";
// ui
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";

const EnterExternal = () => {
  // * Data
  const responseSuccessGoogle = (response) => {
    console.log("goo told me: ", response.error, response.details, response);
  };
  const responseFailGoogle = (response) => {
    console.log("Failed: ", response.error, response.details, response);
  };

  // * View
  return (
    <Container>
      <Row>
        <Col></Col>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseFailGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <Col></Col>
      </Row>
    </Container>
  );
};
export default EnterExternal;
