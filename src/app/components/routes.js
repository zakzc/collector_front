import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// comps
import Login from "./credentials/login";
import AudioAdd from "./audio/am_AudioAdd";
import AudioDelete from "./audio/am_AudioDelete";
import AudioMain from "./audio/a_AudioMain";
import AudioUpdate from "./audio/am_AudioUpdate";
// import BookAdd from "./books/bookAdd";
// import BookDelete from "./books/bookDelete";
import BookLayout from "./books/bookLayout";
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
        <Route exact path="/audioOverview" render={(props) => <AudioMain />} />
        <Route exact path="/audioUpdate" render={(props) => <AudioUpdate />} />
        {/* Book routes */}
        {/* <Route exact path="/bookAdd" render={(props) => <BookAdd />} />
        <Route exact path="/bookDelete" render={(props) => <BookDelete />} /> */}
        <Route exact path="/bookOverview" render={(props) => <BookLayout />} />
        {/* <Route exact path="/bookUpdate" render={(props) => <BookUpdate />} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
