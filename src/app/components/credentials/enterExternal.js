import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// credentials google
import { GoogleLogin, GoogleLogout } from "react-google-login";
// ui
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// store
import { authAccess } from "../../../store/users";
import { setDataWasSent } from "../../../store/appContext";

const EnterExternal = () => {
  const [showLogInButton, setShowLogInButton] = useState(true);
  const [googleMe, setGoogleMe] = useState([
    { gId: "", gEmail: "", gName: "" },
  ]);
  const [googleError, setGoogleError] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  const responseSuccessGoogle = (response) => {
    console.log("Log in success:", response.profileObj);
    setGoogleMe({
      gId: response.profileObj.googleId,
      gEmail: response.profileObj.name,
      gName: response.profileObj.email,
    });
    setShowLogInButton(false);
    console.log("Received from google: ", googleMe);
    dispatch(authAccess(googleMe));
    dispatch(setDataWasSent(true));
    history.push("/");
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

  // console.log("value:", process.env.REACT_APP_GOOGLE_CLIENT_ID);

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
