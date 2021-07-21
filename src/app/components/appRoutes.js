import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
// comps
import AppErrorCheck from "./appErrorCheck";
import EnterApp from "./credentials/enterApp_baseComp";
import Navigation from "../components/navigation/navigation_baseLayout";
// hook
import useCheckForUser from "../hooks/useCheckForUser";

const Routes = () => {
  // * data
  const userIsDefined = useCheckForUser();

  // * view
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/logIn">
          {userIsDefined === true ? <Redirect to="/" /> : <EnterApp />}
        </Route>
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
