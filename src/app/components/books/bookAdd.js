import React, { useState } from "react";
import { useDispatch } from "react-redux";
// store
import { addBook } from "../../../store/books";
// utils
import checkForContent from "../../utils/checkForContent";
// ui
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// ico
import { CheckCircle } from "react-bootstrap-icons";

const BookAdd = ({ setCurrentView }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [mediaID, setMediaID] = useState();
  const [typeOfMedia, setTypeOfMedia] = useState();
  const [price, setPrice] = useState();
  const [sellable, setSellable] = useState();
  const [dateOfPurchase, setDateOfPurchase] = useState();
  const [quantity, setQuantity] = useState();
  const [details, setDetails] = useState();
  const [notes, setNotes] = useState();
  const [messageToUser, setMessageToUser] = useState(
    "Please, fill in the form to add a new entry"
  );
  const [messageColor, setMessageColor] = useState("secondary");

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };
  const handleGenre = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  };
  const handleMediaId = (e) => {
    e.preventDefault();
    setMediaID(e.target.value);
  };

  const handleType = (e) => {
    e.preventDefault();
    setTypeOfMedia(e.target.value);
  };

  const handleSell = (e) => {
    e.preventDefault();
    e.target.value === "Yes" ? setSellable(true) : setSellable(false);
    console.log("Sell is", sellable, e.target.value);
  };

  const handlePrice = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  const handleDate = (e) => {
    e.preventDefault();
    setDateOfPurchase(e.target.value);
  };

  const handleQuantity = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  const handleDetails = (e) => {
    e.preventDefault();
    setDetails(e.target.value);
  };

  const handleNotes = (e) => {
    e.preventDefault();
    setNotes(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const newItem = {
      title,
      author: [author],
      genre,
      mediaID,
      typeOfMedia,
      price,
      sellable,
      dateOfPurchase,
      quantity,
      details,
      notes,
    };
    const checkField = checkForContent(newItem);
    if (checkField.message === "OK") {
      setMessageToUser("All fields properly informed");
      setMessageColor("info");
      console.log("Positive: ", newItem);
      dispatch(addBook(newItem));
      console.log("add book call", newItem);
    } else {
      setMessageToUser(checkField.message);
      setMessageColor("danger");
      console.log("Negative: ", newItem, messageToUser, messageColor);
    }
    // TODO make the call to the store to implement the add book
  };

  ///
  return (
    <>
      <h2>Add a new book</h2>
      <div className="m-5">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Book title</Form.Label>
              <Form.Control
                placeholder="Title"
                as="textarea"
                value={title}
                onChange={(e) => handleTitle(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                placeholder="Author"
                as="textarea"
                value={author}
                onChange={(e) => handleAuthor(e)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                placeholder="Genre"
                value={genre}
                onChange={(e) => handleGenre(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMediaId">
              <Form.Label>Media Id</Form.Label>
              <Form.Control
                placeholder="Media id"
                value={mediaID}
                onChange={(e) => handleMediaId(e)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                value={typeOfMedia}
                size="lg"
                custom
                onChange={(e) => handleType(e)}
              >
                <option> </option>
                <option value="H">H</option>
                <option value="T">T</option>
                <option value="P">P</option>
              </Form.Control>
              <p>
                H for hardcover, T for Trade-Paperback and P for cheaper
                paperbacks
              </p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                placeholder="Price"
                value={price}
                onChange={(e) => handlePrice(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSell">
              <Form.Label>Available to sell?</Form.Label>
              <Form.Control
                size="lg"
                custom
                as="select"
                value={sellable}
                onChange={(e) => handleSell(e)}
              >
                <option> </option>
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGenre">
              <Form.Label>Date of Purchase</Form.Label>
              <Form.Control
                placeholder="Date of purchase YYYY-MM-DD"
                value={dateOfPurchase}
                onChange={(e) => handleDate(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMediaId">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => handleQuantity(e)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridDetails">
              <Form.Label>Details</Form.Label>
              <Form.Control
                placeholder="Details"
                as="textarea"
                value={details}
                onChange={(e) => handleDetails(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                placeholder="Notes"
                as="textarea"
                value={notes}
                onChange={(e) => handleNotes(e)}
              />
            </Form.Group>
          </Form.Row>
          <Row>
            <Col sm={5}>
              <Button
                size="lg"
                variant="primary"
                type="submit"
                onClick={formHandler}
              >
                <CheckCircle />
              </Button>
            </Col>
            <Col sm={7}>
              <Card bg={messageColor} text="light">
                <Card.Body>{messageToUser}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>
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
export default BookAdd;
