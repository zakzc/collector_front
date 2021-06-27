import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// ui Elements
import AppLogo from "../uiElements/appLogo";
// ui
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// store
import { setCurrentMediaView } from "../../../store/context";

const Navigation = () => {
  // * data
  const currentMediaView = useSelector(
    (state) => state.context[0].currentMediaView
  );
  const [selected, setSelected] = useState(currentMediaView);
  const dispatch = useDispatch();
  console.log("Currently: ", currentMediaView);
  ///
  const setNewMediaView = (e) => {
    console.log("Val", e.target.value);
    setSelected(e.target.value);
    dispatch(setCurrentMediaView(e.target.value));
  };

  const categories = [
    "Analog Audio",
    "Digital Audio",
    "Book",
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
              key={c}
              className="m-1"
              variant={selected === c ? "light" : "dark"}
              value={c}
              onClick={setNewMediaView}
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
