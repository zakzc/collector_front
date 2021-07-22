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
          <h4 className="text-light">Delete</h4>
        ) : null}
        {currentMediaCRUD === "update" ? (
          <h4 className="text-light">Update</h4>
        ) : null}
        {currentMediaCRUD === "enter" ? (
          <h4 className="text-light">Update</h4>
        ) : null}
      </div>
    </Navbar>
  );
};

export default ViewCRUD;
