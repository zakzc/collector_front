import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogInForm from "./credentials/loginForm";
// comps
import MediaLayout from "./mediaCollection/mediaLayout";

const Routes = () => {
  // const [user, setUser] = useState("john smith");
  return (
    <Router>
      {/* <p>{user}</p> */}
      <Switch>
        <Route exact path="/logIn" render={(props) => <LogInForm />} />
        <Route exact path="/" render={(props) => <MediaLayout />} />
      </Switch>
    </Router>
  );
};

export default Routes;
