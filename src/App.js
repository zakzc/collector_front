import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
// comp
import AppView from "./app/components/appView_baseComp";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppView />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
