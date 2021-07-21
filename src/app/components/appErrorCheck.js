import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// comps
import AppIsOffline from "./views/errorAndOfflineViews/appIsOffline";
import LoadingSpinner from "./views/loadingSpinner";
import MediaLayout from "./mediaCollection/mediaLayout";
import UnknownError from "./views/errorAndOfflineViews/unknownError";
// ui comps
import { logUserOut } from "../../store/users";

const AppErrorCheck = () => {
  // * data
  const dispatch = useDispatch();
  let history = useHistory();
  let loading = useSelector((state) => state.users.loading);
  let mediaError = useSelector((state) => state.medias.error);

  const ErrorOnLoad = () => {
    if (mediaError.message === "Network Error") {
      return <AppIsOffline />;
    } else {
      console.log("ERROR:", mediaError.message);
      dispatch(logUserOut());
      history.push("/logIn");
      return <UnknownError />;
    }
  };

  const AppIsLoaded = () => {
    return (
      <>{mediaError.isError === true ? <ErrorOnLoad /> : <MediaLayout />}</>
    );
  };

  return <>{loading === true ? <LoadingSpinner /> : <AppIsLoaded />}</>;
};

export default AppErrorCheck;
