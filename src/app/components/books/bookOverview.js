import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../../store/books";

const BookOverview = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.entities.books.listOfBooks);
  useEffect(() => {
    dispatch(loadBooks());
  }, [books]);
  return books.map((book) => <li key={book.mediaId}>{book.title}</li>);
};

export default BookOverview;
