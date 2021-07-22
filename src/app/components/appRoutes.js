import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
// comps
import AppErrorCheck from "./appErrorCheck";
import EnterApp from "./credentials/enterApp_baseComp";
import Navigation from "../components/navigation/navigation_baseLayout";

const Routes = () => {
  // * data
  const location = useLocation();
  const pageVariants = {
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: "-100vh" },
  };

  // * view
  return (
    <Router>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/logIn">
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageVariants}
            >
              <EnterApp />
            </motion.div>
          </Route>
          <Route exact path="/" render={(props) => <AppErrorCheck />} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
};

export default Routes;
