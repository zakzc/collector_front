import React from "react";
import { useSelector } from "react-redux";
// comps
import AppIsOffline from "./views/errorAndOfflineViews/appIsOffline";
import AppUserCheck from "./appUserCheck";
import LoadingSpinner from "./views/loadingSpinner";
import UnknownError from "./views/errorAndOfflineViews/unknownError";

const AppErrorCheck = () => {
  // * data
  let loading = useSelector((state) => state.users.loading);
  // check for API errors
  let mediaError = useSelector((state) => state.medias.error);
  let userError = useSelector((state) => state.users.error);

  const ErrorOnLoad = () => {
    if (
      mediaError.message === "Network Error" ||
      userError.message === "Network Error"
    ) {
      return <AppIsOffline />;
    } else if (userError.message === "Unknown error") {
      return <UnknownError errorMessage={mediaError.message} />;
    } else {
      console.log("ERROR:", mediaError.message, userError.message);
      return <h1>Error came up here</h1>;
    }
  };

  const AppIsLoaded = () => {
    return (
      <>
        {userError.isError === true || mediaError.isError === true ? (
          <ErrorOnLoad />
        ) : (
          <AppUserCheck />
        )}
      </>
    );
  };

  return <>{loading === true ? <LoadingSpinner /> : <AppIsLoaded />}</>;
};

export default AppErrorCheck;
