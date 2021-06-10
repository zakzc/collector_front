import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { loadBooks } from "../../../store/books";
// ui
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

const BookDelete = ({ setCurrentView, bookToManage }) => {
  const dispatch = useDispatch();
  const currentBook = useSelector((state) =>
    state.entities.books.listOfBooks.filter((book) => book._id === bookToManage)
  );
  useEffect(() => {
    dispatch(loadBooks());
  }, [currentBook, dispatch]);
  console.log("from delete:", bookToManage, currentBook);
  return (
    <>
      <h2>Book Delete</h2>
      <p>You selected this entry to delete:</p>
      <ListGroup className="ml-2 mr-2" key={currentBook[0].title}>
        <ListGroup.Item key={currentBook[0].mediaId} variant="info">
          <h4 className="ml-1 mt-2 ">
            <span className="font-weight-bold">{currentBook[0].title}</span> by{" "}
            {currentBook[0].author}
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
                <td>{currentBook[0].typeOfMedia}</td>
                <td>{currentBook[0].genre}</td>
                <td>{currentBook[0].quantity}</td>
                <td>{currentBook[0].sellable ? "Yes" : "No"}</td>
                <td>
                  {currentBook[0].dateOfPurchase
                    ? currentBook[0].dateOfPurchase
                    : "not available"}
                </td>
                <td>
                  {currentBook[0].price
                    ? currentBook[0].price
                    : "not available"}
                </td>
                <td>{currentBook[0].details ? currentBook.details : "none"}</td>
                <td>{currentBook[0].notes ? currentBook[0].notes : "none"}</td>
              </tr>
            </tbody>
          </Table>
        </ListGroup.Item>
        <div className="mt-3" />
        <Button variant="danger" type="submit">
          Delete this record
        </Button>
        <div className="mt-3" />
      </ListGroup>
      <Button
        variant="info"
        size="lg"
        className="mb-3"
        block
        onClick={() => setCurrentView("list")}
      >
        <h1 className="p-1">Back to overview</h1>
      </Button>
    </>
  );
};
export default BookDelete;
