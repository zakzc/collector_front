import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// comps
import LoadingSpinner from "./views/loadingSpinner";
import MediaLayout from "./mediaCollection/mediaLayout";
// hook
import useCheckForUser from "../hooks/useCheckForUser";

const AppUserCheck = () => {
  // * data
  let history = useHistory();
  let loading = useSelector((state) => state.users.loading);

  //const userIsConnected = useCheckForUser();

  const NoUserDetected = () => {
    console.log("No User");
    history.push("/logIn");
    window.location.reload();
    return <LoadingSpinner />;
  };

  const UserConnected = () => {
    return (
      <>{useCheckForUser() === true ? <MediaLayout /> : <NoUserDetected />}</>
    );
  };

  return <>{loading === true ? <LoadingSpinner /> : <UserConnected />}</>;
};

export default AppUserCheck;
