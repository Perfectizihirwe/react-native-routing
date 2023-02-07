import React from "react";

import { Provider } from "react-redux";


import { Store } from "./src/components/Reducers/store";
import { LogBox } from "react-native";
import { Counter } from "./src/components/Reducers/counter/Counter";
LogBox.ignoreLogs(['Warning...']);
LogBox.ignoreAllLogs();
const App = () => {
  return (
    
    <Provider store={Store}>
    <Counter/>
    </Provider>
    
    
    
  
   

    )}

export default App;
