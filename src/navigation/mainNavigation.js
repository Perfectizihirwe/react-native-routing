import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen } from "../screens";
import { Feather, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const { Navigator, Screen } = Tab;

export const MainNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
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
