import React from "react";
import { useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";

const Header = ({ title }) => {
  // * data
  const currentMediaView = useSelector(
    (state) => state.appContext.currentMediaView
  );

  // * view
  return (
    <Jumbotron
      style={{
        backgroundImage: "linear-gradient(to right, CadetBlue , AliceBlue)",
      }}
    >
      <h1 className="text-center text-black-50">{currentMediaView}</h1>
    </Jumbotron>
  );
};
export default Header;
