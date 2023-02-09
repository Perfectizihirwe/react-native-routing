import React from "react";

import { Provider } from "react-redux";

import { Store } from "./src/store";
import { LogBox } from "react-native";
import { Counter } from "./src/screens/Counter";
LogBox.ignoreLogs(["Warning..."]);
LogBox.ignoreAllLogs();

import RootNavigation from "./src/navigation/rootnavigation";

const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
