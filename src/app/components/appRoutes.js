import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EnterApp from "./credentials/enterApp_baseComp";
// comps
import Layout from "./appLayout";
// import MediaLayout from "./mediaCollection/mediaLayout";
import Navigation from "./views/navigation";

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
              <Layout />
            </>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
