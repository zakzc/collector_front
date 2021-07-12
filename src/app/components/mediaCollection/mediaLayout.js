import React from "react";
import { useSelector } from "react-redux";
/// comps
import ConfirmationToast from "../views/confirmationToast";
import Header from "../views/header";
import GoBackButton from "../views/buttons/goBackButton";
import MediaView from "./mediaView";
// ui
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MediaLayout = () => {
  // * data
  const currentMediaCRUD = useSelector(
    (state) => state.mediaContext[0].currentMediaCRUD
  );
  const currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
  );
  const dataProcessed = useSelector(
    (state) => state.mediaContext[0].dataWasProcessed
  );

  // * view
  return (
    <>
      <Header title={currentMediaView} />
      <Row>
        <Col></Col>
        <Col xs={12} md={9}>
          <div className="ml-2">
            {currentMediaCRUD === "read" ? null : <GoBackButton />}
          </div>
          <MediaView />
        </Col>
        <Col>
          {dataProcessed ? (
            <ConfirmationToast
              success={true}
              message={"Data was processed successfully"}
            />
          ) : null}
        </Col>
      </Row>
    </>
  );
};
export default MediaLayout;
