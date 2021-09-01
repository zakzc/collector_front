import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
// comp
// import AppView from "./app/components/appView_baseComp";
import Routes from "./app/components/appRoutes";
import appBackground from "./app/components/assets/img/LPsCollection.jpg";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          backgroundImage: `url(${appBackground})`,
          opacity: 0.8,
          height: "100%",
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
