import React, { useState } from "react";
import { useSelector } from "react-redux";
/// comps
import AddMedia from "./components/addMedia";
import DeleteMedia from "./components/deleteMedia_comp";
import Header from "../views/header";
import ListOfMedias from "./components/listOfMedias_comp";
import UpdateMedia from "./components/updateMedia_comp";

const MediaView = () => {
  // * data
  const currentMediaView = useSelector(
    (state) => state.context[0].currentMediaView
  );
  const [currentOperation, setCurrentOperation] = useState("list");
  const [mediaToManage, setMediaToManage] = useState();
  ///
  const setMediaView = () => {
    switch (currentOperation) {
      case "list":
        return (
          <ListOfMedias
            setCurrentOperation={setCurrentOperation}
            setMediaToManage={setMediaToManage}
          />
        );
      case "add":
        return <AddMedia setCurrentOperation={setCurrentOperation} />;
      case "update":
        return (
          <UpdateMedia
            setCurrentOperation={setCurrentOperation}
            bookToManage={mediaToManage}
          />
        );
      case "delete":
        return (
          <DeleteMedia
            setCurrentOperation={setCurrentOperation}
            bookToManage={mediaToManage}
          />
        );
      default:
        return <AddMedia setCurrentOperation={setCurrentOperation} />;
    }
  };

  // * view
  return <>{setMediaView()}</>;
};
export default MediaView;
