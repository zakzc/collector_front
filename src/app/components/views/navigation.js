import React from "react";
import { useSelector } from "react-redux";
// comps
import AppLogo from "../mediaCollection/components/appLogo";
// ui
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
// import NavDropdown from "react-bootstrap/NavDropdown";
// assets
// import { ReactComponent as AppLogo } from "../../assets/turntable.svg";

const Navigation = () => {
  const currentView = useSelector((state) => state.context[0].currentView);
  console.log("Currently: ", currentView);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <AppLogo extraStyle={{}} />
        <Nav className="mr-auto">
          <Button variant="dark">Analog Audio </Button>
          <Button variant="dark">Digital Audio</Button>
          <Button variant="dark">Books and Print</Button>
          <Button variant="dark">Multimedia, DVDs, Bluray</Button>
          <Button variant="dark"> Graphic, Magazines, Graphic Novels</Button>
          <Button variant="dark">Video Games, cartridges, CDs</Button>
        </Nav>
      </Navbar>
      <br />
    </>
  );
};

export default Navigation;
