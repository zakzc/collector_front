import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const Header = ({ title }) => {
  return (
    <Jumbotron
      style={{
        backgroundImage: "linear-gradient(to right, CadetBlue , AliceBlue)",
      }}
    >
      <h1 className="text-center text-black-50">{title}</h1>
    </Jumbotron>
  );
};
export default Header;
