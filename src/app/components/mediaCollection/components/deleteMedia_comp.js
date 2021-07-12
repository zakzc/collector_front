import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// comps
import ItemToDelete from "./deleteMedia_ItemToDelete";
import SmallHeader from "../../views/smallHeader";
// ico
import { Trash } from "react-bootstrap-icons";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// store
import { loadMedias, removeMedia } from "../../../../store/medias";
import {
  setCurrentMediaCRUD,
  setCurrentMediaView,
  setDataWasProcessed,
} from "../../../../store/mediaContext";

const DeleteMedia = () => {
  // * data
  const dispatch = useDispatch();
  const currentItemId = useSelector(
    (state) => state.mediaContext[0].currentSelectedItem
  );
  const currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
  );
  console.log("delete media: ", currentItemId, currentMediaView);
  const handleClickDelete = () => {
    dispatch(removeMedia(currentItemId));
    dispatch(setDataWasProcessed(true));
    dispatch(setCurrentMediaView(currentMediaView));
    dispatch(setCurrentMediaCRUD("read"));
  };
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [currentItemId, dispatch]);
  console.log("from delete:", currentItemId);

  // * view
  return (
    <>
      <SmallHeader subtitle={`Delete this ${currentMediaView.toLowerCase()}`} />
      <h3>You selected this entry to delete:</h3>
      <ItemToDelete />

      <Row>
        <Col>
          <h4>Are you sure you want to delete this item?</h4>
        </Col>
        <Col></Col>
        <p className="text-danger">
          Click this icon
          <Button
            className="m-2"
            size="lg"
            variant="danger"
            type="submit"
            onClick={() => handleClickDelete()}
          >
            <Trash />
          </Button>
          to delete it.
        </p>
      </Row>
    </>
  );
};
export default DeleteMedia;
