import React from "react";
import { useSelector } from "react-redux";
// ui
import Navbar from "react-bootstrap/Navbar";
// utils
import UseResetUserFeedback from "../../hooks/useResetUserFeedback";

const CRUD = () => {
  // * data
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
  );
  // resets feedback to user
  UseResetUserFeedback();

  // * view
  return (
    <Navbar bg="dark" variant="dark">
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
  );
};

export default CRUD;
