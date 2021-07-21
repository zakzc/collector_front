import React from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
/// comps
import ConfirmationToast from "../views/confirmationToast";
import Header from "../views/header";
import GoBackButton from "../views/buttons/goBackButton";
import MediaView from "./mediaView";
// ui
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LoadingSpinner from "../views/loadingSpinner";

const MediaLayout = () => {
  // * data
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
  );

  const loading = useSelector((state) => state.medias.loading);

  // * view
  const MediasMenu = () => (
    <>
      <div className="ml-2">
        {currentMediaCRUD === "read" ? null : <GoBackButton />}
      </div>
      {currentMediaCRUD === "read" ? <ConfirmationToast /> : null}
      <MediaView />
    </>
  );

  const MediaLayoutView = () => (
    <>
      <Header />
      <Row>
        <Col></Col>
        <Col xs={12} md={9}>
          {loading ? <LoadingSpinner /> : <MediasMenu />}
        </Col>
        <Col></Col>
      </Row>
    </>
  );

  return (
    <>
      <MediaLayoutView />
    </>
  );
};
export default MediaLayout;
