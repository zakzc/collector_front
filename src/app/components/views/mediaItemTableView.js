import React from "react";
// ui
import Table from "react-bootstrap/Table";
// utils
import formatDateView from "../../utils/formatDateView";

const MediaItemTableView = ({ media }) => {
  // * data
  let adjustedDate = formatDateView(media.dateOfPurchase);
  let mediaType = media.typeOfMedia.toLowerCase().split("_").join(" ");
  // * view
  return (
    <Table striped bordered hover variant="light" size="sm">
      <thead>
        <tr>
          <th>Type</th>
          <th>subType</th>
          <th>Quantity</th>
          <th>Sellable</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{mediaType}</td>
          <td>{media.subType}</td>
          <td>{media.quantity}</td>
          <td>{media.sellable ? "Yes" : "No"}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Date of Purchase</th>
          <th>Price</th>
          <th>Details</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{media.dateOfPurchase ? adjustedDate : "not available"}</td>
          <td>{media.price ? media.price : "not available"}</td>
          <td>{media.details ? media.details : "none"}</td>
          <td>{media.notes ? media.notes : "none"}</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default MediaItemTableView;
