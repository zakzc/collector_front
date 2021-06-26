import React, { useState } from "react";
/// comps
import AddMedia from "./components/addMedia";
import DeleteMedia from "./components/deleteMedia_comp";
import ListOfMedias from "./components/listOfMedias_comp";
import UpdateMedia from "./components/updateMedia_comp";

const MediaView = () => {
  // * data
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
            setMediaToManage={mediaToManage}
          />
        );
      case "delete":
        return (
          <DeleteMedia
            setCurrentOperation={setCurrentOperation}
            setMediaToManage={mediaToManage}
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
