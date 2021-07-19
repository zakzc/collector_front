import React from "react";
import { useSelector } from "react-redux";
// comps
import Layout from "./appView_Layout";
import EnterApp from "../components/credentials/enterApp_baseComp";

const AppView = () => {
  // * data
  const userIsLoggedIn = useSelector((state) => state.users.userIsLoggedIn);

  // * view
  return <>{userIsLoggedIn === true ? <Layout /> : <EnterApp />}</>;
};
export default AppView;
