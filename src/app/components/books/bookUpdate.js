import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { loadBooks } from "../../../store/books";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

const BookUpdate = ({ setCurrentView, bookToManage }) => {
  const dispatch = useDispatch();
  const findBook = useSelector((state) =>
    state.entities.books.listOfBooks.filter((book) => book._id === bookToManage)
  );
  const currentBook = findBook[0];
  useEffect(() => {
    dispatch(loadBooks());
  }, [currentBook, dispatch]);
  console.log("from update:", bookToManage, currentBook);
  return (
    <>
      <h2 className="mt-2 md-5">Update this book</h2>

      <div className="m-5">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>
                <strong>{currentBook.title}</strong>
              </Form.Label>
              <Form.Control placeholder="Title" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAuthor">
              <Form.Label>
                <strong>{currentBook.author}</strong>
              </Form.Label>
              <Form.Control placeholder="Author" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGenre">
              <Form.Label>
                <strong>{currentBook.genre}</strong>
              </Form.Label>
              <Form.Control placeholder="Genre" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMediaId">
              <Form.Label>
                <strong>{currentBook.mediaID}</strong>{" "}
              </Form.Label>
              <Form.Control placeholder="Media id" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridType">
              <Form.Label>{currentBook.typeOfMedia}</Form.Label>
              <Form.Control as="select" defaultValue="Hardcover">
                <option>HardCover - H</option>
                <option>(Trade) PaperBack - T</option>
                <option>Cheap/Popular PaperBack - P</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>
                <strong>{currentBook.price}</strong>
              </Form.Label>
              <Form.Control placeholder="Price" />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
              <Form.Label>
                Sellable: <strong>{currentBook.sellable ? "Yes" : "No"}</strong>
              </Form.Label>
              <Form.Check type="checkbox" label="Yes" />
              <Form.Check type="checkbox" label="No" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGenre">
              <Form.Label>
                Date of Purchase: {currentBook.dateOfPurchase}
              </Form.Label>
              <Form.Control placeholder="Date of purchase" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMediaId">
              <Form.Label>
                Quantity: <strong>{currentBook.quantity}</strong>{" "}
              </Form.Label>
              <Form.Control placeholder="Quantity" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGenre">
              <Form.Label>
                Details: <p>{currentBook.details}</p>
              </Form.Label>
              <Form.Control placeholder="Details" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMediaId">
              <Form.Label>
                Notes:{" "}
                <p>{currentBook.notes ? currentBook.notes : "no notes"}</p>
              </Form.Label>
              <Form.Control placeholder="Notes" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div>
        <p>Original Values</p>
        <ListGroup className="ml-2 mr-2" key={currentBook.title}>
          <ListGroup.Item key={currentBook.mediaId} variant="info">
            <h4 className="ml-1 mt-2 ">
              <span className="font-weight-bold">{currentBook.title}</span> by{" "}
              {currentBook.author}
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
                  <td>{currentBook.typeOfMedia}</td>
                  <td>{currentBook.genre}</td>
                  <td>{currentBook.quantity}</td>
                  <td>{currentBook.sellable ? "Yes" : "No"}</td>
                  <td>
                    {currentBook.dateOfPurchase
                      ? currentBook.dateOfPurchase
                      : "not available"}
                  </td>
                  <td>
                    {currentBook.price ? currentBook.price : "not available"}
                  </td>
                  <td>{currentBook.details ? currentBook.details : "none"}</td>
                  <td>{currentBook.notes ? currentBook.notes : "none"}</td>
                </tr>
              </tbody>
            </Table>
          </ListGroup.Item>
          <div className="mt-3" />
        </ListGroup>
      </div>
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
