import React, { useState } from "react";
/// comps
import ListOfMedias from "./components/listOfMedias_comp";
import AddMedia from "./components/addMedia";
import DeleteMedia from "./components/deleteMedia_comp";
import UpdateMedia from "./components/updateMedia_comp";

const MediaRoutes = () => {
  // * data
  const [currentView, setCurrentView] = useState("list");
  const [bookToManage, setBookToManage] = useState();
  ///
  const mediaView = () => {
    switch (currentView) {
      case "list":
        return (
          <ListOfMedias
            setCurrentView={setCurrentView}
            setBookToManage={setBookToManage}
          />
        );
      case "add":
        return <AddMedia setCurrentView={setCurrentView} />;
      case "update":
        return (
          <UpdateMedia
            setCurrentView={setCurrentView}
            bookToManage={bookToManage}
          />
        );
      case "delete":
        return (
          <DeleteMedia
            setCurrentView={setCurrentView}
            bookToManage={bookToManage}
          />
        );
      default:
        return <AddMedia setCurrentView={setCurrentView} />;
    }
  };

  // * view
  return <>{mediaView()}</>;
};
export default MediaRoutes;
