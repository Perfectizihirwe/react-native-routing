import React from "react";
// import { View,Text } from "react-native";

// import { RootNavigation } from "./src/navigation/rootnavigation";

import { Provider } from "react-redux";


import { Store } from "./src/components/Reducers/store";
import { LogBox } from "react-native";
import { Counter } from "./src/components/Reducers/counter/Counter";
LogBox.ignoreLogs(['Warning...']);
LogBox.ignoreAllLogs();
const App = () => {
  return (
    
    // <RootNavigation/>
    <Provider store={Store}>
    <Counter/>
    </Provider>
    
    
    
  
   

    )}

export default App;
