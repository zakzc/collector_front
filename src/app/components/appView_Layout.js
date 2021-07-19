import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// comps
import AppIsOffline from "./views/appIsOffline";
import MediaLayout from "../components/mediaCollection/mediaLayout";
// data
import UseSelectedData from "../hooks/useSelectedData";
// store
import { loadMedias } from "../../store/medias";
// import { addError } from "../../store/errors";

const Layout = () => {
  // * data
  const dispatch = useDispatch();
  const medias = UseSelectedData();
  const appIsConnected = useSelector((state) => state.medias.connectedToAPI);
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [medias, dispatch]);

  console.log("app connected", appIsConnected);

  // * view
  return <>{appIsConnected === true ? <MediaLayout /> : <AppIsOffline />}</>;
};
export default Layout;
