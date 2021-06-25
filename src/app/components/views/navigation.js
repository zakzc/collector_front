import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  // * data
  const currentView = useSelector((state) => state.context[0].currentView);
  const [selected, setSelected] = useState(currentView);
  console.log("Currently: ", currentView);
  ///
  const setNewView = (e) => {
    console.log("Val", e.target.value);
    setSelected(e.target.value);
  };

  const categories = [
    "Analog Audio",
    "Digital Audio",
    "Books",
    "Video",
    "Graphic",
    "Game",
  ];

  // * view
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <AppLogo extraStyle={{}} />
        <div className="ml-5">
          {categories.map((c) => (
            <Button
              className="m-1"
              variant={selected === c ? "light" : "dark"}
              value={c}
              onClick={setNewView}
            >
              {c}
            </Button>
          ))}
        </div>
      </Navbar>
      <br />
    </>
  );
};

export default Navigation;
