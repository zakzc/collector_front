import React from "react";
// ui
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

const ItemToUpdate = ({ currentBook }) => {
  return (
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
              <th>subTitle</th>
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
              <td>{currentBook.subTitle}</td>
              <td>{currentBook.quantity}</td>
              <td>{currentBook.sellable ? "Yes" : "No"}</td>
              <td>
                {currentBook.dateOfPurchase
                  ? currentBook.dateOfPurchase
                  : "not available"}
              </td>
              <td>{currentBook.price ? currentBook.price : "not available"}</td>
              <td>{currentBook.details ? currentBook.details : "none"}</td>
              <td>{currentBook.notes ? currentBook.notes : "none"}</td>
            </tr>
          </tbody>
        </Table>
      </ListGroup.Item>
      <div className="mt-3" />
    </ListGroup>
  );
};
export default ItemToUpdate;
