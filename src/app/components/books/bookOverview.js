import React, { useState } from "react";
/// comps
import BookOverviewHeader from "./bookOverviewHeader";
import BookList from "./bookList";
import BookAdd from "./bookAdd";
import BookDelete from "./bookDelete";
import BookUpdate from "./bookUpdate";

const BookOverview = () => {
  const [currentView, setCurrentView] = useState("list");
  const [bookToManage, setBookToManage] = useState();
  ///
  const bookView = () => {
    switch (currentView) {
      case "list":
        return (
          <BookList
            setCurrentView={setCurrentView}
            setBookToManage={setBookToManage}
          />
        );
      case "add":
        return <BookAdd setCurrentView={setCurrentView} />;
      case "update":
        return (
          <BookUpdate
            setCurrentView={setCurrentView}
            bookToManage={bookToManage}
          />
        );
      case "delete":
        return (
          <BookDelete
            setCurrentView={setCurrentView}
            bookToManage={bookToManage}
          />
        );
      default:
        return <BookAdd setCurrentView={setCurrentView} />;
    }
  };
  ///
  return (
    <>
      <BookOverviewHeader />
      {bookView()}
    </>
  );
};
export default BookOverview;
