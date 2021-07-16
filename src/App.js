import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
// comp
import AppView from "./app/components/appView_baseComp";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppView />
    </Provider>
  );
};

export default App;
