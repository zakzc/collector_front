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
  const [googleMe, setGoogleMe] = useState([{ data: [{}] }]);
  const [googleError, setGoogleError] = useState(false);
  const dispatch = useDispatch();
  //let history = useHistory();

  const responseSuccessGoogle = async (response) => {
    console.log("Log in success:", response.profileObj);
    setGoogleMe({
      data: response.profileObj,
    });
    console.log("google gets me: ", response.profileObj.email);
    if (response.profileObj.email !== undefined) {
      console.log("Received from google: ", googleMe);
      dispatch(authAccess(googleMe));
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

  // console.log("value:", process.env.REACT_APP_GOOGLE_CLIENT_ID);

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
