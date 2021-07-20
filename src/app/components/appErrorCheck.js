import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// comps
import AppIsOffline from "./views/appIsOffline";
import LoadingSpinner from "./views/loadingSpinner";
import MediaLayout from "./mediaCollection/mediaLayout";
import UnknownError from "./views/unknownError";
// ui comps
import { logUserOut } from "../../store/users";

const AppErrorCheck = () => {
  // * data
  const dispatch = useDispatch();
  let history = useHistory();
  let checkForUser = useSelector((state) => state.users.userIsLoggedIn);
  let loading = useSelector((state) => state.users.loading);
  let mediaError = useSelector((state) => state.medias.error);

  if (loading === true) {
    return <LoadingSpinner />;
  } else if (mediaError.isError === true) {
    // * Check for connection errors or user undefined errors,
    if (mediaError.message === "Network Error") {
      return <AppIsOffline />;
    } else if (mediaError.message === "Request failed with status code 404") {
      dispatch(logUserOut());
      history.push("/logIn");
      return <UnknownError />;
    } else {
      return <UnknownError />;
    }
  } else if (checkForUser === false || checkForUser === null || !checkForUser) {
    // * Check for user offline
    dispatch(logUserOut());
    history.push("/logIn");
    return <UnknownError />;
  }
  return <MediaLayout />;
};

export default AppErrorCheck;
