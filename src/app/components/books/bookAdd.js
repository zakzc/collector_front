import React, { useState } from "react";
// utils
import checkForContent from "../../utils/checkForContent";
// ui
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const BookAdd = ({ setCurrentView }) => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [mediaId, setMediaId] = useState();
  const [type, setType] = useState();
  const [price, setPrice] = useState();
  const [sell, setSell] = useState();
  const [date, setDate] = useState();
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
    setMediaId(e.target.value);
  };

  const handleType = (e) => {
    e.preventDefault();
    setType(e.target.value);
  };

  const handleSell = (e) => {
    e.preventDefault();
    e.target.value === "Yes" ? setSell(true) : setSell(false);
    console.log("Sell is", sell, e.target.value);
  };

  const handlePrice = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  const handleDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
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

  // const checkForContent = (formData) => {
  //   console.log("Rec", formData);
  //   if (formData.title === undefined) {
  //     return { message: "Title is empty" };
  //   } else if (!formData.author) {
  //     return { message: "Author is empty" };
  //   } else if (!formData.genre) {
  //     return { message: "You must inform the genre" };
  //   } else if (!formData.mediaId) {
  //     return { message: "You must inform the media Id" };
  //   } else if (!formData.type) {
  //     return { message: "Type of book is mandatory" };
  //   } else if (!formData.price) {
  //     return { message: "Price is mandatory" };
  //   } else if (!formData.date) {
  //     return { message: "Date is empty" };
  //   } else if (!formData.sell) {
  //     return { message: "To sell or not to sell?" };
  //   } else if (!formData.quantity) {
  //     return { message: "Please inform the quantity" };
  //   } else {
  //     return { message: "All fields Ok" };
  //   }
  // };

  const formHandler = (e) => {
    e.preventDefault();
    const newItem = {
      title,
      author,
      genre,
      mediaId,
      type,
      price,
      sell,
      date,
      quantity,
      details,
      notes,
    };
    const checkField = checkForContent(newItem);
    console.log("fi", checkField);
    if (checkField.message === "OK") {
      setMessageToUser("Todos os campos informados com sucesso");
      setMessageColor("info");
      console.log("Positive: ", newItem, messageToUser, messageColor);
    } else {
      setMessageToUser(checkField.message);
      setMessageColor("danger");
      console.log("Negative: ", newItem, messageToUser, messageColor);
    }
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
                value={mediaId}
                onChange={(e) => handleMediaId(e)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                value={type}
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
                value={sell}
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
                placeholder="Date of purchase"
                value={date}
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
            <Form.Group as={Col} controlId="formGridGenre">
              <Form.Label>Details</Form.Label>
              <Form.Control
                placeholder="Details"
                as="textarea"
                value={details}
                onChange={(e) => handleDetails(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMediaId">
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
                Submit
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
