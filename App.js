import { Provider } from "react-redux";
import { store } from "./src/store";
import CountScreen from "./src/screens/countScreen";

export default function App() {
  return (
    <Provider store={store}>
      <CountScreen />
    </Provider>
  );
}
