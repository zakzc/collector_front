import React from "react";
import { useSelector } from "react-redux";
// comps
import AppIsOffline from "./views/errorAndOfflineViews/appIsOffline";
import AppUserCheck from "./appUserCheck";
import LoadingSpinner from "./views/loadingSpinner";
import ErrorReport from "./views/errorAndOfflineViews/appErrorReport";

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
    } else {
      return <ErrorReport errorMessage={mediaError.message} />;
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
