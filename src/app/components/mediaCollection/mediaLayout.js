import React from "react";
import { useSelector } from "react-redux";
/// comps
import Header from "../views/header";
import MediaView from "./mediaView";

const MediaLayout = () => {
  const currentMediaView = useSelector(
    (state) => state.context[0].currentMediaView
  );
  return (
    <>
      <Header title={currentMediaView} />
      <MediaView />
    </>
  );
};
export default MediaLayout;
