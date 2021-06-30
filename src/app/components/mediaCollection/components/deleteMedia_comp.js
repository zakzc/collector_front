import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// comps
import ItemToDelete from "./deleteMedia_ItemToDelete";
import SmallHeader from "../../views/smallHeader";
// store
import { loadMedias } from "../../../../store/medias";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// ico
import { Trash } from "react-bootstrap-icons";

const DeleteMedia = ({ setCurrentOperation, setMediaToManage }) => {
  // * data
  const dispatch = useDispatch();
  const currentBook = useSelector((state) =>
    state.medias.mediasList.filter((book) => book._id === setMediaToManage)
  );
  const currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
  );
  console.log("it ", currentMediaView);

  useEffect(() => {
    dispatch(loadMedias());
  }, [currentBook, dispatch]);
  console.log("from delete:", setMediaToManage, currentBook);

  // * view
  return (
    <>
      <SmallHeader subtitle={`Delete ${currentMediaView.toLowerCase()}`} />
      <h3>You selected this entry to delete:</h3>
      <ItemToDelete itemToDelete={currentBook[0]} />
      <h4>Click here to confirm</h4>
      <Row>
        <Col>
          <Button className="m-2" size="lg" variant="danger" type="submit">
            <Trash />
          </Button>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </>
  );
};
export default DeleteMedia;
