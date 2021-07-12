import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// data
import UseSelectedData from "../../../hooks/useSelectedData";
// store
import { loadMedias } from "../../../../store/medias";
// import { setCurrentMediaCRUD } from "../../../../store/mediaContext";
// comps
import MediaItemTableView from "../../views/mediaItemTableView";
// buttons
import PencilButton from "../../views/buttons/pencilButton";
import TrashButton from "../../views/buttons/trashButton";
// ui
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

const MediaList = ({ setCurrentOperation, setMediaToManage }) => {
  // * data
  const dispatch = useDispatch();
  // const medias = useSelector((state) => state.medias.mediasList);
  const medias = UseSelectedData();
  // const currentMediaView = useSelector(
  //   (state) => state.mediaContext[0].currentMediaView
  // );
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [medias, dispatch]);
  ///

  // * view
  return (
    <>
      {medias.map((media) => (
        <ListGroup key={media.title}>
          <ListGroup.Item key={media.mediaId} variant="info">
            <h4>
              <span className="font-weight-bold">{media.title}</span> by{" "}
              {media.author}
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
      ))}
    </>
  );
};
export default MediaList;
