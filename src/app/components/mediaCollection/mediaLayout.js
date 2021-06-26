import React from "react";
import { useSelector } from "react-redux";
/// comps
import Header from "../views/header";
import MediaRoutes from "./mediaRoutes";

const MediaLayout = () => {
  const currentView = useSelector((state) => state.context[0].currentView);
  return (
    <>
      <Header title={currentView} />
      <MediaRoutes />
    </>
  );
};
export default MediaLayout;
