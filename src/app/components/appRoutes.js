import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// comps
import AppErrorCheck from "./appErrorCheck";
import EnterApp from "./credentials/enterApp_baseComp";
import Navigation from "../components/navigation/navigation";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/logIn" render={(props) => <EnterApp />} />
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <AppErrorCheck />
            </>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
