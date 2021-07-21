import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// store
import { logUserOut } from "../../../../store/users";
import { resetMediaData } from "../../../../store/medias";
// ui
import Button from "react-bootstrap/Button";
// ico
import { BoxArrowRight } from "react-bootstrap-icons";

const LogOutButton = ({ setCurrentOperation }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const handleLogOut = () => {
    dispatch(logUserOut());
    dispatch(resetMediaData());
    history.push("/logIn");
  };

  return (
    <Button
      variant="outline-light"
      style={{ width: "35px", border: "none" }}
      onClick={() => handleLogOut()}
    >
      <BoxArrowRight size="25px" />
    </Button>
  );
};
export default LogOutButton;
