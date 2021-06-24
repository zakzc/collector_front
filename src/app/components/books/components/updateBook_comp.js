import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { loadBooks } from "../../../../store/books";
// comps
import FormBook from "./formBook";
import GoBackButton from "../../views/goBackButton";
import SmallHeader from "../../views/smallHeader";
import ItemToUpdate from "./updateBook_ItemToUpdate";

const UpdateBook = ({ setCurrentView, bookToManage }) => {
  // * data
  const dispatch = useDispatch();
  const findBook = useSelector((state) =>
    state.entities.books.listOfBooks.filter((book) => book._id === bookToManage)
  );
  const currentBook = findBook[0];
  useEffect(() => {
    dispatch(loadBooks());
  }, [currentBook, dispatch]);
  console.log("from update:", bookToManage, currentBook);

  // * view
  return (
    <>
      <SmallHeader subtitle={"Update book"} />
      <h4>Original Values</h4>
      <ItemToUpdate currentBook={currentBook} />
      <FormBook formMode={"UPDATE_book"} />
      <GoBackButton setCurrentView={setCurrentView} />
    </>
  );
};
export default UpdateBook;
