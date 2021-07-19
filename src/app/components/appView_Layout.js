import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// comps
import AppIsOffline from "./views/appIsOffline";
import MediaLayout from "../components/mediaCollection/mediaLayout";
import Navigation from "./views/navigation";
// data
import UseSelectedData from "../hooks/useSelectedData";
// store
import { loadMedias } from "../../store/medias";
// import { addError } from "../../store/errors";

const Layout = () => {
  // * data
  const dispatch = useDispatch();
  const medias = UseSelectedData();
  const appIsConnected = useSelector(
    (state) => state.medias.backEndProcessConfirmed
  );
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [medias, dispatch]);

  // * view
  return (
    <>
      {appIsConnected === true ? (
        <>
          <Navigation />
          <MediaLayout />
        </>
      ) : (
        <AppIsOffline />
      )}
    </>
  );
};
export default Layout;
