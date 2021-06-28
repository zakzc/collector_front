import React from "react";
// comps
import PencilButton from "../../views/buttons/pencilButton";
import TrashButton from "../../views/buttons/trashButton";
// ui
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

const MediaList = ({ Medias, setCurrentOperation, setMediaToManage }) => {
  const handleClick = (type, id) => {
    setMediaToManage(id);
    type === "update"
      ? setCurrentOperation("update")
      : setCurrentOperation("delete");
  };
  return (
    <>
      {Medias.map((media) => (
        <ListGroup className="ml-2 mr-2" key={media.title}>
          <ListGroup.Item key={media.mediaId} variant="info">
            <h4 className="ml-1 mt-2 ">
              <span className="font-weight-bold">{media.title}</span> by{" "}
              {media.author}
            </h4>
            <br />
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
                    {media.dateOfPurchase
                      ? media.dateOfPurchase
                      : "not available"}
                  </td>
                  <td>{media.price ? media.price : "not available"}</td>
                  <td>{media.details ? media.details : "none"}</td>
                  <td>{media.notes ? media.notes : "none"}</td>
                </tr>
              </tbody>
            </Table>
            <PencilButton handleClick={handleClick} media={media} />
            <TrashButton handleClick={handleClick} media={media} />
          </ListGroup.Item>
          <div className="mt-3" />
        </ListGroup>
      ))}
    </>
  );
};
export default MediaList;
