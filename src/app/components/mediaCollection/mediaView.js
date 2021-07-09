import React, { useState } from "react";
import { useSelector } from "react-redux";
/// comps
import AddMedia from "./components/addMedia";
import DeleteMedia from "./components/deleteMedia_comp";
import ListOfMedias from "./components/listOfMedias_comp";
import UpdateMedia from "./components/updateMedia_comp";

const MediaView = () => {
  // data
  const currentMediaCRUD = useSelector(
    (state) => state.mediaContext[0].currentMediaCRUD
  );

  // Data-View
  switch (currentMediaCRUD) {
    case "read":
      return <ListOfMedias />;
    case "create":
      return <AddMedia />;
    case "update":
      return <UpdateMedia />;
    case "delete":
      return <DeleteMedia />;
    default:
      return <ListOfMedias />;
  }
};

export default MediaView;
