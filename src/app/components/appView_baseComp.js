import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// comps
import Layout from "./appView_Layout";
// store
import { logUserOut } from "../../store/users";

const AppView = () => {
  // * data
  const dispatch = useDispatch();
  let history = useHistory();
  let checkForUser = useSelector((state) => state.users.userIsLoggedIn);

  if (checkForUser === false) {
    dispatch(logUserOut());
    history.push("/logIn");
  }

  // * view
  return <Layout />;
};
export default AppView;
