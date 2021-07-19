import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EnterApp from "./credentials/enterApp_baseComp";
// comps
import MediaLayout from "./mediaCollection/mediaLayout";
import Navigation from "./views/navigation";

const Routes = () => {
  // const [user, setUser] = useState("john smith");
  return (
    <Router>
      <Switch>
        <Route exact path="/logIn" render={(props) => <EnterApp />} />
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <Navigation />
              <MediaLayout />
            </>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
