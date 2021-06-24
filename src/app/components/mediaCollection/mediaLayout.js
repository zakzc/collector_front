import React from "react";
/// comps
// import BookHeader from "./b_Header";
import Header from "../views/header";
import MediaRoutes from "./mediaRoutes";

const MediaLayout = () => {
  return (
    <>
      <Header title={"Medias"} />
      <MediaRoutes />
    </>
  );
};
export default MediaLayout;
