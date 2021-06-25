import React, { useState } from "react";
import { useSelector } from "react-redux";
// ui Elements
import AppLogo from "../uiElements/appLogo";
// ui
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
// import NavDropdown from "react-bootstrap/NavDropdown";
// assets
// import { ReactComponent as AppLogo } from "../../assets/turntable.svg";

const Navigation = () => {
  const [selected, setSelected] = useState("Analog");
  const currentView = useSelector((state) => state.context[0].currentView);
  console.log("Currently: ", currentView);
  const setNewView = (e) => {
    console.log("Val", e.target.value);
    setSelected(e.target.value);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <AppLogo extraStyle={{}} />
        <div className="ml-5">
          <Nav className="mr-auto">
            <Button
              className="m-1"
              variant={selected === "Analog" ? "light" : "dark"}
              value="Analog"
              onClick={setNewView}
            >
              Analog Audio
            </Button>
            <Button
              className="m-1"
              variant={selected === "Digital" ? "light" : "dark"}
              value="Digital"
              onClick={setNewView}
            >
              Digital Audio
            </Button>
            <Button
              className="m-1"
              variant={selected === "Books" ? "light" : "dark"}
              value="Books"
              onClick={setNewView}
            >
              Books and Print
            </Button>
            <Button
              className="m-1"
              variant={selected === "Video" ? "light" : "dark"}
              value="Video"
              onClick={setNewView}
            >
              Multimedia, DVDs, Bluray
            </Button>
            <Button
              className="m-1"
              variant={selected === "Graphic" ? "light" : "dark"}
              value="Graphic"
              onClick={setNewView}
            >
              Graphic, Magazines, Graphic Novels
            </Button>
            <Button
              className="m-1"
              variant={selected === "Games" ? "light" : "dark"}
              value="Games"
              onClick={setNewView}
            >
              Video Games, cartridges, CDs
            </Button>
          </Nav>
        </div>
      </Navbar>
      <br />
    </>
  );
};

export default Navigation;
