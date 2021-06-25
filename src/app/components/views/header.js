import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const Header = ({ title, subTitle }) => {
  return (
    <Jumbotron>
      <h1 className="text-center">{title}</h1>
      <h3>{subTitle}</h3>
    </Jumbotron>
  );
};
export default Header;
