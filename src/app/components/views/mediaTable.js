import React from "react";
import Table from "react-bootstrap/Table";

const MediaTable = ({ media }) => {
  return (
    <Table striped bordered hover variant="light">
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
          <td>{media.typeOfMedia}</td>
          <td>{media.subTitle}</td>
          <td>{media.quantity}</td>
          <td>{media.sellable ? "Yes" : "No"}</td>
          <td>
            {media.dateOfPurchase ? media.dateOfPurchase : "not available"}
          </td>
          <td>{media.price ? media.price : "not available"}</td>
          <td>{media.details ? media.details : "none"}</td>
          <td>{media.notes ? media.notes : "none"}</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default MediaTable;
