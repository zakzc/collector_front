import React from "react";
// comps
import MediaTable from "./listOfMedias_MediaTable";
// ui
import ListGroup from "react-bootstrap/ListGroup";

const ItemToDelete = ({ itemToDelete }) => {
  return (
    <ListGroup className="ml-2 mr-2" key={itemToDelete.title}>
      <ListGroup.Item key={itemToDelete.mediaId} variant="info">
        <h4 className="ml-1 mt-2 ">
          <span className="font-weight-bold">{itemToDelete.title}</span> by{" "}
          {itemToDelete.author}
        </h4>
        <br />
        <MediaTable media={itemToDelete} />
      </ListGroup.Item>
      <div className="mt-3" />
    </ListGroup>
  );
};
export default ItemToDelete;
