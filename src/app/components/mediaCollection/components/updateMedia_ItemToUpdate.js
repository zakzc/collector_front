import React from "react";
// comps
import MediaTable from "../../views/mediaTable";
// ui
import ListGroup from "react-bootstrap/ListGroup";

const ItemToUpdate = ({ currentItem }) => {
  return (
    <ListGroup className="ml-2 mr-2" key={currentItem.title}>
      <ListGroup.Item key={currentItem.mediaId} variant="info">
        <h4 className="ml-1 mt-2 ">
          <span className="font-weight-bold">{currentItem.title}</span> by{" "}
          {currentItem.author}
        </h4>
        <br />
        <MediaTable media={currentItem} />
      </ListGroup.Item>
      <div className="mt-3" />
    </ListGroup>
  );
};
export default ItemToUpdate;
