import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// comps
import Login from "./credentials/login";
import BookAdd from "./books/bookAdd";
import BookDelete from "./books/bookDelete";
import BookOverview from "./books/bookOverview";
import BookUpdate from "./books/bookUpdate";

const Body = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" render={(props) => <Login />} />
        <Route exact path="/bookAdd" render={(props) => <BookAdd />} />
        <Route exact path="/bookDelete" render={(props) => <BookDelete />} />
        <Route
          exact
          path="/bookOverview"
          render={(props) => <BookOverview />}
        />
        <Route exact path="/bookUpdate" render={(props) => <BookUpdate />} />
      </Switch>
    </Router>
  );
};

export default Body;
