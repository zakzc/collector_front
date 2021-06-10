import React from "react";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const BookAdd = ({ setCurrentView }) => {
  return (
    <>
      <h2>Add a new book</h2>
      <div className="m-5">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Book title</Form.Label>
              <Form.Control placeholder="Title" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control placeholder="Author" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control placeholder="Genre" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMediaId">
              <Form.Label>Media Id</Form.Label>
              <Form.Control placeholder="Media id" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridType">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" defaultValue="Hardcover">
                <option>HardCover</option>
                <option>(Trade) PaperBack</option>
                <option>Cheap/Popular PaperBack</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control placeholder="Media id" />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
              <Form.Label>Sellable?</Form.Label>
              <Form.Check type="checkbox" label="Yes" />
              <Form.Check type="checkbox" label="No" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGenre">
              <Form.Label>Date of Purchase</Form.Label>
              <Form.Control placeholder="Genre" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMediaId">
              <Form.Label>Quantity</Form.Label>
              <Form.Control placeholder="Media id" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGenre">
              <Form.Label>Details</Form.Label>
              <Form.Control placeholder="Genre" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMediaId">
              <Form.Label>Notes</Form.Label>
              <Form.Control placeholder="Media id" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
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
