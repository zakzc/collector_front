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
// util
import ProcessForm from "../../../utils/processForm";
// store
import { loadMedias } from "../../../../store/medias";

const DeleteMedia = () => {
  // * data
  const dispatch = useDispatch();
  const currentItemId = useSelector(
    (state) => state.mediaContext[0].currentSelectedItem
  );
  const currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
  );
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
      <h4>Click here to confirm</h4>
      <Row>
        <Col>
          <Button
            className="m-2"
            size="lg"
            variant="danger"
            type="submit"
            onClick={() => ProcessForm(currentItemId)}
          >
            <Trash />
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};
export default DeleteMedia;
