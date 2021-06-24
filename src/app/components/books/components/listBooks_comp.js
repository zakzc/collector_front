import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// ico
import { PlusCircle } from "react-bootstrap-icons";
// store
import { loadBooks } from "../../../../store/books";
// comps
import ListOfBooks from "./listBooks_ListOfBooks";

const ListBooks = ({ setCurrentView, setBookToManage }) => {
  // * data
  const dispatch = useDispatch();
  const books = useSelector((state) => state.entities.books.listOfBooks);
  ///
  useEffect(() => {
    dispatch(loadBooks());
  }, [books, dispatch]);
  ///

  // * view
  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          <Button
            variant="info"
            size="lg"
            className="mb-3"
            block
            onClick={() => setCurrentView("add")}
          >
            <PlusCircle />
          </Button>
        </Col>
        <Col></Col>
      </Row>
      <ListOfBooks
        books={books}
        setCurrentView={setCurrentView}
        setBookToManage={setBookToManage}
      />
    </>
  );
};

export default ListBooks;
