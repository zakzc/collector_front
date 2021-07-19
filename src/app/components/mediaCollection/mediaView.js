import React from "react";
import { useSelector } from "react-redux";
/// comps
import AddMedia from "./components/addMedia_baseLayout";
import DeleteMedia from "./components/deleteMedia_baseLayout";
import ListOfMedias from "./components/listOfMedias_baseLayout";
import UpdateMedia from "./components/updateMedia_baseLayout";
import EnterApp from "../credentials/enterApp_baseComp";

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
