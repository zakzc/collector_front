import React from "react";
import { useSelector } from "react-redux";
// comps
import AppIsOffline from "./views/errorAndOfflineViews/appIsOffline";
import AppLayout from "./appLayout";
import EnterApp from "./credentials/enterApp";
import ErrorReport from "./views/errorAndOfflineViews/appErrorReport";
// hook
import useCheckForUser from "../hooks/useCheckForUser";
import OutWithGoogle from "./credentials/outWithGoogle";

const AppErrorCheck = () => {
  // * data
  //let loading = useSelector((state) => state.users.loading);
  // check for API errors
  let mediaError = useSelector((state) => state.medias.error);
  let userError = useSelector((state) => state.users.error);

  // check for errors of connectivity
  const ErrorOnLoad = () => {
    if (
      mediaError.message === "Network Error" ||
      userError.message === "Network Error"
    ) {
      return <AppIsOffline />;
    } else {
      // general error
      return <ErrorReport errorMessage={mediaError.message} />;
    }
  };

  // User detected on local storage, now check for errors
  // if no errors, show media Page
  const UserDetectedCheckForErrors = () => {
    return (
      <>
        {userError.isError === true && mediaError.isError === true ? (
          <ErrorOnLoad />
        ) : (
          <AppLayout />
        )}
      </>
    );
  };

  // Is there a user loaded on local storage?
  const DetectConnectedUser = () => {
    return (
      <>
        {useCheckForUser() ? (
          <UserDetectedCheckForErrors />
        ) : (
          <>
            <EnterApp />
            <OutWithGoogle />
          </>
        )}
      </>
    );
  };

  return <DetectConnectedUser />;
};

export default AppErrorCheck;
