import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  GetScreen,
  LoginScreen,
  SignupScreen,
  Bottoms,
} from "../screens/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();

const { Navigator, Screen } = Stack;

export const AuthNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Welcome" component={GetScreen} />
      <Screen name="Signup" component={SignupScreen} />
    </Navigator>
  );
};

