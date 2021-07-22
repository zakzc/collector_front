import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
/// comps
import ConfirmationToast from "../views/confirmationToast";
import Header from "../views/header";
import GoBackButton from "../views/buttons/goBackButton";
import MediaView from "./mediaView";
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
  const loading = useSelector((state) => state.medias.loading);
  // animation data
  const pageVariants = {
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vh" },
  };
  const pageTransition = { duration: 0.6 };

  // * view
  const MediasMenu = () => (
    <>
      {currentMediaCRUD === "read" ? <ConfirmationToast /> : null}
      <MediaAnimation />
    </>
  );

  const MediaAnimation = ({ isVisible }) => (
    <AnimatePresence>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="ml-2">
          {currentMediaCRUD === "read" ? null : <GoBackButton />}
        </div>
        <MediaView />
      </motion.div>
    </AnimatePresence>
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

  return <>{loading ? <LoadingSpinner /> : <MediaLayoutView />}</>;
};
export default MediaLayout;
