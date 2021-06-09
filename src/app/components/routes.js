import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// comps
import Login from "./credentials/login";
import AudioAdd from "./audio/audioAdd";
import AudioDelete from "./audio/audioDelete";
import AudioOverview from "./audio/audioOverview";
import AudioUpdate from "./audio/audioUpdate";
// import BookAdd from "./books/bookAdd";
// import BookDelete from "./books/bookDelete";
import BookOverview from "./books/bookOverview";
// import BookUpdate from "./books/bookUpdate";

const Routes = () => {
  // const [user, setUser] = useState("john smith");
  return (
    <Router>
      {/* <p>{user}</p> */}
      <Switch>
        <Route exact path="/" render={(props) => <Login />} />
        {/* Audio routes */}
        <Route exact path="/audioAdd" render={(props) => <AudioAdd />} />
        <Route exact path="/audioDelete" render={(props) => <AudioDelete />} />
        <Route
          exact
          path="/audioOverview"
          render={(props) => <AudioOverview />}
        />
        <Route exact path="/audioUpdate" render={(props) => <AudioUpdate />} />
        {/* Book routes */}
        {/* <Route exact path="/bookAdd" render={(props) => <BookAdd />} />
        <Route exact path="/bookDelete" render={(props) => <BookDelete />} /> */}
        <Route
          exact
          path="/bookOverview"
          render={(props) => <BookOverview />}
        />
        {/* <Route exact path="/bookUpdate" render={(props) => <BookUpdate />} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
