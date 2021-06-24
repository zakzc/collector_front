import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// comps
import GoBackButton from "../../views/goBackButton";
import ItemToDelete from "./deleteBook_ItemToDelete";
import SmallHeader from "../../views/smallHeader";
// store
import { loadBooks } from "../../../../store/books";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// ico
import { Trash } from "react-bootstrap-icons";

const DeleteBook = ({ setCurrentView, bookToManage }) => {
  // * data
  const dispatch = useDispatch();
  const currentBook = useSelector((state) =>
    state.entities.books.listOfBooks.filter((book) => book._id === bookToManage)
  );

  useEffect(() => {
    dispatch(loadBooks());
  }, [currentBook, dispatch]);
  console.log("from delete:", bookToManage, currentBook);

  // * view
  return (
    <>
      <SmallHeader subtitle={"Delete book"} />
      <h3>You selected this entry to delete:</h3>
      <ItemToDelete bookToDelete={currentBook[0]} />
      <h4>Click here to confirm</h4>
      <Row>
        <Col>
          <Button className="ml-2" variant="danger" type="submit">
            <Trash />
          </Button>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <GoBackButton setCurrentView={setCurrentView} />
    </>
  );
};
export default DeleteBook;
