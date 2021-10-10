import React from "react";
import { useSelector } from "react-redux";

/// comps
import AddMedia from "./components/addMedia";
import DeleteMedia from "./components/deleteMedia";
import ListOfMedias from "./components/listOfMedias";
import UpdateMedia from "./components/updateMedia";
import EnterApp from "../credentials/enterApp";

const MediaView = () => {
  // data
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
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
    case "enter":
      return <EnterApp />;
    default:
      return <ListOfMedias />;
  }
};

export default MediaView;
