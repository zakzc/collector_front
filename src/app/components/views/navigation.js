import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// ui Elements
import AppLogo from "../assets/appLogo";
// ui
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// store
import { setCurrentMediaView } from "../../../store/mediaContext";

const Navigation = () => {
  // * data
  const currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
  );
  const currentMediaCRUD = useSelector(
    (state) => state.mediaContext[0].currentMediaCRUD
  );
  const [selected, setSelected] = useState(currentMediaView);
  const dispatch = useDispatch();
  // console.log("Currently: ", currentMediaView);
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
      {currentMediaCRUD === "read" ? (
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
        </>
      ) : (
        <Navbar bg="dark" variant="dark">
          <AppLogo extraStyle={{}} />
          <div className="ml-5">
            {currentMediaCRUD === "create" ? (
              <h4 className="text-light">Add</h4>
            ) : null}
            {currentMediaCRUD === "delete" ? (
              <h4 className="text-light">Delete</h4>
            ) : null}
            {currentMediaCRUD === "update" ? (
              <h4 className="text-light">Update</h4>
            ) : null}
          </div>
        </Navbar>
      )}
    </>
  );
};

export default Navigation;
