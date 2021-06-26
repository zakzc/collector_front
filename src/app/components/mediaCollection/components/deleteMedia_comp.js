import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// comps
import GoBackButton from "../../views/goBackButton";
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

  useEffect(() => {
    dispatch(loadMedias());
  }, [currentBook, dispatch]);
  console.log("from delete:", setMediaToManage, currentBook);

  // * view
  return (
    <>
      <SmallHeader subtitle={"Delete book"} />
      <h3>You selected this entry to delete:</h3>
      <ItemToDelete bookToDelete={currentBook[0]} />
      <h4>Click here to confirm</h4>
      <Row>
        <Col>
          <Button className="ml-2" variant="danger" type="submit">
            <Trash />
          </Button>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <GoBackButton setCurrentOperation={setCurrentOperation} />
    </>
  );
};
export default DeleteMedia;
