import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen, SalaryCalculator } from "../screens/index";
import { Feather, FontAwesome, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const { Navigator, Screen } = Tab;

export const MainNavigation = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="calculator" size={size} color={color} />;
          },
        }}
        name="Salary"
        component={SalaryCalculator}
      />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={size} color={color} />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="user" size={size} color={color} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Navigator>
  );
};
