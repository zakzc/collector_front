import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const Login = () => {
  return (
    <>
      <Jumbotron className="h-100 mt-0 mb-0">
        <div>
          <h1 className="header">Collector</h1>
          <hr />
          <h2 className="infoText">Keep track of your collectibles</h2>
        </div>
      </Jumbotron>
    </>
  );
};
export default Login;