import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

// comps
import Layout from "./app/components/app_Layout";
import AppView from "./app/components/appView";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppView />
    </Provider>
  );
};

export default App;
