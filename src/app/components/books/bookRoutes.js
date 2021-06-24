import React, { useState } from "react";
/// comps
import ListBooks from "./components/listBooks_comp";
import AddBook from "./components/addBook";
import DeleteBook from "./components/deleteBook_comp";
import UpdateBook from "./components/updateBook_comp";

const BookRoutes = () => {
  // * data
  const [currentView, setCurrentView] = useState("list");
  const [bookToManage, setBookToManage] = useState();
  ///
  const bookView = () => {
    switch (currentView) {
      case "list":
        return (
          <ListBooks
            setCurrentView={setCurrentView}
            setBookToManage={setBookToManage}
          />
        );
      case "add":
        return <AddBook setCurrentView={setCurrentView} />;
      case "update":
        return (
          <UpdateBook
            setCurrentView={setCurrentView}
            bookToManage={bookToManage}
          />
        );
      case "delete":
        return (
          <DeleteBook
            setCurrentView={setCurrentView}
            bookToManage={bookToManage}
          />
        );
      default:
        return <AddBook setCurrentView={setCurrentView} />;
    }
  };

  // * view
  return <>{bookView()}</>;
};
export default BookRoutes;
