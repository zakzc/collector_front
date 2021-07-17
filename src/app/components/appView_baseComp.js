import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// comps
import Layout from "./appView_Layout";
import AppIsOffline from "./views/appIsOffline";
// data
import UseSelectedData from "../hooks/useSelectedData";
// store
import { loadMedias } from "../../store/medias";

const AppView = () => {
  // * data
  const dispatch = useDispatch();
  const medias = UseSelectedData();
  const appIsConnected = useSelector((state) => state.medias.connectedToAPI);
  useEffect(() => {
    dispatch(loadMedias());
  }, [medias, dispatch]);

  // * view
  return <>{appIsConnected === true ? <Layout /> : <AppIsOffline />}</>;
};
export default AppView;