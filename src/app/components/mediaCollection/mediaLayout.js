import React from "react";
import { useSelector } from "react-redux";
/// comps
import Header from "../views/header";
import GoBackButton from "../views/buttons/goBackButton";
import MediaView from "./mediaView";
// effects and transitions
import ConfirmationToast from "../views/confirmationToast";
import LoadingSpinner from "../views/loadingSpinner";
// ui
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// hook
import useCheckForUser from "../../hooks/useCheckForUser";

const MediaLayout = () => {
  // * data
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
  );
  //const loading = useSelector((state) => state.medias.loading);
  // animation data
  // const pageVariants = {
  //   initial: { opacity: 0, x: "100vh", scale: 0.9 },
  //   in: { opacity: 1, x: 0, scale: 1 },
  //   out: { opacity: 0, x: "-100vh", scale: 1.1 },
  // };
  // const pageTransition = { type: "tween", ease: "anticipate", duration: 1.5 };

  // * view
  const MediasMenu = () => (
    <>
      {currentMediaCRUD === "read" ? <ConfirmationToast /> : null}
      <MediaMiniMenu />
    </>
  );

  const MediaMiniMenu = ({ isVisible }) => (
    <>
      <div className="ml-2">
        {currentMediaCRUD === "read" ? null : <GoBackButton />}
      </div>
      <MediaView />
    </>
  );

  const MediaLayoutView = () => (
    <>
      <Header />
      <Row>
        <Col></Col>
        <Col xs={12} md={9}>
          {useCheckForUser() ? <MediasMenu /> : <LoadingSpinner />}
        </Col>
        <Col></Col>
      </Row>
    </>
  );

  return <MediaLayoutView />;
};
export default MediaLayout;
