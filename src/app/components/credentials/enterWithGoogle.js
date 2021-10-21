import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
// credentials google
import { GoogleLogin } from "react-google-login";
// ui
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// store
import { authAccess } from "../../../store/users";
import { setDataWasSent } from "../../../store/appContext";

const EnterWithGoogle = () => {
  const [googleError, setGoogleError] = useState(false);
  const dispatch = useDispatch();

  const responseSuccessGoogle = async (response) => {
    console.log("profile object is:", response.profileObj);
    let dataToSend = {
      data: {
        name: response.profileObj.name,
        email: response.profileObj.email,
        id: response.profileObj.googleId,
      },
    };
    console.log("Data to send is :", dataToSend);
    if (dataToSend.data.email !== undefined) {
      dispatch(authAccess(dataToSend));
      dispatch(setDataWasSent(true));
    }
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

  // * View
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Row>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={responseSuccessGoogle}
              onFailure={responseFailGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </Row>
          <Row>
            <br />
            {googleError === true ? (
              <div>
                <h4>An error occurred on your google log in</h4>
                <p> Check to see if your connection is working</p>
              </div>
            ) : null}
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default EnterWithGoogle;
