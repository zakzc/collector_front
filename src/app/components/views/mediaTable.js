import React from "react";
// ui
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
// utils
import formatDate from "../../utils/formatDate";

const MediaTable = ({ media }) => {
  let adjustedDate = formatDate(media.dateOfPurchase);
  return (
    <>
      <Col></Col>
      <Col>
        <Table striped bordered hover variant="light" md="auto">
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
              <td>{media.typeOfMedia}</td>
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
      </Col>
      <Col></Col>
    </>
  );
};
export default MediaTable;
