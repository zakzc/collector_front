import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
// comp
// import AppView from "./app/components/appView_baseComp";
import Routes from "./app/components/appRoutes";
import appBackground from "./app/assets/img/LPsCollection.jpg";

// loads .env values
require("dotenv").config();

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          backgroundImage: `url(${appBackground})`,
          opacity: 0.8,
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
