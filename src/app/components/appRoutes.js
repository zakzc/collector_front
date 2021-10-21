import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
// comps
import AppErrorCheck from "./appErrorCheck";
//import Navigation from "../components/navigation/navigation";

const Routes = () => {
  // * data
  const location = useLocation();
  const pageVariants = {
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: "-100vh" },
  };
  const pageTransition = {
    delay: 0,
    x: { type: "spring", stiffness: 100 },
    default: { duration: 0.5 },
  };

  // * view
  return (
    <Router>
      {/* <Navigation /> */}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          transition={pageTransition}
          variants={pageVariants}
        >
          <Switch location={location} key={location.pathname}>
            {/* <Route exact path="/" render={(props) => <AppErrorCheck />} /> */}
            <Route exact path="/">
              <AppErrorCheck />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </motion.div>
      </AnimatePresence>
    </Router>
  );
};

export default Routes;
