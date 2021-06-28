import React from "react";
// comps
import MediaTable from "../../views/mediaTable";
// buttons
import PencilButton from "../../views/buttons/pencilButton";
import TrashButton from "../../views/buttons/trashButton";
// ui
import ListGroup from "react-bootstrap/ListGroup";

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
        <ListGroup key={media.title}>
          <ListGroup.Item key={media.mediaId} variant="info">
            <h4>
              <span className="font-weight-bold">{media.title}</span> by{" "}
              {media.author}
            </h4>
            <br />
            <MediaTable media={media} />
            <PencilButton handleClick={handleClick} media={media} />
            <TrashButton handleClick={handleClick} media={media} />
          </ListGroup.Item>
          <div className="mt-2" />
        </ListGroup>
      ))}
    </>
  );
};
export default MediaList;
