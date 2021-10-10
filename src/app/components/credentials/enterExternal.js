import React, { useState } from "react";
// credentials google
import { GoogleLogin, GoogleLogout } from "react-google-login";
// ui
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//
//import axios from "axios";

const EnterExternal = () => {
  const [showLogInButton, setShowLogInButton] = useState(true);
  const [googleMe, setGoogleMe] = useState([
    { gId: " ", gEmail: "", gName: "" },
  ]);
  const [googleError, setGoogleError] = useState(false);
  // // * Data
  // const responseSuccessGoogle = async (response) => {
  //   console.log("Success: ", response);
  //   const res = await fetch("https://localhost:3001/collectors/googleAuth", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       token: response.tokenId,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   // do something with data
  //   console.log("response data was", data);
  // };

  //const responseSuccessGoogle = async (response) => {
  //console.log("Response is: ", response);
  // let authData;
  // authData = await axios({
  //   method: "post",
  //   url: process.env.REACT_APP_BACKEND_API_OAUTH,
  //   data: {
  //     userToken: response.tokenId,
  //   },
  // }).then(console.log("back:", authData));
  // console.log("back 1:", authData.data.userToken);
  //};

  const responseSuccessGoogle = (response) => {
    console.log("Log in success:", response, response.profileObj);
    setGoogleMe({
      gId: response.profileObj.googleId,
      gEmail: response.profileObj.name,
      gName: response.profileObj.email,
    });
    setShowLogInButton(false);
    console.log("REceived from google: ", googleMe);
  };

  const responseFailGoogle = (response) => {
    console.log(
      "LogIn Failed. Error:\n",
      response.error,
      "\nDetails:\n",
      response.details
    );
    setGoogleError(true);
  };

  const logOutSuccess = () => {
    console.log("Log out success");
    console.clear();
    setShowLogInButton(true);
  };

  console.log("value:", process.env.REACT_APP_GOOGLE_CLIENT_ID);

  // * View
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Row>
            {showLogInButton ? (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseFailGoogle}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            ) : (
              <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Sign Out"
                onLogoutSuccess={logOutSuccess}
              />
            )}
          </Row>
          <Row>
            <br />
            {googleError === true ? (
              <div>
                <h4>An error occurred on your google log in</h4>
              </div>
            ) : null}
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default EnterExternal;
