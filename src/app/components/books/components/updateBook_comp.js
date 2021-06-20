import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { loadBooks } from "../../../../store/books";
// comps
import BackButton from "../../views/backButton";
import SmallHeader from "../../views/smallHeader";
import ItemToUpdate from "./updateBook_item";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// ico
import { CheckCircle } from "react-bootstrap-icons";

const BookUpdate = ({ setCurrentView, bookToManage }) => {
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
            <CheckCircle />
          </Button>
        </Form>
      </div>
      <div>
        <h4>Original Values</h4>
        <ItemToUpdate currentBook={currentBook} />
      </div>
      <BackButton setCurrentView={setCurrentView} />
    </>
  );
};
export default BookUpdate;
