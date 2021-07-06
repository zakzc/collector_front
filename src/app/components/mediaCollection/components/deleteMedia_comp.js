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
// util
import ProcessForm from "../../../utils/processForm";
// store
import { loadMedias } from "../../../../store/medias";

const DeleteMedia = ({ setCurrentOperation, setMediaToManage }) => {
  // * data
  const dispatch = useDispatch();
  const [confirmDataProcessing, setConfirmDataProcessing] = useState(false);
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
          <Button
            className="m-2"
            size="lg"
            variant="danger"
            type="submit"
            onClick={() =>
              ProcessForm(
                "delete",
                currentBook[0]._id,
                dispatch,
                setConfirmDataProcessing
              )
            }
          >
            <Trash />
          </Button>
          {confirmDataProcessing ? (
            <ConfirmationToast
              success={true}
              message={"Dados informados com sucesso"}
            />
          ) : null}
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </>
  );
};
export default DeleteMedia;
