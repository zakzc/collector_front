import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// ui
import Navbar from "react-bootstrap/Navbar";

const ViewCRUD = () => {
  // * data
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
  );

  ///

  // * view
  return (
    <Navbar bg="dark" variant="dark">
      <div>
        {currentMediaCRUD === "create" ? (
          <span className="text-light">Add</span>
        ) : null}
        {currentMediaCRUD === "delete" ? (
          <span className="text-light">Delete</span>
        ) : null}
        {currentMediaCRUD === "update" ? (
          <span className="text-light">Update</span>
        ) : null}
        {currentMediaCRUD === "enter" ? (
          <span className="text-light">Update</span>
        ) : null}
      </div>
    </Navbar>
  );
};

export default ViewCRUD;
