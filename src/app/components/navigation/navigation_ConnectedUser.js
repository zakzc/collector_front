import React from "react";
import { useSelector } from "react-redux";
// comps
import CRUD from "./navigation_CRUD";
import MediaMenu from "./navigation_MediaMenu";
// hook
import useCheckForUser from "../../hooks/useCheckForUser";

const ConnectedUser = () => {
  // * data
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
  );
  const userIsConnected = useCheckForUser();

  const NavBarUserOffline = () => (
    <h4 className="text-light">Enter Application</h4>
  );

  const NavBarUserOnline = () => (
    <> {currentMediaCRUD === "read" ? <MediaMenu /> : <CRUD />}</>
  );

  // * view
  return <>{userIsConnected ? <NavBarUserOnline /> : <NavBarUserOffline />}</>;
};

export default ConnectedUser;
