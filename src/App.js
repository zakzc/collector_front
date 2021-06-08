import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

// comps
import AppLayout from "./app/components/appLayout";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
};

export default App;
