import React from "react";
// ui
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

const ItemToDelete = ({ bookToDelete }) => {
  return (
    <ListGroup className="ml-2 mr-2" key={bookToDelete.title}>
      <ListGroup.Item key={bookToDelete.mediaId} variant="info">
        <h4 className="ml-1 mt-2 ">
          <span className="font-weight-bold">{bookToDelete.title}</span> by{" "}
          {bookToDelete.author}
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
              <td>{bookToDelete.typeOfMedia}</td>
              <td>{bookToDelete.subTitle}</td>
              <td>{bookToDelete.quantity}</td>
              <td>{bookToDelete.sellable ? "Yes" : "No"}</td>
              <td>
                {bookToDelete.dateOfPurchase
                  ? bookToDelete.dateOfPurchase
                  : "not available"}
              </td>
              <td>
                {bookToDelete.price ? bookToDelete.price : "not available"}
              </td>
              <td>{bookToDelete.details ? bookToDelete.details : "none"}</td>
              <td>{bookToDelete.notes ? bookToDelete.notes : "none"}</td>
            </tr>
          </tbody>
        </Table>
      </ListGroup.Item>
      <div className="mt-3" />
    </ListGroup>
  );
};
export default ItemToDelete;
