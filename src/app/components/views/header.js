import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const Header = ({ title }) => {
  return (
    <Jumbotron>
      <h1 className="text-center">{title}</h1>
    </Jumbotron>
  );
};
export default Header;
