import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
// comps
import CRUD from "./navigation_CRUD";
import MediaMenu from "./navigation_MediaMenu";
// hook
import useCheckForUser from "../../hooks/useCheckForUser";

const ConnectedUser = () => {
  // * data
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
  );
  const userIsConnected = useCheckForUser();
  // animation data
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };
  const pageTransition = { duration: 0.6 };

  const ConnectedMenuAnimation = ({ isVisible }) => (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <NavBarUserOnline />
      </motion.div>
    </AnimatePresence>
  );

  const NavBarUserOffline = () => (
    <span className="text-light">Enter Application</span>
  );

  const NavBarUserOnline = () => (
    <> {currentMediaCRUD === "read" ? <MediaMenu /> : <CRUD />}</>
  );

  // * view
  return (
    <>{userIsConnected ? <ConnectedMenuAnimation /> : <NavBarUserOffline />}</>
  );
};

export default ConnectedUser;
