import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { loadBooks } from "../../../store/books";
// ui
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

const BookUpdate = ({ setCurrentView, bookToManage }) => {
  const dispatch = useDispatch();
  const currentBook = useSelector((state) =>
    state.entities.books.listOfBooks.filter((book) => book._id === bookToManage)
  );
  useEffect(() => {
    dispatch(loadBooks());
  }, [currentBook, dispatch]);
  console.log("from update:", bookToManage, currentBook);
  return (
    <>
      <h2 className="mt-2 md-5">Update this book</h2>
      <p>You selected:</p>
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
      </ListGroup>
      {/* ///* TODO Make the table as a form */}
      {/* <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
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
export default BookUpdate;
