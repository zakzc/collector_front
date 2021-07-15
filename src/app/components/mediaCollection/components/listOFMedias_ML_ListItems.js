import React from "react";
// comps
import MediaItemTableView from "../../views/mediaItemTableView";
// ui
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
// ui - buttons
import PencilButton from "../../views/buttons/pencilButton";
import TrashButton from "../../views/buttons/trashButton";

const ListItems = ({ orderedMediaList }) =>
  orderedMediaList.map((media) => (
    <ListGroup key={media.title}>
      <ListGroup.Item key={media.mediaId} variant="info">
        <h4>
          <span className="font-weight-bold text-secondary">{media.title}</span>{" "}
          by <span className="text-secondary">{media.author}</span>
        </h4>
        <br />
        <MediaItemTableView media={media} />
        <Row>
          <Col>
            <PencilButton id={media._id} />
            <TrashButton id={media._id} />
          </Col>
          <Col>
            <span className="text-secondary text-right">
              Unique mediaID: {media.mediaID}
            </span>
          </Col>
        </Row>
      </ListGroup.Item>
      <div className="mt-2" />
    </ListGroup>
  ));

export default ListItems;
