import React from "react";
import { useDispatch } from "react-redux";
// store
import { logUserOut } from "../../../../store/users";
// ui
import Button from "react-bootstrap/Button";
// ico
import { BoxArrowRight } from "react-bootstrap-icons";

const LogOutButton = ({ setCurrentOperation }) => {
  const dispatch = useDispatch();

  return (
    <Button
      variant="outline-light"
      style={{ width: "35px", border: "none" }}
      onClick={() => dispatch(logUserOut())}
    >
      <BoxArrowRight size="25px" />
    </Button>
  );
};
export default LogOutButton;
