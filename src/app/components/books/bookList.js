import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ui
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
// store
import { loadBooks } from "../../../store/books";

const BookList = ({ setCurrentView, setBookToManage }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.entities.books.listOfBooks);
  useEffect(() => {
    dispatch(loadBooks());
  }, [books, dispatch]);
  ///
  const handleClick = (type, id) => {
    setBookToManage(id);
    type === "update" ? setCurrentView("update") : setCurrentView("delete");
  };
  ///
  return (
    <>
      <Button
        variant="info"
        size="lg"
        className="mb-3"
        block
        onClick={() => setCurrentView("add")}
      >
        <h1 className="p-1">+</h1>
      </Button>
      {books.map((book) => (
        <ListGroup className="ml-2 mr-2" key={book.title}>
          <ListGroup.Item key={book.mediaId} variant="info">
            <h4 className="ml-1 mt-2 ">
              <span className="font-weight-bold">{book.title}</span> by{" "}
              {book.author}
            </h4>
            <br />
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Genre</th>
                  <th>Quantity</th>
                  <th>Sellable</th>
                  <th>Date of Purchase</th>
                  <th>Price</th>
                  <th>Details</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{book.typeOfMedia}</td>
                  <td>{book.genre}</td>
                  <td>{book.quantity}</td>
                  <td>{book.sellable ? "Yes" : "No"}</td>
                  <td>
                    {book.dateOfPurchase
                      ? book.dateOfPurchase
                      : "not available"}
                  </td>
                  <td>{book.price ? book.price : "not available"}</td>
                  <td>{book.details ? book.details : "none"}</td>
                  <td>{book.notes ? book.notes : "none"}</td>
                </tr>
              </tbody>
            </Table>
            <Button
              variant="info"
              // href="/bookUpdate"
              onClick={() => {
                handleClick("update", book._id);
              }}
            >
              Update
            </Button>{" "}
            <Button
              variant="danger"
              onClick={() => {
                handleClick("delete", book._id);
              }}
            >
              Delete
            </Button>
          </ListGroup.Item>
          <div className="mt-3" />
        </ListGroup>
      ))}
    </>
  );
};

export default BookList;
