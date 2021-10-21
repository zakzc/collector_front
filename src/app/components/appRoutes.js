import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
// comps
import AppErrorCheck from "./appErrorCheck";

const Routes = () => {
  // * data
  const location = useLocation();

  // * view
  return (
    <Router>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <AppErrorCheck />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
