import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

// comps
import Layout from "./app/components/app_Layout";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
