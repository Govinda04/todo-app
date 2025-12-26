import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../constants";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
// import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.SPLASH}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={SCREENS.SPLASH}
        component={SplashScreen}
        options={{
          animation: "fade",
        }}
      />
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={LoginScreen}
        options={{
          animation: "fade",
        }}
      />
      <Stack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          animation: "fade",
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
