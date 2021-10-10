import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// ui
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
// store
import { setCurrentMediaView } from "../../../store/appContext";

const MediaMenu = () => {
  // * data
  const currentMediaView = useSelector(
    (state) => state.appContext.currentMediaView
  );
  const [selected, setSelected] = useState(currentMediaView);
  const dispatch = useDispatch();
  ///
  const setNewMediaView = (e) => {
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
      <Navbar bg="dark" variant="dark" className="m-0 p-0">
        <div>
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
    </>
  );
};

export default MediaMenu;
