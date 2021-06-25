import React from "react";
import { useSelector } from "react-redux";
/// comps
import Header from "../views/header";
import MediaRoutes from "./mediaRoutes";

const MediaLayout = () => {
  const currentView = useSelector((state) => state.context[0].currentView);
  const subTitle = useSelector((state) => state.context[0].subTitle);
  return (
    <>
      <Header title={currentView} subTitle={subTitle} />
      <MediaRoutes />
    </>
  );
};
export default MediaLayout;
