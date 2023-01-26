import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigation } from "./mainNavigation";
import { LoginScreen, SignUpScreen } from "../screens";

const Stack = createNativeStackNavigator();

console.log(Stack);

const { Navigator, Screen } = Stack;

export const AppNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={LoginScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
      <Screen name="MainNavigation" component={MainNavigation} />
    </Navigator>
  );
};
