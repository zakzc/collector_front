import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// comps
import ConfirmationToast from "../../views/confirmationToast";
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
  setDataWasSent,
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
  const dataProcessed = useSelector(
    (state) => state.mediaContext[0].dataWasSent
  );
  const getItem = useSelector((state) =>
    state.medias.mediasList.filter((item) => item._id === currentItemId)
  );
  const itemToDelete = getItem[0];
  const [deleteProcess, setDeleteProcess] = useState(false);
  console.log(
    "delete media: ",
    dataProcessed,
    itemToDelete.typeOfMedia,
    currentItemId,
    currentMediaView
  );
  ///
  const handleClickDelete = () => {
    dispatch(removeMedia(currentItemId));
    dispatch(setDataWasSent(true));
    dispatch(setCurrentMediaView(currentMediaView));
    dispatch(setCurrentMediaCRUD("read"));
    setDeleteProcess(true);
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
      {deleteProcess ? (
        <ConfirmationToast
          success={true}
          message={"This data was erased. Reload the page to see changes."}
        />
      ) : null}
    </>
  );
};
export default DeleteMedia;
